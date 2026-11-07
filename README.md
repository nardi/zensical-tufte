# zensical-tufte

A Tufte-style theme for Zensical. The typography follows Tufte CSS and the
Hugo themes built on it: ink and slightly cream paper, headings at regular
weight with italic section titles, justified text, code without boxes and
booktabs tables. The theme extends the built-in Zensical theme, so the
layout, the sidebar navigation, the search and the interactive components
are inherited without changes.

## The fonts

The general text is set in [Karla](https://fonts.google.com/specimen/Karla)
and the headings in ET Book. ET Book is included in the theme and no fonts
are loaded from Google Fonts except Karla. Code is set in Fira Code when the
reader has it installed, otherwise in the monospaced system fonts.

A project that sets the `font` option overrides this choice.

## Installation

Install the package and select the theme by its name, `tufte`:

```sh
uv add --group docs zensical-tufte
```

```toml
[project.theme]
name = "tufte"
```

## Files that Zensical copies into the site

Zensical copies every file of an installed theme into the site, including
the files of the Python package. Exclude them:

```toml
[project.plugins.exclude]
glob = ["mkdocs_theme.yml", "__init__.py", "__pycache__/*"]
```

## The documentation site switcher

The header can show a dropdown that links the documentation sites of the
repositories under one domain, in the style of the repository switcher of
GitHub. The theme contributes the default site list and the layout, and a
project opts in by naming the site of its own repository:

```toml
[project.extra.site_switcher]
current = "cyxla"
```

The links are relative to the root of the domain, so the sites have to live
under the same domain, for example as GitHub Pages projects. A project
replaces the site list with its own `sites` list, which names the other
repositories besides the one that `current` names:

```toml
[project.extra.site_switcher]
current = "cyxla"
sites = ["xipopt", "jax-cip", "splineax"]
```

The current site leads the list and is not a link, since the reader is
already on it.

## Partials that follow the built-in theme

The `copyright.html` and `header.html` partials are copies of the ones of the
built-in theme with small additions, so an update of Zensical that changes its
own partials needs their parts resynced. The rest of the theme overrides
blocks and style sheets only.

## Credits

The ET Book fonts are by Edward Tufte, Dillon Waugh and ZacharyXB, under the
MIT license, and are copied from
[hugo-tuftesque](https://github.com/hugo-tuftesque/hugo-tuftesque), which
also informed the design.
