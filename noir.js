
/* HELLIOS NOIR — bilingual controls, case study viewer and subtle motion */
(() => {
'use strict';
const $ = s => document.querySelector(s);
const dictionary = {
  en:{view:"EXPLORE CASE ↗",close:"CLOSE ✕",overview:"OVERVIEW",built:"WHAT WAS BUILT",role:"SCOPE / TECHNOLOGY",contact:"DISCUSS A PROJECT ↗",mediaConcept:"Presentation artwork; not a product screenshot.",mediaReal:"Actual project interface screenshot.",mediaVideo:"Demonstration recording of the automation workflow."},
  ru:{view:"ОТКРЫТЬ КЕЙС ↗",close:"ЗАКРЫТЬ ✕",overview:"О ПРОЕКТЕ",built:"ЧТО РЕАЛИЗОВАНО",role:"ОБЪЁМ РАБОТ / ТЕХНОЛОГИИ",contact:"ОБСУДИТЬ ПРОЕКТ ↗",mediaConcept:"Презентационная иллюстрация, не скриншот интерфейса.",mediaReal:"Реальный скриншот интерфейса проекта.",mediaVideo:"Видеодемонстрация работы автоматизации."}
};
const cases={
  state:{
    title:"State Kutuzovsky",
    category:{en:"DISCORD INFRASTRUCTURE / 2026",ru:"DISCORD-ИНФРАСТРУКТУРА / 2026"},
    intro:{en:"An administration environment that brings moderation, curator operations and server activity into one workflow.",ru:"Среда администрирования, объединяющая модерацию, работу кураторов и активность серверов в единую систему."},
    overview:{en:"A Discord bot and a connected web management panel built around the operational needs of a multi-server roleplay community. The system focuses on actionable logs, structured appeals and role-aware tools instead of fragmented manual processes.",ru:"Discord-бот и связанная веб-панель управления для сообщества с несколькими серверами. Система объединяет журналы событий, обработку обращений и инструменты администрирования с разграничением прав."},
    points:{en:["Discord event and moderation logging","Curator workflows and appeals management","Activity monitoring and role-aware administration","Connected management dashboard"],ru:["Журналы событий и действий модерации в Discord","Рабочие процессы кураторов и обработка обращений","Мониторинг активности и разграничение прав","Связанная веб-панель управления"]},
    stack:"TypeScript · discord.js · Next.js · Prisma · PostgreSQL",
    media:"assets/state-showcase.svg",type:"image",caption:"mediaConcept",status:{en:"WORKING PROJECT · SHOWCASE ARTWORK",ru:"РАБОТАЮЩИЙ ПРОЕКТ · ПРЕЗЕНТАЦИОННАЯ ИЛЛЮСТРАЦИЯ"}
  },
  elyvar:{
    title:"ELYVAR",
    category:{en:"WEB3 INTERFACE / 2026",ru:"WEB3-ИНТЕРФЕЙС / 2026"},
    intro:{en:"A token-launch monitoring interface designed to make complex on-chain activity easier to observe and understand.",ru:"Интерфейс мониторинга запуска токенов, который делает сложные блокчейн-события наглядными и понятными."},
    overview:{en:"A responsive Web3 dashboard concept with a backend demonstration and a real interface screenshot. The public showcase represents a prototype, not a live token-launching service. Real blockchain execution has not been demonstrated as deployed.",ru:"Адаптивный Web3-интерфейс с демонстрационным бэкендом и настоящим скриншотом. В публичном портфолио проект представлен как прототип, а не действующий сервис запуска токенов. Боевые блокчейн-операции не демонстрируются как развёрнутые."},
    points:{en:["Responsive token-monitoring dashboard","Backend API integration and state handling","Live-oriented status and metadata presentation","Prototype and demonstration testing"],ru:["Адаптивная панель мониторинга токенов","Интеграция API и управление состоянием","Отображение статусов и метаданных","Прототипирование и демонстрационные проверки"]},
    stack:"React · Next.js · TypeScript · API integrations",
    media:"assets/Снимок экрана 2026-10-08 234549.png",type:"image",caption:"mediaReal",status:{en:"PROTOTYPE · REAL INTERFACE",ru:"ПРОТОТИП · РЕАЛЬНЫЙ ИНТЕРФЕЙС"}
  },
  ai:{
    title:"AI Administrator",
    category:{en:"AI AUTOMATION / 2026",ru:"ИИ-АВТОМАТИЗАЦИЯ / 2026"},
    intro:{en:"An automation demonstration that connects Telegram conversations with structured service workflows.",ru:"Демонстрация автоматизации, которая связывает переписку в Telegram со структурированными процессами обслуживания."},
    overview:{en:"A demonstration of an AI-assisted administrator that receives messages, handles requests and routes information through an automation workflow. The original walkthrough is available to watch directly in the case study.",ru:"Демонстрация ИИ-администратора: приём сообщений, обработка запросов и передача данных по автоматизированному сценарию. В кейсе доступна оригинальная видеозапись работы."},
    points:{en:["Telegram-based customer interaction","AI-assisted request handling","Workflow orchestration with n8n","Recorded end-to-end demonstration"],ru:["Общение с клиентами через Telegram","Обработка обращений с помощью ИИ","Автоматизация сценариев через n8n","Видеодемонстрация полного процесса"]},
    stack:"n8n · Telegram · AI · Workflow integrations",
    media:"assets/0911 (online-video-cutter.com).mp4",type:"video",caption:"mediaVideo",status:{en:"DEMONSTRATION · VIDEO",ru:"ДЕМОНСТРАЦИЯ · ВИДЕО"}
  }
};
let lang='en';
const switchers=[...document.querySelectorAll('.lang-btn')];
function translate(root=document){
  root.querySelectorAll('[data-en][data-ru]').forEach(el=>{
    const value=el.getAttribute('data-'+lang);
    if(value!==null) el.textContent=value;
  });
  root.querySelectorAll('[data-alt-en][data-alt-ru]').forEach(el=>el.alt=el.getAttribute('data-alt-'+lang));
}
function applyLanguage(next){
  lang=next==='ru'?'ru':'en';
  document.documentElement.lang=lang;
  document.title=lang==='ru'?'HELLIOS — Разработка цифровых систем':'HELLIOS — Independent Software Studio';
  const desc=$('meta[name="description"]');
  if(desc) desc.content=lang==='ru'?'HELLIOS — цифровые системы, боты, веб-приложения и автоматизация. Кейсы и разработка.':'HELLIOS — software systems, bots, web applications and intelligent automation. Selected work and case studies.';
  switchers.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
  translate();
  refreshArchive(true);
  try{localStorage.setItem('hellios-language',lang)}catch(e){}
  if($('#case-dialog')?.getAttribute('aria-hidden')==='false') renderCase($('#case-dialog').dataset.case);
}
switchers.forEach(b=>b.addEventListener('click',()=>applyLanguage(b.dataset.lang)));
let initial='en';try{initial=localStorage.getItem('hellios-language')||'en'}catch(e){}
const urlLang=new URLSearchParams(location.search).get('lang');
if(urlLang==='ru'||urlLang==='en')initial=urlLang;
applyLanguage(initial);
window.addEventListener('hellios:projects-loaded',()=>translate());
const avatar=$('#telegram-avatar');
if(avatar){
  const github='https://avatars.githubusercontent.com/u/263466763?v=20261014';
  const fallback=avatar.nextElementSibling;
  avatar.addEventListener('error',()=>{
    if(!avatar.dataset.githubFallback){avatar.dataset.githubFallback='1';avatar.src=github}
    else{avatar.style.display='none';if(fallback)fallback.style.display='grid'}
  });
  const telegram=new Image();
  telegram.referrerPolicy='no-referrer';
  telegram.onload=()=>{if(telegram.naturalWidth){avatar.src=telegram.src;avatar.style.display='block'}};
  telegram.src='https://t.me/i/userpic/320/helliosweb.jpg?refresh='+Math.floor(Date.now()/3600000);
}
const progress=$('#reading-progress');
let pending=false;
addEventListener('scroll',()=>{
  if(pending)return;pending=true;
  requestAnimationFrame(()=>{pending=false;const total=document.documentElement.scrollHeight-innerHeight;progress.style.transform='scaleX('+(total>0?scrollY/total:0)+')'});
},{passive:true});
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealed=[...document.querySelectorAll('.reveal')];
if(!reduce&&'IntersectionObserver' in window){
 const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.07,rootMargin:'0px 0px -30px 0px'});
 revealed.forEach(el=>io.observe(el));
}else revealed.forEach(el=>el.classList.add('visible'));
if(!reduce&&matchMedia('(hover:hover) and (pointer:fine)').matches){
 const visual=$('.hero-art');
 $('.hero')?.addEventListener('pointermove',e=>{
  const rect=e.currentTarget.getBoundingClientRect();
  const x=(e.clientX-rect.left)/rect.width-.5,y=(e.clientY-rect.top)/rect.height-.5;
  if(visual)visual.style.transform='translate3d('+(x*16)+'px,'+(y*12)+'px,0)';
 },{passive:true});
}
const dialog=$('#case-dialog'),content=$('#dialog-content'),close=$('#dialog-close');
let previousFocus=null;
const t=(obj)=>typeof obj==='string'?obj:obj?.[lang]||'';
function node(tag,className,txt){const el=document.createElement(tag);if(className)el.className=className;if(txt!==undefined)el.textContent=txt;return el}
function renderCase(key){
 const c=cases[key];if(!c||!content)return;
 content.replaceChildren();
 content.append(node('div','dialog-kicker micro',t(c.category)),node('h2','dialog-title',c.title),node('p','dialog-intro',t(c.intro)));
 const media=node('div','dialog-media');
 if(c.type==='video'){const video=document.createElement('video');video.src=c.media;video.controls=true;video.playsInline=true;video.preload='metadata';media.append(video)}
 else{const img=document.createElement('img');img.src=c.media;img.alt=c.title;img.decoding='async';media.append(img)}
 content.append(media,node('p','dialog-caption',dictionary[lang][c.caption]));
 const details=node('div','dialog-details');
 const a=node('section'),b=node('section');
 a.append(node('h3',null,dictionary[lang].overview),node('p',null,t(c.overview)));
 b.append(node('h3',null,dictionary[lang].built));
 const ul=node('ul');t(c.points).forEach(p=>ul.append(node('li',null,p)));b.append(ul);
 details.append(a,b);content.append(details);
 const meta=node('div','dialog-meta');
 meta.append(node('span',null,t(c.status)),node('span',null,c.stack));content.append(meta);
 const bottom=node('div','dialog-bottom');
 const link=node('a','contact-cta',dictionary[lang].contact);link.href='https://t.me/helliosweb';link.target='_blank';link.rel='noopener noreferrer';bottom.append(link);content.append(bottom);
 close.textContent=dictionary[lang].close;
}
function openCase(key){
 if(!cases[key])return;
 previousFocus=document.activeElement;
 dialog.dataset.case=key;
 renderCase(key);
 dialog.setAttribute('aria-hidden','false');
 document.body.classList.add('modal-open');
 dialog.scrollTop=0;
 close.focus();
}
function closeCase(){
 if(dialog.getAttribute('aria-hidden')==='true')return;
 dialog.querySelectorAll('video').forEach(v=>v.pause());
 dialog.setAttribute('aria-hidden','true');
 document.body.classList.remove('modal-open');
 if(previousFocus?.focus)previousFocus.focus();
}
document.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>openCase(button.dataset.case)));
close.addEventListener('click',closeCase);
dialog.addEventListener('click',e=>{if(e.target===dialog)closeCase()});
document.addEventListener('keydown',e=>{
 if(dialog.getAttribute('aria-hidden')!=='false')return;
 if(e.key==='Escape'){e.preventDefault();closeCase()}
 if(e.key==='Tab'){
  const focusables=[...dialog.querySelectorAll('button,a,[tabindex]:not([tabindex="-1"]),video[controls]')].filter(el=>!el.disabled);
  if(!focusables.length)return;
  const first=focusables[0],last=focusables[focusables.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
 }
});

/* The archive is a single curated display, not three exposed case cards. */
const archiveData={
 state:{num:'001 — 003',code:'FILE: SK-001',image:'assets/state-showcase.svg',category:{en:'DISCORD INFRASTRUCTURE',ru:'DISCORD-ИНФРАСТРУКТУРА'},title:'STATE KUTUZOVSKY',description:{en:'A connected Discord management system with a web dashboard, moderation logs and curator workflows.',ru:'Система управления Discord с веб-панелью, журналами модерации и инструментами кураторов.'},note:{en:'SHOWCASE ARTWORK / NOT A SCREENSHOT',ru:'ИЛЛЮСТРАЦИЯ / НЕ СКРИНШОТ'}},
 elyvar:{num:'002 — 003',code:'FILE: EL-002',image:'assets/Снимок экрана 2026-10-08 234549.png',category:{en:'WEB3 / INTERFACE',ru:'WEB3 / ИНТЕРФЕЙС'},title:'ELYVAR',description:{en:'A responsive Web3 monitoring prototype with a real interface screenshot and a tested demonstration workflow.',ru:'Адаптивный прототип Web3-мониторинга с реальным скриншотом интерфейса и проверенным демонстрационным сценарием.'},note:{en:'REAL PROJECT SCREENSHOT',ru:'РЕАЛЬНЫЙ СКРИНШОТ ПРОЕКТА'}},
 ai:{num:'003 — 003',code:'FILE: AI-003',video:'assets/0911 (online-video-cutter.com).mp4',category:{en:'INTELLIGENT AUTOMATION',ru:'ИИ-АВТОМАТИЗАЦИЯ'},title:'AI ADMINISTRATOR',description:{en:'Telegram-based request handling with AI and n8n automation, demonstrated in an original video.',ru:'Обработка обращений через Telegram с помощью ИИ и n8n. Работа показана на оригинальном видео.'},note:{en:'RECORDED WORKFLOW / VIDEO DEMO',ru:'ЗАПИСЬ РАБОТЫ / ВИДЕОДЕМО'}}
};
let activeArchive='state',archiveTimeout=null;
const archiveItems=[...document.querySelectorAll('[data-archive]')];
function refreshArchive(immediate=false){
 const data=archiveData[activeArchive];if(!data)return;
 const stage=$('#archive-image-stage');if(!stage)return;
 const img=$('#archive-image'),video=$('#archive-video');
 const render=()=>{
  archiveItems.forEach(item=>{const active=item.dataset.archive===activeArchive;item.classList.toggle('is-active',active);item.setAttribute('aria-pressed',String(active))});
  $('#archive-screen-index').textContent=data.num;
  $('#archive-file-code').textContent=data.code;
  $('#archive-title').textContent=data.title;
  $('#archive-category').textContent=data.category[lang];
  $('#archive-description').textContent=data.description[lang];
  $('#archive-media-note').textContent=data.note[lang];
  $('#archive-open').dataset.case=activeArchive;
  if(data.video){
   img.hidden=true;video.hidden=false;
   if(video.getAttribute('src')!==data.video){video.src=data.video;video.load()}
   video.muted=true;video.loop=true;video.playsInline=true;video.play().catch(()=>{});
  }else{
   video.pause();video.hidden=true;img.hidden=false;
   if(img.getAttribute('src')!==data.image)img.src=data.image;
   img.alt=data.title+(activeArchive==='state'?' presentation artwork':' real interface screenshot');
  }
  stage.classList.remove('is-switching');
 };
 if(archiveTimeout)clearTimeout(archiveTimeout);
 if(immediate||reduce){render();return}
 stage.classList.add('is-switching');
 archiveTimeout=setTimeout(render,220);
}
archiveItems.forEach(item=>{
 item.addEventListener('click',()=>{activeArchive=item.dataset.archive;refreshArchive()});
 item.addEventListener('keydown',e=>{
  if(e.key!=='ArrowDown'&&e.key!=='ArrowUp'&&e.key!=='ArrowLeft'&&e.key!=='ArrowRight')return;
  e.preventDefault();
  const current=archiveItems.indexOf(item);
  const direction=(e.key==='ArrowDown'||e.key==='ArrowRight')?1:-1;
  const next=archiveItems[(current+direction+archiveItems.length)%archiveItems.length];
  next.focus();next.click();
 });
});
/* Cursor: one RAF loop, disabled on touch devices and reduced-motion preferences. */
if(!reduce&&matchMedia('(hover:hover) and (pointer:fine)').matches){
 const core=$('#cursor-core'),ring=$('#cursor-ring'),label=$('#cursor-label');
 if(core&&ring){
  document.documentElement.classList.add('has-custom-cursor');
  let x=-100,y=-100,rx=-100,ry=-100,visible=false;
  const move=e=>{x=e.clientX;y=e.clientY;if(!visible){visible=true;rx=x;ry=y;core.classList.add('is-visible');ring.classList.add('is-visible')}};
  addEventListener('pointermove',move,{passive:true});
  document.addEventListener('pointerout',e=>{if(!e.relatedTarget){visible=false;core.classList.remove('is-visible');ring.classList.remove('is-visible')}});
  const animate=()=>{
   rx+=(x-rx)*.19;ry+=(y-ry)*.19;
   core.style.transform='translate3d('+x+'px,'+y+'px,0)';
   ring.style.transform='translate3d('+rx+'px,'+ry+'px,0)';
   requestAnimationFrame(animate);
  };requestAnimationFrame(animate);
  document.addEventListener('pointerover',e=>{
   const target=e.target.closest('a,button,[role="button"]');
   ring.classList.toggle('is-hover',!!target);
   label.textContent=target?.matches('[data-case],.archive-item')?'VIEW':'GO';
  });
 }
}
/* Brief branded intro, once per tab session; no network dependency or fake long loading. */
const loader=$('#site-loader'),percentage=$('#loader-percent');
if(loader){
 let seen=false;try{seen=sessionStorage.getItem('hellios-intro-seen')==='1'}catch(e){}
 const duration=seen?350:1250;
 const start=performance.now();
 function tick(now){
  const progress=Math.min(1,(now-start)/duration);
  percentage.textContent=String(Math.round(progress*100)).padStart(3,'0')+'%';
  if(progress<1)requestAnimationFrame(tick);
  else{
   loader.classList.add('is-exiting');
   try{sessionStorage.setItem('hellios-intro-seen','1')}catch(e){}
   setTimeout(()=>loader.remove(),1100);
  }
 }
 requestAnimationFrame(tick);
}

$('#year').textContent=new Date().getFullYear();
})();
