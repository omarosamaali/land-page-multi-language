const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container img", {
  duration: 1000,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content h3", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__content .about__grid", {
  ...scrollRevealOption,
  delay: 2000,
});

// contact container
ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
  origin: "left",
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
});

const translation = {
  en: {
    home: "HOME",
    about: "ABOUT",
    contact: "CONTACT",
    english: "English",
    arabic: "العربية",
    rowmah: "Rowmah",
    login: "Log in",
    register: "Register",
    rowmahH1: "Rowmah for safe ADS",
    rowmahP: "An advertising platform that provides advertising content that is relevant to you and your audience Seize the opportunity to earn safe and clean money from your website and let With the flow of funds into your own wallet",
    buyNow: "Buy Now",
    LearnMore: "Learn More",
    aboutUs: "About US",
    aboutUsP: "An advertising network for the global market",
    aboutUsParagraph: "Our mission is to create a reliable and transparent advertising ecosystem that benefits both publishers and advertisers. We believe in empowering website owners to monetize their content while maintaining control over the types of ads displayed.",
    previuesProject: "PREVIOUS PROJECTS",
    yearsExp: "YEARS EXPERIENCE",
    ongoingProjects: "ONGOING PROJECTS",
    numberParagraphOne: "34+",
    numberParagraphTwo: "10+",
    numberParagraphThree: "12+",
    contactUsHead: "Contact Us",
    contactUsParagraph: "Discover the difference, where expertise meets excellence in Advertising field. Let's embark on this exciting journey together.",
    sendMessage: "Send Message",
    footerPragraph: "Our team of seasoned professionals is committed to providing you with exceptional service, in-depth market knowledge, and personalized solutions tailored to your unique needs.",
    companyInfo: "Company Info",
    resourcesFooter: "Resources",
    termsFooter: "Terms",
    conditionsFooter: "Conditions",
    PolicyFooter: "Policy",
    lastFooter: "Copyright © 2023 ROWMAH for safe ADS. All rights reserved.",
    description: "Description",
    firstName: "First Name",
    lastName: "Last Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
  },
  ar: {
    home: "الصفحة الرئيسية",
    about: "من نحن",
    contact: "تواصل معنا",
    english: "English",
    arabic: "العربية",
    rowmah: "رومه",
    login: "تسجيل دخول",
    register: "تسجيل حساب",
    rowmahH1: "رومة للإعلانات الآمنة",
    rowmahP: " مرحبًا بك في منصة إعلاناتنا، حيث نسعى لتوفير محتوى إعلاني ملائم لك ولجمهورك ونوفر لك الفرصة لكسب أموال آمنة من موقع الويب الخاص بك. نحن ندعم تدفق الأموال مباشرة إلى محفظتك الخاصة بك ونضمن لك الحصول على العائد المادي بكل سهولة ويسر من خلال نظامنا الآمن والفعال للدفع هيا لا تتردد",
    buyNow: "شراء الإن",
    LearnMore: "قراءة المزيد",
    aboutUs: "من نحن",
    aboutUsP: "شبكة إعلانية للسوق العالمية توفير إعلانات ذات صلة تلقائيًا",
    aboutUsParagraph: "نهدف إلى توفير نظام إعلاني موثوق وشفاف يعزز فوائد الناشرين والمعلنين. نحن نقدر أهمية تمكين مالكي مواقع الويب من كسب الدخل من محتواهم الخاص والاستفادة من جمهورهم، وفي الوقت نفسه نحرص على محافظتهم على التحكم في نوع الإعلانات التي يتم عرضها على مواقعهم ,لتحقيق هذه المهمة، نعمل على توفير المزيد من الخيارات والتحكم .",
    previuesProject: "المشاريع السابقة",
    yearsExp: "سنوات الخبرة",
    ongoingProjects: "المشاريع الحالية",
    numberParagraphOne: "+٣٤",
    numberParagraphTwo: "+١٠",
    numberParagraphThree: "+١٢",
    contactUsHead: "تواصل معنا",
    contactUsParagraph: "اكتشف الفرق حيث تجتمع الخبرة مع التميز في مجال الإعلان. دعونا نشرع في هذه الرحلة المثيرة معًا.من خلال إعدادات الإعلانات المخصصة وتحليلات الأداء والتقارير ومراجعة الإعلانات ودعم العملاء",
    sendMessage: "إرسال رسالة",
    footerPragraph: "يلتزم فريقنا من المحترفين المتمرسين بتزويدك بخدمة استثنائية ومعرفة متعمقة بالسوق وحلول مخصصة مصممة خصيصًا لتلبية احتياجاتك الفريدة. نحن نسعى دائمًا لتطوير منصتنا وتحسين خدماتنا لضمان تجربة إعلانية مرضية للناشرين والمعلنين على حد سواء.",
    companyInfo: "معلومات الشركة",
    resourcesFooter: "مصادر",
    termsFooter: "الأحكام",
    conditionsFooter: "الشروط",
    PolicyFooter: "الخصوصية",
    lastFooter: "حقوق النشر © 2023 رومة للإعلانات الآمنة. كل الحقوق محفوظة.",
    firstName: "الاسم الأول",
    lastName: "الاسم الأخير",
    emailAddress: "عنوان البريد الإلكتروني",
    phoneNumber: "رقم الهاتف",
    description: "الوصف",
  }
}
const languageSelector = document.querySelector("select");
languageSelector.addEventListener('change', (event) => {
  setLanguage(event.target.value);
});
const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) =>{
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translation[language][translationKey];
  })
}
