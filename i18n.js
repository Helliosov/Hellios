/* HELLIOS bilingual UI: English is the source text; Russian is a full site translation. */
(() => {
  'use strict';
  const translations = {
    'Work':'Проекты',
    'Expertise':'Услуги',
    'About':'О нас',
    "Let's talk":'Связаться',
    'Independent software development':'Независимая разработка ПО',
    'Ideas into working systems.':'Превращаем идеи в работающие решения.',
    'We turn complex workflows into clean software — custom bots, web dashboards, API integrations and intelligent automation.':'Создаём удобные программные решения для сложных задач: боты, веб-панели, API-интеграции и интеллектуальная автоматизация.',
    'Start a project':'Обсудить проект',
    'Explore selected work':'Смотреть проекты',
    'Custom systems':'Системы под задачу',
    'Built around your workflow':'Под ваши процессы',
    'API connected':'API-интеграции',
    'Services working together':'Объединяем сервисы',
    'Intelligent automation':'Умная автоматизация',
    'Less manual work':'Меньше рутины',
    'SOFTWARE / WEB / AUTOMATION':'РАЗРАБОТКА / ВЕБ / АВТОМАТИЗАЦИЯ',
    'SCROLL TO EXPLORE':'ЛИСТАЙТЕ НИЖЕ',
    'EST. DIGITAL-FIRST':'РАБОТАЕМ ОНЛАЙН',
    '01 / Selected work':'01 / Наши проекты',
    'Built to make things work.':'Проекты, которые решают задачи.',
    'A selection of working systems and experiments. Project status is clearly marked.':'Реализованные системы и экспериментальные разработки. Статус каждого проекта указан отдельно.',
    '01 / DISCORD INFRASTRUCTURE':'01 / DISCORD-ИНФРАСТРУКТУРА',
    'WORKING PROJECT':'РАБОТАЮЩИЙ ПРОЕКТ',
    'Multi-server Discord management system with a connected web panel. Curator workflows, appeals, moderation logs, activity analytics and permission-aware administration.':'Система управления несколькими Discord-серверами с веб-панелью: обращения к кураторам, модерация, журналы событий, аналитика активности и разграничение прав доступа.',
    'STATE / SHOWCASE':'STATE / ПРЕЗЕНТАЦИЯ',
    'VIEW ARTWORK':'ОТКРЫТЬ ИЛЛЮСТРАЦИЮ',
    '02 / WEB3 INTERFACE':'02 / WEB3-ИНТЕРФЕЙС',
    'PROTOTYPE':'ПРОТОТИП',
    'ELYVAR / REAL SCREENSHOT':'ELYVAR / СКРИНШОТ ПРОЕКТА',
    'VIEW SHOWCASE':'ОТКРЫТЬ СКРИНШОТ',
    'Token-launch workflow concept with a responsive interface and mock API. Real blockchain execution is not implemented.':'Концепт платформы для запуска токенов с адаптивным интерфейсом и демонстрационным API. Реальные операции с блокчейном пока не реализованы.',
    '03 / AUTOMATION':'03 / АВТОМАТИЗАЦИЯ',
    'DEMO VIDEO':'ВИДЕОДЕМОНСТРАЦИЯ',
    'AI-powered service workflow demonstration with Telegram messaging and automated request handling. Watch the workflow in action.':'Демонстрация автоматизации обработки обращений с помощью ИИ и Telegram. Работа системы показана на видео.',
    'AI ADMINISTRATOR / WALKTHROUGH':'ИИ-АДМИНИСТРАТОР / ОБЗОР',
    'VIDEO DEMO':'ВИДЕОДЕМО',
    'Your browser does not support HTML5 video.':'Ваш браузер не поддерживает видео HTML5.',
    '02 / Expertise':'02 / Компетенции',
    'Tools that move work forward.':'Инструменты для реальных задач.',
    'From a focused feature to an integrated internal system, the goal is useful software that solves the actual problem.':'От отдельной функции до полноценной системы — создаём ПО, которое решает конкретные задачи.',
    'Telegram & Discord bots':'Боты Telegram и Discord',
    'Custom commands, moderation, notifications and workflow integrations.':'Команды, модерация, уведомления и интеграция с рабочими процессами.',
    'Web applications':'Веб-приложения',
    'Dashboards, internal tools and responsive web interfaces.':'Панели управления, внутренние сервисы и адаптивные интерфейсы.',
    'API & backend':'API и серверная разработка',
    'Connected services, data flows, databases and backend features.':'Интеграция сервисов, обработка данных, базы данных и серверная логика.',
    'AI automation':'ИИ-автоматизация',
    'Messaging, workflow orchestration and repetitive-task automation.':'Обработка сообщений, организация процессов и автоматизация рутины.',
    '03 / Approach':'03 / Подход',
    'Clarity in every layer.':'Понятно на каждом этапе.',
    'Practical engineering, thoughtful interfaces and clear communication.':'Практичная разработка, продуманные интерфейсы и прозрачное взаимодействие.',
    'HOW WE THINK':'НАШ ПОДХОД',
    'Make complexity feel simple.':'Сложное делаем понятным.',
    'Every project starts with the real workflow, not a list of fashionable technologies. The focus is on understandable requirements, maintainable integrations and an interface people can actually use.':'Начинаем с реальных задач, а не с модных технологий. Уточняем требования, создаём поддерживаемые интеграции и удобные интерфейсы.',
    'Technical details and screenshots are shared when permitted.':'Технические подробности и скриншоты публикуются только с разрешения.',
    'OUR PROCESS':'ЭТАПЫ РАБОТЫ',
    'Understand the scope':'Изучаем задачу',
    'Design the workflow':'Проектируем решение',
    'Build and integrate':'Разрабатываем и интегрируем',
    'Test, refine, deliver':'Тестируем и сдаём проект',
    '04 / Contact':'04 / Контакты',
    "Let's build something":'Создадим что-то',
    'worth using.':'действительно полезное.',
    'Have a project in mind? Share the scope, features and timeline.':'Есть идея? Расскажите о задаче, функциях и сроках.',
    "Let's figure out the right approach.":'Вместе подберём подходящее решение.',
    'Message on Telegram':'Написать в Telegram',
    'HELLIOS. BUILT WITH INTENT.':'HELLIOS. СОЗДАЁМ СО СМЫСЛОМ.',
    'GITHUB':'GITHUB',
    'BACK TO TOP':'НАВЕРХ',
    'COMPLETED':'ЗАВЕРШЁН',
    'DEMO':'ДЕМО',
    'IN PROGRESS':'В РАЗРАБОТКЕ',
    'SOFTWARE':'ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ',
    'WEB APPLICATION':'ВЕБ-ПРИЛОЖЕНИЕ'
  };
  const attrs = {
    'Main navigation':'Основная навигация',
    'HELLIOS home':'HELLIOS — на главную',
    'HELLIOS profile avatar':'Аватар HELLIOS',
    'Open State Kutuzovsky dashboard concept artwork':'Открыть концепт-иллюстрацию панели State Kutuzovsky',
    'State Kutuzovsky dashboard showcase artwork with server panels, moderation logs and analytics':'Концепт-иллюстрация панели State Kutuzovsky с серверами, логами и аналитикой',
    'Open actual ELYVAR project screenshot':'Открыть настоящий скриншот проекта ELYVAR',
    'Real ELYVAR prototype interface screenshot':'Скриншот интерфейса прототипа ELYVAR',
    'AI Administrator demonstration video':'Демонстрационное видео ИИ-администратора',
    'Technologies':'Технологии'
  };
  const originals = new WeakMap();
  const attrOriginals = new WeakMap();
  const excluded = new Set(['SCRIPT','STYLE','NOSCRIPT','TEXTAREA']);
  let language = 'en';
  function translateText(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.parentElement || excluded.has(node.parentElement.tagName)) continue;
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      const source = originals.get(node);
      const key = source.trim();
      if (!key) continue;
      const translated = language === 'ru' ? (translations[key] || key) : key;
      node.nodeValue = source.replace(key, translated);
    }
  }
  function applyLanguage(next) {
    language = next === 'ru' ? 'ru' : 'en';
    document.documentElement.lang = language;
    document.title = language === 'ru' ? 'HELLIOS — Разработка и автоматизация' : 'HELLIOS — Software & Automation';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = language === 'ru' ? 'HELLIOS — разработка сайтов, веб-панелей, ботов и ИИ-автоматизации.' : 'HELLIOS — custom software, web dashboards, bots and AI automation.';
    translateText(document.body);
    for (const element of document.querySelectorAll('[data-i18n-en]')) {
      const value = element.getAttribute('data-i18n-' + language);
      if (value !== null) element.textContent = value;
    }
    for (const element of document.querySelectorAll('[aria-label], [alt]')) {
      if (!attrOriginals.has(element)) attrOriginals.set(element, {alt:element.getAttribute('alt'), aria:element.getAttribute('aria-label')});
      const original = attrOriginals.get(element);
      for (const [attribute,source] of [['alt',original.alt],['aria-label',original.aria]]) {
        if (source !== null && attrs[source]) element.setAttribute(attribute, language === 'ru' ? attrs[source] : source);
      }
    }
    for (const button of document.querySelectorAll('.lang-btn')) button.setAttribute('aria-pressed', String(button.dataset.lang === language));
    try { localStorage.setItem('hellios-language',language); } catch (_) {}
  }
  window.helliosApplyLanguage = applyLanguage;
  document.querySelectorAll('.lang-btn').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
  window.addEventListener('hellios:projects-loaded', () => applyLanguage(language));
  let preferred = 'en';
  try { preferred = localStorage.getItem('hellios-language') || 'en'; } catch (_) {}
  const param = new URLSearchParams(location.search).get('lang');
  if (param === 'en' || param === 'ru') preferred = param;
  applyLanguage(preferred);
  // GitHub avatar remains visible while a fresh Telegram avatar is tested.
  // Telegram's public avatar URL is not an authenticated, guaranteed API.
  const avatar = document.getElementById('telegram-avatar');
  if (avatar) {
    const githubAvatar = 'https://avatars.githubusercontent.com/u/263466763?v=4';
    avatar.addEventListener('error', () => {
      if (avatar.src !== githubAvatar && !avatar.dataset.githubFallback) {
        avatar.dataset.githubFallback = '1';
        avatar.src = githubAvatar;
      } else {
        avatar.style.display = 'none';
        const fallback = avatar.nextElementSibling;
        if (fallback) fallback.style.display = 'grid';
      }
    });
    const telegramAvatar = new Image();
    telegramAvatar.referrerPolicy = 'no-referrer';
    telegramAvatar.onload = () => {
      if (telegramAvatar.naturalWidth > 0) {
        avatar.src = telegramAvatar.src;
        avatar.style.display = 'block';
      }
    };
    telegramAvatar.src = 'https://t.me/i/userpic/320/sru58xfzpmq.jpg?refresh=' + Math.floor(Date.now()/3600000);
  }
})();
