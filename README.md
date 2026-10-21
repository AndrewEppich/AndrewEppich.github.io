# Andrew Eppich — portfolio

Static portfolio site. HTML, CSS, and a small navigation script. It is meant to be hosted on GitHub Pages or any host that serves files as-is.

The public entry point is `index.html`. The live site URL recorded in the resume is [andreweppich.github.io](https://andreweppich.github.io/).

## Update the writing

Edit `index.html`.

- Hero, About, and Contact are normal sections near the top and bottom of `<main>`.
- Experience entries are `<article class="role">` blocks inside `.timeline`. Copy one to add a role. Delete the article to remove it.
- Skills are `<section class="skill-group">` blocks inside `.skills`. Add or remove an `<li>` to change a tool. The grid refits on its own.

Do not invent employers, metrics, or profile URLs.

## Add, edit, or remove a project

Projects share one markup pattern and one set of CSS classes. Adding a card does not require a stylesheet change.

1. In `index.html`, find `<div class="project-list">` under the Projects section.
2. Copy an entire `<article class="project">` block.
3. Paste it where you want it. Order in the file is the order on the page.
4. Replace the title, dates, summary, tags, and highlights.
5. Delete the whole `<article>` to remove a project.

Optional pieces must be omitted when you have nothing to put in them. An empty element leaves a blank gap.

| Piece | Element | When to include it |
| --- | --- | --- |
| Role label | `<p class="project__role">` | Job title, “Personal project”, or “Coursework” |
| Dates | `<p class="project__dates">` | Always, when you know them |
| Summary | `<p class="project__summary">` | One or two sentences |
| Tags | `<ul class="tags">` | One `<li>` per technology |
| Highlights | `<ul class="highlights">` | Short engineering outcomes |
| Links | `<ul class="project__links">` | Only the links that exist |
| Media | `<div class="project__media">` | Screenshot, diagram, or plate |

### Link examples

Include only the anchors you have. Do not leave a placeholder URL.

```html
<ul class="project__links">
  <li><a href="https://github.com/AndrewEppich/example" target="_blank" rel="noopener noreferrer">GitHub<span class="visually-hidden"> (opens in a new tab)</span></a></li>
  <li><a href="https://example.com" target="_blank" rel="noopener noreferrer">Live site<span class="visually-hidden"> (opens in a new tab)</span></a></li>
  <li><a href="case-studies/example.html">Case study</a></li>
</ul>
```

### Media

Put screenshots in `assets/projects/` and reference them with a relative path. Give the image real `width` and `height` attributes, and describe it in `alt`.

```html
<div class="project__media">
  <img src="assets/projects/example.png" width="1600" height="1000" alt="Describe what the screenshot shows." loading="lazy" decoding="async">
</div>
```

Featured projects currently use a diagram instead of a screenshot. Duplicate the `<figure class="diagram">` block and change the node text. Keep the same classes.

A plate is the text-only stand-in used for coursework that has no screenshot:

```html
<div class="project__media">
  <div class="plate">
    <p class="plate__kicker">Systems</p>
    <p class="plate__title">C</p>
    <p class="plate__meta">fork · execvp</p>
  </div>
</div>
```

Minor coursework that should not be a full card goes in the “Additional coursework” list (`.more-work`), as one `<li>` per item.

### Blank project

```html
<article class="project">
  <div class="project__content">
    <div class="project__top">
      <div>
        <p class="project__role">Role or Personal project</p>
        <h3 class="project__title">Project title</h3>
      </div>
      <p class="project__dates"><time datetime="2026-01">January 2026</time> – <time datetime="2026-03">March 2026</time></p>
    </div>
    <p class="project__summary">One or two sentences on what you built and what was technically hard about it.</p>
    <ul class="tags" aria-label="Technologies">
      <li>Python</li>
      <li>AWS</li>
    </ul>
    <ul class="highlights">
      <li>A specific engineering decision or result.</li>
    </ul>
    <ul class="project__links">
      <li><a href="https://github.com/AndrewEppich" target="_blank" rel="noopener noreferrer">GitHub<span class="visually-hidden"> (opens in a new tab)</span></a></li>
    </ul>
  </div>
  <div class="project__media">
    <img src="assets/projects/example.png" width="1600" height="1000" alt="What the image shows." loading="lazy" decoding="async">
  </div>
</article>
```

## Replace the resume

Replace `resume/Andrew_Eppich_Resume.pdf`. The navigation, hero, and contact links already point at that path.

`Andrew Eppich Resume - Google Docs.pdf` in the project root is the source file. After you replace it, copy it to `resume/Andrew_Eppich_Resume.pdf` so the download stays current.

## Preview locally

From this folder:

```bash
python3 -m http.server 8000
```

Open `http://127.0.0.1:8000/`.

## Files

```
index.html
css/styles.css
js/nav.js
assets/fonts/        Inter and IBM Plex Mono (SIL Open Font License)
assets/icons/        favicon
assets/images/       portrait
assets/projects/     project screenshots
resume/              resume PDF served by the site
```

`js/nav.js` only closes the mobile menu after a link, an outside click, or Escape. The menu itself is a `<details>` element and works if the script does not load.

Coursework screenshots are in `assets/projects/` (`student-faculty-db.png`, `speaker-view.png`, `ers-card-game.png`, `robber-language.png`). They are IDE captures, so the cards use a text plate instead. Replace a plate with an `<img>` when you have a clearer screenshot.
