/**
 * JEBI CAPITAL — Sample project data
 * Zero-carbon coffee projects across the full supply chain.
 */

const PROJECTS = [
  {
    id: 'aero-yunnan',
    title: { en: "Aeroponic Coffee Farm — Yunnan Highlands", zh: "气培咖啡农场——云南高原", ar: "مزرعة قهوة هوائية — مرتفعات يونان" },
    desc: { en: "World's largest aeroponic coffee cultivation system, using 95% less water than traditional farming while eliminating soil degradation.", zh: "全球最大的气培咖啡种植系统，用水量比传统种植减少95%，同时消除土壤退化。", ar: "أكبر نظام زراعة قهوة هوائية في العالم، يستخدم مياه أقل بنسبة 95% من الزراعة التقليدية مع القضاء على تدهور التربة." },
    category: 'aeroponic',
    location: { en: "Yunnan, China", zh: "中国云南", ar: "يونان، الصين" },
    creator: "GreenPeak Agritech",
    goal: 120000,
    pledged: 87400,
    backers: 412,
    daysLeft: 18,
    carbonOffset: 450,
    verified: true,
    verifier: "Verra",
    stage: 'growth',
    gradient: 'linear-gradient(135deg, #00ba7c, #00897b)',
    rewards: [
      { amount: 25, name: { en: "Supporter", zh: "支持者", ar: "داعم" }, desc: { en: "Digital thank-you + impact report", zh: "电子感谢信 + 影响力报告", ar: "شكر رقمي + تقرير الأثر" }, delivery: "2026-10", limit: null },
      { amount: 75, name: { en: "First Harvest", zh: "首批收成", ar: "الحصاد الأول" }, desc: { en: "500g aeroponic coffee beans + farm visit voucher", zh: "500克气培咖啡豆 + 农场参观券", ar: "500غ حبوب قهوة هوائية + قسيمة زيارة المزرعة" }, delivery: "2026-12", limit: 200 },
      { amount: 250, name: { en: "Founding Backer", zh: "创始支持者", ar: "داعم مؤسس" }, desc: { en: "2kg premium beans + named on farm wall + quarterly tasting box", zh: "2公斤优质豆 + 农场墙壁留名 + 季度品鉴盒", ar: "2كغ حبوب متميزة + اسمك على جدار المزرعة + صندوق تذوق ربع سنوي" }, delivery: "2026-12", limit: 50 }
    ],
    story: {
      en: `<p>Our aeroponic coffee farm in the Yunnan highlands represents a paradigm shift in coffee cultivation. By eliminating soil and growing coffee plants in air-fed mist chambers, we reduce water usage by 95% while increasing yield per square meter by 3x.</p><h3>The Problem</h3><p>Traditional coffee farming consumes 18,900 liters of water per kilogram of coffee. Soil degradation from monoculture farming destroys ecosystems. Climate change is shrinking arable land for coffee by 2% annually.</p><h3>Our Solution</h3><p>Aeroponic cultivation uses nutrient-rich mist delivered directly to roots in a controlled environment. No soil, no pesticides, 95% less water, and a 70% reduction in carbon emissions compared to conventional farming.</p><h3>Carbon Impact</h3><p>Our system is projected to offset 450 tons of CO₂ annually through eliminated fertilizer production, reduced water pumping, and bioenergy from coffee pulp waste.</p>`,
      zh: `<p>我们在云南高原的气培咖啡农场代表了咖啡种植的范式转变。通过消除土壤，在气雾培养室中种植咖啡植物，我们将用水量减少了95%，同时将每平方米产量提高了3倍。</p><h3>问题</h3><p>传统咖啡种植每公斤咖啡消耗18,900升水。单一作物种植导致的土壤退化破坏了生态系统。气候变化每年使咖啡可种植面积缩减2%。</p><h3>我们的方案</h3><p>气培种植使用富含营养的雾气直接输送到受控环境中的根部。无土壤、无农药、用水量减少95%，碳排放比传统种植减少70%。</p><h3>碳影响</h3><p>我们的系统预计每年可通过消除肥料生产、减少水泵能耗和咖啡果肉废料生物能源抵消450吨CO₂。</p>`,
      ar: `<p>تمثل مزرعة القهوة الهوائية لدينا في مرتفعات يونان تحولاً نموذجياً في زراعة القهوة. من خلال إزالة التربة وزراعة نباتات القهوة في غرف ضبابية تتغذى بالهواء، نقلل استهلاك المياه بنسبة 95% بينما نزيد الإنتاج لكل متر مربع بمقدار 3 أضعاف.</p><h3>المشكلة</h3><p>تستهلك زراعة القهوة التقليدية 18,900 لتر من المياه لكل كيلوغرام من القهوة. تدمير تدهور التربة من الزراعة الأحادية النظام البيئي. يقلل التغير المناخي الأراضي الصالحة لزراعة القهوة بنسبة 2% سنوياً.</p><h3>حلنا</h3><p>الزراعة الهوائية تستخدم ضباب غني بالمغذيات يُسلّم مباشرة إلى الجذور في بيئة محكومة. لا تربة، لا مبيدات، مياه أقل بنسبة 95%، وخفض الانبعاثات الكربونية بنسبة 70% مقارنة بالزراعة التقليدية.</p><h3>أثر الكربون</h3><p>من المتوقع أن يعوض نظامنا 450 طن من CO₂ سنوياً من خلال إلغاء إنتاج الأسمدة وتقليل ضخ المياه والطاقة الحيوية من نفايات لب القهوة.</p>`
    },
    updates: [
      { date: "2026-08-01", title: { en: "Chamber 3 installation complete", zh: "3号培养室安装完成", ar: "اكتمال تركيب الغرفة 3" } },
      { date: "2026-07-15", title: { en: "First seedlings showing 40% faster growth", zh: "首批幼苗生长速度提高40%", ar: "الشتلات الأولى تظهر نمواً أسرع بنسبة 40%" } }
    ],
    equity: null
  },
  {
    id: 'solar-roastery',
    title: { en: "Solar-Powered Coffee Roastery — Ethiopia", zh: "太阳能咖啡烘焙厂——埃塞俄比亚", ar: "محمصة قهوة تعمل بالطاقة الشمسية — إثيوبيا" },
    desc: { en: "100% solar-electric roastery replacing diesel roasters, cutting roasting emissions to zero while supporting 200 local farmers.", zh: "100%太阳能电烘焙厂取代柴油烘焙机，将烘焙排放降至零，同时支持200名当地农民。", ar: "محمصة كهربائية بالطاقة الشمسية بنسبة 100% تحل محل محامس الديزل، وتقصل انبعاثات التحميص إلى الصفر بينما تدعم 200 مزارع محلي." },
    category: 'roasting',
    location: { en: "Addis Ababa, Ethiopia", zh: "亚的斯亚贝巴，埃塞俄比亚", ar: "أديس أبابا، إثيوبيا" },
    creator: "SunRoast Collective",
    goal: 85000,
    pledged: 92100,
    backers: 687,
    daysLeft: 5,
    carbonOffset: 320,
    verified: true,
    verifier: "Gold Standard",
    stage: 'scaling',
    gradient: 'linear-gradient(135deg, #ff7a00, #f44336)',
    rewards: [
      { amount: 30, name: { en: "Taster", zh: "品鉴者", ar: "متذوق" }, desc: { en: "250g solar-roasted Yirgacheffe", zh: "250克太阳能烘焙耶加雪菲", ar: "250غ يرجاتشيفي محمصة بالطاقة الشمسية" }, delivery: "2026-11", limit: null },
      { amount: 100, name: { en: "Roaster's Choice", zh: "烘焙师之选", ar: "اختيار المحمص" }, desc: { en: "Monthly 1kg subscription for 6 months", zh: "6个月每月1公斤订阅", ar: "اشتراك شهري 1كغ لمدة 6 أشهر" }, delivery: "2026-11", limit: 100 }
    ],
    story: {
      en: `<p>Coffee roasting is one of the most carbon-intensive steps in the supply chain. Traditional drum roasters run on diesel or gas, producing 2.3 kg of CO₂ per kg of coffee roasted. Our solar-electric roastery changes that.</p><h3>Zero-Emission Roasting</h3><p>Using concentrated solar thermal technology combined with electric drum roasters powered by a 200kW solar array, we achieve zero-emission roasting during daylight hours and battery-backed operation at night.</p><h3>Community Impact</h3><p>We partner directly with 200 smallholder farmers in the Yirgacheffe region, paying 40% above Fair Trade prices and providing free solar-drying infrastructure.</p>`,
      zh: `<p>咖啡烘焙是供应链中碳密集度最高的环节之一。传统滚筒烘焙机使用柴油或天然气，每公斤咖啡产生2.3公斤CO₂。我们的太阳能电烘焙厂改变了这一点。</p><h3>零排放烘焙</h3><p>使用聚光太阳能热技术结合由200kW太阳能阵列供电的电滚筒烘焙机，我们在白天实现零排放烘焙，夜间通过电池储能运行。</p><h3>社区影响</h3><p>我们与耶加雪菲地区的200名小农户直接合作，支付价格比公平贸易高出40%，并提供免费太阳能晾晒设施。</p>`,
      ar: `<p>تحميص القهوة هو واحد من أكثر خطوات سلسلة التوريد كثافة للكربون. المحامس الأسطوانية التقليدية تعمل بالديزل أو الغاز، وتنتج 2.3 كغ من CO₂ لكل كغ قهوة محمصة. محمستنا الكهربائية بالطاقة الشمسية تغير ذلك.</p><h3>تحميص صفر الانبعاثات</h3><p>باستخدام تقنية الطاقة الشمسية الحرارية المركزة مع محامس أسطوانية كهربائية مدعومة بمصفوفة شمسية 200 كيلوواط، نحقق تحميصاً صفر الانبعاثات خلال ساعات النهار وتشغيلاً مدعوماً بالبطارية ليلاً.</p><h3>أثر المجتمع</h3><p>نتعاون مباشرة مع 200 مزارع صغير في منطقة يرجاتشيفي، وندفع أسعاراً أعلى بنسبة 40% من التجارة العادلة ونوفر بنية تحتية مجانية للتجفيف الشمسي.</p>`
    },
    updates: [
      { date: "2026-08-10", title: { en: "Solar array installation 80% complete", zh: "太阳能阵列安装完成80%", ar: "تركيب المصفوفة الشمسية 80% مكتمل" } }
    ],
    equity: { offered: 8, minInvestment: 500 }
  },
  {
    id: 'ev-logistics',
    title: { en: "EV Coffee Logistics Network — Colombia", zh: "电动车队咖啡物流网络——哥伦比亚", ar: "شبكة لوجستيات القهوة الكهربائية — كولومبيا" },
    desc: { en: "Electric vehicle fleet for last-mile coffee delivery, eliminating 600 tons CO₂/yr across Bogotá and Medellín.", zh: "用于末端咖啡配送的电动车队，每年在波哥大和麦德林消除600吨CO₂。", ar: "أسطول مركبات كهربائية لتوصيل القهوة في الميل الأخير، يزيل 600 طن CO₂/سنة عبر بوغوتا وميديلين." },
    category: 'distribution',
    location: { en: "Bogotá, Colombia", zh: "波哥大，哥伦比亚", ar: "بوغوتا، كولومبيا" },
    creator: "VerdeLogix",
    goal: 200000,
    pledged: 134500,
    backers: 289,
    daysLeft: 32,
    carbonOffset: 600,
    verified: true,
    verifier: "SCS Global",
    stage: 'seed',
    gradient: 'linear-gradient(135deg, #9c27b0, #6a1b9a)',
    rewards: [
      { amount: 50, name: { en: "Carbon Backer", zh: "碳支持者", ar: "داعم الكربون" }, desc: { en: "10 carbon credits + tracking dashboard", zh: "10个碳信用 + 追踪仪表板", ar: "10 ائتمانات كربون + لوحة تتبع" }, delivery: "2027-01", limit: 500 },
      { amount: 500, name: { en: "Fleet Sponsor", zh: "车队赞助者", ar: "راعي الأسطول" }, desc: { en: "Named EV vehicle + 100 carbon credits + annual impact tour", zh: "命名一辆电动车 + 100个碳信用 + 年度影响之旅", ar: "مركبة كهربائية باسمك + 100 ائتمان كربون + جولة أثر سنوية" }, delivery: "2027-01", limit: 20 }
    ],
    story: {
      en: `<p>Last-mile coffee delivery in Colombia relies on diesel trucks that produce enormous emissions navigating mountainous terrain. Our EV logistics network replaces this with a fleet of 30 electric vehicles optimized for coffee transport.</p><h3>The Fleet</h3><p>30 custom electric cargo vehicles with cold-chain capability, charged via solar-powered depots in Bogotá and Medellín. Each vehicle eliminates 20 tons of CO₂ annually.</p><h3>Carbon Credits</h3><p>Every kilometer driven generates verified carbon credits under the SCS Global methodology, tradable on the JEBI Capital marketplace.</p>`,
      zh: `<p>哥伦比亚的末端咖啡配送依赖在山区地形中行驶的柴油卡车，产生大量排放。我们的电动车队网络用30辆专为咖啡运输优化的电动车取代了这些卡车。</p><h3>车队</h3><p>30辆配备冷链能力的定制电动货运车，通过波哥大和麦德林的太阳能充电站充电。每辆车每年消除20吨CO₂。</p><h3>碳信用</h3><p>每行驶一公里都会根据SCS Global方法学生成可核证碳信用，可在JEBI Capital市场上交易。</p>`,
      ar: `<p>يعتمد توصيل القهوة في الميل الأخير في كولومبيا على شاحنات الديزل التي تنتج انبعاثات هائلة أثناء التنقل في التضاريس الجبلية. شبكة اللوجستيات الكهربائية لدينا تستبدل ذلك بأسطول من 30 مركبة كهربائية محسنة لنقل القهوة.</p><h3>الأسطول</h3><p>30 مركبة شحن كهربائية مخصصة بقدرة سلسلة التبريد، مشحونة عبر مستودعات تعمل بالطاقة الشمسية في بوغوتا وميديلين. كل مركبة تزيل 20 طن من CO₂ سنوياً.</p><h3>ائتمانات الكربون</h3><p>كل كيلومتر يتم قيادته يولد ائتمانات كربون موثقة وفق منهجية SCS Global، قابلة للتداول في سوق JEBI Capital.</p>`
    },
    updates: [],
    equity: { offered: 12, minInvestment: 1000 }
  },
  {
    id: 'zero-waste-cafe',
    title: { en: "Zero-Waste Café Chain — Saudi Arabia", zh: "零废弃咖啡馆连锁——沙特阿拉伯", ar: "سلسلة مقاهي صفرية النفايات — السعودية" },
    desc: { en: "First zero-waste coffee shop chain in Riyadh using solar power, compostable packaging, and reusable cup ecosystem.", zh: "利雅得首家零废弃咖啡连锁店，使用太阳能、可降解包装和循环杯生态系统。", ar: "أول سلسلة مقاهي صفرية النفايات في الرياض تستخدم الطاقة الشمسية والتغليف القابل للتحلل ونظام الأكواب القابلة لإعادة الاستخدام." },
    category: 'cafe',
    location: { en: "Riyadh, Saudi Arabia", zh: "利雅得，沙特阿拉伯", ar: "الرياض، السعودية" },
    creator: "Qahwa Sustain",
    goal: 65000,
    pledged: 41200,
    backers: 356,
    daysLeft: 24,
    carbonOffset: 85,
    verified: false,
    verifier: "Verra",
    stage: 'seed',
    gradient: 'linear-gradient(135deg, #795548, #5d4037)',
    rewards: [
      { amount: 15, name: { en: "Coffee Lover", zh: "咖啡爱好者", ar: "عاشق القهوة" }, desc: { en: "Reusable cup + first month free coffee", zh: "循环杯 + 首月免费咖啡", ar: "كوب قابل لإعادة الاستخدام + قهوة مجانية الشهر الأول" }, delivery: "2026-11", limit: null },
      { amount: 120, name: { en: "Founding Member", zh: "创始会员", ar: "عضو مؤسس" }, desc: { en: "1 year free coffee + name on wall + VIP events", zh: "一年免费咖啡 + 墙壁留名 + VIP活动", ar: "قهوة مجانية لسنة + اسمك على الجدار + فعاليات كبار الشخصيات" }, delivery: "2026-11", limit: 100 }
    ],
    story: {
      en: `<p>Saudi Arabia's coffee culture is booming, but with it comes waste — disposable cups, plastic lids, and energy-intensive AC. Our zero-waste café chain in Riyadh reimagines the coffee shop experience.</p><h3>Zero Waste System</h3><p>Every cup is reusable. Customers pay a deposit, return the cup at any location, and get it back. Compostable packaging for takeout. Solar panels power 100% of shop operations.</p><h3>Vision</h3><p>10 locations across Riyadh by 2027, each saving 12 tons of CO₂ annually through eliminated waste, solar energy, and local sourcing.</p>`,
      zh: `<p>沙特的咖啡文化蓬勃发展，但随之而来的是废弃物——一次性杯子、塑料盖和耗能空调。我们在利雅得的零废弃咖啡馆连锁重新构想了咖啡店体验。</p><h3>零废弃系统</h3><p>每个杯子都可循环使用。顾客支付押金，在任何门店归还杯子即可退回押金。外带使用可降解包装。太阳能板满足门店100%用电。</p><h3>愿景</h3><p>到2027年在利雅得开设10家门店，每家每年通过消除废弃、太阳能和本地采购节省12吨CO₂。</p>`,
      ar: `<p>ثقافة القهوة في السعودية تزدهر، لكن معها تأتي النفايات — أكواب يمكن التخلص منها، أغطية بلاستيكية، وتكييف يستهلك طاقة كبيرة. سلسلة المقاهي صفرية النفايات لدينا في الرياض تعيد تصور تجربة المقهى.</p><h3>نظام النفايات الصفري</h3><p>كل كوب قابل لإعادة الاستخدام. يدفع العملاء وديعة، ويعيدون الكوب في أي موقع، ويستردونها. تغليف قابل للتحلل للأخذ خارجاً. الألواح الشمسية تشغل 100% من عمليات المتجر.</p><h3>الرؤية</h3><p>10 مواقع في جميع أنحاء الرياض بحلول 2027، كل منها يوفر 12 طن من CO₂ سنوياً من خلال القضاء على النفايات والطاقة الشمسية والمصادر المحلية.</p>`
    },
    updates: [],
    equity: null
  },
  {
    id: 'carbon-credits-amazon',
    title: { en: "Amazon Coffee Reforestation — Brazil", zh: "亚马逊咖啡再造林——巴西", ar: "إعادة تشجير القهوة في الأمازون — البرازيل" },
    desc: { en: "Agroforestry coffee project restoring 500 hectares of degraded Amazon land, generating 2,000 tons CO₂ credits annually.", zh: "农林复合咖啡项目恢复500公顷退化的亚马逊土地，每年产生2,000吨CO₂碳信用。", ar: "مشروع قهوة حرجي زراعي يعيد 500 هكتار من أراضي الأمازون المتدهورة، يولد 2,000 طن CO₂ من الائتمانات سنوياً." },
    category: 'carbon',
    location: { en: "Pará, Brazil", zh: "帕拉州，巴西", ar: "بارا، البرازيل" },
    creator: "Floresta Viva",
    goal: 300000,
    pledged: 218750,
    backers: 543,
    daysLeft: 12,
    carbonOffset: 2000,
    verified: true,
    verifier: "Verra",
    stage: 'scaling',
    gradient: 'linear-gradient(135deg, #00ba7c, #2e7d32)',
    rewards: [
      { amount: 20, name: { en: "Forest Friend", zh: "森林之友", ar: "صديق الغابة" }, desc: { en: "5 verified carbon credits + satellite tracking", zh: "5个已核证碳信用 + 卫星追踪", ar: "5 ائتمانات كربون موثقة + تتبع بالأقمار الصناعية" }, delivery: "2027-02", limit: null },
      { amount: 200, name: { en: "Carbon Investor", zh: "碳投资者", ar: "مستثمر الكربون" }, desc: { en: "50 carbon credits + annual site visit + impact certificate", zh: "50个碳信用 + 年度实地考察 + 影响力证书", ar: "50 ائتمان كربون + زيارة موقع سنوية + شهادة أثر" }, delivery: "2027-02", limit: 50 }
    ],
    story: {
      en: `<p>We're restoring 500 hectares of illegally deforested Amazon land with shade-grown coffee agroforestry. Coffee plants grow under native tree canopy, restoring biodiversity while producing premium beans.</p><h3>Carbon Sequestration</h3><p>Each hectare of restored agroforestry sequesters 4 tons of CO₂ annually. Over 20 years, this project will remove 40,000 tons of CO₂ from the atmosphere.</p><h3>Community</h3><p>We employ 80 local families at above-living wages, providing healthcare and education access. Coffee sales provide sustainable income beyond carbon credits.</p>`,
      zh: `<p>我们正在用遮荫种植的咖啡农林复合系统恢复500公顷非法砍伐的亚马逊土地。咖啡植物在原生树冠下生长，恢复生物多样性的同时生产优质咖啡豆。</p><h3>碳封存</h3><p>每公顷恢复的农林复合系统每年封存4吨CO₂。在20年内，该项目将从大气中移除40,000吨CO₂。</p><h3>社区</h3><p>我们以高于生活工资的标准雇佣80个当地家庭，提供医疗和教育保障。咖啡销售提供超越碳信用的可持续收入。</p>`,
      ar: `<p>نحن نعيد 500 هكتار من أراضي الأمازون المقطوعة بشكل غير قانوني بزراعة القهوة الحراجية الزراعية. تنمو نباتات القهوة تحت مظلة الأشجار الأصلية، مما يعيد التنوع البيولوجي بينما تنتج حبوب متميزة.</p><h3>عزل الكربون</h3><p>كل هكتار من الحراج الزراعي المسترد يعزل 4 أطنان من CO₂ سنوياً. على مدى 20 عاماً، سيزيل هذا المشروع 40,000 طن من CO₂ من الغلاف الجوي.</p><h3>المجتمع</h3><p>نوظف 80 عائلة محلية بأجور تتجاوز مستوى المعيشة، ونوفر الرعاية الصحية والوصول إلى التعليم. توفر مبيعات القهوة دخلاً مستداماً يتجاوز ائتمانات الكربون.</p>`
    },
    updates: [
      { date: "2026-08-05", title: { en: "150 hectares planted — 60% milestone", zh: "150公顷已种植——60%里程碑", ar: "150 هكتار مزروعة — معلم 60%" } }
    ],
    equity: null
  },
  {
    id: 'blockchain-traceability',
    title: { en: "Blockchain Coffee Traceability Platform", zh: "区块链咖啡溯源平台", ar: "منصة تتبع القهوة بالبلوكتشين" },
    desc: { en: "End-to-end blockchain tracking from farm to cup, verifying carbon claims and ensuring fair payments to producers.", zh: "从农场到杯子的端到端区块链追踪，验证碳声明并确保向生产者公平付款。", ar: "تتبع بالبلوكتشين من المزرعة إلى الفنجان، للتحقق من ادعاءات الكربون وضمان المدفوعات العادلة للمنتجين." },
    category: 'technology',
    location: { en: "Singapore / Global", zh: "新加坡 / 全球", ar: "سنغافورة / عالمي" },
    creator: "ChainBean Labs",
    goal: 150000,
    pledged: 67500,
    backers: 198,
    daysLeft: 41,
    carbonOffset: 0,
    verified: true,
    verifier: "Gold Standard",
    stage: 'growth',
    gradient: 'linear-gradient(135deg, #9c27b0, #1d9bf0)',
    rewards: [
      { amount: 40, name: { en: "Early Access", zh: "抢先体验", ar: "وصول مبكر" }, desc: { en: "Beta platform access + 1 year premium", zh: "Beta平台访问 + 1年高级会员", ar: "وصول منصة تجريبية + سنة واحدة مميزة" }, delivery: "2027-01", limit: 300 },
      { amount: 300, name: { en: "Enterprise Node", zh: "企业节点", ar: "عقد المؤسسة" }, desc: { en: "Enterprise license + API access + co-branding", zh: "企业授权 + API访问 + 联合品牌", ar: "ترخيص مؤسسي + وصول API + علامة تجارية مشتركة" }, delivery: "2027-01", limit: 30 }
    ],
    story: {
      en: `<p>Greenwashing is the biggest threat to the zero-carbon coffee movement. Our blockchain platform makes carbon claims verifiable, immutable, and transparent — from the moment coffee cherries are picked to the final cup served.</p><h3>How It Works</h3><p>IoT sensors at every supply chain node log data to a public blockchain. Carbon reductions are tokenized and traceable. Consumers scan a QR code to see the full carbon journey of their coffee.</p><h3>Producer Benefits</h3><p>Smart contracts ensure instant, fair payments to farmers the moment their coffee is verified — no more 90-day waits or opaque pricing.</p>`,
      zh: `<p>漂绿是零碳咖啡运动面临的最大威胁。我们的区块链平台使碳声明可验证、不可篡改且透明——从咖啡果采摘到最终端上的一杯咖啡。</p><h3>运作方式</h3><p>供应链每个节点的物联网传感器将数据记录到公共区块链上。碳减排被代币化并可追踪。消费者扫描二维码即可查看咖啡的完整碳旅程。</p><h3>生产者获益</h3><p>智能合约确保在咖啡通过核证时立即向农民公平付款——不再有90天等待或不透明定价。</p>`,
      ar: `<p>الغسل الأخضر هو أكبر تهديد لحركة القهوة منخفضة الكربون. منصة البلوكتشين لدينا تجعل ادعاءات الكربون قابلة للتحقق وغير قابلة للتغيير وشفافة — من لحظة قطف حبوب القهوة إلى الفنجان النهائي.</p><h3>كيف يعمل</h3><p>مستشعرات إنترنت الأشياء في كل عقدة من سلسلة التوريد تسجل البيانات على بلوكتشين عام. خفض الكربون يتم رقمنته وتتبعه. يفحص المستهلكون رمز QR لرؤية الرحلة الكربونية الكاملة لقهوتهم.</p><h3>فوائد المنتجين</h3><p>العقود الذكية تضمن مدفوعات فورية وعادلة للمزارعين بمجرد التحقق من قهوتهم — لا مزيد من الانتظار 90 يوماً أو التسعير غير الشفاف.</p>`
    },
    updates: [],
    equity: { offered: 10, minInvestment: 500 }
  },
  {
    id: 'biogas-mill',
    title: { en: "Biogas-Powered Coffee Mill — Kenya", zh: "沼气咖啡加工厂——肯尼亚", ar: "معمل قهوة يعمل بالغاز الحيوي — كينيا" },
    desc: { en: "Converting coffee pulp waste into biogas to power wet milling, eliminating diesel and creating circular economy.", zh: "将咖啡果肉废料转化为沼气为湿法加工提供动力，消除柴油使用并创造循环经济。", ar: "تحويل نفايات لب القهوة إلى غاز حيوي لتشغيل الطحن الرطب، والقضاء على الديزل وخلق اقتصاد دائري." },
    category: 'processing',
    location: { en: "Nyeri, Kenya", zh: "尼耶利，肯尼亚", ar: "نييري، كينيا" },
    creator: "EcoMill Kenya",
    goal: 95000,
    pledged: 58300,
    backers: 234,
    daysLeft: 28,
    carbonOffset: 180,
    verified: true,
    verifier: "Gold Standard",
    stage: 'growth',
    gradient: 'linear-gradient(135deg, #1d9bf0, #0d47a1)',
    rewards: [
      { amount: 35, name: { en: "Mill Supporter", zh: "工厂支持者", ar: "داعم المعمل" }, desc: { en: "1kg Kenyan AA + biogas impact report", zh: "1公斤肯尼亚AA + 沼气影响报告", ar: "1كغ كيني AA + تقرير أثر الغاز الحيوي" }, delivery: "2026-12", limit: null },
      { amount: 150, name: { en: "Circular Economy Champion", zh: "循环经济冠军", ar: "بطل الاقتصاد الدائري" }, desc: { en: "5kg premium beans + mill tour + 10 carbon credits", zh: "5公斤优质豆 + 工厂参观 + 10个碳信用", ar: "5كغ حبوب متميزة + جولة المعمل + 10 ائتمانات كربون" }, delivery: "2026-12", limit: 80 }
    ],
    story: {
      en: `<p>Coffee wet milling produces enormous amounts of pulp waste that traditionally pollutes waterways. Our biogas digester converts this waste into clean energy, powering the mill itself and creating organic fertilizer as a byproduct.</p><h3>Circular System</h3><p>Coffee pulp → biogas → mill power → organic fertilizer → back to coffee farms. Zero waste, zero diesel, zero water pollution.</p><h3>Impact</h3><p>180 tons CO₂/yr eliminated. 500 farmers gain free organic fertilizer. Water pollution from pulp discharge reduced to zero.</p>`,
      zh: `<p>咖啡湿法加工产生大量果肉废料，传统上会污染水道。我们的沼气消化器将这些废料转化为清洁能源，为工厂本身提供动力，并产生有机肥料作为副产品。</p><h3>循环系统</h3><p>咖啡果肉 → 沼气 → 工厂电力 → 有机肥料 → 回到咖啡农场。零废弃、零柴油、零水污染。</p><h3>影响</h3><p>每年消除180吨CO₂。500名农民获得免费有机肥料。果肉排放造成的水污染降至零。</p>`,
      ar: `<p>طحن القهوة الرطب ينتج كميات هائلة من نفايات اللب التي تلوث المجاري المائية تقليدياً. مهضم الغاز الحيوي لدينا يحول هذه النفايات إلى طاقة نظيفة، تشغل المعمل نفسه وتنتج سماداً عضوياً كمنتج ثانوي.</p><h3>النظام الدائري</h3><p>لب القهوة → غاز حيوي → طاقة المعمل → سماد عضوي → العودة إلى مزارع القهوة. صفر نفايات، صفر ديزل، صفر تلوث مياه.</p><h3>الأثر</h3><p>180 طن CO₂/سنة مزال. 500 مزارع يحصلون على سماد عضوي مجاني. تلوث المياه من تصريف اللب انخفض إلى الصفر.</p>`
    },
    updates: [],
    equity: null
  },
  {
    id: 'green-bond-roastery',
    title: { en: "Green Bond: Carbon-Negative Roasting Infrastructure", zh: "绿色债券：碳负烘焙基础设施", ar: "سند أخضر: البنية التحتية للتحميص السلبي الكربون" },
    desc: { en: "Green bond financing 10 solar+biogas roasteries across Southeast Asia. 5.8% APR, 5-year maturity, carbon-covenant backed.", zh: "绿色债券为东南亚10家太阳能+沼气烘焙厂融资。5.8%年化，5年期，碳契约担保。", ar: "سند أخضر لتمويل 10 محامص تعمل بالطاقة الشمسية والغاز الحيوي في جنوب شرق آسيا. 5.8% سنوياً، استحقاق 5 سنوات، مدعوم بعهود الكربون." },
    category: 'financial',
    location: { en: "Southeast Asia", zh: "东南亚", ar: "جنوب شرق آسيا" },
    creator: "JEBI Capital",
    goal: 500000,
    pledged: 312000,
    backers: 87,
    daysLeft: 60,
    carbonOffset: 1500,
    verified: true,
    verifier: "Verra",
    stage: 'scaling',
    gradient: 'linear-gradient(135deg, #1d9bf0, #00ba7c)',
    rewards: [
      { amount: 10000, name: { en: "Bond Holder — Tier 1", zh: "债券持有人——一级", ar: "حامل السند — المستوى 1" }, desc: { en: "$10,000 bond, 5.8% APR, 5-yr maturity, quarterly coupons", zh: "$10,000债券，5.8%年化，5年期，季度付息", ar: "سند 10,000$، 5.8% سنوياً، استحقاق 5 سنوات، قسائم ربع سنوية" }, delivery: "2026-12", limit: 50 },
      { amount: 50000, name: { en: "Bond Holder — Institutional", zh: "债券持有人——机构", ar: "حامل السند — مؤسسي" }, desc: { en: "$50,000+ bond, 6.2% APR, priority exit, annual site audit", zh: "$50,000+债券，6.2%年化，优先退出，年度现场审计", ar: "سند 50,000$+، 6.2% سنوياً، خروج ذو أولوية، تدقيق موقع سنوي" }, delivery: "2026-12", limit: 10 }
    ],
    story: {
      en: `<p>This green bond funds the construction of 10 carbon-negative coffee roasteries across Vietnam, Indonesia, and Thailand. Each roastery uses solar + biogas hybrid energy, achieving net-negative carbon operations.</p><h3>Bond Terms</h3><p>5-year maturity, quarterly coupon payments at 5.8% APR for retail (Tier 1) and 6.2% for institutional ($50k+). Principal repaid at maturity. Carbon covenants require annual third-party verification of carbon savings.</p><h3>Use of Proceeds</h3><p>60% roastery construction, 25% solar infrastructure, 10% biogas systems, 5% monitoring & verification.</p>`,
      zh: `<p>此绿色债券为越南、印度尼西亚和泰国的10家碳负咖啡烘焙厂建设提供资金。每家烘焙厂使用太阳能+沼气混合能源，实现净负碳排放运营。</p><h3>债券条款</h3><p>5年期，季度付息。散户（一级）年化5.8%，机构（$50k+）年化6.2%。到期还本。碳契约要求年度第三方核证碳减排量。</p><h3>资金用途</h3><p>60%烘焙厂建设，25%太阳能基础设施，10%沼气系统，5%监控与核证。</p>`,
      ar: `<p>هذا السند الأخضر يمول بناء 10 محامص قهوة سلبية الكربون في فيتنام وإندونيسيا وتايلاند. كل محمصة تستخدم طاقة هجينة شمسية + غاز حيوي، وتحقق عمليات صافية سلبية الكربون.</p><h3>شروط السند</h3><p>استحقاق 5 سنوات، مدفوعات قسيمة ربع سنوية بمعدل 5.8% سنوياً للتجزئة (المستوى 1) و6.2% للمؤسسات (50,000$+). يسدد الأصل عند الاستحقاق. تتطلب عهود الكربون التحقق السنوي من أطراف ثالثة لتوفير الكربون.</p><h3>استخدام العائدات</h3><p>60% بناء المحمصة، 25% البنية التحتية الشمسية، 10% أنظمة الغاز الحيوي، 5% المراقبة والتحقق.</p>`
    },
    updates: [],
    equity: null
  },
  {
    id: 'compostable-packaging',
    title: { en: "Compostable Coffee Packaging — Netherlands", zh: "可降解咖啡包装——荷兰", ar: "تغليف قهوة قابل للتحلل — هولندا" },
    desc: { en: "Home-compostable coffee bags made from coffee husk biopolymer, replacing aluminum-foil packaging industry-wide.", zh: "用咖啡果皮生物聚合物制成的家庭可堆肥咖啡袋，替代全行业的铝箔包装。", ar: "أكياس قهوة قابلة للتسميد المنزلي مصنوعة من بوليمر حيوي من قشور القهوة، تحل محل تغليف رقائق الألمنيوم في جميع أنحاء الصناعة." },
    category: 'roasting',
    location: { en: "Amsterdam, Netherlands", zh: "阿姆斯特丹，荷兰", ar: "أمستردام، هولندا" },
    creator: "HuskPack",
    goal: 70000,
    pledged: 78900,
    backers: 512,
    daysLeft: 3,
    carbonOffset: 120,
    verified: true,
    verifier: "SCS Global",
    stage: 'scaling',
    gradient: 'linear-gradient(135deg, #ff7a00, #ffc107)',
    rewards: [
      { amount: 20, name: { en: "Pack Tester", zh: "包装测试者", ar: "مختبر التغليف" }, desc: { en: "Sample pack of 10 compostable bags", zh: "10个可降解袋样品包", ar: "حزمة عينة من 10 أكياس قابلة للتحلل" }, delivery: "2026-10", limit: null },
      { amount: 80, name: { en: "Roastery Partner", zh: "烘焙合作伙伴", ar: "شريك المحمصة" }, desc: { en: "500 custom-branded bags + B2B pricing", zh: "500个定制品牌袋 + B2B价格", ar: "500 كيس مخصص بالعلامة التجارية + تسعير B2B" }, delivery: "2026-11", limit: 150 }
    ],
    story: {
      en: `<p>Coffee packaging is a hidden carbon culprit — aluminum-foil bags take 200 years to decompose. Our bags are made from coffee husk waste and decompose in your garden in 12 weeks.</p><h3>The Material</h3><p>We extract cellulose from coffee husks (a milling byproduct) and blend it with PLA from cassava starch. The result: a 100% home-compostable bag with the same barrier properties as aluminum foil.</p><h3>Scale</h3><p>Our Amsterdam facility can produce 2 million bags/year. This funding expands to 10 million, making compostable packaging cheaper than aluminum for the first time.</p>`,
      zh: `<p>咖啡包装是隐形的碳排放源——铝箔袋需要200年才能分解。我们的袋子由咖啡果皮废料制成，在你的花园里12周即可分解。</p><h3>材料</h3><p>我们从咖啡果皮（碾磨副产品）中提取纤维素，与木薯淀粉中的PLA混合。结果：100%家庭可堆肥袋子，具有与铝箔相同的阻隔性能。</p><h3>规模</h3><p>我们的阿姆斯特丹工厂年产200万个袋子。此轮融资将产能扩大到1000万个，使可降解包装首次比铝箔更便宜。</p>`,
      ar: `<p>تغليف القهوة هو مذنب كربوني مخفي — أكياس رقائق الألمنيوم تستغرق 200 سنة ليتحلل. أكياسنا مصنوعة من نفايات قشور القهوة وتتحلل في حديقتك في 12 أسبوعاً.</p><h3>المادة</h3><p>نستخرج السليلوز من قشور القهوة (منتج ثانوي للطحن) ونمزجه مع PLA من نشأ الكسافا. النتيجة: كوب 100% قابل للتسميد المنزلي بنفس خصائص الحاجز لرقائق الألمنيوم.</p><h3>النطاق</h3><p>مرفقنا في أمستردام يمكنه إنتاج 2 مليون كوب/سنة. هذا التمويل يوسع إلى 10 ملايين، مما يجعل التغليف القابل للتحلل أرخص من الألمنيوم لأول مرة.</p>`
    },
    updates: [],
    equity: { offered: 6, minInvestment: 250 }
  }
];

/* ---------- Helpers ---------- */
function getProjectById(id) {
  return PROJECTS.find(p => p.id === id);
}

function localizeField(obj, field) {
  const lang = getLang();
  return obj[field]?.[lang] || obj[field]?.en || '';
}

function getCategoryMeta(catKey) {
  return CATEGORIES.find(c => c.key === catKey) || CATEGORIES[0];
}

function getFilteredProjects(opts = {}) {
  let result = [...PROJECTS];

  if (opts.category && opts.category !== 'all') {
    result = result.filter(p => p.category === opts.category);
  }
  if (opts.filter) {
    switch (opts.filter) {
      case 'trending':   result.sort((a,b) => b.backers - a.backers); break;
      case 'endingSoon': result.sort((a,b) => a.daysLeft - b.daysLeft); break;
      case 'mostFunded': result.sort((a,b) => b.pledged - a.pledged); break;
      case 'newest':     result.sort((a,b) => b.id.localeCompare(a.id)); break;
    }
  }
  if (opts.carbonImpact) {
    const ranges = { low: [0,100], medium: [100,500], high: [500, Infinity] };
    const [min, max] = ranges[opts.carbonImpact] || [0, Infinity];
    result = result.filter(p => p.carbonOffset >= min && p.carbonOffset < max);
  }
  if (opts.stage) {
    result = result.filter(p => p.stage === opts.stage);
  }
  if (opts.sort) {
    switch (opts.sort) {
      case 'trending':   result.sort((a,b) => b.backers - a.backers); break;
      case 'endingSoon': result.sort((a,b) => a.daysLeft - b.daysLeft); break;
      case 'mostFunded': result.sort((a,b) => b.pledged - a.pledged); break;
      case 'newest':     result.sort((a,b) => b.id.localeCompare(a.id)); break;
    }
  }
  return result;
}

function renderProjectCard(p) {
  const cat = getCategoryMeta(p.category);
  const pct = Math.round((p.pledged / p.goal) * 100);
  const title = localizeField(p, 'title');
  const desc = localizeField(p, 'desc');
  const catName = t(`cat.${p.category}`);
  const verifiedBadge = p.verified
    ? `<div class="verified-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> ${t('project.verificationStatus')}</div>`
    : `<div class="verified-badge pending">⏳ ${t('project.verificationPending')}</div>`;

  return `
  <a href="project-detail.html?id=${p.id}" class="project-card">
    <div class="project-img">
      <div class="project-img-gradient" style="background:${p.gradient}"></div>
      <span class="cat-badge">${cat.icon} ${catName}</span>
      ${verifiedBadge}
    </div>
    <div class="project-body">
      <h3 class="project-title">${title}</h3>
      <p class="project-desc">${desc}</p>
      <div class="project-progress">
        <div class="progress-bar"><div class="progress-fill" style="width:${Math.min(pct,100)}%"></div></div>
        <div class="project-meta">
          <span class="raised">${formatCurrency(p.pledged)}</span>
          <span class="pct">${pct}%</span>
        </div>
      </div>
      <div class="project-footer">
        <span class="meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          ${formatNumber(p.backers)}
        </span>
        <span class="meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ${p.daysLeft} ${t('project.daysLeft')}
        </span>
        ${p.carbonOffset > 0 ? `<span class="meta-item carbon">🌍 ${formatNumber(p.carbonOffset)} ${t('project.tonsCO2')}</span>` : ''}
      </div>
    </div>
  </a>`;
}
