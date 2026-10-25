# -*- coding: utf-8 -*-
"""JEBI bulk project generator — 100 trilingual projects across 8 categories."""
import json, random

random.seed(20261026)

def mulberry32(a):
    def f():
        f.s = (f.s + 0x6D2B79F5) & 0xFFFFFFFF
        t = f.s
        t = (t + 0x6D2B79F5) & 0xFFFFFFFF
        r = (t ^ (t >> 15)) * (t | 1) & 0xFFFFFFFF
        r = (r ^ (r + ((r ^ (r >> 7)) * (r | 61) & 0xFFFFFFFF))) & 0xFFFFFFFF
        return ((r ^ (r >> 14)) & 0xFFFFFFFF) / 4294967296
    f.s = a
    return f

rng = mulberry32(20261026)

CITIES = [
    {"en": "Addis Ababa, Ethiopia", "zh": "亚的斯亚贝巴，埃塞俄比亚", "ar": "أديس أبابا، إثيوبيا"},
    {"en": "Bogotá, Colombia", "zh": "波哥大，哥伦比亚", "ar": "بوغوتا، كولومبيا"},
    {"en": "Ho Chi Minh City, Vietnam", "zh": "胡志明市，越南", "ar": "هوشي منه، فيتنام"},
    {"en": "Medellín, Colombia", "zh": "麦德林，哥伦比亚", "ar": "ميديلين، كولومبيا"},
    {"en": "Nairobi, Kenya", "zh": "内罗毕，肯尼亚", "ar": "نيروبي، كينيا"},
    {"en": "Antigua, Guatemala", "zh": "安提瓜，危地马拉", "ar": "أنتيغوا، غواتيمالا"},
    {"en": "Jakarta, Indonesia", "zh": "雅加达，印度尼西亚", "ar": "جاكرتا، إندونيسيا"},
    {"en": "Da Lat, Vietnam", "zh": "大叻，越南", "ar": "دا لات، فيتنام"},
    {"en": "Kilimanjaro, Tanzania", "zh": "乞力马扎罗，坦桑尼亚", "ar": "كيليمانجارو، تنزانيا"},
    {"en": "Chiang Mai, Thailand", "zh": "清迈，泰国", "ar": "تشياغ ماي، تايلاند"},
    {"en": "Harar, Ethiopia", "zh": "哈拉尔，埃塞俄比亚", "ar": "هارار، إثيوبيا"},
    {"en": "Manizales, Colombia", "zh": "马尼萨莱斯，哥伦比亚", "ar": "مانيزاليس، كولومبيا"},
]

CATS = {
    "aeroponic":   {"n": 12, "color": "#0d8a4f", "g": ["linear-gradient(135deg,#0d8a4f,#00ba7c)"]},
    "processing":  {"n": 12, "color": "#1d9bf0", "g": ["linear-gradient(135deg,#1d9bf0,#0d47a1)"]},
    "roasting":    {"n": 13, "color": "#c7115f", "g": ["linear-gradient(135deg,#eb1478,#ff7a00)"]},
    "distribution":{"n": 12, "color": "#6a1b9a", "g": ["linear-gradient(135deg,#9c27b0,#6a1b9a)"]},
    "cafe":        {"n": 13, "color": "#795548", "g": ["linear-gradient(135deg,#795548,#5d4037)"]},
    "carbon":      {"n": 13, "color": "#2e7d32", "g": ["linear-gradient(135deg,#0d8a4f,#2e7d32)"]},
    "financial":   {"n": 12, "color": "#0d47a1", "g": ["linear-gradient(135deg,#1d9bf0,#0d8a4f)"]},
    "technology":  {"n": 13, "color": "#534AB7", "g": ["linear-gradient(135deg,#9c27b0,#1d9bf0)"]},
}

def T(en, zh, ar):
    return {"en": en, "zh": zh, "ar": ar}

# name: facility phrase; d: one-line description (with {city} placeholder)
SUB = {
    "aeroponic": [
        {"name": T("Aeroponic Coffee Tower", "气培咖啡种植塔", "برج قهوة هوائي"),
         "d": T("Mist-fed vertical coffee towers growing {v} seedlings with {w}% less water.",
                "雾培垂直咖啡塔培育{v}株幼苗，用水量减少{w}%。",
                "أبراج قهوة عمودية مغذية بالضباب تزرع {v} شتلة بمياه أقل بنسبة {w}%.")},
        {"name": T("Mist-Chamber Nursery", "雾化培养室苗圃", "مشتل غرف الضباب"),
         "d": T("Clonal coffee seedlings propagated in sealed mist chambers for {v} farms.",
                "在密封雾化培养室中繁殖无性系咖啡幼苗，供应{v}家农场。",
                "شتلات قهوة مستنسخة تُستنبت في غرف ضباب محكمة لـ {v} مزرعة.")},
        {"name": T("Rooftop Aeroponic Farm", "屋顶气培农场", "مزرعة هوائية على السطح"),
         "d": T("Urban rooftop mist-farm producing specialty coffee {v} km from the café that serves it.",
                "城市屋顶雾培农场，距供应其咖啡的咖啡馆仅{v}公里。",
                "مزرعة ضباب حضرية على السطح تنتج قهوة مختصة على بُعد {v} كم من المقهى الذي يقدمها.")},
    ],
    "processing": [
        {"name": T("Eco-Wet Mill", "生态湿法加工厂", "مصنع معالجة رطبة بيئي"),
         "d": T("Water-recycling wet mill processing {v} tons of coffee cherry per season.",
                "水循环湿法加工厂，每季处理{v}吨咖啡鲜果。",
                "مصنع معالجة رطبة يعيد تدوير المياه، يعالج {v} طن من كرز القهوة كل موسم.")},
        {"name": T("Solar-Drying Station", "太阳能晾晒站", "محطة تجفيف شمسية"),
         "d": T("Raised solar drying beds cutting drying time to {v} days with zero emissions.",
                "高架太阳能晾晒床，将干燥时间缩短至{v}天，零排放。",
                "أسرّة تجفيف شمسية مرتفعة تقلل زمن التجفيف إلى {v} يوماً دون انبعاثات.")},
        {"name": T("Cherry Upcycling Hub", "果皮升级利用中心", "مركز تدوير قشور القهوة"),
         "d": T("Coffee pulp converted into fertilizer, tea and biofuel for {v} partner farms.",
                "咖啡果皮转化为肥料、茶饮和生物燃料，服务{v}家合作农场。",
                "تحويل لب القهوة إلى سماد وشاي ووقود حيوي لـ {v} مزرعة شريكة.")},
    ],
    "roasting": [
        {"name": T("Solar Roastery", "太阳能烘焙厂", "محمصة تعمل بالطاقة الشمسية"),
         "d": T("Fully solar-electric roastery eliminating {v} tons of roasting CO₂ per year.",
                "全太阳能电烘焙厂，每年消除{v}吨烘焙CO₂。",
                "محمصة كهربائية بالطاقة الشمسية بالكامل تزيل {v} طن من انبعاثات التحميص سنوياً.")},
        {"name": T("Zero-Gas Roasting Lab", "零燃气烘焙实验室", "مختبر تحميص بلا غاز"),
         "d": T("Electric convection roasting with heat recovery, saving {v} MWh of energy a year.",
                "电对流烘焙配热能回收，每年节省{v} MWh能源。",
                "تحميص كهربائي بالحمل مع استرجاع الحرارة، يوفر {v} ميغاواط/ساعة سنوياً.")},
        {"name": T("Neighborhood Micro-Roastery", "社区微型烘焙坊", "محمصة مصغرة للحي"),
         "d": T("Neighborhood roastery roasting {v} kg weekly for local cafés with no logistics chain.",
                "社区烘焙坊每周为本地咖啡馆烘焙{v}公斤，无需物流链。",
                "محمصة للحي تحمص {v} كغ أسبوعياً للمقاهي المحلية دون سلسلة لوجستية.")},
    ],
    "distribution": [
        {"name": T("EV Coffee Fleet", "电动车咖啡车队", "أسطول كهربائي للقهوة"),
         "d": T("Electric van fleet covering {v} delivery routes with zero tailpipe emissions.",
                "电动车队覆盖{v}条配送路线，零尾气排放。",
                "أسطول شاحنات كهربائية يغطي {v} خطوط توصيل دون انبعاثات عادم.")},
        {"name": T("Rail-First Green Logistics", "铁路优先绿色物流", "لوجستيات خضراء بالسكك أولاً"),
         "d": T("Shifting {v}% of green-bean freight from road to electrified rail.",
                "将{v}%的生豆货运从公路转移到电气化铁路。",
                "نقل {v}% من شحنات البن الأخضر من الطرق إلى السكك الحديدية المكهربة.")},
        {"name": T("Cargo-Bike Last Mile", "货运自行车末端配送", "توصيل الميل الأخير بالدراجات"),
         "d": T("Cargo-bike courier network handling {v} café deliveries per week.",
                "货运自行车快递网络，每周完成{v}次咖啡馆配送。",
                "شبكة توصيل بالدراجات الحمولة تخدم {v} توصيلة للمقاهي أسبوعياً.")},
    ],
    "cafe": [
        {"name": T("Zero-Waste Café", "零废弃咖啡馆", "مقهى صفر النفايات"),
         "d": T("Reusable-cup café diverting {v} kg of waste from landfill every month.",
                "循环杯咖啡馆，每月减少{v}公斤垃圾填埋。",
                "مقهى بأكواب قابلة لإعادة الاستخدام يحول {v} كغ من النفايات عن المكب شهرياً.")},
        {"name": T("Solar-Powered Espresso Bar", "太阳能浓缩咖啡吧", "بار إسبريسو بالطاقة الشمسية"),
         "d": T("Espresso bar running entirely on rooftop solar, serving {v} cups a day.",
                "完全由屋顶太阳能供电的浓缩咖啡吧，日售{v}杯。",
                "بار إسبريسو يعمل بالكامل على الطاقة الشمسية السطحية، يقدم {v} فنجان يومياً.")},
        {"name": T("Community Coffee Lab", "社区咖啡实验室", "مختبر قهوة مجتمعي"),
         "d": T("Training lab and café upskilling {v} young baristas from the local community.",
                "培训实验室+咖啡馆，为社区培养{v}名青年咖啡师。",
                "مختبر تدريب ومقهى يؤهل {v} باريستا شاب من المجتمع المحلي.")},
    ],
    "carbon": [
        {"name": T("Agroforestry Conversion", "农林复合转型", "تحويل إلى الحراجة الزراعية"),
         "d": T("Converting {v} hectares of sun monoculture to shade-grown agroforestry.",
                "将{v}公顷单一日照种植改造为遮荫农林复合系统。",
                "تحويل {v} هكتار من الزراعة الأحادية المشمسة إلى حراج زراعي مظلل.")},
        {"name": T("Riparian Reforestation", "河岸再造林", "إعادة تشجير ضفاف الأنهار"),
         "d": T("Replanting {v} km of riverbank buffer zones across coffee farms.",
                "在咖啡农场间重新种植{v}公里河岸缓冲带。",
                "إعادة تشجير {v} كم من مناطق الحاجز النهري عبر مزارع القهوة.")},
        {"name": T("Peatland Coffee Offset", "泥炭地咖啡碳汇", "تعويض كربون مستنقعات الخث"),
         "d": T("Protecting {v} hectares of peatland while pioneering wet-tolerant coffee.",
                "保护{v}公顷泥炭地，同时开创耐湿咖啡种植。",
                "حماية {v} هكتار من مستنقعات الخث مع ريادة زراعة القهوة المتحملة للبلل.")},
    ],
    "financial": [
        {"name": T("Green Bond Tranche", "绿色债券份额", "شريحة سندات خضراء"),
         "d": T("Financing {v} low-carbon coffee installations via a pooled green bond.",
                "通过集合绿色债券为{v}个低碳咖啡设施融资。",
                "تمويل {v} منشأة قهوة منخفضة الكربون عبر سند أخضر مجمّع.")},
        {"name": T("Impact Fund — Coffee Belt", "影响力基金——咖啡带", "صندوق الأثر — حزام القهوة"),
         "d": T("Diversified fund backing {v} early-stage zero-carbon coffee startups.",
                "多元化基金投资{v}家零碳咖啡早期初创企业。",
                "صندوق متنوع يدعم {v} شركة ناشئة للقهوة صفرية الكربون.")},
        {"name": T("Carbon Credit Pool", "碳信用池", "مشروع ائتمانات الكربون"),
         "d": T("Aggregating {v} tons of verified farmer carbon credits for institutional buyers.",
                "聚合{v}吨经核证的农民碳信用，面向机构买家。",
                "تجميع {v} طن من ائتمانات الكربون الموثقة للمزارعين للمشترين المؤسسيين.")},
    ],
    "technology": [
        {"name": T("Farm IoT Network", "农场物联网网络", "شبكة إنترنت الأشياء للمزارع"),
         "d": T("Low-power sensor mesh monitoring {v} farms for mist, moisture and microclimate.",
                "低功耗传感网络监测{v}家农场的雾气、湿度与小气候。",
                "شبكة مستشعرات منخفضة الطاقة تراقب {v} مزرعة للضباب والرطوبة والمناخ المصغر.")},
        {"name": T("Carbon Ledger Platform", "碳账本平台", "منصة سجل الكربون"),
         "d": T("Tamper-proof digital ledger tracking {v} tons of coffee carbon data end-to-end.",
                "防篡改数字账本，端到端追踪{v}吨咖啡碳数据。",
                "سجل رقمي غير قابل للتلاعب يتتبع {v} طن من بيانات كربون القهوة من البداية للنهاية.")},
        {"name": T("AI Harvest Forecasting", "AI 收成预测", "التنبؤ بالحصاد بالذكاء الاصطناعي"),
         "d": T("Satellite + AI model forecasting cherry ripeness for {v} cooperating farms.",
                "卫星+AI模型为{v}家合作农场预测咖啡果成熟度。",
                "نموذج أقمار صناعية وذكاء اصطناعي يتنبأ بنضج الكرز لـ {v} مزرعة متعاونة.")},
    ],
}

STORY = {
    "aeroponic": {
        "en": "<p>{name} in {city} grows coffee without soil. Plants sit in sealed chambers where nutrient mist is delivered directly to the roots, eliminating fertilizer runoff and cutting water use by {w}%.</p><h3>Why It Matters</h3><p>Traditional cultivation consumes up to 18,900 liters of water per kilogram of coffee. Our chambers recycle every droplet, and clonal seedlings reach the field {d2}% faster than bed-grown plants.</p><h3>Carbon Impact</h3><p>The facility is expected to offset {offset} tons of CO₂ annually through eliminated fertilizer production, reduced pumping and on-site renewable power.</p>",
        "zh": "<p>{city}的{name}在无土壤环境中种植咖啡。植物置于密封培养室，营养雾气直接输送到根部，消除肥料径流，用水量减少{w}%。</p><h3>为什么重要</h3><p>传统种植每公斤咖啡消耗多达18,900升水。我们的培养室回收每一滴水，无性系幼苗下田速度比苗床培育快{d2}%。</p><h3>碳影响</h3><p>通过消除肥料生产、减少抽水能耗和现场可再生能源，该设施预计每年抵消{offset}吨CO₂。</p>",
        "ar": "<p>يقوم {name} في {city} بزراعة القهوة دون تربة. تنمو النباتات في غرف محكمة يُوصل فيها الضباب المغذي مباشرة إلى الجذور، ما يلغي جريان الأسمدة ويقلل استهلاك المياه بنسبة {w}%.</p><h3>لماذا هذا مهم</h3><p>تستهلك الزراعة التقليدية حتى 18,900 لتر من المياه لكل كيلوغرام قهوة. غرفنا تعيد تدوير كل قطرة، وتصل الشتلات المستنسخة إلى الحقل أسرع بنسبة {d2}% من الشتلات المشتلية.</p><h3>أثر الكربون</h3><p>يُتوقع أن يعوض المنشأ {offset} طن من CO₂ سنوياً عبر إلغاء إنتاج الأسمدة وتقليل الضخ والطاقة المتجددة في الموقع.</p>"},
    "processing": {
        "en": "<p>{name} in {city} transforms how coffee is milled. Water is recirculated in a closed loop, pulp waste becomes compost and biogas, and solar drying replaces diesel-fed mechanical dryers.</p><h3>Why It Matters</h3><p>Wet milling pollutes waterways and burns diesel across the coffee belt. Our closed-loop design cuts process water by {w}% and returns pulp to the fields as organic fertilizer.</p><h3>Carbon Impact</h3><p>The station is expected to offset {offset} tons of CO₂ annually while raising farmer incomes through quality premiums.</p>",
        "zh": "<p>{city}的{name}改变咖啡加工方式。水在闭环中循环，果皮废料变成堆肥和沼气，太阳能晾晒取代柴油机械烘干。</p><h3>为什么重要</h3><p>湿法加工污染水道并在咖啡带各地消耗柴油。我们的闭环设计减少{w}%加工用水，并把果皮作为有机肥料返还农田。</p><h3>碳影响</h3><p>该站预计每年抵消{offset}吨CO₂，同时通过品质溢价提高农民收入。</p>",
        "ar": "<p>يغيّر {name} في {city} طريقة معالجة القهوة. تُعاد المياه في حلقة مغلقة، ويتحول waste اللب إلى سماد وغاز حيوي، ويحل التجفيف الشمسي محل المجففات الميكانيكية العاملة بالديزل.</p><h3>لماذا هذا مهم</h3><p>المعالجة الرطبة تلوث المجاري المائية وتستهلك الديزل في حزام القهوة. تصميمنا المغلق يقلل مياه المعالجة بنسبة {w}% ويعيد اللب إلى الحقول كسماد عضوي.</p><h3>أثر الكربون</h3><p>يُتوقع أن تعوض المحطة {offset} طن من CO₂ سنوياً مع رفع دخل المزارعين عبر علاوات الجودة.</p>"},
    "roasting": {
        "en": "<p>{name} in {city} roasts without fossil fuels. Electric drum roasters draw from renewable power with heat-recovery afterburners that capture and reuse roasting energy.</p><h3>Why It Matters</h3><p>Conventional gas roasters emit roughly 2.3 kg of CO₂ per kilogram of coffee. Our design eliminates that at the source and cuts energy bills by {w}%.</p><h3>Carbon Impact</h3><p>The roastery is expected to offset {offset} tons of CO₂ annually, verified under third-party audit.</p>",
        "zh": "<p>{city}的{name}不使用化石燃料烘焙。电滚筒烘焙机使用可再生能源，配备热回收后燃室，捕获并复用烘焙热能。</p><h3>为什么重要</h3><p>传统燃气烘焙机每公斤咖啡排放约2.3公斤CO₂。我们的设计从源头消除排放，并削减{w}%能源成本。</p><h3>碳影响</h3><p>该烘焙厂预计每年抵消{offset}吨CO₂，经第三方审计核证。</p>",
        "ar": "<p>يحمّص {name} في {city} دون وقود أحفوري. تعمل المحامس الأسطوانية الكهربائية بالطاقة المتجددة مع غرف احتراق لاحق لاسترجاع الحرارة تعيد استخدام طاقة التحميص.</p><h3>لماذا هذا مهم</h3><p>تنبعث من محامس الغاز التقليدية نحو 2.3 كغ من CO₂ لكل كيلوغرام قهوة. تصميمنا يلغي ذلك من المصدر ويخفض فواتير الطاقة بنسبة {w}%.</p><h3>أثر الكربون</h3><p>يُتوقع أن تعوض المحمصة {offset} طن من CO₂ سنوياً، موثقة بتدقيق من طرف ثالث.</p>"},
    "distribution": {
        "en": "<p>{name} in {city} moves coffee without diesel. Electric vehicles, rail-first routing and optimized load planning replace legacy trucking across the green-bean and roasted-coffee chains.</p><h3>Why It Matters</h3><p>Freight can account for {w}% of a coffee product's footprint. Every electric kilometer driven removes tailpipe emissions from dense city streets.</p><h3>Carbon Impact</h3><p>The network is expected to offset {offset} tons of CO₂ annually, with every route logged and verified.</p>",
        "zh": "<p>{city}的{name}让咖啡运输告别柴油。电动车、铁路优先路由与优化装载计划，取代生豆与熟豆链路中的传统卡车运输。</p><h3>为什么重要</h3><p>货运可占咖啡产品碳足迹的{w}%。每行驶一公里电动车，就从拥挤的城市街道上消除尾气排放。</p><h3>碳影响</h3><p>该网络预计每年抵消{offset}吨CO₂，所有路线均记录并核证。</p>",
        "ar": "<p>ينقل {name} في {city} القهوة دون ديزل. المركبات الكهربائية والتوجيه بالسكك أولاً وتخطيط الأحمال المُحسّن يحل محل النقل بالشاحنات التقليدي عبر سلسلتي البن الأخضر والمحمص.</p><h3>لماذا هذا مهم</h3><p>يمثل الشحن حتى {w}% من البصمة الكربونية لمنتج القهوة. كل كيلومتر كهربائي يزيل انبعاثات العادم من شوارع المدن المزدحمة.</p><h3>أثر الكربون</h3><p>يُتوقع أن تعوض الشبكة {offset} طن من CO₂ سنوياً، مع تسجيل كل خط وتوثيقه.</p>"},
    "cafe": {
        "en": "<p>{name} in {city} rethinks the coffee shop for a zero-carbon era. Reusable cups, rooftop solar and local roasting collapse the footprint of every cup served.</p><h3>Why It Matters</h3><p>A single disposable cup-and-lid set adds up over millions of serves; in-store energy is often a café's biggest emission source, up to {w}% of its footprint.</p><h3>Carbon Impact</h3><p>The café is expected to offset {offset} tons of CO₂ annually through waste elimination, renewable power and local sourcing.</p>",
        "zh": "<p>{city}的{name}为零碳时代的咖啡馆重新定义。循环杯、屋顶太阳能与本地烘焙，大幅压缩每杯咖啡的碳足迹。</p><h3>为什么重要</h3><p>一次性杯盖组合在百万次出品中累积惊人；店内能耗常是咖啡馆最大排放源，可占足迹的{w}%。</p><h3>碳影响</h3><p>通过消除废弃、可再生能源与本地采购，该店预计每年抵消{offset}吨CO₂。</p>",
        "ar": "<p>يعيد {name} في {city} تشكيل المقهى لعصر صفري الكربون. الأكواب القابلة لإعادة الاستخدام والطاقة الشمسية السطحية والتحميص المحلي تقلص بصمة كل فنجان يُقدَّم.</p><h3>لماذا هذا مهم</h3><p>طقم كوب وغطاء يمكن التخلص منه يتراكم عبر ملايين الأكواب؛ وطاقة المتجر غالباً أكبر مصدر انبعاثات، حتى {w}% من البصمة.</p><h3>أثر الكربون</h3><p>يُتوقع أن يعوض المقهى {offset} طن من CO₂ سنوياً عبر القضاء على النفايات والطاقة المتجددة والمصادر المحلية.</p>"},
    "carbon": {
        "en": "<p>{name} around {city} turns coffee landscapes into carbon sinks. Native shade trees are planted between and around coffee rows, restoring biodiversity while producing premium beans.</p><h3>Why It Matters</h3><p>Each hectare of restored agroforestry sequesters {w} tons of CO₂ per year while cooling the microclimate coffee plants need as temperatures rise.</p><h3>Carbon Impact</h3><p>The project is expected to generate {offset} tons of verified CO₂ removal annually, with satellite monitoring open to every backer.</p>",
        "zh": "<p>{city}周边的{name}把咖啡景观变成碳汇。在咖啡行间与四周种植原生遮荫树，恢复生物多样性的同时产出优质咖啡豆。</p><h3>为什么重要</h3><p>每公顷恢复的农林复合系统每年封存{w}吨CO₂，同时为咖啡植物降温——这正是气温上升时它们最需要的小气候。</p><h3>碳影响</h3><p>该项目预计每年产生{offset}吨经核证的CO₂移除量，卫星监测向每位支持者开放。</p>",
        "ar": "<p>يحوّل {name} حول {city} مشاهد القهوة إلى مصارف كربونية. تُزرع أشجار الظل الأصلية بين صفوف القهوة وحولها، ما يعيد التنوع البيولوجي بينما تُنتج حبوباً متميزة.</p><h3>لماذا هذا مهم</h3><p>كل هكتار من الحراج الزراعي المسترد يعزل {w} طن من CO₂ سنوياً مع تبريد المناخ المصغر الذي تحتاجه نباتات القهوة مع ارتفاع درجات الحرارة.</p><h3>أثر الكربون</h3><p>يُتوقع أن يولّد المشروع {offset} طن من إزالة CO₂ الموثقة سنوياً، مع مراقبة بالأقمار الصناعية مفتوحة لكل داعم.</p>"},
    "financial": {
        "en": "<p>{name} channels institutional capital into the zero-carbon coffee economy. Proceeds finance audited, cash-generating low-carbon assets across the supply chain.</p><h3>Why It Matters</h3><p>The coffee belt needs an estimated $ billions in climate adaptation capital; pooled instruments let retail investors participate from as little as {w} dollars.</p><h3>Carbon Impact</h3><p>The instrument is expected to finance assets offsetting {offset} tons of CO₂ annually, with carbon covenants verified by independent auditors.</p>",
        "zh": "<p>{name}将机构资本导入零碳咖啡经济。募资投向经审计、能产生现金流的低碳资产，覆盖全供应链。</p><h3>为什么重要</h3><p>咖啡带的气候适应资金需求以数十亿美元计；集合型工具让散户投资者以低至{w}美元参与。</p><h3>碳影响</h3><p>该工具预计资助的资产每年抵消{offset}吨CO₂，碳契约由独立审计方核证。</p>",
        "ar": "<p>يوجّه {name} رأس المال المؤسسي إلى اقتصاد القهوة الصفري الكربون. تُموَّل أصول منخفضة الكربون مدققة ومولّدة للنقد عبر سلسلة التوريد.</p><h3>لماذا هذا مهم</h3><p>يحتاج حزام القهوة إلى مليارات الدولارات لرأس مال التكيف المناخي؛ والصكوك المجمّعة تتيح للمستثمرين الأفراد المشاركة بما لا يقل عن {w} دولار.</p><h3>أثر الكربون</h3><p>يُتوقع أن يموّل الصك أصولاً تعوض {offset} طن من CO₂ سنوياً، مع عهود كربونية مدققة من مدقق مستقل.</p>"},
    "technology": {
        "en": "<p>{name} builds the digital backbone of zero-carbon coffee. Sensors, ledgers and machine learning turn every stage of the supply chain into measurable, bankable carbon data.</p><h3>Why It Matters</h3><p>Unverified carbon claims are the sector's credibility gap. Our platform closes it, with {w}% of readings captured automatically at the source.</p><h3>Carbon Impact</h3><p>Deployments across the network are expected to enable and verify {offset} tons of CO₂ reduction annually.</p>",
        "zh": "<p>{name}构建零碳咖啡的数字骨架。传感器、账本与机器学习把供应链每个环节变成可测量、可金融化的碳数据。</p><h3>为什么重要</h3><p>未经核证的碳声明是该行业的公信力缺口。我们的平台将其闭合——{w}%的数据在源头自动采集。</p><h3>碳影响</h3><p>全网部署预计每年促成并核证{offset}吨CO₂减排。</p>",
        "ar": "<p>يبني {name} العمود الفقري الرقمي للقهوة الصفرية الكربون. المستشعرات والسجلات وتعلم الآلة تحوّل كل مرحلة في السلسلة إلى بيانات كربون قابلة للقياس والتمويل.</p><h3>لماذا هذا مهم</h3><p>ادعاءات الكربون غير الموثقة هي فجوة مصداقية القطاع. منصتنا تغلقها، إذ يُلتقط {w}% من القراءات تلقائياً من المصدر.</p><h3>أثر الكربون</h3><p>يُتوقع أن تُمكّن عمليات النشر عبر الشبكة وتوثّق {offset} طن من خفض CO₂ سنوياً.</p>"},
}

REWARD2 = {
    "aeroponic":   T("1kg aeroponic harvest + farm tour", "1公斤气培收成 + 农场参观", "1كغ من حصاد الهوائية + جولة المزرعة"),
    "processing":  T("2kg lot from your sponsored batch", "2公斤赞助批次咖啡豆", "2كغ من دفعتك الممولة"),
    "roasting":    T("3kg roast subscription (3 months)", "3公斤烘焙订阅（3个月）", "3كغ اشتراك تحميص (3 أشهر)"),
    "distribution":T("10 carbon credits + live fleet dashboard", "10个碳信用 + 车队实时仪表板", "10 ائتمانات كربون + لوحة أسطول مباشرة"),
    "cafe":        T("1-year coffee card + name on the wall", "1年咖啡卡 + 墙壁留名", "بطاقة قهوة لسنة + اسمك على الجدار"),
    "carbon":      T("25 verified carbon credits + satellite access", "25个核证碳信用 + 卫星监测入口", "25 ائتمان كربون موثق + وصول للأقمار"),
    "financial":   T("Priority allocation + quarterly impact report", "优先配售 + 季度影响力报告", "تخصيص ذو أولوية + تقرير أثر ربع سنوي"),
    "technology":  T("1-year platform license + API access", "1年平台授权 + API 访问", "ترخيص منصة لسنة + وصول API"),
}

VERIFY = ["Verra", "Gold Standard", "SCS Global"]
STAGES = ["seed", "growth", "scaling"]

def passport(cat):
    base = {
        "aeroponic":   (-450, 130, 210, 140), "processing": (950, 250, 320, 180),
        "roasting":    (850, 380, 160, 410),  "distribution": (1350, 560, 480, 120),
        "cafe":        (1450, 680, 390, 290), "carbon": (-1650, 340, 260, 330),
        "financial":   (520, 210, 130, 140),  "technology": (0, 0, 0, 0),
    }[cat]
    stages = []
    for g in base:
        v = int(g * (0.85 + rng() * 0.3))
        stages.append(v)
    per = round(sum(stages) / 1000, 2)
    return {"perKg": per, "negative": per < 0, "renewable": cat in ("aeroponic","roasting","carbon","financial"),
            "stages": [{"key": k, "g": v} for k, v in zip(["cultivation","processing","roasting","logistics"], stages)]}

CREATORS = {
    "aeroponic": ["GreenPeak Labs", "MistFarm Co", "TerraNova Grow", "AeroRoot Systems"],
    "processing": ["EcoMill Group", "AquaCoffea", "PulpWorks", "PureWash Coffee"],
    "roasting": ["SunRoast Collective", "VoltRoast", "EmberZero", "CopperLeaf Roasting"],
    "distribution": ["VerdeLogix", "GreenHaul", "RailBean Logistics", "CityPod Delivery"],
    "cafe": ["Qahwa Sustain", "CupZero", "NeoBrew Collective", "LocalGrind"],
    "carbon": ["Floresta Viva", "Root Carbon", "Canopy Futures", "TerraCredits"],
    "financial": ["JEBI Capital", "BeanFlow Finance", "GreenLedger Fund", "CoffeeBelt Capital"],
    "technology": ["ChainBean Labs", "AgriSense AI", "CarbonTrace", "FieldOS"],
}

CATS_ORDER = list(CATS.keys())
out = []
for cat in CATS_ORDER:
    meta = CATS[cat]
    subs = SUB[cat]
    cities = CITIES[:]
    random.Random(cat).shuffle(cities)
    for i in range(meta["n"]):
        sub = subs[i % len(subs)]
        city = cities[i % len(cities)]
        n2 = i // len(subs) + 1
        suffix = f" {n2:02d}" if n2 > 1 else ""
        vnum = rng_choice = 0
        vnum = random.Random(cat + str(i)).randint(3, 60)
        vals = {"v": vnum, "w": random.Random("w" + cat + str(i)).randint(35, 95),
                "d2": random.Random("d" + cat + str(i)).randint(20, 60), "city": city["en"]}
        vals_zh = dict(vals, city=city["zh"])
        vals_ar = dict(vals, city=city["ar"])
        fmt = lambda t, vv: t.format(**vv)
        title = T(fmt(sub["name"]["en"] + suffix, vals), fmt(sub["name"]["zh"] + suffix, vals_zh), fmt(sub["name"]["ar"] + suffix, vals_ar))
        desc = T(fmt(sub["d"]["en"], vals), fmt(sub["d"]["zh"], vals_zh), fmt(sub["d"]["zh"] if False else sub["d"]["ar"], vals_ar))
        pid = f"{cat}-{i+1:03d}"
        cp = passport(cat)
        carbon_offset = max(15, int(abs(cp["perKg"]) * 300 + rng() * 400))
        vals["offset"] = carbon_offset
        vals_zh["offset"] = carbon_offset
        vals_ar["offset"] = carbon_offset
        story = {
            "en": STORY[cat]["en"].replace("{name}", sub["name"]["en"] + suffix).format(**vals),
            "zh": STORY[cat]["zh"].replace("{name}", sub["name"]["zh"] + suffix).format(**vals_zh),
            "ar": STORY[cat]["ar"].replace("{name}", sub["name"]["ar"] + suffix).format(**vals_ar),
        }
        pid = f"{cat}-{i+1:03d}"
        cp = passport(cat)
        goal = {"aeroponic": 90000, "processing": 75000, "roasting": 70000, "distribution": 150000,
                "cafe": 55000, "carbon": 250000, "financial": 400000, "technology": 130000}[cat]
        goal = int(goal * (0.5 + rng()))
        pledged = int(goal * (0.25 + rng() * 1.0))
        verified = rng() > 0.18
        proj = {
            "id": pid,
            "img": f"images/{pid}.jpg",
            "title": title,
            "desc": desc,
            "category": cat,
            "location": city,
            "creator": random.Random("c" + pid).choice(CREATORS[cat]),
            "goal": goal,
            "pledged": pledged,
            "backers": random.Random("b" + pid).randint(40, 900),
            "daysLeft": random.Random("dl" + pid).randint(3, 45),
            "carbonOffset": max(15, int(abs(cp["perKg"]) * 300 + rng() * 400)),
            "carbonPassport": cp,
            "verified": verified,
            "verifier": random.Random("v" + pid).choice(VERIFY),
            "stage": random.Random("s" + pid).choice(STAGES),
            "gradient": meta["g"][0],
            "rewards": [
                {"amount": max(12, int(goal / 4000)), "name": T("Supporter", "支持者", "داعم"),
                 "desc": T("Digital thank-you + impact report", "电子感谢信 + 影响力报告", "شكر رقمي + تقرير الأثر"),
                 "delivery": "2027-03", "limit": None},
                {"amount": max(60, int(goal / 700)), "name": T("Early Champion", "早期拥护者", "بطل مبكر"),
                 "desc": REWARD2[cat], "delivery": "2027-06", "limit": 120},
            ],
            "story": story,
            "updates": [],
            "equity": {"offered": random.Random("e" + pid).randint(5, 12), "minInvestment": 500} if rng() > 0.7 else None,
        }
        out.append(proj)

with open("js/projects-bulk.js", "w", encoding="utf-8") as f:
    f.write("/**\n * JEBI bulk projects — 100 generated trilingual projects.\n * Generated by scripts/generate_projects.py (seed 20261026). Do not edit by hand.\n */\n\nconst PROJECTS_BULK = [\n")
    for p in out:
        f.write(json.dumps(p, ensure_ascii=False) + ",\n")
    f.write("];\n\nPROJECTS.push(...PROJECTS_BULK);\n")

with open("bulk-manifest.json", "w", encoding="utf-8") as f:
    json.dump([{"id": p["id"], "category": p["category"]} for p in out], f, indent=1)

print("generated:", len(out), "projects")
from collections import Counter
print(Counter(p["category"] for p in out))
