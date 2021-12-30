// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Forus Labs\' Engineering Docs',
  tagline: 'Unlocking your potential',
  url: 'https://foruslabs.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Forus Labs', // Usually your GitHub org/user name.
  projectName: 'engineering-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/forus-labs/engineering-docs',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/forus-labs/engineering-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Forus Labs\' Engineering Docs',
        logo: {
          alt: 'Forus Labs Logo',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'right',
            label: 'Documentation',
          },
//          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/forus-labs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/forus_labs',
              },
            ],
          },
          {
            title: 'More',
            items: [
//              {
//                label: 'Blog',
//                to: '/blog',
//              },
              {
                label: 'GitHub',
                href: 'https://github.com/forus-labs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Forus Labs Pte Ltd. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['dart'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
