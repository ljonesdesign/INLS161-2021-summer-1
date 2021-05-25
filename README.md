# INLS161-2021-Summer
2021 Recitation Notes

## Site
https://ljonesdesign.github.io/INLS161-2021-summer-1/


## Cheatsheet items

### Admonitions
[Admonitions at Docusarus](https://docusaurus.io/docs/markdown-features/admonitions)
```
:::note
The content and title *can* include markdown.
:::

:::tip You can specify an optional title
Heads up! Here's a pro-tip.
:::

:::info
Useful information.
:::

:::caution
Warning! You better pay attention!
:::

:::danger
Danger danger, mayday!
:::
```

### Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

#### Installation

```console
yarn install
```

#### Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

#### Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

#### Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
