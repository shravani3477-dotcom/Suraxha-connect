/* SuraXha Connect - app.js */

// ============ 1. ALL WORDS, IN 3 LANGUAGES ============
const TEXT = {
  en: {
    appName: "SuraXha Connect", home: "Home", welcome: "What do you need help with today?",
    d_pension: "See if you get a monthly pension", d_ayushman: "Free health card for age 70+", d_transit: "Bus, rail and metro savings", d_fd: "Best bank interest rates", d_docs: "Papers to carry, with tick boxes", d_help: "Tap to call for help", sub: {pension:"Check if you get a pension", ayushman:"Free health card for 70+", transit:"Cheaper bus, train, metro", fd:"Best bank interest rates", docs:"Papers to carry", help:"Call for help in one tap"},
    pension: "Pension Check", ayushman: "Ayushman Card 70+", transit: "Travel Discounts",
    fd: "FD Rates", docs: "Document Checklist", help: "Helplines",
    back: "Back to Home", backAge: "Back to Age", backIncome: "Back to Income", reasonAge: "The minimum age is {x} years, and you entered {y}.", reasonIncome: "Family income must be up to Rs. {x} per year, and you entered Rs. {y}.", incomeHint: "Enter your whole family's income for one full YEAR (not monthly).", officialTitle: "Do it online (official website)", officialNote: "Opens the official website. Needs internet.", backDocs: "Back to Document Checklist", splashTag: "Your guide to pensions, health card, travel discounts and safe banking", splashStart: "Start now", next: "Next", readAloud: "Read Aloud", noVoice: "No voice for this language is installed on this device. Open Settings > Language > Text-to-speech, add a Hindi or Marathi voice, then try again.", useHindi: "No Marathi voice found, so a Hindi voice is reading this.", noSpeech: "This browser cannot read aloud. Please try Chrome or Edge.",
    goodNews: "Good news", pleaseNote: "Please note",
    qualifyFor: "You qualify for {x}.", mayNotQualify: "You may not qualify for {x}.",
    nextStep: "Next step", lastChecked: "Last checked", confirmOffice: "Please confirm at the office.",
    guidance: "Guidance only. Please confirm with the official office. Nothing you enter leaves your phone.",
    askAge: "Your age", badAge: "Please enter your age (1 to 120).",
    askIncome: "Family income per year (Rs.)", badIncome: "Please enter your yearly family income.",
    bus: "State Bus", rail: "Railway", metro: "Metro / City Bus",
    chooseTransport: "Which service?",
    chooseTenure: "For how long?", years: "{n} year(s)",
    chooseTask: "Documents for which task?", taskPension: "Pension", taskCard: "Ayushman Card", taskFd: "Fixed Deposit",
    youGet: "You will get about {x}.", applyAt: "Apply at: {x}.",
    aPension: "a pension scheme", outsideLimits: "Your age or income is outside the listed limits.",
    askOffice: "Ask at your local social welfare office.",
    ayushmanTitle: "the Ayushman card", cover: "Health cover: {x}.", followSteps: "Follow the steps below.",
    minAgeIs: "Minimum age is {x}.", stepsTitle: "How to get the card", seeDocs: "See documents needed",
    ayuSteps: [
      "Keep your Aadhaar card and mobile phone ready",
      "Go to the nearest empanelled hospital or CSC (Common Service Centre)",
      "Ask for Ayushman Vay Vandana enrolment",
      "Complete Aadhaar e-KYC (fingerprint or OTP)",
      "Collect your card"
    ],
    discountTitle: "{d} off on {m}", aDiscount: "a travel discount on {m}",
    noDiscount: "No senior discount is listed for this service.", carry: "Carry: {x}.",
    fdTitle: "Best rates for {n}", perYear: "per year", asOf: "as of",
    fdNote: "Rates change often. Confirm at the bank before investing.",
    otpNote: "Safety: banks never ask for your OTP or PIN on the phone.", noRates: "No rates are listed.",
    docsTitle: "Documents for: {x}", call: "Call"
  },
  hi: {
    appName: "सुरक्षा कनेक्ट", home: "होम", welcome: "आज आपको किसमें मदद चाहिए?",
    d_pension: "देखें, क्या आपको हर महीने पेंशन मिलेगी", d_ayushman: "70+ उम्र के लिए स्वास्थ्य कार्ड", d_transit: "बस, रेल और मेट्रो में बचत", d_fd: "बैंकों की सबसे अच्छी ब्याज दरें", d_docs: "साथ ले जाने वाले कागज़ात", d_help: "मदद के लिए छुएं और कॉल करें", sub: {pension:"जानें क्या पेंशन मिलेगी", ayushman:"70+ के लिए स्वास्थ्य कार्ड", transit:"सस्ती बस, रेल, मेट्रो", fd:"बैंक की सबसे अच्छी ब्याज दरें", docs:"साथ ले जाने के कागज़", help:"एक टैप में मदद के लिए कॉल करें"},
    pension: "पेंशन जांच", ayushman: "आयुष्मान कार्ड 70+", transit: "यात्रा में छूट",
    fd: "एफडी ब्याज दरें", docs: "दस्तावेज़ सूची", help: "हेल्पलाइन",
    back: "होम पर वापस जाएं", backAge: "उम्र पर वापस जाएं", backIncome: "आय पर वापस जाएं", reasonAge: "न्यूनतम उम्र {x} साल है, और आपने {y} लिखी है।", reasonIncome: "परिवार की सालाना आय ₹{x} तक होनी चाहिए, और आपने ₹{y} लिखी है।", incomeHint: "पूरे परिवार की एक साल की कुल आमदनी लिखें (महीने की नहीं)।", officialTitle: "ऑनलाइन करें (सरकारी वेबसाइट)", officialNote: "सरकारी वेबसाइट खुलेगी। इंटरनेट ज़रूरी है।", backDocs: "दस्तावेज़ सूची पर वापस जाएं", splashTag: "पेंशन, स्वास्थ्य कार्ड, यात्रा छूट और सुरक्षित बैंकिंग के लिए आपका साथी", splashStart: "अभी शुरू करें", next: "आगे", readAloud: "पढ़कर सुनाएं", noVoice: "इस फोन या कंप्यूटर में इस भाषा की आवाज़ नहीं है। सेटिंग्स > भाषा > टेक्स्ट-टू-स्पीच में जाकर हिंदी या मराठी आवाज़ जोड़ें, फिर दोबारा कोशिश करें।", useHindi: "मराठी आवाज़ नहीं मिली, इसलिए हिंदी आवाज़ में पढ़ा जा रहा है।", noSpeech: "यह ब्राउज़र पढ़कर नहीं सुना सकता। कृपया Chrome या Edge आज़माएं।",
    goodNews: "अच्छी खबर", pleaseNote: "कृपया ध्यान दें",
    qualifyFor: "आप इसके लिए पात्र हैं: {x}।", mayNotQualify: "आप शायद इसके लिए पात्र नहीं हैं: {x}।",
    nextStep: "अगला कदम", lastChecked: "अंतिम जांच", confirmOffice: "कृपया कार्यालय में पुष्टि करें।",
    guidance: "केवल मार्गदर्शन के लिए। कृपया सरकारी कार्यालय में पुष्टि करें। आपकी जानकारी फोन से बाहर नहीं जाती।",
    askAge: "आपकी उम्र", badAge: "कृपया अपनी उम्र लिखें (1 से 120)।",
    askIncome: "परिवार की सालाना आय (रुपये)", badIncome: "कृपया परिवार की सालाना आय लिखें।",
    bus: "राज्य बस", rail: "रेल", metro: "मेट्रो / शहर बस",
    chooseTransport: "कौन सी सेवा?",
    chooseTenure: "कितने समय के लिए?", years: "{n} साल",
    chooseTask: "किस काम के लिए दस्तावेज़?", taskPension: "पेंशन", taskCard: "आयुष्मान कार्ड", taskFd: "फिक्स्ड डिपॉजिट",
    youGet: "आपको लगभग {x} मिलेंगे।", applyAt: "यहां आवेदन करें: {x}।",
    aPension: "पेंशन योजना", outsideLimits: "आपकी उम्र या आय तय सीमा से बाहर है।",
    askOffice: "अपने स्थानीय समाज कल्याण कार्यालय में पूछें।",
    ayushmanTitle: "आयुष्मान कार्ड", cover: "स्वास्थ्य कवर: {x}।", followSteps: "नीचे दिए कदम अपनाएं।",
    minAgeIs: "न्यूनतम उम्र {x} साल है।", stepsTitle: "कार्ड कैसे बनवाएं", seeDocs: "ज़रूरी दस्तावेज़ देखें",
    ayuSteps: [
      "अपना आधार कार्ड और मोबाइल फोन तैयार रखें",
      "नज़दीकी सूचीबद्ध अस्पताल या सीएससी (कॉमन सर्विस सेंटर) जाएं",
      "आयुष्मान वय वंदना में नामांकन के लिए कहें",
      "आधार ई-केवाईसी पूरा करें (उंगली का निशान या ओटीपी)",
      "अपना कार्ड ले लें"
    ],
    discountTitle: "{m} पर {d} की छूट", aDiscount: "{m} पर यात्रा छूट",
    noDiscount: "इस सेवा में वरिष्ठ नागरिक छूट सूचीबद्ध नहीं है।", carry: "साथ रखें: {x}।",
    fdTitle: "{n} के लिए सबसे अच्छी दरें", perYear: "प्रति वर्ष", asOf: "दिनांक",
    fdNote: "दरें अक्सर बदलती हैं। निवेश से पहले बैंक में पुष्टि करें।",
    otpNote: "सावधानी: बैंक कभी फोन पर आपका ओटीपी या पिन नहीं मांगता।", noRates: "कोई दर सूचीबद्ध नहीं है।",
    docsTitle: "दस्तावेज़: {x}", call: "कॉल करें"
  },
  mr: {
    appName: "सुरक्षा कनेक्ट", home: "मुख्यपृष्ठ", welcome: "आज तुम्हाला कशात मदत हवी आहे?",
    d_pension: "तुम्हाला दरमहा पेन्शन मिळेल का ते पहा", d_ayushman: "70+ वयासाठी आरोग्य कार्ड", d_transit: "बस, रेल्वे आणि मेट्रोमध्ये बचत", d_fd: "बँकांचे सर्वोत्तम व्याजदर", d_docs: "सोबत न्यायची कागदपत्रे", d_help: "मदतीसाठी दाबा आणि कॉल करा", sub: {pension:"पेन्शन मिळेल का ते तपासा", ayushman:"70+ साठी आरोग्य कार्ड", transit:"स्वस्त बस, रेल्वे, मेट्रो", fd:"बँकांचे सर्वोत्तम व्याजदर", docs:"सोबत न्यायची कागदपत्रे", help:"एका टॅपमध्ये मदतीसाठी कॉल करा"},
    pension: "पेन्शन तपासणी", ayushman: "आयुष्मान कार्ड 70+", transit: "प्रवास सवलत",
    fd: "एफडी व्याजदर", docs: "कागदपत्रांची यादी", help: "हेल्पलाइन",
    back: "मुख्यपृष्ठावर परत", backAge: "वयाकडे परत", backIncome: "उत्पन्नाकडे परत", reasonAge: "किमान वय {x} वर्षे आहे, आणि तुम्ही {y} लिहिले आहे.", reasonIncome: "कुटुंबाचे वार्षिक उत्पन्न ₹{x} पर्यंत असावे, आणि तुम्ही ₹{y} लिहिले आहे.", incomeHint: "संपूर्ण कुटुंबाचे एका वर्षाचे एकूण उत्पन्न लिहा (महिन्याचे नाही).", officialTitle: "ऑनलाइन करा (अधिकृत संकेतस्थळ)", officialNote: "अधिकृत संकेतस्थळ उघडेल. इंटरनेट आवश्यक आहे.", backDocs: "कागदपत्र यादीकडे परत", splashTag: "पेन्शन, आरोग्य कार्ड, प्रवास सवलत आणि सुरक्षित बँकिंगसाठी तुमचा सोबती", splashStart: "आता सुरू करा", next: "पुढे", readAloud: "वाचून दाखवा", noVoice: "या फोन किंवा संगणकात या भाषेचा आवाज नाही. सेटिंग्ज > भाषा > टेक्स्ट-टू-स्पीच मध्ये जाऊन हिंदी किंवा मराठी आवाज जोडा आणि पुन्हा प्रयत्न करा.", useHindi: "मराठी आवाज सापडला नाही, म्हणून हिंदी आवाजात वाचत आहे.", noSpeech: "हा ब्राउझर वाचून दाखवू शकत नाही. कृपया Chrome किंवा Edge वापरून पहा.",
    goodNews: "चांगली बातमी", pleaseNote: "कृपया लक्षात घ्या",
    qualifyFor: "तुम्ही यासाठी पात्र आहात: {x}.", mayNotQualify: "तुम्ही कदाचित यासाठी पात्र नाही: {x}.",
    nextStep: "पुढील पाऊल", lastChecked: "शेवटची तपासणी", confirmOffice: "कृपया कार्यालयात खात्री करा.",
    guidance: "फक्त मार्गदर्शनासाठी. कृपया अधिकृत कार्यालयात खात्री करा. तुमची माहिती फोनच्या बाहेर जात नाही.",
    askAge: "तुमचे वय", badAge: "कृपया तुमचे वय लिहा (1 ते 120).",
    askIncome: "कुटुंबाचे वार्षिक उत्पन्न (रुपये)", badIncome: "कृपया कुटुंबाचे वार्षिक उत्पन्न लिहा.",
    bus: "राज्य बस (एसटी)", rail: "रेल्वे", metro: "मेट्रो / शहर बस",
    chooseTransport: "कोणती सेवा?",
    chooseTenure: "किती कालावधीसाठी?", years: "{n} वर्ष",
    chooseTask: "कोणत्या कामासाठी कागदपत्रे?", taskPension: "पेन्शन", taskCard: "आयुष्मान कार्ड", taskFd: "मुदत ठेव (एफडी)",
    youGet: "तुम्हाला साधारण {x} मिळतील.", applyAt: "येथे अर्ज करा: {x}.",
    aPension: "पेन्शन योजना", outsideLimits: "तुमचे वय किंवा उत्पन्न ठरलेल्या मर्यादेबाहेर आहे.",
    askOffice: "तुमच्या स्थानिक समाज कल्याण कार्यालयात विचारा.",
    ayushmanTitle: "आयुष्मान कार्ड", cover: "आरोग्य संरक्षण: {x}.", followSteps: "खालील पायऱ्या पाळा.",
    minAgeIs: "किमान वय {x} वर्षे आहे.", stepsTitle: "कार्ड कसे मिळवायचे", seeDocs: "आवश्यक कागदपत्रे पहा",
    ayuSteps: [
      "आधार कार्ड आणि मोबाइल फोन तयार ठेवा",
      "जवळच्या सूचीबद्ध रुग्णालयात किंवा सीएससी (कॉमन सर्व्हिस सेंटर) मध्ये जा",
      "आयुष्मान वय वंदना नोंदणीबद्दल विचारा",
      "आधार ई-केवायसी पूर्ण करा (बोटाचा ठसा किंवा ओटीपी)",
      "तुमचे कार्ड घ्या"
    ],
    discountTitle: "{m} वर {d} सवलत", aDiscount: "{m} वर प्रवास सवलत",
    noDiscount: "या सेवेसाठी ज्येष्ठ नागरिक सवलत नोंदवलेली नाही.", carry: "सोबत ठेवा: {x}.",
    fdTitle: "{n} कालावधीसाठी सर्वोत्तम दर", perYear: "दरवर्षी", asOf: "दिनांक",
    fdNote: "दर वारंवार बदलतात. गुंतवणुकीपूर्वी बँकेत खात्री करा.",
    otpNote: "सावधान: बँक कधीही फोनवर तुमचा ओटीपी किंवा पिन विचारत नाही.", noRates: "कोणतेही दर नोंदवलेले नाहीत.",
    docsTitle: "कागदपत्रे: {x}", call: "कॉल करा"
  }
};

// ============ 2. SMALL HELPERS ============
const $ = s => document.querySelector(s);
const answers = {};            // remembers age, income, transport mode
let DATA = {};                 // filled from data/rules.js
let lang = localStorage.getItem('lang') || 'en';
if (!TEXT[lang]) lang = 'en';
let size = Number(localStorage.getItem('size')) || 20;
let lastSpeech = '';

const t = key => TEXT[lang][key];
const fill = (s, vars) => s.replace(/\{(\w+)\}/g, (m, k) => vars[k]);
const L = v => (v && typeof v === 'object' && !Array.isArray(v)) ? (v[lang] || v.en) : v;
const backBtn = () => `<button class="btn" onclick="render('home')">🏠 ${t('back')}</button>`;
const official = list => (list && list.length)
  ? `<h2>🌐 ${t('officialTitle')}</h2>` +
    list.map(o => `<a class="btn official" href="${o.url}" target="_blank" rel="noopener">🌐 ${L(o.label)}</a>`).join('') +
    `<p class="small">${t('officialNote')}</p>` : '';
const taskKey = { pension: 'taskPension', card: 'taskCard', fd: 'taskFd' };

// ============ 3. LANGUAGE, TEXT SIZE, READ ALOUD ============
function setLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  document.documentElement.lang = l;
  $('#title').textContent = t('appName');
  $('#homeBtn').textContent = t('home');
  $('#foot').textContent = t('guidance');
  document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('on', b.dataset.lang === l));
  render('home');
}

function changeSize(d) {
  size = Math.min(30, Math.max(16, size + d));
  localStorage.setItem('size', size);
  document.body.style.fontSize = size + 'px';
}

// --- Read aloud -------------------------------------------------------
// Browsers load their voice list late, and many computers have no Hindi or
// Marathi voice. So: wait for voices, pick the best match, read in short
// pieces (Chrome stops long text), and tell the person if no voice exists.
let voices = [];
const loadVoices = () => { voices = window.speechSynthesis ? speechSynthesis.getVoices() : []; };
if ('speechSynthesis' in window) {
  loadVoices();
  speechSynthesis.addEventListener('voiceschanged', loadVoices);
}
const vlang = v => v.lang.toLowerCase().replace('_', '-');
const pickVoice = code =>
  voices.find(v => vlang(v) === code + '-in') || voices.find(v => vlang(v).split('-')[0] === code);

const WORDS = { en: { rs: 'Rupees', pct: ' percent' }, hi: { rs: 'रुपये', pct: ' प्रतिशत' }, mr: { rs: 'रुपये', pct: ' टक्के' } };
function cleanForSpeech(s) {
  const w = WORDS[lang];
  return String(s)
    .replace(/<[^>]*>/g, ' ')
    .replace(/[\u{1F000}-\u{1FFFF}\u2600-\u27BF\uFE0F]/gu, '')
    .replace(/Rs\.?\s?/g, w.rs + ' ')
    .replace(/₹\s?([\d,\.]+(?:\s?(?:लाख|हज़ार|हजार|करोड़|कोटी))?)/g, '$1 ' + w.rs)
    .replace(/%/g, w.pct)
    .replace(/\s+/g, ' ').trim();
}
function speechChunks(s) {
  return s.replace(/([.।!?])\s+/g, '$1|').split('|')
    .flatMap(p => p.length > 180 ? p.split(/,\s+/) : [p])
    .map(p => p.trim()).filter(Boolean);
}
function speakMsg(m) { const e = $('#speakMsg'); if (e) e.textContent = m; }

function speak(txt) {
  speakMsg('');
  if (!('speechSynthesis' in window)) { speakMsg(t('noSpeech')); return; }
  if (!voices.length) loadVoices();
  speechSynthesis.cancel();

  let voice = pickVoice(lang), code = { en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN' }[lang];
  if (!voice && lang === 'mr') {                 // Marathi uses the same script as Hindi
    voice = pickVoice('hi');
    if (voice) { code = 'hi-IN'; speakMsg(t('useHindi')); }
  }
  if (!voice && lang !== 'en' && voices.length) { speakMsg(t('noVoice')); return; }
  if (!voice && lang === 'en') voice = pickVoice('en');

  const parts = speechChunks(cleanForSpeech(txt));
  setTimeout(() => parts.forEach(p => {          // small delay: Chrome ignores speak() right after cancel()
    const u = new SpeechSynthesisUtterance(p);
    if (voice) u.voice = voice;
    u.lang = voice ? voice.lang : code;
    u.rate = 0.85;
    u.onerror = e => { if (/unavailable/.test(e.error || '')) speakMsg(t('noVoice')); };
    speechSynthesis.speak(u);
  }), 80);
}

// ============ 4. THE OUTPUT ENGINE (every result uses this) ============
function say(ok, title, why, next, extra, backTo) {
  const head = fill(ok ? t('qualifyFor') : t('mayNotQualify'), { x: title });
  lastSpeech = `${head} ${why} ${next || ''}`;
  return `
    ${banner()}
    <div class="result ${ok ? 'yes' : 'no'}" role="status">
      <h2><span class="big">${ok ? '✅' : '⚠️'}</span> ${ok ? t('goodNews') : t('pleaseNote')}</h2>
      <p><b>${head}</b></p>
      <p>${why}</p>
      ${next ? `<p><b>${t('nextStep')}:</b> ${next}</p>` : ''}
      <p class="small">${t('lastChecked')}: ${DATA.lastVerified}. ${t('confirmOffice')}</p>
    </div>
    ${extra || ''}
    <button class="btn primary" onclick="speak(lastSpeech)">🔊 ${t('readAloud')}</button>
    <p id="speakMsg" class="speak-msg" role="status" aria-live="polite"></p>
    ${backTo || ''}
    ${backBtn()}`;
}

// ============ 5. SCREENS ============
const views = {};

const SVG = {
  pension: '<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="24" fill="#F5B301" stroke="#B07A00" stroke-width="3"/><circle cx="32" cy="32" r="17" fill="none" stroke="#B07A00" stroke-width="2"/><text x="32" y="42" font-size="28" font-weight="700" text-anchor="middle" fill="#7A5200" font-family="Arial">₹</text></svg>',
  ayushman: '<svg viewBox="0 0 64 64"><rect x="9" y="9" width="46" height="46" rx="11" fill="#fff" stroke="#2F7D4F" stroke-width="3"/><path d="M26 17h12v9h9v12h-9v9H26v-9h-9V26h9z" fill="#D62828"/></svg>',
  transit: '<svg viewBox="0 0 64 64"><rect x="7" y="13" width="50" height="33" rx="8" fill="#4A90D9" stroke="#123F6B" stroke-width="3"/><rect x="12" y="19" width="14" height="12" rx="2" fill="#E0F2FE"/><rect x="30" y="19" width="14" height="12" rx="2" fill="#E0F2FE"/><rect x="48" y="19" width="5" height="12" rx="1" fill="#E0F2FE"/><circle cx="19" cy="48" r="6" fill="#222"/><circle cx="45" cy="48" r="6" fill="#222"/><circle cx="19" cy="48" r="2.5" fill="#ddd"/><circle cx="45" cy="48" r="2.5" fill="#ddd"/></svg>',
  fd: '<svg viewBox="0 0 64 64"><path d="M32 7L57 22H7z" fill="#8B6FD6" stroke="#3B2A7A" stroke-width="3" stroke-linejoin="round"/><rect x="12" y="26" width="8" height="22" fill="#EDE9FE" stroke="#3B2A7A" stroke-width="2"/><rect x="28" y="26" width="8" height="22" fill="#EDE9FE" stroke="#3B2A7A" stroke-width="2"/><rect x="44" y="26" width="8" height="22" fill="#EDE9FE" stroke="#3B2A7A" stroke-width="2"/><rect x="7" y="50" width="50" height="8" rx="2" fill="#3B2A7A"/></svg>',
  docs: '<svg viewBox="0 0 64 64"><rect x="12" y="9" width="40" height="49" rx="6" fill="#fff" stroke="#B02A52" stroke-width="3"/><rect x="24" y="4" width="16" height="10" rx="3" fill="#B02A52"/><path d="M19 27l3 3 6-7M19 38l3 3 6-7M19 49l3 3 6-7" fill="none" stroke="#16A34A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="32" y="26" width="14" height="4" rx="2" fill="#B02A52"/><rect x="32" y="37" width="14" height="4" rx="2" fill="#B02A52"/><rect x="32" y="48" width="14" height="4" rx="2" fill="#B02A52"/></svg>',
  help: '<svg viewBox="0 0 64 64"><rect x="17" y="5" width="30" height="54" rx="8" fill="#fff" stroke="#9B1C1C" stroke-width="3"/><circle cx="32" cy="38" r="12" fill="#16A34A"/><path d="M27 32q-2 4 3 10t10 4l1-4-4-3-3 2q-3-2-4-5l2-2-2-4z" fill="#fff"/><path d="M26 17h12" stroke="#9B1C1C" stroke-width="3" stroke-linecap="round"/></svg>'
};
const TEMO = { bus: '🚌', rail: '🚆', metro: '🚇' };
const DEMO = { pension: '💰', card: '🏥', fd: '🏦' };
let current = null;   // which module screen we are in
const banner = () => current ? `<div class="banner c-${current}"><span class="ico">${SVG[current]}</span><span class="bt">${t(current)}</span></div>` : '';


const ICONS = { pension: '💰', ayushman: '🏥', transit: '🚌', fd: '🏦', docs: '📋', help: '📞' };

views.home = () => `
  <div class="hero"><p class="welcome">${t('welcome')}</p></div>
  <div class="grid">` +
  ['pension', 'ayushman', 'transit', 'fd', 'docs', 'help'].map((m, i) =>
    `<button class="tile c-${m}" onclick="render('${m}')">
       <span class="num">${i + 1}</span><span class="ico">${SVG[m]}</span>
       <span class="tt">${t(m)}</span><span class="dd">${t('d_' + m)}</span></button>`).join('') +
  '</div>';

// ----- shared "ask age" screen -----
views.age = next => {
  const v = answers.keepAge ? (answers.age || '') : '';
  answers.keepAge = false;
  return `
  ${banner()}<h2>${t('askAge')}</h2>
  <input id="age" type="number" inputmode="numeric" value="${v}">
  <p id="err" class="err"></p>
  <button class="btn primary" onclick="saveAge('${next}')">${t('next')} ➡️</button>
  ${backBtn()}`;
};

function saveAge(next) {
  const a = Number($('#age').value);
  if (!a || a < 1 || a > 120) { $('#err').textContent = t('badAge'); return; }
  answers.age = a;
  render(next);
}

// ----- Module 1: Pension -----
views.pension = () => views.age('pensionIncome');

views.pensionIncome = () => {
  const v = answers.keepInc ? answers.income : '';
  answers.keepInc = false;
  return `
  ${banner()}<h2>${t('askIncome')}</h2>
  <p class="hint">💡 ${t('incomeHint')}</p>
  <input id="inc" type="number" inputmode="numeric" value="${v}">
  <p id="err" class="err"></p>
  <button class="btn primary" onclick="saveIncome()">${t('next')} ➡️</button>
  <button class="btn back" onclick="backToAge()">⬅️ ${t('backAge')}</button>
  ${backBtn()}`;
};

function backToAge() { answers.keepAge = true; render('age', 'pensionIncome'); }
function backToIncome() { answers.keepInc = true; render('pensionIncome'); }

function saveIncome() {
  const v = $('#inc').value;
  if (v === '' || Number(v) < 0) { $('#err').textContent = t('badIncome'); return; }
  answers.income = Number(v);
  render('pensionResult');
}

views.pensionResult = () => {
  const hit = DATA.pension.find(s => answers.age >= s.minAge && answers.income <= s.maxIncome);
  const off = official(DATA.official.pension);
  const backTo = `<button class="btn back" onclick="backToIncome()">⬅️ ${t('backIncome')}</button>`;
  if (hit) {
    return say(true, L(hit.name), fill(t('youGet'), { x: L(hit.amount) }), fill(t('applyAt'), { x: L(hit.apply) }), off, backTo);
  }
  const S = DATA.pension[0], why = [];
  const fmt = n => Number(n).toLocaleString('en-IN');
  if (answers.age < S.minAge) why.push(fill(t('reasonAge'), { x: S.minAge, y: answers.age }));
  if (answers.income > S.maxIncome) why.push(fill(t('reasonIncome'), { x: fmt(S.maxIncome), y: fmt(answers.income) }));
  return say(false, t('aPension'), why.join(' ') || t('outsideLimits'), t('askOffice'), off, backTo);
};

// ----- Module 2: Ayushman 70+ -----
views.ayushman = () => views.age('ayushmanResult');

views.ayushmanResult = () => {
  const A = DATA.ayushman;
  if (answers.age >= A.minAge) {
    const steps = t('ayuSteps').map(s => `<li>${s}</li>`).join('');
    const extra = `<h2>${t('stepsTitle')}</h2><ol class="steps">${steps}</ol>
      <button class="btn" onclick="render('docs','card')">${t('seeDocs')}</button>` + official(DATA.official.ayushman);
    return say(true, t('ayushmanTitle'), fill(t('cover'), { x: L(A.cover) }), t('followSteps'), extra);
  }
  return say(false, t('ayushmanTitle'), fill(t('minAgeIs'), { x: A.minAge }), '', official(DATA.official.ayushman));
};

// ----- Module 3: Travel discounts -----
views.transit = () => banner() + `<h2>${t('chooseTransport')}</h2>` +
  ['bus', 'rail', 'metro'].map(m => `<button class="btn" onclick="pickMode('${m}')">${TEMO[m]} ${t(m)}</button>`).join('') +
  backBtn();

function pickMode(m) { answers.mode = m; render('age', 'transitResult'); }

views.transitResult = () => {
  const label = t(answers.mode);
  const r = DATA.transit.find(x => x.key === answers.mode);
  if (!r) return say(false, fill(t('aDiscount'), { m: label }), t('noDiscount'), '', official(DATA.official.transit[answers.mode]));
  if (answers.age >= r.minAge) {
    const disc = (r.freeAge && answers.age >= r.freeAge) ? '100%' : r.discount;
    return say(true, fill(t('discountTitle'), { d: disc, m: label }), fill(t('carry'), { x: L(r.proof) }), '', official(DATA.official.transit[answers.mode]));
  }
  return say(false, fill(t('aDiscount'), { m: label }), fill(t('minAgeIs'), { x: r.minAge }), '', official(DATA.official.transit[answers.mode]));
};

// ----- Module 4: FD rates -----
views.fd = () => banner() + `<h2>${t('chooseTenure')}</h2>` +
  [1, 3, 5].map(y => `<button class="btn" onclick="render('fdResult',${y})">📅 ${fill(t('years'), { n: y })}</button>`).join('') +
  backBtn();

views.fdResult = y => {
  const top = DATA.banks
    .map(b => ({ bank: b.bank, rate: b.rates[y], asOf: b.asOf }))
    .filter(b => b.rate)
    .sort((a, b) => b.rate - a.rate)
    .slice(0, 10);
  const rows = top.map(b =>
    `<li><b>${b.bank}</b>: ${b.rate}% ${t('perYear')} <small>(${t('asOf')}: ${b.asOf})</small></li>`).join('');
  const title = fill(t('fdTitle'), { n: fill(t('years'), { n: y }) });
  lastSpeech = title + '. ' + top.map((b, i) => `${i + 1}. ${b.bank}, ${b.rate}% ${t('perYear')}.`).join(' ') + ' ' + t('fdNote') + ' ' + t('otpNote');
  return banner() + `<h2>${title}</h2>` +
    (rows ? `<ol class="rates">${rows}</ol>` : `<p>${t('noRates')}</p>`) +
    `<div class="result no"><p>${t('fdNote')}</p><p><b>${t('otpNote')}</b></p>
     <p class="small">${t('lastChecked')}: ${DATA.lastVerified}</p></div>` +
    (rows ? `<button class="btn primary" onclick="speak(lastSpeech)">🔊 ${t('readAloud')}</button><p id="speakMsg" class="speak-msg" role="status" aria-live="polite"></p>` : '') +
    official(top.slice(0, 3).map(b => ({ label: b.bank + ' website', url: (DATA.banks.find(x => x.bank === b.bank) || {}).site })).filter(x => x.url)) + backBtn();
};

// ----- Module 5: Document checklist (ticks are saved on the phone) -----
views.docs = task => {
  if (!task) {
    return banner() + `<h2>${t('chooseTask')}</h2>` +
      Object.keys(taskKey).map(k => `<button class="btn" onclick="render('docs','${k}')">${DEMO[k]} ${t(taskKey[k])}</button>`).join('') +
      backBtn();
  }
  const items = L(DATA.checklists[task]);
  const saved = JSON.parse(localStorage.getItem('chk_' + task) || '[]');
  const list = items.map((d, i) =>
    `<label class="check"><input type="checkbox" ${saved.includes(i) ? 'checked' : ''}
      onchange="toggle('${task}',${i})"> ${d}</label>`).join('');
  return banner() + `<h2>${fill(t('docsTitle'), { x: t(taskKey[task]) })}</h2>${list}${official(DATA.official.docs[task])}<button class="btn" onclick="render('docs')">📋 ${t('backDocs')}</button>${backBtn()}`;
};

function toggle(task, i) {
  let s = JSON.parse(localStorage.getItem('chk_' + task) || '[]');
  s = s.includes(i) ? s.filter(x => x !== i) : [...s, i];
  localStorage.setItem('chk_' + task, JSON.stringify(s));
}

// ----- Module 6: Helplines -----
views.help = () => banner() + DATA.helplines.map(h =>
  `<a class="btn primary call" href="tel:${h.number}">📞 ${t('call')} ${L(h.label)}: ${h.number}</a>`).join('') +
  official(DATA.official.help) + backBtn();

// ============ 6. SHOW A SCREEN + START THE APP ============
const MOD = { pension: 'pension', pensionIncome: 'pension', pensionResult: 'pension',
  ayushman: 'ayushman', ayushmanResult: 'ayushman', transit: 'transit', transitResult: 'transit',
  fd: 'fd', fdResult: 'fd', docs: 'docs', help: 'help' };

function render(name, arg) {
  if (MOD[name]) answers.mod = MOD[name];
  const banner = (name !== 'home' && answers.mod)
    ? `<div class="banner c-${answers.mod}"><span class="ico">${SVG[answers.mod]}</span><h2>${t(answers.mod)}</h2></div>` : '';
  $('#app').innerHTML = banner + views[name](arg);
  window.scrollTo(0, 0);
}


// ============ WELCOME SCREEN BACKGROUND: friendly old-people faces, placed at random ============
const FACE = (() => {
  const ink = '#3B2415', brow = '#8E949B', skin = ['#F6C9A8', '#F2BE98', '#EBB48C'];
  const open = (x, dx = 0) => `<circle cx="${x}" cy="30" r="3.6" fill="#fff"/><circle cx="${x + dx}" cy="30.5" r="1.9" fill="${ink}"/>`;
  const up = x => `<path d="M${x - 4} 31q4-5 8 0" stroke="${ink}" stroke-width="1.8" fill="none" stroke-linecap="round"/>`;
  const down = x => `<path d="M${x - 4} 30q4 4 8 0" stroke="${ink}" stroke-width="1.8" fill="none" stroke-linecap="round"/>`;
  const smile = '<path d="M23 41q9 8 18 0" stroke="#7A3B24" stroke-width="2" fill="none" stroke-linecap="round"/>';
  const EXPR = {
    smile:    { l: open(24), r: open(40), m: smile, b: 24 },
    laugh:    { l: up(24), r: up(40), b: 23,
                m: '<path d="M22 39q10 15 20 0z" fill="#7A2430"/><ellipse cx="32" cy="46" rx="4.500" ry="2.400" fill="#E8707A"/>' },
    surprise: { l: open(24), r: open(40), b: 20, m: '<ellipse cx="32" cy="45" rx="3.600" ry="4.600" fill="#7A2430"/>' },
    wink:     { l: open(24), r: up(40), m: smile, b: 24 },
    calm:     { l: down(24), r: down(40), b: 24, m: '<path d="M26 42q6 4 12 0" stroke="#7A3B24" stroke-width="2" fill="none" stroke-linecap="round"/>' },
    think:    { l: open(24, 1.600), r: open(40, 1.600), b: 22, m: '<path d="M27 43q5-2.500 10 0" stroke="#7A3B24" stroke-width="2" fill="none" stroke-linecap="round"/>' }
  };
  const brows = (y) => `<path d="M19 ${y}q5-3 10 0M35 ${y}q5-3 10 0" stroke="${brow}" stroke-width="2.400" fill="none" stroke-linecap="round"/>`;
  const cheeks = '<circle cx="21" cy="38" r="3" fill="#F08A7A" fill-opacity=".45"/><circle cx="43" cy="38" r="3" fill="#F08A7A" fill-opacity=".45"/>';
  const glasses = '<g fill="#fff" fill-opacity=".3" stroke="#4A4F57" stroke-width="1.500"><rect x="18" y="25" width="12" height="11" rx="4"/><rect x="34" y="25" width="12" height="11" rx="4"/></g><path d="M30 30h4" stroke="#4A4F57" stroke-width="1.500"/>';
  function grandpa(e, s) {
    return `<circle cx="14" cy="35" r="4" fill="${s}"/><circle cx="50" cy="35" r="4" fill="${s}"/>
      <ellipse cx="32" cy="33" rx="18" ry="21" fill="${s}"/>
      <path d="M14.500 34C12 22 17 14 23 13c-3 5-3 13-1.500 18z" fill="#B8BCC2"/><path d="M49.500 34C52 22 47 14 41 13c3 5 3 13 1.500 18z" fill="#B8BCC2"/>
      ${brows(e.b)}${e.l}${e.r}${glasses}${cheeks}${e.m}`;
  }
  function grandma(e, s) {
    const curls = [[13, 26, 8], [12, 38, 8], [51, 26, 8], [52, 38, 8], [19, 14, 8], [32, 10, 9], [45, 14, 8], [10, 32, 6], [54, 32, 6]]
      .map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#BDBFC4"/>`).join('');
    const fringe = [[23, 19, 6], [32, 17, 6.500], [41, 19, 6]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#C9CBD0"/>`).join('');
    return `${curls}<ellipse cx="32" cy="36" rx="17" ry="19" fill="${s}"/>${fringe}
      <g transform="translate(0 3)">${brows(e.b + 1)}${e.l}${e.r}${cheeks}${e.m}</g>`;
  }
  return (who, expr) => {
    const s = skin[Math.floor(Math.random() * skin.length)], e = EXPR[expr];
    return `<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">${who === 'pa' ? grandpa(e, s) : grandma(e, s)}</svg>`;
  };
})();

function scatterFaces(box) {
  if (!box) return;
  const W = box.clientWidth || innerWidth, H = box.clientHeight || innerHeight;
  const base = W < 500 ? 58 : 76, step = base * 1.25;
  const cols = Math.ceil(W / step), rows = Math.ceil(H / step), cw = W / cols, rh = H / rows;
  const exprs = ['smile', 'laugh', 'surprise', 'wink', 'calm', 'think'];
  const pick = list => list[Math.floor(Math.random() * list.length)];
  let html = '';
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const size = Math.round(base * (0.8 + Math.random() * 0.4));
    const x = c * cw + Math.random() * Math.max(1, cw - size), y = r * rh + Math.random() * Math.max(1, rh - size);
    html += `<div class="sp-face" style="left:${x | 0}px;top:${y | 0}px;width:${size}px;height:${size}px;transform:rotate(${(Math.random() * 50 - 25) | 0}deg)">${FACE(Math.random() < 0.5 ? 'pa' : 'ma', pick(exprs))}</div>`;
  }
  box.innerHTML = html;
}

// ----- Welcome (splash) screen: shown for 5 seconds when the app opens -----
function hideSplash() {
  const sp = $('#splash');
  if (!sp || sp.classList.contains('hide')) return;
  sp.classList.add('hide');
  setTimeout(() => sp.remove(), 600);
}

function showSplash() {
  scatterFaces($('#spFaces'));
  $('#spName').textContent = t('appName');
  $('#spTag').textContent = t('splashTag');
  $('#spSkip').textContent = t('splashStart');
  setTimeout(hideSplash, 5000);
}

function init() {
  document.body.style.fontSize = size + 'px';
  DATA = window.RULES;          // data/rules.js is loaded before this file
  setLang(lang);
  showSplash();
}
init();

// ============ 7. OFFLINE SUPPORT ============
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js'));
}
