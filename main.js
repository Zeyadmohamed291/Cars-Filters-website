import './style.css';

// --------------------------------------------------
// TRANSLATIONS DICTIONARY
// --------------------------------------------------
const translations = {
  ar: {
    title: "[Company Name] - Premium Automotive Filtration",
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_products: "منتجاتنا",
    nav_why: "لماذا نحن",
    nav_contact: "تواصل معنا",
    hero_title: "هندسة تحمي محركك",
    hero_subtitle: "حلول فلترة عالية الجودة للسيارات والمعدات الثقيلة مصممة لتحقيق أعلى مستويات الأداء والحماية.",
    btn_explore: "استكشف منتجاتنا",
    btn_contact_us: "تواصل معنا",
    ph_manufacturing: "[صورة مصنع / تصنيع]",
    about_label: "ABOUT US",
    about_title: "من نحن",
    about_desc_1: "نحن نضع معايير جديدة في هندسة الفلاتر.",
    about_desc_2: "نقدم أداءً لا يضاهى وموثوقية عالية لحماية محركاتكم.",
    about_desc_3: "التزام ثابت بالجودة العالية، الابتكار المستمر، والدقة الهندسية في كل منتج.",
    about_feat_1: "تصنيع وفق معايير OEM",
    about_feat_2: "خامات عالية الجودة",
    about_feat_3: "حلول لجميع أنواع المركبات",
    about_feat_4: "أداء يعتمد عليه في الظروف القاسية",
    about_stat_1: "عامًا من الخبرة",
    about_stat_2: "عميل سعيد",
    about_stat_3: "علامة تجارية",
    about_stat_4: "رضا العملاء",
    btn_discover: "اكتشف منتجاتنا",
    products_title: "منتجاتنا",
    products_subtitle: "حلول فلترة متقدمة لجميع التطبيقات.",
    prod1_title: "فلاتر أصلية",
    prod1_desc: "أداء يدوم وثقة تستمر",
    prod2_title: "فلاتر زيت",
    prod2_desc: "تنقية أفضل .. أداء أقوى",
    prod3_title: "فلاتر هواء",
    prod3_desc: "تنفس نقي، لاحتراق مثالي",
    prod4_title: "فلاتر وقود",
    prod4_desc: "حماية فائقة لنظام الحقن",
    prod5_title: "فلاتر هيدروليكية",
    prod5_desc: "استقرار وأمان للمعدات الثقيلة",
    prod6_title: "فلاتر تكييف",
    prod6_desc: "هواء نقي ومنعش داخل المقصورة",
    prod7_title: "فلاتر معدات صناعية",
    prod7_desc: "حلول متطورة للتطبيقات الصناعية",
    learn_more: "اكتشف المزيد →",
    why_title: "لماذا نحن",
    why_subtitle: "معايير هندسية متفوقة لموثوقية تامة.",
    feat_1: "جودة أصلية (OEM)",
    feat_1_desc: "المعيار الذهبي للأداء والموثوقية.",
    feat_2: "تقنية فلترة متقدمة",
    feat_2_desc: "حماية فائقة لجميع أجزاء المحرك.",
    feat_3: "عميل سعيد",
    feat_3_desc: "نفخر بثقة عملائنا بخدماتنا.",
    feat_4: "عام من الخبرة",
    feat_4_desc: "تاريخ حافل بالابتكار والتميز.",
    feat_5: "نسبة الجودة",
    feat_5_desc: "ضمان جودة استثنائي بلا تنازلات.",
    feat_6: "شركاء عالميون",
    feat_6_desc: "شبكة واسعة من الشركاء الموثوقين.",
    app_title: "الصناعات التي نخدمها",
    app_1_title: "سيارات ملاكي",
    app_1_desc: "حلول فلترة للمركبات اليومية",
    app_2_title: "الشاحنات الثقيلة",
    app_2_desc: "أداء موثوق للمركبات الثقيلة",
    app_3_title: "المعدات",
    app_3_desc: "حلول فلترة للمعدات والتطبيقات الشاقة",
    brands_title: "العلامات التجارية التي ندعمها",
    brands_subtitle: "نوفر فلاتر أصلية وعالية الجودة لمجموعة واسعة من أشهر شركات السيارات والمعدات حول العالم.",
    cta_title_new: "هل تبحث عن مورد موثوق لفلاتر السيارات الأصلية؟",
    cta_desc_new: "نقدم فلاتر سيارات ومعدات ثقيلة بمعايير عالمية. نوفر توريد بالجملة مع ضمان الجودة الأصلية (OEM) وسرعة في التسليم لضمان استمرار أعمالكم بكفاءة.",
    cta_feat_1: "جودة أصلية",
    cta_feat_2: "شحن سريع",
    cta_feat_3: "أسعار الجملة",
    cta_feat_4: "دعم فني",
    btn_catalog: "تحميل الكتالوج",
    footer_desc: "حلول فلترة هندسية للتميز.",
    footer_links_title: "روابط سريعة",
    footer_contact_title: "تواصل معنا",
    contact_address: "محافظه الدقهليه - المنصوره - ميدان مشعل برج المجد",
    footer_rights: "جميع الحقوق محفوظة."
  },
  en: {
    title: "[Company Name] - Premium Automotive Filtration",
    nav_home: "Home",
    nav_about: "About Us",
    nav_products: "Products",
    nav_why: "Why Us",
    nav_contact: "Contact",
    hero_title: "Engineering That Protects Your Engine",
    hero_subtitle: "High-quality filtration solutions for automotive and heavy equipment designed for maximum performance and protection.",
    btn_explore: "Explore Products",
    btn_contact_us: "Contact Us",
    ph_manufacturing: "[Manufacturing / Factory Placeholder]",
    about_label: "ABOUT US",
    about_title: "About Us",
    about_desc_1: "We set new standards in filter engineering.",
    about_desc_2: "Providing unmatched performance and high reliability to protect your engines.",
    about_desc_3: "A steadfast commitment to high quality, continuous innovation, and engineering precision in every product.",
    about_feat_1: "Manufactured to OEM Standards",
    about_feat_2: "High-Quality Materials",
    about_feat_3: "Solutions for All Vehicle Types",
    about_feat_4: "Reliable Performance in Extreme Conditions",
    about_stat_1: "Years of Experience",
    about_stat_2: "Happy Customers",
    about_stat_3: "Brands",
    about_stat_4: "Customer Satisfaction",
    btn_discover: "Discover Our Products",
    products_title: "Our Products",
    products_subtitle: "Advanced filtration solutions for all applications.",
    prod1_title: "Genuine Filters",
    prod1_desc: "Lasting performance, continuous trust",
    prod2_title: "Oil Filters",
    prod2_desc: "Better purification.. stronger performance",
    prod3_title: "Air Filters",
    prod3_desc: "Pure air, perfect combustion",
    prod4_title: "Fuel Filters",
    prod4_desc: "Ultimate protection for injection systems",
    prod5_title: "Hydraulic Filters",
    prod5_desc: "Stability and safety for heavy equipment",
    prod6_title: "Cabin Filters",
    prod6_desc: "Fresh and clean air inside the cabin",
    prod7_title: "Industrial Filters",
    prod7_desc: "Advanced solutions for industrial applications",
    learn_more: "Learn More →",
    why_title: "Why Choose Us",
    why_subtitle: "Superior engineering standards for complete reliability.",
    feat_1: "Genuine Quality (OEM)",
    feat_1_desc: "The gold standard for performance and reliability.",
    feat_2: "Advanced Filtration Technology",
    feat_2_desc: "Superior protection for all engine components.",
    feat_3: "Happy Customers",
    feat_3_desc: "We take pride in our customers' trust.",
    feat_4: "Years of Experience",
    feat_4_desc: "A rich history of innovation and excellence.",
    feat_5: "Quality Rating",
    feat_5_desc: "Uncompromising exceptional quality assurance.",
    feat_6: "Global Partners",
    feat_6_desc: "A vast network of trusted partners.",
    app_title: "Industries We Serve",
    app_1_title: "Passenger Cars",
    app_1_desc: "Filtration solutions for daily vehicles",
    app_2_title: "Heavy Trucks",
    app_2_desc: "Reliable performance for heavy vehicles",
    app_3_title: "Equipment",
    app_3_desc: "Filtration solutions for heavy equipment and applications",
    brands_title: "Brands We Support",
    brands_subtitle: "We provide genuine, high-quality filters for a wide range of the world's most famous automotive and equipment manufacturers.",
    cta_title_new: "Looking for a reliable supplier of genuine automotive filters?",
    cta_desc_new: "We provide world-class automotive and heavy equipment filters. Offering wholesale supply with OEM quality guarantee and fast delivery to ensure your business continuity.",
    cta_feat_1: "Genuine Quality",
    cta_feat_2: "Fast Shipping",
    cta_feat_3: "Wholesale Prices",
    cta_feat_4: "Technical Support",
    btn_catalog: "Download Catalog",
    footer_desc: "Engineered filtration solutions for excellence.",
    footer_links_title: "Quick Links",
    footer_contact_title: "Contact Us",
    contact_address: "Dakahlia Governorate - Mansoura - Meshaal Square, Al Majd Tower",
    footer_rights: "All rights reserved."
  }
};

// --------------------------------------------------
// LANGUAGE SWITCHER LOGIC
// --------------------------------------------------
let currentLang = 'ar';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update button text
  const switcher = document.getElementById('lang-switcher');
  if (switcher) {
    switcher.textContent = lang === 'ar' ? 'English' : 'العربية';
  }

  // Update elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'TITLE') {
        document.title = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const switcher = document.getElementById('lang-switcher');
  if (switcher) {
    switcher.addEventListener('click', () => {
      const newLang = currentLang === 'ar' ? 'en' : 'ar';
      setLanguage(newLang);
    });
  }

  // Initialize default language
  setLanguage('ar');

  // --------------------------------------------------
  // NAVBAR STICKY EFFECT
  // --------------------------------------------------
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --------------------------------------------------
  // INTERSECTION OBSERVER (FADE-UP ANIMATIONS)
  // --------------------------------------------------
  const fadeElements = document.querySelectorAll('.fade-up, .bento-fade-up, .prod-fade-up, .about-visual-slide-ltr, .about-text-slide-rtl');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };
  
  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => {
    fadeObserver.observe(el);
  });

  // --------------------------------------------------
  // NUMBER COUNTER ANIMATION
  // --------------------------------------------------
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.getAttribute('data-target');
        const duration = 2000; // 2 seconds
        const stepTime = Math.abs(Math.floor(duration / target));
        let current = 0;
        
        const timer = setInterval(() => {
          current += Math.ceil(target / 100);
          if (current > target) current = target;
          entry.target.textContent = current;
          if (current === target) {
            clearInterval(timer);
          }
        }, stepTime || 20);

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  // --------------------------------------------------
  // SET CURRENT YEAR
  // --------------------------------------------------
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
