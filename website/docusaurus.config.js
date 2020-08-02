const path = require("path");

module.exports = {
  title: "Shift'M Support",
  tagline:
    "How can we help you?",
  url: "https://jaco1986.github.io",
  baseUrl: "/",
  favicon: "favicon.ico",
  organizationName: "jaco1986",
  projectName: "shiftm",
  customFields: {
    metadata: require("./metadata"),
  },
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Shift'M",
        src: "img/shiftm.svg",
      },
      links: [
        { to: "docs/", label: "Docs", position: "left" },
      ],
    },

    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    footer: {
      links: [
        {
          title: "About",
          items: [
            {
              label: "What is Shift'M",
              to: "docs/about/what-is-shiftm/",
            },
            {
              label: "Terms and Conditions",
              to: "docs/about/terms_and_cond/",
            },
            {
              label: "Contact Us",
              to: "https://shiftm.com/contact",
            },
            {
              label: "Mailing List",
              to: "mailing_list/",
            },
          ],
        },
          {
            title: 'Mobile',
            items: [
              {
                label: 'App Store',
                href: 'https://www.apple.com/ios/app-store',
              },
              {
                label: 'Play Store',
                href: 'https://play.google.com/store?hl=en',
              },

            ],
          },
        {title: "Community",
          items: [
            {
              label: 'Facebook',
              href: 'https://facebook.com/shiftmhealthcare',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/shiftm_',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ShiftM_',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedIn.com/company/Shift-m',
            },
          ],
        },
      ],
      logo: {
        alt: "Shift'M",
        src: "/img/shiftm.png",
        href: "https://shiftm.com",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Shift'M B.V`,
    },
    algolia: {
      apiKey: "cbdca4d7c6325925f3327e41109d1e50",
      indexName: "shiftm",
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },
  presets: [],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        feedOptions: {
          type: "all",
          copyright: `Copyright © ${new Date().getFullYear()} Shift'M B.V.`,
        },
      },
    ],
    path.resolve(__dirname, "./plugins/guides"),
    path.resolve(__dirname, "./plugins/highlights"),
    ["@docusaurus/plugin-content-pages", {}],
    path.resolve(__dirname, "./plugins/releases"),
    [path.resolve(__dirname, "./plugins/sitemap"), {}],
  ],
  scripts: [],
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Ubuntu|Roboto|Source+Code+Pro",
    "https://at-ui.github.io/feather-font/css/iconfont.css",
  ],
  themes: [
    [
      "@docusaurus/theme-classic",
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
    "@docusaurus/theme-search-algolia",
  ],
};