/**
 * JEBI CAPITAL — Internationalization Engine
 * Languages: English (en), Simplified Chinese (zh), Saudi Arabic (ar)
 * Full RTL support for Arabic.
 */

const I18N = {

  /* ============================== ENGLISH ============================== */
  en: {
    meta: {
      siteName: "JEBI CAPITAL",
      tagline: "Zero-Carbon Coffee Crowdfunding",
      description: "The world's first crowdfunding platform dedicated to zero-carbon coffee — from aeroponic cultivation to your cup."
    },

    nav: {
      discover: "Discover",
      start: "Start a Project",
      howItWorks: "How It Works",
      financial: "Financial",
      about: "About",
      search: "Search projects, creators, carbon credits…",
      signIn: "Sign In",
      signUp: "Sign Up"
    },
    navDiscover: {
      trending: "Trending Now",
      endingSoon: "Ending Soon",
      mostFunded: "Most Funded",
      newProjects: "New Projects",
      allCategories: "All Categories"
    },
    navStart: {
      guidelines: "Creator Guidelines",
      carbonKit: "Carbon Toolkit",
      eligibility: "Eligibility Check",
      pricing: "Fees & Pricing"
    },
    navHow: {
      creators: "For Creators",
      backers: "For Backers",
      verification: "Carbon Verification",
      fees: "Fee Structure"
    },
    navFinancial: {
      carbonCredits: "Carbon Credits",
      greenBonds: "Green Bonds",
      impactFunds: "Impact Funds",
      coffeeFutures: "Coffee Futures"
    },
    navAbout: {
      mission: "Our Mission",
      team: "Team",
      partners: "Partners",
      methodology: "Carbon Methodology",
      impact: "Impact Report"
    },

    hero: {
      badge: "World's First Zero-Carbon Coffee Crowdfunding Platform",
      title: "Fund the Future of",
      titleAccent: "Zero-Carbon Coffee",
      subtitle: "From aeroponic cultivation to your morning cup — back projects that eliminate carbon across the entire coffee supply chain. Earn returns. Offset emissions. Change the industry.",
      ctaPrimary: "Explore Projects",
      ctaSecondary: "Start Your Project"
    },

    stats: {
      funded: "Total Funded",
      projects: "Live Projects",
      offset: "CO₂ Offset",
      backers: "Backers",
      countries: "Countries"
    },

    cat: {
      title: "Explore by Category",
      subtitle: "Every stage of the coffee value chain — decarbonized.",
      aeroponic: "Aeroponic Cultivation",
      aeroponicD: "Soil-less, ultra-low-water coffee growing systems",
      processing: "Processing & Milling",
      processingD: "Energy-efficient wet and dry milling operations",
      roasting: "Roasting & Packaging",
      roastingD: "Electric roasters, biogas, compostable packaging",
      distribution: "Distribution & Logistics",
      distributionD: "EV fleets, cold-chain optimization, last-mile",
      cafe: "Café & Retail",
      cafeD: "Zero-waste cafés, solar-powered shops, reusable cups",
      carbon: "Carbon Credits",
      carbonD: "Verified offset projects in coffee-growing regions",
      financial: "Financial Products",
      financialD: "Green bonds, impact funds, coffee futures",
      technology: "Technology & Innovation",
      technologyD: "Blockchain traceability, AI optimization, IoT sensors"
    },

    discover: {
      title: "Discover Projects",
      subtitle: "Find zero-carbon coffee projects to back — filter by category, carbon impact, or funding stage.",
      filterAll: "All",
      trending: "Trending",
      endingSoon: "Ending Soon",
      mostFunded: "Most Funded",
      newest: "Newest",
      category: "Category",
      carbonImpact: "Carbon Impact",
      fundingStage: "Funding Stage",
      sortBy: "Sort by",
      results: "projects found",
      noResults: "No projects match your filters.",
      clearFilters: "Clear Filters",
      low: "Low (0–100 t CO₂)",
      medium: "Medium (100–500 t CO₂)",
      high: "High (500+ t CO₂)",
      seed: "Seed",
      growth: "Growth",
      scaling: "Scaling"
    },

    project: {
      backed: "backed",
      backers: "backers",
      daysLeft: "days left",
      dayLeft: "day left",
      fundedOf: "funded of",
      goal: "goal",
      carbonOffset: "Carbon Offset",
      tonsCO2: "tons CO₂/yr",
      viewProject: "View Project",
      backProject: "Back This Project",
      story: "Story",
      rewards: "Rewards",
      updates: "Updates",
      comments: "Comments",
      pledge: "Pledge",
      rewardTier: "Reward Tier",
      estimatedDelivery: "Estimated Delivery",
      shipsTo: "Ships To",
      worldwide: "Worldwide",
      includes: "Includes",
      selectReward: "Select",
      createdBy: "Created by",
      location: "Location",
      category: "Category",
      fundingPeriod: "Funding Period",
      riskFactors: "Risk Factors",
      riskText: "Agricultural projects are subject to weather, pest, and market risks. Carbon verification is third-party audited.",
      shareProject: "Share",
      saveProject: "Save",
      updatesTitle: "Project Updates",
      noUpdates: "No updates yet.",
      commentsTitle: "Comments",
      noComments: "Be the first to comment.",
      addComment: "Add a comment…",
      post: "Post",
      pledged: "Pledged",
      fundingGoal: "Funding Goal",
      carbonTarget: "Carbon Reduction Target",
      carbonTargetVal: "tons CO₂/year",
      verifiedBy: "Verified by",
      verificationStatus: "Carbon Verified",
      verificationPending: "Verification Pending",
      equityOffered: "Equity Offered",
      minInvestment: "Min. Investment"
    },

    start: {
      title: "Start Your Zero-Carbon Coffee Project",
      subtitle: "Join a community of creators building the future of sustainable coffee. Get funding, carbon verification, and global reach.",
      trackLabel: "Application Track",
      trackAccel: "Accelerator Track",
      trackAccelD: "JEBI Combinator B01 — $50k–150k SAFE, 12-week batch, Demo Day. Apply by Dec 31, 2026.",
      trackCrowd: "Crowdfunding Only",
      trackCrowdD: "Launch your campaign on the platform without joining a batch.",
      trackRecommended: "Recommended",
      trackAccelNote: "Accelerator track selected: your application will be reviewed for Batch 01. Standard deal terms apply — see the program page. Crowdfunding placement follows Demo Day.",
      trackViewProgram: "View program →",
      step1: "Project Basics",
      step2: "Funding & Carbon",
      step3: "Rewards & Tiers",
      step4: "Review & Submit",
      projectName: "Project Name",
      projectNamePlaceholder: "e.g., Solar-Powered Coffee Roastery in Yunnan",
      category: "Project Category",
      selectCategory: "Select a category",
      shortDescription: "Short Description",
      shortDescriptionPlaceholder: "One sentence that captures your project's mission…",
      fullDescription: "Full Description",
      fullDescriptionPlaceholder: "Tell backers what makes your project special, your carbon reduction plan, and your team…",
      location: "Project Location",
      locationPlaceholder: "e.g., Yunnan, China",
      fundingGoal: "Funding Goal (USD)",
      fundingGoalPlaceholder: "e.g., 50,000",
      duration: "Campaign Duration (days)",
      carbonReduction: "Estimated Carbon Reduction (tons CO₂/yr)",
      carbonReductionPlaceholder: "e.g., 250",
      carbonMethod: "Carbon Reduction Method",
      carbonMethodPlaceholder: "e.g., Solar electric roasting, EV distribution fleet…",
      verificationProvider: "Verification Provider",
      verificationProviderPlaceholder: "e.g., Verra, Gold Standard, SCS Global",
      rewardName: "Reward Name",
      rewardNamePlaceholder: "e.g., Early Bird Coffee Subscription",
      rewardAmount: "Pledge Amount (USD)",
      rewardDescription: "Reward Description",
      rewardDescriptionPlaceholder: "What does the backer receive?",
      rewardLimit: "Quantity Limit (optional)",
      addReward: "Add Another Reward",
      next: "Next Step",
      previous: "Previous",
      submit: "Submit for Review",
      reviewTitle: "Review Your Project",
      reviewSubtitle: "Please review all details before submitting. You cannot edit after submission.",
      submitSuccess: "Project submitted successfully! We'll review within 3–5 business days.",
      requiredField: "This field is required",
      invalidNumber: "Please enter a valid number"
    },

    how: {
      title: "How JEBI Capital Works",
      subtitle: "A crowdfunding platform purpose-built for the zero-carbon coffee economy.",
      creatorsTitle: "For Creators",
      creatorsSubtitle: "Turn your climate-positive coffee idea into a funded reality.",
      creatorStep1Title: "Apply",
      creatorStep1D: "Submit your project with a carbon reduction plan. Our team reviews within 3–5 days.",
      creatorStep2Title: "Verify",
      creatorStep2D: "Get your carbon impact verified by our accredited third-party partners.",
      creatorStep3Title: "Launch",
      creatorStep3D: "Go live and start raising funds from a global community of climate-conscious backers.",
      creatorStep4Title: "Deliver",
      creatorStep4D: "Execute your project, send rewards, and report carbon impact quarterly.",
      backersTitle: "For Backers",
      backersSubtitle: "Back projects that decarbonize coffee. Earn rewards, equity, or carbon credits.",
      backerStep1Title: "Discover",
      backerStep1D: "Browse verified projects across the coffee supply chain.",
      backerStep2Title: "Pledge",
      backerStep2D: "Choose a reward tier or invest in equity. Every project has verified carbon impact.",
      backerStep3Title: "Track",
      backerStep3D: "Monitor project progress and carbon offset in real-time through your dashboard.",
      backerStep4Title: "Receive",
      backerStep4D: "Get your rewards, dividends, or carbon credits as projects reach milestones.",
      verificationTitle: "Carbon Verification Process",
      verificationSubtitle: "Every project on JEBI Capital undergoes rigorous third-party carbon verification.",
      verifyStep1Title: "Baseline Assessment",
      verifyStep1D: "Project's current carbon footprint is measured against industry benchmarks.",
      verifyStep2Title: "Reduction Plan Review",
      verifyStep2D: "Our accredited verifiers assess the feasibility of the proposed carbon reduction.",
      verifyStep3Title: "Ongoing Monitoring",
      verifyStep3D: "IoT sensors and satellite data track actual carbon savings in real-time.",
      verifyStep4Title: "Annual Audit",
      verifyStep4D: "Independent annual audits ensure carbon claims remain accurate and verifiable.",
      feesTitle: "Fee Structure",
      feesSubtitle: "Transparent pricing — no hidden costs.",
      feePlatform: "Platform Fee",
      feePlatformD: "5% of funds raised — covers hosting, payment processing, and verification tools.",
      feePayment: "Payment Processing",
      feePaymentD: "3% + $0.30 per transaction — standard payment gateway fees.",
      feeCarbon: "Carbon Verification",
      feeCarbonD: "Subsidized by JEBI Capital — creators pay only 30% of verification cost.",
      feeZero: "Zero Hidden Fees",
      feeZeroD: "No setup fees, no monthly subscriptions, no surprise charges."
    },

    financial: {
      title: "Financial Products",
      subtitle: "Invest in the zero-carbon coffee economy through regulated financial instruments.",
      carbonCreditsTitle: "Carbon Credits",
      carbonCreditsD: "Trade verified carbon offsets generated by coffee projects. Each credit represents one ton of CO₂ reduced or removed.",
      carbonCreditsHow: "How It Works",
      carbonCreditsHowD: "Projects generate credits through measurable carbon reduction. Credits are verified, tokenized on blockchain, and tradable on our marketplace.",
      carbonCreditsEligibility: "Open to all registered users. Corporate buyers eligible for volume discounts.",
      carbonCreditsPrice: "Avg. Price",
      carbonCreditsPriceVal: "$18.50 / ton CO₂",
      greenBondsTitle: "Green Bonds",
      greenBondsD: "Fixed-income instruments financing large-scale coffee infrastructure — solar roasteries, EV logistics networks, aeroponic farms.",
      greenBondsHow: "How It Works",
      greenBondsHowD: "Bonds are issued by verified project developers with carbon-impact covenants. Quarterly coupon payments with 3–7 year maturities.",
      greenBondsEligibility: "Accredited investors only. Minimum investment $10,000.",
      greenBondsPrice: "Avg. Yield",
      greenBondsPriceVal: "5.8% APR",
      impactFundsTitle: "Impact Investment Funds",
      impactFundsD: "Diversified portfolios of equity stakes in zero-carbon coffee companies across the supply chain.",
      impactFundsHow: "How It Works",
      impactFundsHowD: "Professional fund managers select and manage portfolios. Investors receive quarterly dividends and capital appreciation.",
      impactFundsEligibility: "Open to accredited and non-accredited investors. Minimum investment $500.",
      impactFundsPrice: "Historical Return",
      impactFundsPriceVal: "12.4% / year",
      coffeeFuturesTitle: "Coffee Futures (Carbon-Premium)",
      coffeeFuturesD: "Forward contracts on coffee with built-in carbon premium — price stability for producers, verified sustainability for buyers.",
      coffeeFuturesHow: "How It Works",
      coffeeFuturesHowD: "Producers lock in future sale prices with a carbon-verified premium. Buyers receive traceable, low-carbon coffee with price certainty.",
      coffeeFuturesEligibility: "Open to producers, roasters, and institutional buyers. Contract sizes from 10 bags.",
      coffeeFuturesPrice: "Carbon Premium",
      coffeeFuturesPriceVal: "+$0.45 / lb",
      investNow: "Invest Now",
      learnMore: "Learn More",
      disclaimer: "All financial products are offered through JEBI Capital's regulated subsidiary. Investments carry risk. Past performance does not guarantee future returns."
    },

    about: {
      title: "About JEBI Capital",
      subtitle: "We exist to accelerate the transition to a zero-carbon coffee industry.",
      missionTitle: "Our Mission",
      missionText: "To mobilize global capital toward coffee projects that eliminate carbon emissions across the entire supply chain — from aeroponic cultivation to the final cup. We believe coffee can be both extraordinary and climate-positive.",
      visionTitle: "Our Vision",
      visionText: "A coffee industry where every farm, roastery, and café operates at net-zero carbon. Where consumers choose coffee not just by origin and flavor, but by carbon footprint. Where investing in sustainable coffee is as simple as backing a project.",
      teamTitle: "Leadership Team",
      teamSubtitle: "Experts in coffee, climate finance, and technology.",
      partnersTitle: "Strategic Partners",
      partnersSubtitle: "Verified by the world's leading carbon standards organizations.",
      methodologyTitle: "Carbon Methodology",
      methodologyText: "Our carbon accounting framework follows ISO 14064 and the GHG Protocol, adapted specifically for the coffee value chain. Every project's baseline, reduction plan, and ongoing performance are independently verified by accredited third parties.",
      methodologyStep1: "Scope Definition",
      methodologyStep1D: "Crumb-to-cup boundary mapping across Scope 1, 2, and 3 emissions.",
      methodologyStep2: "Baseline Calculation",
      methodologyStep2D: "Industry benchmark comparison using ICO and SCA data.",
      methodologyStep3: "Reduction Modeling",
      methodologyStep3D: "Science-based targets aligned with SBTi 1.5°C pathway.",
      methodologyStep4: "Continuous MRV",
      methodologyStep4D: "Measurement, Reporting, and Verification via IoT + satellite.",
      impactTitle: "Impact Report",
      impactSubtitle: "Our progress, transparently tracked.",
      impactCO2: "Total CO₂ Offset",
      impactFunded: "Total Capital Deployed",
      impactProjects: "Projects Funded",
      impactJobs: "Green Jobs Created",
      impactDownload: "Download Full Report"
    },

    footer: {
      about: "JEBI Capital is the world's first crowdfunding platform dedicated to zero-carbon coffee. We connect climate-conscious backers with verified projects across the entire coffee supply chain.",
      explore: "Explore",
      creators: "Creators",
      resources: "Resources",
      legal: "Legal",
      helpCenter: "Help Center",
      creatorHub: "Creator Hub",
      guidelines: "Guidelines",
      fees: "Fees & Pricing",
      trustSafety: "Trust & Safety",
      blog: "Blog",
      carbonMethod: "Carbon Methodology",
      impactReport: "Impact Report",
      apiDocs: "API Documentation",
      careers: "Careers",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      cookiePolicy: "Cookie Policy",
      disclaimer: "Risk Disclaimer",
      newsletter: "Stay Updated",
      newsletterText: "Get the latest zero-carbon coffee projects and impact reports.",
      emailPlaceholder: "Your email address",
      subscribe: "Subscribe",
      subscribed: "Subscribed!",
      rights: "All rights reserved.",
      disclaimerText: "Investments in carbon credits and financial products carry risk. JEBI Capital is a platform facilitator, not a registered investment advisor."
    },

    modal: {
      title: "Choose Your Language",
      subtitle: "Select your preferred language for the JEBI Capital experience.",
      english: "English",
      englishSub: "English",
      chinese: "简体中文",
      chineseSub: "Mandarin Chinese",
      arabic: "العربية",
      arabicSub: "Saudi Arabic",
      continue: "Continue",
      changeLater: "You can change this anytime in the navigation bar."
    },

    batchBanner: {
      tag: "JEBI Combinator · Batch 01",
      title: "The accelerator for the zero-carbon coffee chain",
      subtitle: "12 weeks. Funding, aeroponic tech, carbon verification — then Demo Day to our investor network.",
      deadline: "Applications close Dec 31, 2026",
      cta: "Apply for Batch 01",
      secondary: "See the program"
    },

    batch: {
      heroBadge: "JEBI Combinator — Batch 01 · Applications Open",
      heroTitle: "Turn coffee builders into",
      heroTitleAccent: "category winners",
      heroSubtitle: "A Y Combinator-style accelerator, purpose-built for the zero-carbon coffee supply chain. We select a small cohort of founders, fund them on a standard deal, work with them intensively for 12 weeks, and put them in front of investors on Demo Day.",
      applyCta: "Apply for Batch 01",
      deadline: "Applications close Dec 31, 2026 · Batch runs Feb–Apr 2027",

      statsCohort: "Founders per batch",
      statsWeeks: "Weeks of intensive work",
      statsInvest: "Investment per team",
      statsCarbon: "Carbon verification included",

      dealTitle: "The Standard Deal",
      dealSubtitle: "One transparent term for every team — no negotiation, no exceptions. That's the point.",
      deal1Title: "$50k–150k on a SAFE",
      deal1D: "Standardized investment for 5–7% equity, based on stage. Same term for every team in the batch.",
      deal2Title: "Aeroponic technology license",
      deal2D: "Access to NAPELL aeroponic cultivation systems, smart-farm IoT stack, and propagation know-how.",
      deal3Title: "Carbon verification included",
      deal3D: "Third-party verification (Verra, Gold Standard, SCS) of your project's carbon impact, covered by JEBI.",
      deal4Title: "Route to market",
      deal4D: "Distribution through the JEBI ecosystem: farms, roasteries, cafés, and the SHINAE Coffee Bank platform.",

      timelineTitle: "12 Weeks, Then Demo Day",
      timelineSubtitle: "Remote-first with an on-farm residency. Built to compress years of learning into weeks.",
      w1: "Weeks 1–2",
      w1D: "Selection & onboarding — finalize the deal, define your coffee-chain track, set carbon baselines.",
      w2: "Weeks 3–6",
      w2D: "Build — product, supply contracts, aeroponic pilots, and customer conversations. Weekly check-ins.",
      w3: "Weeks 7–10",
      w3D: "On-farm residency — hands-on aeroponic training and supply-chain integration at a partner base.",
      w4: "Weeks 11–12",
      w4D: "Demo Day prep — pitch rehearsal, metrics, and introductions to our investor and partner network.",
      demoTitle: "Demo Day",
      demoD: "Present to a curated room of climate investors, coffee trade buyers, and strategic partners. Batch projects also get priority placement on the JEBI Capital crowdfunding platform.",

      tracksTitle: "Three Ways In",
      tracksSubtitle: "We select teams across every stage of the coffee value chain — the batch becomes a supply chain.",
      track1Title: "Supply side",
      track1D: "Cultivation, processing, and origin operations. Get aeroponic tech, verification, and offtake partners.",
      track2Title: "Demand side",
      track2D: "Roasting, cafés, and retail. Secure verified low-carbon supply and sell through the JEBI network.",
      track3Title: "Finance & carbon",
      track3D: "Fintech, carbon MRV, and market infrastructure. Plug into SHINAE Coffee Bank and BeanFlow.",

      mentorsTitle: "Operators, Not Tourists",
      mentorsSubtitle: "Every mentor has built and shipped in the coffee or carbon economy.",
      m1: "Aeroponic systems & propagation",
      m2: "Carbon methodology & verification",
      m3: "Coffee trade & offtake",
      m4: "Growth & fundraising",

      faqTitle: "Frequently Asked Questions",
      q1: "Do we have to give up equity?",
      a1: "Yes — the standard deal is $50k–150k on a SAFE for 5–7%, depending on stage. The same term for every team keeps the process fast and fair.",
      q2: "Do we have to relocate?",
      a2: "No. The program is remote-first, but weeks 7–10 include an on-farm residency at a partner growing base. Teams cover travel; JEBI covers the program.",
      q3: "Is crowdfunding included?",
      a3: "Batch companies get priority verification and featured placement on JEBI Capital after Demo Day, but Demo Day is the primary funding event.",
      q4: "What are you looking for?",
      a4: "Small teams (1–4 people) building anywhere in the coffee supply chain with a credible path to measurable carbon reduction. Stage matters less than speed.",
      applyFooterTitle: "Batch 01 applications are open",
      applyFooterD: "Applications close Dec 31, 2026. Decisions within two weeks of submission.",
      applyFooterBtn: "Start Your Application"
    },

    navCombinator: {
      label: "Combinator",
      program: "The Program",
      deal: "Standard Deal",
      timeline: "Batch Timeline",
      demoDay: "Demo Day",
      faq: "FAQ"
    },

    common: {
      loading: "Loading…",
      error: "Something went wrong. Please try again.",
      retry: "Retry",
      cancel: "Cancel",
      save: "Save",
      close: "Close",
      back: "Back",
      next: "Next",
      confirm: "Confirm",
      yes: "Yes",
      no: "No",
      learnMore: "Learn More",
      readMore: "Read More",
      viewAll: "View All",
      seeAll: "See All",
      apply: "Apply",
      reset: "Reset",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      verified: "Verified",
      featured: "Featured",
      new: "New",
      hot: "Hot",
      urgent: "Urgent"
    },

    currency: { symbol: "$", position: "before" },
    dir: "ltr"
  },


  /* ============================== CHINESE ============================== */
  zh: {
    meta: {
      siteName: "JEBI CAPITAL",
      tagline: "零碳咖啡众筹平台",
      description: "全球首个专注于零碳咖啡的众筹平台——从气培种植到一杯咖啡的全程减碳。"
    },

    nav: {
      discover: "发现项目",
      start: "发起项目",
      howItWorks: "运作方式",
      financial: "金融产品",
      about: "关于我们",
      search: "搜索项目、创作者、碳信用……",
      signIn: "登录",
      signUp: "注册"
    },
    navDiscover: {
      trending: "热门趋势",
      endingSoon: "即将结束",
      mostFunded: "筹款最多",
      newProjects: "最新项目",
      allCategories: "全部分类"
    },
    navStart: {
      guidelines: "创作者指南",
      carbonKit: "碳工具包",
      eligibility: "资格检查",
      pricing: "费用与定价"
    },
    navHow: {
      creators: "创作者须知",
      backers: "支持者须知",
      verification: "碳认证流程",
      fees: "费用结构"
    },
    navFinancial: {
      carbonCredits: "碳信用",
      greenBonds: "绿色债券",
      impactFunds: "影响力基金",
      coffeeFutures: "咖啡期货"
    },
    navAbout: {
      mission: "我们的使命",
      team: "团队",
      partners: "合作伙伴",
      methodology: "碳核算方法",
      impact: "影响力报告"
    },

    hero: {
      badge: "全球首个零碳咖啡众筹平台",
      title: "投资",
      titleAccent: "零碳咖啡",
      subtitle: "从气培种植到你的晨间咖啡——支持在整个咖啡供应链中消除碳排放的项目。获得回报，抵消排放，改变行业。",
      ctaPrimary: "浏览项目",
      ctaSecondary: "发起项目"
    },

    stats: {
      funded: "已筹资金",
      projects: "在线项目",
      offset: "CO₂减排量",
      backers: "支持者",
      countries: "覆盖国家"
    },

    cat: {
      title: "按分类浏览",
      subtitle: "咖啡价值链的每个环节——全面脱碳。",
      aeroponic: "气培种植",
      aeroponicD: "无土超低用水咖啡种植系统",
      processing: "加工与碾磨",
      processingD: "节能湿法和干法碾磨作业",
      roasting: "烘焙与包装",
      roastingD: "电热烘焙机、沼气、可降解包装",
      distribution: "配送与物流",
      distributionD: "电动车队、冷链优化、末端配送",
      cafe: "咖啡馆与零售",
      cafeD: "零废弃咖啡馆、太阳能门店、循环杯",
      carbon: "碳信用",
      carbonD: "咖啡产区的已核证减排项目",
      financial: "金融产品",
      financialD: "绿色债券、影响力基金、咖啡期货",
      technology: "技术与创新",
      technologyD: "区块链溯源、AI优化、物联网传感器"
    },

    discover: {
      title: "发现项目",
      subtitle: "找到值得支持的零碳咖啡项目——按分类、碳影响或融资阶段筛选。",
      filterAll: "全部",
      trending: "热门趋势",
      endingSoon: "即将结束",
      mostFunded: "筹款最多",
      newest: "最新",
      category: "分类",
      carbonImpact: "碳影响",
      fundingStage: "融资阶段",
      sortBy: "排序方式",
      results: "个项目",
      noResults: "没有符合筛选条件的项目。",
      clearFilters: "清除筛选",
      low: "低（0–100吨 CO₂）",
      medium: "中（100–500吨 CO₂）",
      high: "高（500吨以上 CO₂）",
      seed: "种子期",
      growth: "成长期",
      scaling: "扩张期"
    },

    project: {
      backed: "已支持",
      backers: "位支持者",
      daysLeft: "天剩余",
      dayLeft: "天剩余",
      fundedOf: "已完成",
      goal: "目标",
      carbonOffset: "碳减排量",
      tonsCO2: "吨 CO₂/年",
      viewProject: "查看项目",
      backProject: "支持此项目",
      story: "项目故事",
      rewards: "回报方案",
      updates: "最新动态",
      comments: "评论",
      pledge: "认捐",
      rewardTier: "回报等级",
      estimatedDelivery: "预计交付",
      shipsTo: "运送至",
      worldwide: "全球",
      includes: "包含",
      selectReward: "选择",
      createdBy: "发起人",
      location: "所在地",
      category: "分类",
      fundingPeriod: "筹款周期",
      riskFactors: "风险提示",
      riskText: "农业项目受天气、病虫害和市场风险影响。碳减排量由第三方独立审计核证。",
      shareProject: "分享",
      saveProject: "收藏",
      updatesTitle: "项目动态",
      noUpdates: "暂无动态。",
      commentsTitle: "评论",
      noComments: "成为第一个评论的人。",
      addComment: "添加评论……",
      post: "发布",
      pledged: "已筹得",
      fundingGoal: "筹款目标",
      carbonTarget: "碳减排目标",
      carbonTargetVal: "吨 CO₂/年",
      verifiedBy: "核证机构",
      verificationStatus: "碳已核证",
      verificationPending: "核证进行中",
      equityOffered: "出让股权",
      minInvestment: "最低投资额"
    },

    start: {
      title: "发起你的零碳咖啡项目",
      subtitle: "加入由创作者组成的社区，共建可持续咖啡的未来。获得资金、碳认证和全球曝光。",
      trackLabel: "申请通道",
      trackAccel: "加速器通道",
      trackAccelD: "JEBI Combinator 第 1 期——5–15 万美元 SAFE、12 周批次、Demo Day。2026 年 12 月 31 日截止。",
      trackCrowd: "仅众筹",
      trackCrowdD: "不上批次，直接在平台发起众筹。",
      trackRecommended: "推荐",
      trackAccelNote: "已选择加速器通道：你的申请将进入第 1 期评审，适用标准化条款——详见计划页。Demo Day 后再上线众筹。",
      trackViewProgram: "查看计划 →",
      step1: "项目基本信息",
      step2: "融资与碳减排",
      step3: "回报与等级",
      step4: "审核与提交",
      projectName: "项目名称",
      projectNamePlaceholder: "例如：云南太阳能咖啡烘焙工坊",
      category: "项目分类",
      selectCategory: "选择分类",
      shortDescription: "简短描述",
      shortDescriptionPlaceholder: "用一句话概括你的项目使命……",
      fullDescription: "完整描述",
      fullDescriptionPlaceholder: "告诉支持者你的项目有什么独特之处、碳减排计划和团队信息……",
      location: "项目所在地",
      locationPlaceholder: "例如：中国云南",
      fundingGoal: "筹款目标（美元）",
      fundingGoalPlaceholder: "例如：50,000",
      duration: "筹款周期（天）",
      carbonReduction: "预计碳减排量（吨 CO₂/年）",
      carbonReductionPlaceholder: "例如：250",
      carbonMethod: "碳减排方法",
      carbonMethodPlaceholder: "例如：太阳能电烘焙、电动车队配送……",
      verificationProvider: "核证机构",
      verificationProviderPlaceholder: "例如：Verra、Gold Standard、SCS Global",
      rewardName: "回报名称",
      rewardNamePlaceholder: "例如：早鸟咖啡订阅",
      rewardAmount: "认捐金额（美元）",
      rewardDescription: "回报描述",
      rewardDescriptionPlaceholder: "支持者将获得什么？",
      rewardLimit: "数量限制（可选）",
      addReward: "添加更多回报",
      next: "下一步",
      previous: "上一步",
      submit: "提交审核",
      reviewTitle: "审核你的项目",
      reviewSubtitle: "提交前请仔细检查所有信息。提交后不可修改。",
      submitSuccess: "项目提交成功！我们将在3–5个工作日内审核。",
      requiredField: "此字段为必填项",
      invalidNumber: "请输入有效数字"
    },

    how: {
      title: "JEBI Capital 运作方式",
      subtitle: "专为零碳咖啡经济打造的众筹平台。",
      creatorsTitle: "创作者须知",
      creatorsSubtitle: "将你的气候友好型咖啡创意变为获得资金的现实。",
      creatorStep1Title: "申请",
      creatorStep1D: "提交你的项目和碳减排计划。我们的团队将在3–5天内审核。",
      creatorStep2Title: "核证",
      creatorStep2D: "由我们认可的第三方合作伙伴核证你的碳影响。",
      creatorStep3Title: "上线",
      creatorStep3D: "项目正式上线，开始接受全球气候意识支持者的资金。",
      creatorStep4Title: "交付",
      creatorStep4D: "执行项目、发送回报，并按季度报告碳影响数据。",
      backersTitle: "支持者须知",
      backersSubtitle: "支持为咖啡脱碳的项目。获得回报、股权或碳信用。",
      backerStep1Title: "发现",
      backerStep1D: "浏览整个咖啡供应链上经过核证的项目。",
      backerStep2Title: "认捐",
      backerStep2D: "选择回报等级或投资股权。每个项目都有经过核证的碳影响。",
      backerStep3Title: "追踪",
      backerStep3D: "通过你的仪表板实时监控项目进展和碳抵消量。",
      backerStep4Title: "收获",
      backerStep4D: "随着项目达到里程碑，获得你的回报、分红或碳信用。",
      verificationTitle: "碳核证流程",
      verificationSubtitle: "JEBI Capital 上的每个项目都经过严格的第三方碳核证。",
      verifyStep1Title: "基线评估",
      verifyStep1D: "参照行业基准测量项目当前的碳足迹。",
      verifyStep2Title: "减排计划审核",
      verifyStep2D: "我们认可的核证机构评估拟议碳减排的可行性。",
      verifyStep3Title: "持续监控",
      verifyStep3D: "通过物联网传感器和卫星数据实时追踪实际碳减排量。",
      verifyStep4Title: "年度审计",
      verifyStep4D: "独立年度审计确保碳声明持续准确可验证。",
      feesTitle: "费用结构",
      feesSubtitle: "透明定价——无隐藏费用。",
      feePlatform: "平台费",
      feePlatformD: "筹款总额的5%——涵盖托管、支付处理和核证工具。",
      feePayment: "支付处理费",
      feePaymentD: "每笔交易3% + $0.30——标准支付网关费用。",
      feeCarbon: "碳核证费",
      feeCarbonD: "由JEBI Capital补贴——创作者仅需支付核证费用的30%。",
      feeZero: "零隐藏费用",
      feeZeroD: "无设置费、无月费、无意外收费。"
    },

    financial: {
      title: "金融产品",
      subtitle: "通过受监管的金融工具投资零碳咖啡经济。",
      carbonCreditsTitle: "碳信用",
      carbonCreditsD: "交易由咖啡项目产生的已核证碳抵消额度。每笔信用代表一吨CO₂减排量。",
      carbonCreditsHow: "运作方式",
      carbonCreditsHowD: "项目通过可测量的碳减排产生信用。信用经核证后在区块链上代币化，可在我们的市场上交易。",
      carbonCreditsEligibility: "所有注册用户均可参与。企业买家享受批量折扣。",
      carbonCreditsPrice: "平均价格",
      carbonCreditsPriceVal: "$18.50 / 吨 CO₂",
      greenBondsTitle: "绿色债券",
      greenBondsD: "为大规模咖啡基础设施融资的固定收益工具——太阳能烘焙厂、电动车队、气培农场。",
      greenBondsHow: "运作方式",
      greenBondsHowD: "由经过核证的项目开发者发行，附带碳影响契约。季度付息，3–7年到期。",
      greenBondsEligibility: "仅限认证投资者。最低投资额$10,000。",
      greenBondsPrice: "平均收益率",
      greenBondsPriceVal: "5.8% 年化",
      impactFundsTitle: "影响力投资基金",
      impactFundsD: "在整个咖啡供应链中的零碳咖啡公司股权组合的多元化投资。",
      impactFundsHow: "运作方式",
      impactFundsHowD: "专业基金经理选择和管理投资组合。投资者获得季度分红和资本增值。",
      impactFundsEligibility: "认证和非认证投资者均可参与。最低投资额$500。",
      impactFundsPrice: "历史回报",
      impactFundsPriceVal: "12.4% / 年",
      coffeeFuturesTitle: "咖啡期货（碳溢价）",
      coffeeFuturesD: "带有内置碳溢价的咖啡远期合约——为生产者提供价格稳定，为买家提供已核证的可持续性。",
      coffeeFuturesHow: "运作方式",
      coffeeFuturesHowD: "生产者锁定未来销售价格并获得碳核证溢价。买家获得可追溯的低碳咖啡和价格确定性。",
      coffeeFuturesEligibility: "面向生产者、烘焙商和机构买家。合约规模从10袋起。",
      coffeeFuturesPrice: "碳溢价",
      coffeeFuturesPriceVal: "+$0.45 / 磅",
      investNow: "立即投资",
      learnMore: "了解更多",
      disclaimer: "所有金融产品均通过JEBI Capital的受监管子公司提供。投资有风险。过往业绩不代表未来回报。"
    },

    about: {
      title: "关于 JEBI Capital",
      subtitle: "我们致力于加速咖啡行业向零碳转型。",
      missionTitle: "我们的使命",
      missionText: "调动全球资本投向在整个咖啡供应链中消除碳排放的咖啡项目——从气培种植到最后一杯。我们相信，咖啡既可以品质卓越，也可以气候友好。",
      visionTitle: "我们的愿景",
      visionText: "一个每个农场、烘焙厂和咖啡馆都实现净零碳排放的咖啡行业。消费者不仅按产地和风味选择咖啡，还按碳足迹选择。投资可持续咖啡就像支持一个项目一样简单。",
      teamTitle: "领导团队",
      teamSubtitle: "咖啡、气候金融和技术领域的专家。",
      partnersTitle: "战略合作伙伴",
      partnersSubtitle: "由全球领先的碳标准组织核证。",
      methodologyTitle: "碳核算方法",
      methodologyText: "我们的碳核算框架遵循 ISO 14064 和 GHG Protocol，并针对咖啡价值链进行了专门调整。每个项目的基线、减排计划和持续表现均由认可的第三方独立核证。",
      methodologyStep1: "范围界定",
      methodologyStep1D: "涵盖范围1、2、3排放的全生命周期边界映射。",
      methodologyStep2: "基线计算",
      methodologyStep2D: "使用ICO和SCA数据进行行业基准比较。",
      methodologyStep3: "减排建模",
      methodologyStep3D: "基于科学的目标，与SBTi 1.5°C路径一致。",
      methodologyStep4: "持续MRV",
      methodologyStep4D: "通过物联网+卫星进行测量、报告和验证。",
      impactTitle: "影响力报告",
      impactSubtitle: "我们的进展，透明追踪。",
      impactCO2: "CO₂总减排量",
      impactFunded: "已部署资金总额",
      impactProjects: "已资助项目",
      impactJobs: "创造绿色就业",
      impactDownload: "下载完整报告"
    },

    footer: {
      about: "JEBI Capital 是全球首个专注于零碳咖啡的众筹平台。我们连接气候意识支持者与整个咖啡供应链上的已核证项目。",
      explore: "探索",
      creators: "创作者",
      resources: "资源",
      legal: "法律",
      helpCenter: "帮助中心",
      creatorHub: "创作者中心",
      guidelines: "指南",
      fees: "费用与定价",
      trustSafety: "信任与安全",
      blog: "博客",
      carbonMethod: "碳核算方法",
      impactReport: "影响力报告",
      apiDocs: "API文档",
      careers: "招聘",
      terms: "使用条款",
      privacy: "隐私政策",
      cookiePolicy: "Cookie政策",
      disclaimer: "风险声明",
      newsletter: "保持关注",
      newsletterText: "获取最新的零碳咖啡项目和影响力报告。",
      emailPlaceholder: "你的电子邮箱",
      subscribe: "订阅",
      subscribed: "已订阅！",
      rights: "保留所有权利。",
      disclaimerText: "碳信用和金融产品投资有风险。JEBI Capital 是平台提供方，非注册投资顾问。"
    },

    modal: {
      title: "选择你的语言",
      subtitle: "选择你在 JEBI Capital 上偏好的语言。",
      english: "English",
      englishSub: "英语",
      chinese: "简体中文",
      chineseSub: "简体中文",
      arabic: "العربية",
      arabicSub: "沙特阿拉伯语",
      continue: "继续",
      changeLater: "你可以随时在导航栏中更改语言设置。"
    },

    batchBanner: {
      tag: "JEBI Combinator · 第 1 期",
      title: "零碳咖啡产业链的加速器",
      subtitle: "12 周。资金、气培技术、碳认证——最终在 Demo Day 对接我们的投资人网络。",
      deadline: "申请截止 2026 年 12 月 31 日",
      cta: "申请第 1 期",
      secondary: "了解计划详情"
    },

    batch: {
      heroBadge: "JEBI Combinator — 第 1 期 · 开放申请",
      heroTitle: "让咖啡创业者成为",
      heroTitleAccent: "品类冠军",
      heroSubtitle: "一个专为零碳咖啡供应链打造的 Y Combinator 式加速器。我们每期精选一小批创始人，按标准条款投资，集中辅导 12 周，并在 Demo Day 将他们推向投资人。",
      applyCta: "申请第 1 期",
      deadline: "申请截止 2026 年 12 月 31 日 · 批次时间 2027 年 2–4 月",

      statsCohort: "每期入选团队",
      statsWeeks: "周集中辅导",
      statsInvest: "每团队投资额",
      statsCarbon: "含碳认证服务",

      dealTitle: "标准化条款",
      dealSubtitle: "所有团队同一个条款——无需谈判，没有例外。这正是意义所在。",
      deal1Title: "$5 万–15 万 SAFE 投资",
      deal1D: "按阶段获得 5–7% 股权的标准化投资。同一批次所有团队条款完全一致。",
      deal2Title: "气培技术授权",
      deal2D: "使用 NAPELL 气培种植系统、智慧农场 IoT 技术栈与育苗技术。",
      deal3Title: "碳认证服务",
      deal3D: "由第三方认证机构（Verra、Gold Standard、SCS）认证项目碳减排量，费用由 JEBI 承担。",
      deal4Title: "市场通路",
      deal4D: "接入 JEBI 生态的分销网络：种植基地、烘焙厂、咖啡馆与 SHINAE Coffee Bank 平台。",

      timelineTitle: "12 周，然后是 Demo Day",
      timelineSubtitle: "远程为主 + 基地驻场。目标是把数年的学习压缩到几周之内。",
      w1: "第 1–2 周",
      w1D: "筛选与入驻——签署条款，确定咖啡链赛道，建立碳基线。",
      w2: "第 3–6 周",
      w2D: "构建——产品、供应合同、气培试点与客户沟通。每周例会。",
      w3: "第 7–10 周",
      w3D: "基地驻场——在合作基地进行气培实操训练与供应链整合。",
      w4: "第 11–12 周",
      w4D: "Demo Day 筹备——路演打磨、数据整理，对接投资人与合作伙伴网络。",
      demoTitle: "Demo Day",
      demoD: "向精选的气候投资人、咖啡贸易买家和战略合作伙伴进行路演。批次项目还将获得 JEBI Capital 众筹平台的优先展示位。",

      tracksTitle: "三种进入方式",
      tracksSubtitle: "我们选拔覆盖咖啡价值链各环节的团队——一个批次就是一条供应链。",
      track1Title: "供给侧",
      track1D: "种植、加工与产地运营。获得气培技术、碳认证与承购伙伴。",
      track2Title: "需求侧",
      track2D: "烘焙、咖啡馆与零售。锁定经认证的低碳货源，通过 JEBI 网络销售。",
      track3Title: "金融与碳",
      track3D: "金融科技、碳 MRV 与市场基础设施。接入 SHINAE Coffee Bank 与 BeanFlow。",

      mentorsTitle: "实干型导师",
      mentorsSubtitle: "每位导师都在咖啡或碳经济领域真正做过、交付过。",
      m1: "气培系统与育苗",
      m2: "碳方法学与认证",
      m3: "咖啡贸易与承购",
      m4: "增长与融资",

      faqTitle: "常见问题",
      q1: "需要出让股权吗？",
      a1: "是的——标准条款是以 SAFE 形式投资 5–15 万美元换取 5–7% 股权（视阶段而定）。所有团队同一条款，流程快速且公平。",
      q2: "需要搬迁吗？",
      a2: "不需要。项目以远程为主，但第 7–10 周需在合作种植基地驻场。差旅自理；项目费用由 JEBI 承担。",
      q3: "包含众筹吗？",
      a3: "批次公司将在 Demo Day 后获得 JEBI Capital 的优先认证和推荐展示位，但 Demo Day 才是主要融资场景。",
      q4: "你们在找什么样的团队？",
      a4: "1–4 人的小团队，在咖啡供应链任一环节创业，并有可衡量的碳减排路径。阶段不重要，速度才重要。",
      applyFooterTitle: "第 1 期申请已开放",
      applyFooterD: "申请截止 2026 年 12 月 31 日。提交后两周内通知结果。",
      applyFooterBtn: "开始申请"
    },

    navCombinator: {
      label: "加速器",
      program: "计划介绍",
      deal: "标准化条款",
      timeline: "批次时间线",
      demoDay: "Demo Day",
      faq: "常见问题"
    },

    common: {
      loading: "加载中……",
      error: "出错了。请重试。",
      retry: "重试",
      cancel: "取消",
      save: "保存",
      close: "关闭",
      back: "返回",
      next: "下一步",
      confirm: "确认",
      yes: "是",
      no: "否",
      learnMore: "了解更多",
      readMore: "阅读更多",
      viewAll: "查看全部",
      seeAll: "查看全部",
      apply: "应用",
      reset: "重置",
      search: "搜索",
      filter: "筛选",
      sort: "排序",
      verified: "已核证",
      featured: "精选",
      new: "新",
      hot: "热门",
      urgent: "紧急"
    },

    currency: { symbol: "$", position: "before" },
    dir: "ltr"
  },


  /* ============================== SAUDI ARABIC ============================== */
  ar: {
    meta: {
      siteName: "JEBI CAPITAL",
      tagline: "منصة تمويل جماعي للقهوة منخفضة الكربون",
      description: "أول منصة تمويل جماعي في العالم مخصصة للقهوة منخفضة الكربون — من الزراعة الهوائية إلى فنجان قهوتك."
    },

    nav: {
      discover: "اكتشف",
      start: "ابدأ مشروعاً",
      howItWorks: "كيف يعمل",
      financial: "المنتجات المالية",
      about: "حول",
      search: "ابحث عن المشاريع والمبدعين وائتمانات الكربون…",
      signIn: "تسجيل الدخول",
      signUp: "إنشاء حساب"
    },
    navDiscover: {
      trending: "الأكثر رواجاً",
      endingSoon: "ينتهي قريباً",
      mostFunded: "الأكثر تمويلاً",
      newProjects: "مشاريع جديدة",
      allCategories: "جميع الفئات"
    },
    navStart: {
      guidelines: "إرشادات المبدعين",
      carbonKit: "أدوات الكربون",
      eligibility: "فحص الأهلية",
      pricing: "الرسوم والتسعير"
    },
    navHow: {
      creators: "للمبدعين",
      backers: "للمدعومين",
      verification: "التحقق من الكربون",
      fees: "هيكل الرسوم"
    },
    navFinancial: {
      carbonCredits: "ائتمانات الكربون",
      greenBonds: "السندات الخضراء",
      impactFunds: "صناديق الأثر",
      coffeeFutures: "عقود القهوة الآجلة"
    },
    navAbout: {
      mission: "مهمتنا",
      team: "الفريق",
      partners: "الشركاء",
      methodology: "منهجية الكربون",
      impact: "تقرير الأثر"
    },

    hero: {
      badge: "أول منصة تمويل جماعي للقهوة منخفضة الكربون في العالم",
      title: "موّل مستقبل",
      titleAccent: "القهوة منخفضة الكربون",
      subtitle: "من الزراعة الهوائية إلى فنجان الصباح — ادعم المشاريع التي تزيل الكربون من سلسلة توريد القهوة بأكملها. اكسب عوائد. عوّض الانبعاثات. غيّر الصناعة.",
      ctaPrimary: "استكشف المشاريع",
      ctaSecondary: "ابدأ مشروعك"
    },

    stats: {
      funded: "إجمالي التمويل",
      projects: "المشاريع النشطة",
      offset: "انبعاثات CO₂ المخفضة",
      backers: "المدعومون",
      countries: "الدول"
    },

    cat: {
      title: "استكشف حسب الفئة",
      subtitle: "كل مرحلة من سلسلة قيمة القهوة — منخفضة الكربون.",
      aeroponic: "الزراعة الهوائية",
      aeroponicD: "أنظمة زراعة القهوة بدون تربة ومنخفضة المياه",
      processing: "المعالجة والطحن",
      processingD: "عمليات الطحن الرطب والجاف الموفرة للطاقة",
      roasting: "التحميص والتعبئة",
      roastingD: "محامص كهربائية، غاز حيوي، تغليف قابل للتحلل",
      distribution: "التوزيع والخدمات اللوجستية",
      distributionD: "أساطيل كهربائية، تحسين سلسلة التبريد، التوصيل الأخير",
      cafe: "المقاهي والتجزئة",
      cafeD: "مقاهي صفرية النفايات، متاجر تعمل بالطاقة الشمسية، أكواب قابلة لإعادة الاستخدام",
      carbon: "ائتمانات الكربون",
      carbonD: "مشاريع تعويض موثقة في مناطق زراعة القهوة",
      financial: "المنتجات المالية",
      financialD: "سندات خضراء، صناديق أثر، عقود قهوة آجلة",
      technology: "التكنولوجيا والابتكار",
      technologyD: "تتبع البلوكتشين، تحسين الذكاء الاصطناعي، مستشعرات إنترنت الأشياء"
    },

    discover: {
      title: "اكتشف المشاريع",
      subtitle: "اعثر على مشاريع القهوة منخفضة الكربون لدعمها — فلتر حسب الفئة أو أثر الكربون أو مرحلة التمويل.",
      filterAll: "الكل",
      trending: "الأكثر رواجاً",
      endingSoon: "ينتهي قريباً",
      mostFunded: "الأكثر تمويلاً",
      newest: "الأحدث",
      category: "الفئة",
      carbonImpact: "أثر الكربون",
      fundingStage: "مرحلة التمويل",
      sortBy: "ترتيب حسب",
      results: "مشروع",
      noResults: "لا توجد مشار تطابق عوامل التصفية الخاصة بك.",
      clearFilters: "مسح التصفيات",
      low: "منخفض (0–100 طن CO₂)",
      medium: "متوسط (100–500 طن CO₂)",
      high: "عالي (+500 طن CO₂)",
      seed: "البذور",
      growth: "النمو",
      scaling: "التوسع"
    },

    project: {
      backed: "مدعوم",
      backers: "مدعوم",
      daysLeft: "أيام متبقية",
      dayLeft: "يوم متبقي",
      fundedOf: "مموّل من",
      goal: "الهدف",
      carbonOffset: "إزاحة الكربون",
      tonsCO2: "طن CO₂/سنة",
      viewProject: "عرض المشروع",
      backProject: "ادعم هذا المشروع",
      story: "القصة",
      rewards: "المكافآت",
      updates: "التحديثات",
      comments: "التعليقات",
      pledge: "تعهد",
      rewardTier: "مستوى المكافأة",
      estimatedDelivery: "التسليم المتوقع",
      shipsTo: "يشحن إلى",
      worldwide: "في جميع أنحاء العالم",
      includes: "يتضمن",
      selectReward: "اختر",
      createdBy: "أنشأه",
      location: "الموقع",
      category: "الفئة",
      fundingPeriod: "فترة التمويل",
      riskFactors: "عوامل الخطر",
      riskText: "تخضع المشاريع الزراعية لمخاطر الطقس والآفات والسوق. يتم التحقق من الكربون بواسطة تدقيق خارجي مستقل.",
      shareProject: "مشاركة",
      saveProject: "حفظ",
      updatesTitle: "تحديثات المشروع",
      noUpdates: "لا توجد تحديثات بعد.",
      commentsTitle: "التعليقات",
      noComments: "كن أول من يعلق.",
      addComment: "أضف تعليقاً…",
      post: "نشر",
      pledged: "تم تعهده",
      fundingGoal: "هدف التمويل",
      carbonTarget: "هدف خفض الكربون",
      carbonTargetVal: "طن CO₂/سنة",
      verifiedBy: "موثق من",
      verificationStatus: "الكربون موثق",
      verificationPending: "التحقق قيد التقدم",
      equityOffered: "الأسهم المقدمة",
      minInvestment: "الحد الأدنى للاستثمار"
    },

    start: {
      title: "ابدأ مشروع القهوة منخفض الكربون",
      subtitle: "انضم إلى مجتمع من المبدعين يبنون مستقبل القهوة المستدامة. احصل على التمويل والتحقق من الكربون ووصول عالمي.",
      trackLabel: "مسار التقديم",
      trackAccel: "مسار المسرّع",
      trackAccelD: "جيبي كومبيناتور الدفعة 01 — 50–150 ألف دولار عبر SAFE، 12 أسبوعًا، يوم العرض. التقديم حتى 31 ديسمبر 2026.",
      trackCrowd: "تمويل جماعي فقط",
      trackCrowdD: "أطلق حملتك على المنصة دون الانضمام إلى دفعة.",
      trackRecommended: "موصى به",
      trackAccelNote: "تم اختيار مسار المسرّع: سيتم تقييم طلبك للدفعة 01 وتنطبق الشروط الموحدة — راجع صفحة البرنامج. يأتي التمويل الجماعي بعد يوم العرض.",
      trackViewProgram: "عرض البرنامج →",
      step1: "أساسيات المشروع",
      step2: "التمويل والكربون",
      step3: "المكافآت والمستويات",
      step4: "المراجعة والإرسال",
      projectName: "اسم المشروع",
      projectNamePlaceholder: "مثال: محمصة قهوة تعمل بالطاقة الشمسية في يونان",
      category: "فئة المشروع",
      selectCategory: "اختر فئة",
      shortDescription: "وصف موجز",
      shortDescriptionPlaceholder: "جملة واحدة تلخص مهمة مشروعك…",
      fullDescription: "الوصف الكامل",
      fullDescriptionPlaceholder: "أخبر المدعومين ما يميز مشروعك وخطة خفض الكربون وفريقك…",
      location: "موقع المشروع",
      locationPlaceholder: "مثال: يونان، الصين",
      fundingGoal: "هدف التمويل (دولار أمريكي)",
      fundingGoalPlaceholder: "مثال: 50,000",
      duration: "مدة الحملة (أيام)",
      carbonReduction: "خفض الكربون المقدر (طن CO₂/سنة)",
      carbonReductionPlaceholder: "مثال: 250",
      carbonMethod: "طريقة خفض الكربون",
      carbonMethodPlaceholder: "مثال: تحميص كهربائي بالطاقة الشمسية، أسطول توزيع كهربائي…",
      verificationProvider: "جهة التحقق",
      verificationProviderPlaceholder: "مثال: Verra، Gold Standard، SCS Global",
      rewardName: "اسم المكافأة",
      rewardNamePlaceholder: "مثال: اشتراك قهوة مبكر",
      rewardAmount: "مبلغ التعهد (دولار أمريكي)",
      rewardDescription: "وصف المكافأة",
      rewardDescriptionPlaceholder: "ماذا سيستلم المدعوم؟",
      rewardLimit: "حد الكمية (اختياري)",
      addReward: "أضف مكافأة أخرى",
      next: "الخطوة التالية",
      previous: "السابق",
      submit: "إرسال للمراجعة",
      reviewTitle: "راجع مشروعك",
      reviewSubtitle: "يرجى مراجعة جميع التفاصيل قبل الإرسال. لا يمكنك التعديل بعد الإرسال.",
      submitSuccess: "تم إرسال المشروع بنجاح! سنراجعه خلال 3–5 أيام عمل.",
      requiredField: "هذا الحقل مطلوب",
      invalidNumber: "يرجى إدخال رقم صحيح"
    },

    how: {
      title: "كيف يعمل JEBI Capital",
      subtitle: "منصة تمويل جماعي مصممة لاقتصاد القهوة منخفض الكربون.",
      creatorsTitle: "للمبدعين",
      creatorsSubtitle: "حوّل فكرتك للقهوة المناخية الإيجابية إلى واقع مموّل.",
      creatorStep1Title: "تقديم الطلب",
      creatorStep1D: "أرسل مشروعك مع خطة خفض الكربون. يراجع فريقنا خلال 3–5 أيام.",
      creatorStep2Title: "التحقق",
      creatorStep2D: "احصل على أثر الكربون موثقاً من شركائنا المعتمدين من أطراف ثالثة.",
      creatorStep3Title: "الإطلاق",
      creatorStep3D: "انطلق وابدأ جمع التمويل من مجتمع عالمي من المدعومين الواعين مناخياً.",
      creatorStep4Title: "التسليم",
      creatorStep4D: "نفّذ مشروعك وأرسل المكافآت وقرر أثر الكربون ربع سنوياً.",
      backersTitle: "للمدعومين",
      backersSubtitle: "ادعم المشاريع التي تزيل الكربون من القهوة. اكسب مكافآت أو أسهماً أو ائتمانات كربون.",
      backerStep1Title: "اكتشف",
      backerStep1D: "تصفح المشاريع الموثقة عبر سلسلة توريد القهوة.",
      backerStep2Title: "تعهد",
      backerStep2D: "اختر مستوى مكافأة أو استثمر في أسهم. كل مشروع له أثر كربون موثق.",
      backerStep3Title: "تتبع",
      backerStep3D: "راقب تقدم المشروع وإزاحة الكربون في الوقت الفعلي عبر لوحة التحكم.",
      backerStep4Title: "استلم",
      backerStep4D: "احصل على مكافآتك أو توزيعات أرباحك أو ائتمانات الكربون عند بلوغ المشاريع معالمها.",
      verificationTitle: "عملية التحقق من الكربون",
      verificationSubtitle: "كل مشروع على JEBI Capital يخضع لتحقق صارم من الكربون بواسطة طرف ثالث.",
      verifyStep1Title: "تقييم الأساس",
      verifyStep1D: "يتم قياس البصمة الكربونية الحالية للمشروع مقابل معايير الصناعة.",
      verifyStep2Title: "مراجعة خطة الخفض",
      verifyStep2D: "يقيّم موثقونا المعتمدون جدوى خفض الكربون المقترح.",
      verifyStep3Title: "المراقبة المستمرة",
      verifyStep3D: "تتبع مستشعرات إنترنت الأشياء وبيانات الأقمار الصناعية وفورات الكربون الفعلية في الوقت الفعلي.",
      verifyStep4Title: "التدقيق السنوي",
      verifyStep4D: "تضمن التدقيق السنوي المستقل بقاء ادعاءات الكربون دقيقة وقابلة للتحقق.",
      feesTitle: "هيكل الرسوم",
      feesSubtitle: "تسعير شفاف — لا تكاليف خفية.",
      feePlatform: "رسوم المنصة",
      feePlatformD: "5% من الأموال المجموعة — تغطي الاستضافة ومعالجة المدفوعات وأدوات التحقق.",
      feePayment: "معالجة المدفوعات",
      feePaymentD: "3% + $0.30 لكل معاملة — رسوم بوابة الدفع القياسية.",
      feeCarbon: "التحقق من الكربون",
      feeCarbonD: "مدعوم من JEBI Capital — يدفع المبدعون 30% فقط من تكلفة التحقق.",
      feeZero: "صفر رسوم خفية",
      feeZeroD: "لا رسوم إعداد، لا اشتراكات شهرية، لا رسوم مفاجئة."
    },

    financial: {
      title: "المنتجات المالية",
      subtitle: "استثمر في اقتصاد القهوة منخفض الكربون عبر أدوات مالية منظمة.",
      carbonCreditsTitle: "ائتمانات الكربون",
      carbonCreditsD: "تداول تعويضات الكربون الموثقة الناتجة عن مشاريع القهوة. كل ائتمان يمثل طناً واحداً من CO₂ مخفض أو مزال.",
      carbonCreditsHow: "كيف يعمل",
      carbonCreditsHowD: "تُنشئ المشاريع ائتمانات من خلال خفض الكربون القابل للقياس. يتم توثيق الائتمانات ورقمنتها على البلوكتشين وقابلة للتداول في سوقنا.",
      carbonCreditsEligibility: "مفتوح لجميع المستخدمين المسجلين. المشترون المؤسسيون مؤهلون لخصومات الكميات.",
      carbonCreditsPrice: "متوسط السعر",
      carbonCreditsPriceVal: "$18.50 / طن CO₂",
      greenBondsTitle: "السندات الخضراء",
      greenBondsD: "أدوات دخل ثابت تمول البنية التحتية الكبيرة للقهوة — محامص شمسية، شبكات لوجستية كهربائية، مزارع هوائية.",
      greenBondsHow: "كيف يعمل",
      greenBondsHowD: "تصدر السندات من قبل مطوري مشاريع موثقين مع عهود أثر الكربون. مدفوعات قسيمة ربع سنوية بآجال 3–7 سنوات.",
      greenBondsEligibility: "للمستثمرين المعتمدين فقط. الحد الأدنى للاستثمار $10,000.",
      greenBondsPrice: "متوسط العائد",
      greenBondsPriceVal: "5.8% سنوياً",
      impactFundsTitle: "صناديق الاستثمار ذات الأثر",
      impactFundsD: "محافظ متنوعة من حصص أسهم في شركات قهوة منخفضة الكربون عبر سلسلة التوريد.",
      impactFundsHow: "كيف يعمل",
      impactFundsHowD: "مديرو صناديق محترفون يختارون ويديرون المحافظ. يستلم المستثمرون توزيعات أرباح ربع سنوية وزيادة رأس المال.",
      impactFundsEligibility: "مفتوح للمستثمرين المعتمدين وغير المعتمدين. الحد الأدنى للاستثمار $500.",
      impactFundsPrice: "العائد التاريخي",
      impactFundsPriceVal: "12.4% / سنة",
      coffeeFuturesTitle: "عقود القهوة الآجلة (علاوة الكربون)",
      coffeeFuturesD: "عقود آجلة على القهوة مع علاوة كربون مدمجة — استقرار الأسعار للمنتجين، استدامة موثقة للمشترين.",
      coffeeFuturesHow: "كيف يعمل",
      coffeeFuturesHowD: "يحدد المنتجون أسعار بيع مستقبلية مع علاوة كربون موثقة. يستلم المشترون قهوة منخفضة الكربون قابلة للتتبع مع يقين الأسعار.",
      coffeeFuturesEligibility: "مفتوح للمنتجين والمحامص والمشترين المؤسسيين. أحجام العقود من 10 أكياس.",
      coffeeFuturesPrice: "علاوة الكربون",
      coffeeFuturesPriceVal: "+$0.45 / رطل",
      investNow: "استثمر الآن",
      learnMore: "اعرف المزيد",
      disclaimer: "جميع المنتجات المالية تُقدَّم عبر شركة JEBI Capital التابعة المنظمة. الاستثمارات تنطوي على مخاطر. الأداء السابق لا يضمن العوائد المستقبلية."
    },

    about: {
      title: "حول JEBI Capital",
      subtitle: "نحن موجودون لتسريع التحول نحو صناعة قهوة منخفضة الكربون.",
      missionTitle: "مهمتنا",
      missionText: "تعبئة رأس المال العالمي نحو مشاريع القهوة التي تزيل الانبعاثات الكربونية عبر سلسلة التوريد بأكملها — من الزراعة الهوائية إلى الفنجان الأخير. نؤمن أن القهوة يمكن أن تكون استثنائية ومناخية إيجابية في آن واحد.",
      visionTitle: "رؤيتنا",
      visionText: "صناعة قهوة حيث كل مزرعة ومحمصة ومقهى تعمل بصافي انبعاثات صفرية. حيث يختار المستهلكون القهوة ليس فقط بالمنشأ والنكهة بل بالبصمة الكربونية. حيث الاستثمار في القهوة المستدامة سهل كدعم مشروع.",
      teamTitle: "فريق القيادة",
      teamSubtitle: "خبراء في القهوة والتمويل المناخي والتكنولوجيا.",
      partnersTitle: "الشركاء الاستراتيجيون",
      partnersSubtitle: "موثقون من قبل أبرز منظمات معايير الكربون في العالم.",
      methodologyTitle: "منهجية الكربون",
      methodologyText: "يتبع إطار المحاسبة الكربونية لدينا معيار ISO 14064 وبروتوكول GHG، ومكيّف خصيصاً لسلسلة قيمة القهوة. يتم التحقق من خط الأساس وخطة الخفض والأداء المستمر لكل مشروع بشكل مستقل من قبل أطراف ثالثة معتمدة.",
      methodologyStep1: "تحديد النطاق",
      methodologyStep1D: "رسم حدودي شامل عبر انبعاثات النطاق 1 و2 و3.",
      methodologyStep2: "حساب الأساس",
      methodologyStep2D: "مقارنة معايير الصناعة باستخدام بيانات ICO وSCA.",
      methodologyStep3: "نمذجة الخفض",
      methodologyStep3D: "أهداف مبنية على العلم متوافقة مع مسار SBTi 1.5°C.",
      methodologyStep4: "MRV مستمر",
      methodologyStep4D: "القياس والإبلاغ والتحقق عبر إنترنت الأشياء + الأقمار الصناعية.",
      impactTitle: "تقرير الأثر",
      impactSubtitle: "تقدمنا، يتم تتبعه بشفافية.",
      impactCO2: "إجمالي CO₂ المُزاح",
      impactFunded: "إجمالي رأس المال المُستثمر",
      impactProjects: "المشاريع الممولة",
      impactJobs: "وظائف خضراء مُنشأة",
      impactDownload: "تحميل التقرير الكامل"
    },

    footer: {
      about: "JEBI Capital هي أول منصة تمويل جماعي في العالم مخصصة للقهوة منخفضة الكربون. نربط المدعومين الواعين مناخياً بمشاريع موثقة عبر سلسلة توريد القهوة بأكملها.",
      explore: "استكشف",
      creators: "المبدعون",
      resources: "الموارد",
      legal: "قانوني",
      helpCenter: "مركز المساعدة",
      creatorHub: "مركز المبدعين",
      guidelines: "الإرشادات",
      fees: "الرسوم والتسعير",
      trustSafety: "الثقة والسلامة",
      blog: "المدونة",
      carbonMethod: "منهجية الكربون",
      impactReport: "تقرير الأثر",
      apiDocs: "وثائق API",
      careers: "الوظائف",
      terms: "شروط الاستخدام",
      privacy: "سياسة الخصوصية",
      cookiePolicy: "سياسة ملفات تعريف الارتباط",
      disclaimer: "إخلاء المسؤولية عن المخاطر",
      newsletter: "ابق على اطلاع",
      newsletterText: "احصل على أحدث مشاريع القهوة منخفضة الكربون وتقارير الأثر.",
      emailPlaceholder: "بريدك الإلكتروني",
      subscribe: "اشترك",
      subscribed: "تم الاشتراك!",
      rights: "جميع الحقوق محفوظة.",
      disclaimerText: "الاستثمار في ائتمانات الكربون والمنتجات المالية ينطوي على مخاطر. JEBI Capital هي منصة وسيطة وليست مستشار استثمار مسجلاً."
    },

    modal: {
      title: "اختر لغتك",
      subtitle: "اختر لغتك المفضلة لتجربة JEBI Capital.",
      english: "English",
      englishSub: "الإنجليزية",
      chinese: "简体中文",
      chineseSub: "الصينية المندرينية",
      arabic: "العربية",
      arabicSub: "العربية السعودية",
      continue: "متابعة",
      changeLater: "يمكنك تغيير هذا في أي وقت من شريط التنقل."
    },

    batchBanner: {
      tag: "جيبي كومبيناتور · الدفعة 01",
      title: "مسرّع سلسلة القهوة خالية الكربون",
      subtitle: "12 أسبوعًا. تمويل، تقنية الزراعة الهوائية، توثيق الكربون — ثم يوم العرض أمام شبكة مستثمرينا.",
      deadline: "آخر موعد للتقديم: 31 ديسمبر 2026",
      cta: "التقدم للدفعة 01",
      secondary: "تفاصيل البرنامج"
    },

    batch: {
      heroBadge: "جيبي كومبيناتور — الدفعة 01 · التقديم مفتوح",
      heroTitle: "نحوّل بناة القهوة إلى",
      heroTitleAccent: "قادة الفئة",
      heroSubtitle: "مسرّع على طريقة Y Combinator، مصمم خصيصًا لسلسلة توريد القهوة خالية الكربون. نختار مجموعة صغيرة من المؤسسين، ونستثمر فيهم بشروط موحدة، ونعمل معهم بكثافة لمدة 12 أسبوعًا، ثم نضعهم أمام المستثمرين في يوم العرض.",
      applyCta: "التقدم للدفعة 01",
      deadline: "آخر موعد للتقديم: 31 ديسمبر 2026 · الدفعة: فبراير–أبريل 2027",

      statsCohort: "فرق في كل دفعة",
      statsWeeks: "أسبوعًا من العمل المكثف",
      statsInvest: "استثمار لكل فريق",
      statsCarbon: "توثيق الكربون مشمول",

      dealTitle: "الشروط الموحدة",
      dealSubtitle: "شروط واحدة وشفافة لكل الفرق — دون تفاوض ودون استثناءات. هذا هو الهدف.",
      deal1Title: "50–150 ألف دولار عبر SAFE",
      deal1D: "استثمار موحد مقابل 5–7% من الأسهم، حسب المرحلة. نفس الشروط لكل فريق في الدفعة.",
      deal2Title: "ترخيص تقنية الزراعة الهوائية",
      deal2D: "الوصول إلى أنظمة NAPELL للزراعة الهوائية، ومنظومة إنترنت الأشياء الزراعية، وخبرات الإكثار.",
      deal3Title: "توثيق الكربون مشمول",
      deal3D: "توثيق مستقل (فيرا، جولد ستاندرد، SCS) للأثر الكربوني لمشروعك على حساب جيبي.",
      deal4Title: "الوصول إلى السوق",
      deal4D: "التوزيع عبر منظومة جيبي: المزارع، والمحمصات، والمقاهي، ومنصة SHINAE Coffee Bank.",

      timelineTitle: "12 أسبوعًا، ثم يوم العرض",
      timelineSubtitle: "عن بُعد في الأساس مع إقامة ميدانية. مصمم لضغط سنوات من التعلم في أسابيع.",
      w1: "الأسبوعان 1–2",
      w1D: "الاختيار والتأهيل — إتمام الاتفاق، تحديد مسارك في سلسلة القهوة، وضع خط أساس الكربون.",
      w2: "الأسابيع 3–6",
      w2D: "البناء — المنتج، عقود التوريد، تجارب الزراعة الهوائية، ومحادثات العملاء. اجتماعات أسبوعية.",
      w3: "الأسابيع 7–10",
      w3D: "الإقامة الميدانية — تدريب عملي على الزراعة الهوائية والتكامل مع سلسلة التوريد في قاعدة شريكة.",
      w4: "الأسابيع 11–12",
      w4D: "التحضير ليوم العرض — تدريب على العرض، والمقاييس، ومقدمات مع شبكة المستثمرين والشركاء.",
      demoTitle: "يوم العرض",
      demoD: "اعرض أمام نخبة من مستثمري المناخ ومشتري تجارة القهوة والشركاء الاستراتيجيين. كما تحصل فرق الدفعة على أسبقية العرض على منصة جيبي كابيتال للتمويل الجماعي.",

      tracksTitle: "ثلاث طرق للدخول",
      tracksSubtitle: "نختار فرقًا من كل مراحل سلسلة القهوة — الدفعة الواحدة تشكل سلسلة توريد متكاملة.",
      track1Title: "جانب التوريد",
      track1D: "الزراعة والمعالجة وعمليات المنشأ. احصل على تقنية الزراعة الهوائية والتوثيق وشركاء الشراء.",
      track2Title: "جانب الطلب",
      track2D: "التحميص والمقاهي والتجزئة. أمّن توريدًا منخفض الكربون موثقًا وبِع عبر شبكة جيبي.",
      track3Title: "التمويل والكربون",
      track3D: "التقنية المالية وقياس الكربون والبنية التحتية للسوق. اربط بمنصة SHINAE Coffee Bank و BeanFlow.",

      mentorsTitle: "موجهون من أهل العمل",
      mentorsSubtitle: "كل مرشد بنى وسلّم فعليًا في اقتصاد القهوة أو الكربون.",
      m1: "أنظمة الزراعة الهوائية والإكثار",
      m2: "منهجية الكربون والتوثيق",
      m3: "تجارة القهوة والشراء",
      m4: "النمو وجمع التمويل",

      faqTitle: "الأسئلة الشائعة",
      q1: "هل علينا التنازل عن أسهم؟",
      a1: "نعم — الشروط الموحدة هي 50–150 ألف دولار عبر SAFE مقابل 5–7% حسب المرحلة. الشروط نفسها لكل فريق تجعل العملية سريعة وعادلة.",
      q2: "هل علينا الانتقال؟",
      a2: "لا. البرنامج عن بُعد في الأساس، لكن الأسابيع 7–10 تتضمن إقامة ميدانية في قاعدة زراعية شريكة. تغطي الفرق السفر؛ وجيبي يغطي البرنامج.",
      q3: "هل التمويل الجماعي مشمول؟",
      a3: "تحصل شركات الدفعة على توثيق وأسبقية عرض على جيبي كابيتال بعد يوم العرض، لكن يوم العرض هو حدث التمويل الأساسي.",
      q4: "ما الذي تبحثون عنه؟",
      a4: "فرق صغيرة (1–4 أفراد) تبني في أي مكان في سلسلة توريد القهوة مع مسار موثوق لتقليل الكربون بشكل قابل للقياس. المرحلة أقل أهمية من السرعة.",
      applyFooterTitle: "التقديم للدفعة 01 مفتوح",
      applyFooterD: "آخر موعد للتقديم: 31 ديسمبر 2026. القرار خلال أسبوعين من التقديم.",
      applyFooterBtn: "ابدأ طلبك"
    },

    navCombinator: {
      label: "الكومبيناتور",
      program: "البرنامج",
      deal: "الشروط الموحدة",
      timeline: "الجدول الزمني",
      demoDay: "يوم العرض",
      faq: "الأسئلة الشائعة"
    },

    common: {
      loading: "جاري التحميل…",
      error: "حدث خطأ. يرجى المحاولة مرة أخرى.",
      retry: "إعادة المحاولة",
      cancel: "إلغاء",
      save: "حفظ",
      close: "إغلاق",
      back: "رجوع",
      next: "التالي",
      confirm: "تأكيد",
      yes: "نعم",
      no: "لا",
      learnMore: "اعرف المزيد",
      readMore: "اقرأ المزيد",
      viewAll: "عرض الكل",
      seeAll: "عرض الكل",
      apply: "تطبيق",
      reset: "إعادة تعيين",
      search: "بحث",
      filter: "تصفية",
      sort: "ترتيب",
      verified: "موثق",
      featured: "مميز",
      new: "جديد",
      hot: "رائج",
      urgent: "عاجل"
    },

    currency: { symbol: "$", position: "before" },
    dir: "rtl"
  }
};

/* ============================== ENGINE ============================== */

const LANG_KEY = 'jebi_lang';
const LANG_LIST = [
  { code: 'en', label: 'English',    native: 'English',    flag: 'EN' },
  { code: 'zh', label: '简体中文',    native: '简体中文',    flag: 'ZH' },
  { code: 'ar', label: 'العربية',     native: 'العربية',     flag: 'AR' }
];

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'en';
}

function setLang(code) {
  localStorage.setItem(LANG_KEY, code);
  applyI18n(code);
}

/** Resolve a dotted key path inside the active language dictionary. */
function t(key) {
  const lang = getLang();
  const dict = I18N[lang] || I18N.en;
  const parts = key.split('.');
  let val = dict;
  for (const p of parts) {
    if (val == null) break;
    val = val[p];
  }
  if (val == null && lang !== 'en') {
    // fallback to English
    val = I18N.en;
    for (const p of parts) {
      if (val == null) break;
      val = val[p];
    }
  }
  return val != null ? val : key;
}

/** Walk the DOM and replace every [data-i18n] element's text. */
function applyI18n(code) {
  const lang = code || getLang();
  const dir = (I18N[lang] || I18N.en).dir;
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
  document.body.classList.toggle('rtl', dir === 'rtl');

  // text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (typeof val === 'string') el.textContent = val;
  });

  // attributes: data-i18n-attr="placeholder:nav.search,title:cat.aeroponicD"
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const spec = el.getAttribute('data-i18n-attr');
    spec.split(',').forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      if (attr && key) {
        const val = t(key);
        if (typeof val === 'string') el.setAttribute(attr, val);
      }
    });
  });

  // HTML inner content that should be parsed as HTML
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = t(key);
    if (typeof val === 'string') el.innerHTML = val;
  });

  // dispatch event so page-specific scripts can re-render dynamic content
  window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));

  // update active language indicator
  document.querySelectorAll('.lang-current').forEach(el => {
    const entry = LANG_LIST.find(l => l.code === lang);
    if (entry) el.textContent = entry.flag;
  });
}

/** Format currency consistently across locales. */
function formatCurrency(amount) {
  const lang = getLang();
  const locale = lang === 'zh' ? 'zh-CN' : lang === 'ar' ? 'ar-SA' : 'en-US';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount);
}

/** Format large numbers (backers, tons, etc.) */
function formatNumber(num) {
  const lang = getLang();
  const locale = lang === 'zh' ? 'zh-CN' : lang === 'ar' ? 'ar-SA' : 'en-US';
  if (num >= 1_000_000) return new Intl.NumberFormat(locale, { notation: 'compact', maximumFractionDigits: 1 }).format(num);
  return new Intl.NumberFormat(locale).format(num);
}
