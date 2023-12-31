// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Oficina do Zé.',
  tagline: 'Carros em segunda e terçeira mão! Serviços sem % fiáveis!',
  favicon: 'img/carro.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Docusaurus1/',                                                    //SHOULD BE THE REPO NAME

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Quywed', // Usually your GitHub org/user name.
  projectName: 'Docusaurus1', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Oficina do Zé',
        logo: {
          alt: 'Logotipo da empresa',
          src: 'img/carro.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Servicos',
          },
          {
            to: 'AboutUs',
            position: 'left',
            label: 'Sobre Nós',
          },
          {
            to: 'ContactUs',
            position: 'left',
            label: 'Contactos',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contactos',
            items: [
              {
                label: 'Email: OficinaZe@gmail.com',
                to: 'https://www.microsoft.com/',
              },
              {
                label: 'Telefone: +351 9677tiratirametemete',
                to: 'https://www.skype.com/pt/',
              },
              {
                label: 'Fax: nseioquemeter',
                to: 'https://tutoria.ualg.pt',
              },
            ],
          },
          {
            title: 'Redes Sociais',
            items: [
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@oficinadoze',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/oficinadoze',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/oficinadoze',
              },
            ],
          },
          {
            title: 'Páginas: ',
            items: [
              {
                label: 'Mais informacao sobre nos',
                to: '/AboutUs',
              },
              {
                label: 'Contacto-nos',
                to: '/ContactUs',
              },
            ],
          },
        ],
        copyright: `Todos os direitos reservados © ${new Date().getFullYear()} Oficina do Zé, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
