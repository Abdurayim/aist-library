const translations = {
  en: {
    school: "Ahmad International School in Tashkent",
    navigation: "Library categories",
    language: "Website language",
    lightTheme: "Switch to light mode",
    darkTheme: "Switch to dark mode",
    skip: "Skip to libraries",
    readingRoom: "The digital reading room",
    headline: "A world of books",
    headlineAccent: "within reach.",
    intro: "Explore free ebooks and audiobooks from Uzbekistan and around the world.",
    browse: "Explore the libraries",
    catalog: "Library directory",
    search: "Search libraries",
    uzbek: "Uzbek libraries",
    uzbekDescription: "Literature, audiobooks, and learning resources from Uzbekistan.",
    foreign: "Foreign libraries",
    foreignDescription: "Open collections of books and audiobooks from around the world.",
    ebooks: "Ebooks",
    audio: "Audiobooks",
    both: "Ebooks & audio",
    study: "Study resources",
    open: "No sign-up required",
    mixed: "Free titles and Premium options",
    publicFiles: "Public downloads available",
    visit: "Visit library",
    newTab: "opens in a new tab",
    empty: "No libraries match your search.",
    results: (count) => count === 1 ? "1 library found." : count + " libraries found.",
    top: "Back to top"
  },
  uz: {
    school: "Toshkentdagi Ahmad xalqaro maktabi",
    navigation: "Kutubxona bo‘limlari",
    language: "Sayt tili",
    lightTheme: "Yorug‘ rejimga o‘tish",
    darkTheme: "Qorong‘i rejimga o‘tish",
    skip: "Kutubxonalarga o‘tish",
    readingRoom: "Raqamli o‘quv zali",
    headline: "Kitoblar olami",
    headlineAccent: "bir qadam narida.",
    intro: "O‘zbekiston va jahon kutubxonalaridan bepul elektron va audiokitoblarni toping.",
    browse: "Kutubxonalarni ko‘rish",
    catalog: "Kutubxonalar katalogi",
    search: "Kutubxonalarni qidirish",
    uzbek: "O‘zbekiston kutubxonalari",
    uzbekDescription: "O‘zbekistondagi adabiyot, audiokitoblar va o‘quv manbalari.",
    foreign: "Xorijiy kutubxonalar",
    foreignDescription: "Jahon kutubxonalarining ochiq kitob va audiokitob to‘plamlari.",
    ebooks: "Elektron kitoblar",
    audio: "Audiokitoblar",
    both: "Elektron va audiokitoblar",
    study: "O‘quv manbalari",
    open: "Ro‘yxatdan o‘tish shart emas",
    mixed: "Bepul va Premium kitoblar",
    publicFiles: "Ochiq fayllarni yuklab olish mumkin",
    visit: "Kutubxonaga o‘tish",
    newTab: "yangi varaqda ochiladi",
    empty: "Qidiruvga mos kutubxona topilmadi.",
    results: (count) => count + " ta kutubxona topildi.",
    top: "Yuqoriga"
  },
  ru: {
    school: "Международная школа «Ахмад» в Ташкенте",
    navigation: "Разделы библиотеки",
    language: "Язык сайта",
    lightTheme: "Включить светлую тему",
    darkTheme: "Включить тёмную тему",
    skip: "Перейти к библиотекам",
    readingRoom: "Цифровой читальный зал",
    headline: "Мир книг",
    headlineAccent: "под рукой.",
    intro: "Бесплатные электронные книги и аудиокниги из Узбекистана и со всего мира.",
    browse: "Смотреть библиотеки",
    catalog: "Каталог библиотек",
    search: "Поиск библиотек",
    uzbek: "Библиотеки Узбекистана",
    uzbekDescription: "Литература, аудиокниги и учебные материалы из Узбекистана.",
    foreign: "Зарубежные библиотеки",
    foreignDescription: "Открытые коллекции книг и аудиокниг со всего мира.",
    ebooks: "Электронные книги",
    audio: "Аудиокниги",
    both: "Книги и аудиокниги",
    study: "Учебные материалы",
    open: "Регистрация не нужна",
    mixed: "Бесплатные книги и премиум",
    publicFiles: "Доступны открытые файлы",
    visit: "Открыть библиотеку",
    newTab: "откроется в новой вкладке",
    empty: "По вашему запросу ничего не найдено.",
    results: (count) => "Найдено библиотек: " + count + ".",
    top: "Наверх"
  }
};

const libraries = {
  uzbek: [
    {
      name: "Mutolaa",
      url: "https://mutolaa.com/uz",
      keywords: "mutola мутола ўзбек",
      format: "both",
      access: "mixed",
      photo: "headphones",
      description: {
        en: "Read and listen to Uzbek classics and translations of world literature. Look for free titles in the catalogue.",
        uz: "O‘zbek mumtoz asarlari va jahon adabiyoti tarjimalarini o‘qing yoki tinglang. Katalogdan bepul kitoblarni tanlang.",
        ru: "Узбекская классика и переводы мировой литературы для чтения и прослушивания. Ищите бесплатные книги в каталоге."
      }
    },
    {
      name: "Ziyouz",
      url: "https://n.ziyouz.com/kutubxona",
      keywords: "zio.uz zio ziyo зиё зиёуз",
      format: "ebooks",
      access: "open",
      photo: "open-book",
      description: {
        en: "Browse Uzbek poetry, prose, folklore, and dictionaries, alongside translations of world literature.",
        uz: "O‘zbek she’riyati, nasri, xalq og‘zaki ijodi, lug‘atlar va jahon adabiyoti tarjimalarini toping.",
        ru: "Узбекская поэзия, проза, фольклор и словари, а также переводы мировой литературы."
      }
    },
    {
      name: { en: "National Library of Uzbekistan", uz: "O‘zbekiston Milliy kutubxonasi", ru: "Национальная библиотека Узбекистана" },
      url: "https://qr.natlib.uz/book/all",
      keywords: "natlib alisher navoiy навои",
      format: "ebooks",
      access: "open",
      photo: "facade",
      description: {
        en: "Explore the national library’s open ebook collection, from fiction and folktales to history and study guides.",
        uz: "Milliy kutubxonaning ochiq to‘plamida badiiy asarlar, ertaklar, tarixiy kitoblar va qo‘llanmalarni toping.",
        ru: "Открытая коллекция электронной литературы: художественные произведения, сказки, история и учебные пособия."
      }
    },
    {
      name: "ZiyoNET",
      url: "https://library.ziyonet.uz/",
      keywords: "ziyo зионет зиёнет pdf",
      format: "study",
      access: "publicFiles",
      photo: "desk",
      description: {
        en: "Find textbooks, research, and study materials. Filter the education portal by subject, language, and level.",
        uz: "Darsliklar, tadqiqotlar va o‘quv materiallarini yo‘nalish, til yoki ta’lim darajasi bo‘yicha qidiring.",
        ru: "Учебники, исследования и учебные материалы с фильтрами по теме, языку и уровню образования."
      }
    }
  ],
  foreign: [
    {
      name: "Project Gutenberg",
      url: "https://www.gutenberg.org/",
      keywords: "гутенберг epub kindle",
      format: "both",
      access: "open",
      photo: "globe",
      description: {
        en: "Read or download classic literature in several languages. The collection also includes audiobooks.",
        uz: "Turli tillardagi mumtoz asarlarni o‘qing yoki yuklab oling. To‘plamda audiokitoblar ham bor.",
        ru: "Читайте и скачивайте классические произведения на разных языках. В коллекции есть и аудиокниги."
      }
    },
    {
      name: "LibriVox",
      url: "https://librivox.org/search",
      keywords: "либривокс librivoks mp3",
      format: "audio",
      access: "open",
      photo: "headphones",
      description: {
        en: "Stream or download classic audiobooks in several languages, narrated by volunteers.",
        uz: "Ko‘ngillilar turli tillarda ovoz bergan mumtoz audiokitoblarni tinglang yoki yuklab oling.",
        ru: "Слушайте онлайн или скачивайте классические аудиокниги на разных языках в озвучке волонтёров."
      }
    },
    {
      name: { en: "Library of Congress", uz: "AQSh Kongress kutubxonasi", ru: "Библиотека Конгресса США" },
      url: "https://www.loc.gov/free-to-use/classic-childrens-books",
      keywords: "loc children bolalar детские сказки",
      format: "ebooks",
      access: "open",
      photo: "open-book",
      description: {
        en: "Read illustrated children’s classics online, including fairy tales, adventure stories, and nursery rhymes.",
        uz: "Rasmlar bilan bezatilgan bolalar ertaklari, sarguzasht hikoyalari va she’rlarini onlayn o‘qing.",
        ru: "Читайте онлайн иллюстрированную детскую классику: сказки, приключения и стихи."
      }
    },
    {
      name: { en: "Russian Wikisource", uz: "Ruscha Vikimanba", ru: "Викитека" },
      url: "https://ru.wikisource.org/",
      keywords: "wikisource викитека russian русский",
      format: "ebooks",
      access: "open",
      photo: "desk",
      description: {
        en: "Read Russian-language poetry, fiction, and historical texts in this open digital library.",
        uz: "Ochiq raqamli kutubxonada rus tilidagi she’riyat, badiiy asarlar va tarixiy matnlarni o‘qing.",
        ru: "Русскоязычная поэзия, художественная литература и исторические тексты в открытой библиотеке."
      }
    },
    {
      name: "Standard Ebooks",
      url: "https://standardebooks.org/ebooks",
      keywords: "classics epub kindle классика mumtoz",
      format: "ebooks",
      access: "open",
      photo: "classics",
      description: {
        en: "Download carefully proofread editions of classic novels, short stories, and poetry for your ereader.",
        uz: "Sinchiklab tahrirlangan mumtoz romanlar, hikoyalar va she’rlarni elektron qurilmangizga yuklab oling.",
        ru: "Скачивайте тщательно вычитанные издания классических романов, рассказов и стихов для электронной читалки."
      }
    },
    {
      name: "Lit2Go",
      url: "https://etc.usf.edu/lit2go/",
      keywords: "english mp3 read along inglizcha английский",
      format: "both",
      access: "open",
      photo: "microphone",
      description: {
        en: "Listen to English stories and poems while following along with the text. Browse by genre or reading level.",
        uz: "Inglizcha hikoya va she’rlarni tinglab, matnini ham o‘qing. Janr yoki o‘qish darajasi bo‘yicha tanlang.",
        ru: "Слушайте рассказы и стихи на английском, следя за текстом. Выбирайте по жанру или уровню чтения."
      }
    },
    {
      name: "Storynory",
      url: "https://www.storynory.com/",
      keywords: "children kids english fairy tales bolalar ertaklar сказки",
      format: "audio",
      access: "open",
      photo: "fairytale",
      description: {
        en: "Listen to narrated fairy tales, myths, and original stories in English, with transcripts for reading along.",
        uz: "Ingliz tilidagi ertaklar, afsonalar va mualliflik hikoyalarini tinglang va matnini birga o‘qing.",
        ru: "Слушайте сказки, мифы и авторские истории на английском. Текст доступен для чтения вместе с записью."
      }
    },
    {
      name: "Global Digital Library",
      url: "https://digitallibrary.io/?contentLanguage=en",
      keywords: "children reading levels multilingual bolalar дети",
      format: "ebooks",
      access: "open",
      photo: "tablet",
      description: {
        en: "Find illustrated books for early readers in many languages. Choose a language and reading level to start.",
        uz: "Ilk kitobxonlar uchun turli tillardagi rasmli kitoblarni toping. Til va o‘qish darajasini tanlang.",
        ru: "Иллюстрированные книги для начинающих читателей на разных языках. Выберите язык и уровень чтения."
      }
    },
    {
      name: "African Storybook",
      url: "https://www.africanstorybook.org/",
      keywords: "children picture books africa bolalar африка",
      format: "ebooks",
      access: "open",
      photo: "african-stories",
      description: {
        en: "Read or download illustrated stories for young readers in African languages and English.",
        uz: "Yosh kitobxonlar uchun Afrika tillari va ingliz tilidagi rasmli hikoyalarni o‘qing yoki yuklab oling.",
        ru: "Читайте и скачивайте иллюстрированные истории для детей на африканских языках и английском."
      }
    },
    {
      name: "Gallica",
      url: "https://gallica.bnf.fr/accueil/en/html/accueil-en",
      keywords: "france french bnf manuscripts fransuz французский",
      format: "ebooks",
      access: "open",
      photo: "archive",
      description: {
        en: "Explore digitized books and manuscripts from the National Library of France, including French literary classics.",
        uz: "Fransiya Milliy kutubxonasining raqamlashtirilgan kitob va qo‘lyozmalarini, jumladan fransuz mumtoz asarlarini ko‘ring.",
        ru: "Оцифрованные книги и рукописи Национальной библиотеки Франции, включая французскую литературную классику."
      }
    },
    {
      name: "OpenStax",
      url: "https://openstax.org/k12",
      keywords: "textbooks maths science biology darslik fizika учебники математика",
      format: "study",
      access: "open",
      photo: "science",
      description: {
        en: "Read or download school textbooks in subjects such as math and science from Rice University’s open library.",
        uz: "Rice universitetining ochiq kutubxonasidan matematika va tabiiy fanlar bo‘yicha darsliklarni o‘qing yoki yuklab oling.",
        ru: "Читайте или скачивайте школьные учебники по математике и естественным наукам из открытой библиотеки Университета Райса."
      }
    },
    {
      name: "Unite for Literacy",
      url: "https://www.uniteforliteracy.com/",
      keywords: "read aloud picture books kids bolalar чтение вслух",
      format: "both",
      access: "open",
      photo: "picture-books",
      description: {
        en: "Read short picture books about everyday life and listen to narration in English and other languages.",
        uz: "Kundalik hayot haqidagi qisqa rasmli kitoblarni o‘qing, ingliz yoki boshqa tillardagi ovozli bayonini tinglang.",
        ru: "Читайте короткие книжки с картинками о повседневной жизни и слушайте озвучку на английском и других языках."
      }
    }
  ]
};

const icons = {
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4"/>',
  moon: '<path d="M20.8 15.2A9 9 0 0 1 8.8 3.2 9 9 0 1 0 20.8 15.2Z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  book: '<path d="M12 6C9 4 6 4 3 5v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Zm0 0v14"/>',
  down: '<path d="M12 4v15m-6-6 6 6 6-6"/>',
  up: '<path d="M12 20V5m-6 6 6-6 6 6"/>',
  search: '<circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 5 5"/>',
  landmark: '<path d="m3 9 9-5 9 5H3Zm2 11h14M7 10v7m5-7v7m5-7v7M3 20h18"/>',
  headphones: '<path d="M4 13v-1a8 8 0 0 1 16 0v1M4 13h2a2 2 0 0 1 2 2v4H6a2 2 0 0 1-2-2Zm16 0h-2a2 2 0 0 0-2 2v4h2a2 2 0 0 0 2-2Z"/>',
  external: '<path d="M13 5h6v6m0-6-9 9m7-1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h5"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>'
};

const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = themeToggle.querySelector(".icon");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
const root = document.documentElement;
const languageControl = document.querySelector("#language");
const searchInput = document.querySelector("#library-search");
const template = document.querySelector("#library-card");
const searchStatus = document.querySelector("#search-status");
const emptyState = document.querySelector("#empty-state");
const localizedText = document.querySelectorAll("[data-copy]");
const sections = Object.entries(libraries).map(([id, items]) => ({
  section: document.getElementById(id),
  grid: document.getElementById(id + "-cards"),
  items
}));

function drawIcon(element, name) {
  element.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icons[name] + '</svg>';
}

function loadLanguage() {
  try {
    const saved = localStorage.getItem("iist-dash-language");
    if (Object.hasOwn(translations, saved)) return saved;
  } catch {
    // Language switching still works when browser storage is unavailable.
  }
  return "en";
}

let language = loadLanguage();

function isDarkTheme() {
  return root.dataset.theme ? root.dataset.theme === "dark" : systemTheme.matches;
}

function renderThemeToggle() {
  const dark = isDarkTheme();
  const copy = translations[language];
  const label = dark ? copy.lightTheme : copy.darkTheme;
  drawIcon(themeIcon, dark ? "sun" : "moon");
  themeToggle.setAttribute("aria-label", label);
  themeToggle.title = label;
  themeToggle.hidden = false;
}

themeToggle.addEventListener("click", () => {
  const theme = isDarkTheme() ? "light" : "dark";
  root.dataset.theme = theme;
  try {
    localStorage.setItem("aist-library-theme", theme);
  } catch {
    // The theme still applies to the current page.
  }
  renderThemeToggle();
});

systemTheme.addEventListener("change", renderThemeToggle);

function normalizeSearch(value) {
  return value.toLowerCase().normalize("NFKD")
    .replace(/\p{M}|['‘’ʻʼ`´]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function renderCard(library, copy) {
  const card = template.content.cloneNode(true);
  const name = typeof library.name === "string" ? library.name : library.name[language];
  const photo = card.querySelector(".card-photo");
  const access = card.querySelector(".access");
  const link = card.querySelector(".visit-link");

  photo.style.setProperty("--card-image", "var(--photo-" + library.photo + ")");
  card.querySelector("h4").textContent = name;
  card.querySelector(".card-description").textContent = library.description[language];
  card.querySelector(".format-label").textContent = copy[library.format];
  card.querySelector(".access-label").textContent = copy[library.access];
  card.querySelector(".visit-label").textContent = copy.visit;
  access.classList.toggle("access--mixed", library.access === "mixed");
  link.href = library.url;
  link.setAttribute("aria-label", copy.visit + " · " + name + " (" + copy.newTab + ")");

  drawIcon(card.querySelector(".format-badge .icon"), library.format === "audio" || library.format === "both" ? "headphones" : "book");
  drawIcon(access.querySelector(".icon"), library.access === "mixed" ? "info" : "check");
  drawIcon(link.querySelector(".icon"), "external");
  return card;
}

function renderCatalog() {
  const copy = translations[language];
  const query = normalizeSearch(searchInput.value);
  const terms = query ? query.split(" ") : [];
  let count = 0;

  for (const { section, grid, items } of sections) {
    const matches = items.filter((library) => {
      const name = typeof library.name === "string" ? library.name : Object.values(library.name).join(" ");
      const formats = Object.values(translations).map((translation) => translation[library.format]);
      const searchText = normalizeSearch([name, library.url, library.keywords, ...Object.values(library.description), ...formats].join(" "));
      return terms.every((term) => searchText.includes(term));
    });

    grid.replaceChildren(...matches.map((library) => renderCard(library, copy)));
    section.hidden = matches.length === 0;
    count += matches.length;
  }

  emptyState.hidden = count > 0;
  searchStatus.textContent = query ? copy.results(count) : "";
}

function renderLanguage() {
  const copy = translations[language];
  root.lang = language;
  renderThemeToggle();
  languageControl.value = language;
  languageControl.setAttribute("aria-label", copy.language);
  searchInput.setAttribute("aria-label", copy.search);
  searchInput.placeholder = copy.search + "…";
  document.querySelector(".main-nav").setAttribute("aria-label", copy.navigation);

  for (const element of localizedText) {
    element.textContent = copy[element.dataset.copy];
  }
  renderCatalog();
}

for (const element of document.querySelectorAll("[data-icon]")) {
  drawIcon(element, element.dataset.icon);
}

languageControl.addEventListener("change", () => {
  language = languageControl.value;
  try {
    localStorage.setItem("iist-dash-language", language);
  } catch {
    // The selection still applies to the current page.
  }
  renderLanguage();
});

searchInput.addEventListener("input", renderCatalog);

for (const link of document.querySelectorAll(".main-nav a")) {
  link.addEventListener("click", () => {
    const section = document.getElementById(link.hash.slice(1));
    if (section.hidden) {
      searchInput.value = "";
      renderCatalog();
    }
  });
}

renderLanguage();
