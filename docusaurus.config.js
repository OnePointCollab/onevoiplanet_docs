// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OneVOIPlanet\'s Documentation',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://docs.onevoiplanet.ua/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OneVOIPlanet', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en','ua'],
  //   localeConfigs: {
  //     ua:{
  //       label:'Українська',
  //       direction: 'ltr',
  //       path:'ua'
  //     },
  //     en:{
  //       label:'English',
  //       direction: 'ltr',
  //       path:'en'
  //     }
  //   }
  // },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://github.com/OnePointCollab/onevoiplanet_docs/edit/main/${versionDocsDirPath}/${docPath}`,
        },

        
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        algolia: {
          appId: 'VK7408PK3X',
          apiKey: 'daaaff85e0e24badba0fe2aee2a46aa9',
          indexName: 'onevoiplanet',
          contextualSearch: true,
          // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
          // externalUrlRegex: 'https://docs.ocplanet.cloud',
          // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
          // replaceSearchResultPathname: {
          //   from: '/docs/', // or as RegExp: /\/docs\//
          //   to: '/',
          // },
    
        },

        //   searchPagePath: false,
    
        // },
        // Replace with your project's social card
        colorMode: {
          defaultMode: 'light',
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
          title: 'OneVOIPlanet',
          logo: {
            alt: 'onevoiplanet',
            src: 'img/logo.svg',
          },
          
          items: [
            {
              type: 'html',
              // to: 'https://onevoiplanet.ua/',
              // sidebarId: 'tutorialSidebar',
              position: 'right',
              value: 
                `<a 
                  href="https://cabinet.onevoiplanet.ua/"
                  target="_blank"
                  style="
                    background:#3538CD;
                    font-weight:600;
                    text-decoration:none;
                    border:none;
                    border-radius:8px;
                    padding: 9px 12px;
                    height:38px;
                    color:#fff";
                    font-size:16px;
                  >
                    Особистий кабінет
                  </a>`,
            },
            {
              type: 'search',
              position: 'right',
            },
            // {
            //   type: 'localeDropdown',
            //   position: 'right',
            // },
            // {to: '/documentation', label: 'Documentation', position: 'left'},
            // {
            //   href: 'https://github.com/facebook/docusaurus',
            //   label: 'GitHub',
            //   position: 'right',
            // },
          ],
        },
        footer: {
          style: 'dark',
          copyright: `Copyright © ${new Date().getFullYear()} OneVOIPlanet. Документація для користувачів`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
};

module.exports = config;
