/* HELLIOS portfolio case studies: only entries merged into main are published. */
(async function loadPortfolioProjects() {
  const grid = document.querySelector('#work .project-grid');
  if (!grid) return;
  try {
    const response = await fetch('./data/projects.json', { cache: 'no-cache' });
    if (!response.ok) throw new Error('Project catalog unavailable');
    const catalog = await response.json();
    if (!catalog || !Array.isArray(catalog.projects)) throw new Error('Invalid project catalog');
    const statuses = new Set(['WORKING PROJECT', 'PROTOTYPE', 'DEMO', 'IN PROGRESS', 'COMPLETED']);
    const safeAsset = value => {
      if (typeof value !== 'string' || !/^assets\/[a-zA-Z0-9_./-]+\.(?:png|jpg|jpeg|webp|svg)$/i.test(value) || value.includes('..')) return null;
      return value;
    };
    for (const project of catalog.projects) {
      if (!project || project.published !== true || typeof project.title !== 'string' || !project.title.trim() || typeof project.description !== 'string') continue;
      const card = document.createElement('article');
      card.className = 'project glass visible';
      const meta = document.createElement('div');
      meta.className = 'project-meta mono';
      const category = document.createElement('span');
      category.textContent = (typeof project.category === 'string' ? project.category : 'SOFTWARE').slice(0, 65);
      category.dataset.i18nEn = category.textContent;
      category.dataset.i18nRu = (typeof project.category_ru === 'string' ? project.category_ru : category.textContent).slice(0, 65);
      const status = document.createElement('span');
      status.className = 'status';
      status.textContent = statuses.has(project.status) ? project.status : 'PROTOTYPE';
      if (status.textContent === 'WORKING PROJECT' || status.textContent === 'COMPLETED') status.classList.add('live');
      status.dataset.i18nEn = status.textContent;
      const statusRu = { 'WORKING PROJECT': 'РАБОТАЮЩИЙ ПРОЕКТ', 'COMPLETED': 'ЗАВЕРШЁН', 'PROTOTYPE': 'ПРОТОТИП', 'DEMO': 'ДЕМО', 'IN PROGRESS': 'В РАЗРАБОТКЕ' };
      status.dataset.i18nRu = statusRu[status.textContent] || status.textContent;
      meta.append(category, status);
      const content = document.createElement('div');
      content.className = 'project-content';
      const title = document.createElement('h3');
      title.textContent = project.title.slice(0, 100);
      title.dataset.i18nEn = title.textContent;
      title.dataset.i18nRu = (typeof project.title_ru === 'string' ? project.title_ru : title.textContent).slice(0, 100);
      const description = document.createElement('p');
      description.textContent = project.description.slice(0, 800);
      description.dataset.i18nEn = description.textContent;
      description.dataset.i18nRu = (typeof project.description_ru === 'string' ? project.description_ru : description.textContent).slice(0, 800);
      content.append(title, description);
      if (Array.isArray(project.stack)) {
        const tags = document.createElement('div');
        tags.className = 'tags';
        for (const item of project.stack.slice(0, 9)) {
          if (typeof item !== 'string' || !item.trim()) continue;
          const tag = document.createElement('span');
          tag.textContent = item.slice(0, 30);
          tags.append(tag);
        }
        content.append(tags);
      }
      card.append(meta);
      const imagePath = safeAsset(project.image);
      if (imagePath) {
        const media = document.createElement('div');
        media.className = 'media-wrap';
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = (typeof project.imageAlt === 'string' ? project.imageAlt : project.title + ' project artwork').slice(0, 160);
        img.loading = 'lazy';
        img.decoding = 'async';
        media.append(img);
        card.append(media);
      }
      card.append(content);
      grid.append(card);
    }
    window.dispatchEvent(new Event('hellios:projects-loaded'));
  } catch (error) {
    console.warn('HELLIOS: project catalog could not be loaded', error);
  }
})();
