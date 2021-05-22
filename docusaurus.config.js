/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'INLS 161-001 Summer 2021',
  tagline: 'Tools for Information Literacy',
  url: 'https://ljonesdesign.github.io.',
  baseUrl: '/INLS161-2021-summer-1/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ljonesdesign', // Usually your GitHub org/user name.
  projectName: 'INLS161-2021-summer-1', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'INLS 161 Summer 2021',
      logo: {
        alt: 'old well logo',
        src: 'img/unc-old-well-logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'All Lessons',
        },
        {to: '/assignments', label: 'Assignments', position: 'left'},
        {to: '/blog', label: 'Instructor Blog', position: 'left'},
        {
          href: 'https://infotools.web.unc.edu/',
          label: 'Class Blog',
          position: 'right',
        },
        {
          href: 'https://sakai.unc.edu/x/nA0YY4',
          label: 'Sakai',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
  links: [
        {
          title: 'Links',
          items: [
            {
            label: 'UNC Panopto Login',
            href: 'https://uncch.hosted.panopto.com/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Academic Calendar',
              href: 'https://registrar.unc.edu/academic-calendar/',
            },
            {
              label: 'UNC Zoom',
              href: 'https://unc.zoom.us/',
            },
            {
              label: 'UNC Sakai',
              href: 'https://sakai.unc.edu/welcome/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'github.com/ljonesdesign',
              href: 'https://github.com/ljonesdesign',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lawrence Blake Jones.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ljonesdesign/INLS161-2021-summer-1/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ljonesdesign/INLS161-2021-summer-1/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
