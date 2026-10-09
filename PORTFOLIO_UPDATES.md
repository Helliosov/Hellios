# HELLIOS — approved portfolio updates

## How it works

The existing three case studies in `index.html` remain unchanged. New approved case studies are stored in `data/projects.json` and rendered by `portfolio.js` on GitHub Pages. No framework or build step is needed.

## ChatGPT workflow (from any chat with connected GitHub access)

1. User says **«Добавь [project] в HELLIOS»** and supplies or confirms facts, completion status, role, permitted screenshots and technologies.
2. Assistant drafts an accurate title, description, stack, status and proposed cover. Never claim that a prototype is live or that unverified client work is completed.
3. Assistant shows the draft and cover for **explicit approval**. Do not publish before approval. Generated covers must be clearly presented as illustrations, not actual screenshots.
4. Once approved, assistant creates a feature branch, adds the approved cover to `assets/` when file-writing support permits, appends the entry to `data/projects.json` with `published: true`, and opens a pull request. Never include secrets, personal data or confidential client code.
5. User reviews and merges the PR. GitHub Pages configured for `main` and `/(root)` publishes the update automatically after merge. ChatGPT cannot promise cross-chat context or background publication; it must re-read this repository and check connected GitHub access in each chat.

## JSON format

```json
{
  "projects": [
    {
      "id": "example-project",
      "title": "Example Project",
      "category": "WEB APPLICATION",
      "status": "PROTOTYPE",
      "description": "Accurate, approved summary of what exists.",
      "stack": ["TypeScript", "React"],
      "image": "assets/example-project.webp",
      "imageAlt": "Illustrated concept cover for Example Project",
      "published": true
    }
  ]
}
```

The example above is documentation only and **is not published**. Valid statuses: WORKING PROJECT, COMPLETED, PROTOTYPE, DEMO, IN PROGRESS. The optional image must be a repository-local path in `assets/` with png, jpg, jpeg, webp or svg extension. To stage a case study without showing it, set `published: false`.

## Setup

GitHub repository **Settings → Pages → Deploy from a branch → main / (root)**. This repository is a static site; GitHub Pages can deploy the files directly. Check that Pages is actually enabled before claiming the public site is live.

## Editing the three existing case studies

They remain hand-crafted HTML in `index.html` to preserve their current custom screenshots, gallery and demo video. Updating them requires editing the original HTML; this JSON catalog is for additional case studies.
