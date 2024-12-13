import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


const config: Config = {
  title: 'LooPIN Network Documents',
  tagline: 'PinFi for AI Computing',
  favicon: 'img/favicon.ico',
  scripts: [{src: 'https://visit.vemo.cc/js/script.js', async: true, defer: true, 'data-domain': 'docs.loopin.network'}],

  // Set the production url of your site here
  url: 'https://docs.loopin.network/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.
  //
  // onBrokenLinks: 'throw',
  // onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    function proxyPlugin(context, options) {
      return {
        name: 'docusaurus-plugin-proxy',
        configureWebpack(config, isServer, utils) {
          if (!isServer) {  // Only apply proxy in development client
            return {
              mergeStrategy: { "devServer.proxy": "replace" },
              devServer: {
                proxy: {
                  '/api': {  // Changed to match all /api routes
                    target: 'https://www.loopin.network',
                    secure: false,
                    changeOrigin: true,
                    logLevel: 'debug',
                    onProxyReq: (proxyReq) => {
                      // Log the outgoing request for debugging
                      console.log('Proxying to:', proxyReq.path);
                    },
                    onProxyRes: (proxyRes) => {
                      // Log the response status
                      console.log('Proxy response status:', proxyRes.statusCode);
                    },
                  },
                },
              },
            };
          }
          return {};
        },
      };
    },
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/LooPIN-social-card.png',
    metadata: [
      {name: 'keywords', content: 'docs, loopin, network, AI, GPU'},
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'LooPIN',
      logo: {
        alt: 'LooPIN Logo',
        src: 'img/loopin_logo.svg',
        href: "https://loopin.network/"
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "tutorialSidebar",
          collapsed: false,
          label: "Tutorials",
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://twitter.com/loopin_network',
          label: 'Twitter',
          position: 'right',
        },
        {
          href: 'https://discord.gg/3qNZt4vfEj',
          label: 'Discord',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'BLUDZ1F5NM',

      // Public API key: it is safe to commit it
      apiKey: 'dfec8d70037afd9ca358f360536d231f',

      indexName: 'loopin',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/docs/intro',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright Â${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
