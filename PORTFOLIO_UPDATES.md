# HELLIOS — approved portfolio updates

The site remains a dependency-free static HTML/CSS/JS website hosted by GitHub Pages.

## Source of truth
- Existing showcased projects remain in `index.html` to preserve their custom galleries and video.
- **New approved case studies** are stored in `data/projects.json`.
- `portfolio.js` reads that catalog and adds cards without changing the existing layout.
- `published: false` keeps an entry hidden. Only `published: true` displays it.
- Covers go in `assets/` (or a reviewed HTTPS URL). Never upload client secrets or private screenshots.

## Add a project from any ChatGPT conversation
1. Say: **"Добавь [проект] в HELLIOS"**.
2. Review the proposed English description, real project status, technologies and cover image.
3. Say **"Подтверждаю публикацию [проект] в HELLIOS"** only when everything is correct and permitted.
4. ChatGPT can update the connected GitHub repository when the connector and write permissions are available. Prefer a pull request for review; merge only with explicit approval.
5. Once changes reach `main`, GitHub Pages can publish them if Pages is enabled for the branch.

ChatGPT does not autonomously monitor all conversations or publish without a request/approval. A newly opened chat may need a short reminder of the repository name: `Helliosov/Hellios`.

## JSON schema example
```json
{
  "schemaVersion": 1,
  "projects": [
    {
      "id": "example",
      "published": false,
      "title": "Example Project",
      "category": "04 / WEB APPLICATION",
      "status": "prototype",
      "description": "An accurate, approved description of the implementation.",
      "tags": ["TypeScript", "API"],
      "image": "assets/example-cover.webp",
      "imageAlt": "Example project preview",
      "link": "https://example.com/"
    }
  ]
}
```
Allowed status values: `working`, `prototype`, `demo`, `in_progress`. If uncertain, use `prototype` or omit the status. Links and images are optional.

## Safety and quality
- Do not label an unfinished project as production-ready.
- Do not claim features that have not been implemented and verified.
- Do not publish client names, private repository content, personal data, credentials, or internal screenshots without permission.
- Avoid publishing a generated illustration as if it were a real product screenshot.
- Test the website through a local HTTP server (`python -m http.server 8000`) because browser `file://` pages cannot reliably fetch JSON.
