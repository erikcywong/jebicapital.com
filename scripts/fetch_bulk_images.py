# -*- coding: utf-8 -*-
"""Download Wikimedia Commons photos for bulk projects, grouped by category."""
import json, os, random, subprocess, sys

random.seed(777)
UA = "JEBI-Site/1.0 (contact: erik.wong@napell.bio)"
W, H = 1200, 750

QUERIES = {
    "aeroponic": ["hydroponic greenhouse", "vertical farming", "aeroponics", "plant factory", "greenhouse interior rows"],
    "processing": ["coffee drying", "coffee washing station", "coffee beans drying patio", "coffee hulling machine", "coffee pulp"],
    "roasting": ["coffee roaster machine", "coffee roasting", "roasted coffee beans", "coffee roastery interior"],
    "distribution": ["coffee sacks warehouse", "cargo bike delivery", "port coffee sacks", "electric van street", "shipping containers terminal"],
    "cafe": ["coffee shop interior", "barista espresso machine", "latte art", "cafe terrace coffee", "cappuccino cup"],
    "carbon": ["tree planting volunteers", "reforestation", "agroforestry shade coffee", "forest nursery seedlings", "coffee plantation hillside"],
    "financial": ["stock exchange trading floor", "financial district skyline", "bank building columns", "coins stacking savings"],
    "technology": ["data center servers", "drone field agriculture", "iot sensor device", "smartphone scanning code", "solar panel array field"],
}

def api(query, limit=50):
    cmd = ["curl", "-sG", "https://commons.wikimedia.org/w/api.php",
           "--data-urlencode", "action=query", "--data-urlencode", "format=json",
           "--data-urlencode", "generator=search",
           "--data-urlencode", f"gsrsearch=filetype:bitmap {query}",
           "--data-urlencode", "gsrnamespace=6", "--data-urlencode", f"gsrlimit={limit}",
           "--data-urlencode", "prop=imageinfo", "--data-urlencode", "iiprop=url|size|mime",
           "--data-urlencode", f"iiurlwidth={W}", "-A", UA]
    out = subprocess.run(cmd, capture_output=True, text=True).stdout
    try:
        d = json.loads(out)
    except Exception:
        return []
    res = []
    for p in sorted(d.get("query", {}).get("pages", {}).values(), key=lambda x: x.get("index", 99)):
        ii = p.get("imageinfo", [{}])[0]
        w, h = ii.get("width", 0), ii.get("height", 0)
        mime = ii.get("mime", "")
        if w >= 800 and 1.1 <= w / max(h, 1) <= 2.5 and mime in ("image/jpeg", "image/png"):
            res.append((p["title"], ii.get("thumburl", "")))
    return res

manifest = json.load(open("bulk-manifest.json", encoding="utf-8"))
by_cat = {}
for m in manifest:
    by_cat.setdefault(m["category"], []).append(m["id"])

# Build candidate pools per category
pools = {}
for cat, queries in QUERIES.items():
    pool, seen = [], set()
    for q in queries:
        for title, url in api(q):
            if url and url not in seen:
                seen.add(url)
                pool.append((title, url))
    random.shuffle(pool)
    pools[cat] = pool
    print(cat, "candidates:", len(pool), flush=True)

ok, fail = 0, 0
for cat, ids in by_cat.items():
    pool = pools.get(cat, [])
    pi = 0
    for pid in ids:
        path = f"images/{pid}.jpg"
        url = None
        while pi < len(pool):
            title, u = pool[pi]
            pi += 1
            fn = f"images/{pid}.jpg"
            r = subprocess.run(["curl", "-s", "-A", UA, "-o", fn, u], capture_output=True)
            sz = os.path.getsize(fn) if os.path.exists(fn) else 0
            if sz > 25000:
                ok += 1
                url = u
                break
            else:
                try: os.remove(fn)
                except OSError: pass
        if not url:
            # fallback: copy an existing bulk image of same category
            srcs = [f"images/{x}.jpg" for x in ids if os.path.exists(f"images/{x}.jpg") and os.path.getsize(f"images/{x}.jpg") > 25000]
            if srcs:
                subprocess.run(["cp", srcs[0], path])
                ok += 1
                print(pid, "FALLBACK copy", flush=True)
            else:
                fail += 1
                print(pid, "FAILED", flush=True)
print("downloaded:", ok, "failed:", fail)
