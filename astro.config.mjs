import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://decryptedchaos.github.io',
  base: '/redot-policies',
  integrations: [starlight({
    title: 'Developer Handbook',
    logo: {
      src: './src/assets/redotlogo.svg'
    },
    social: {
      //github: 'https://github.com/louisescher/starlight-ion-theme'
    },
    sidebar: [{
      label: '[home] Home',
      link: '/'
    }, {
      label: '[list] Overview',
      link: '/overview/'
    }, {
      label: '[book] Library',
      autogenerate: {
        directory: 'library'
      }
    },
    // {
    //   label: '[book] Reference',
    //   autogenerate: {
    //     directory: 'reference'
    //   }
    // }
    ],
    components: {
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      SiteTitle: './src/components/SiteTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
      Pagination: './src/components/Pagination.astro',
      Hero: './src/components/Hero.astro',
      Head: './src/components/Head.astro',
      PageTitle: './src/components/PageTitle.astro'
    },
    customCss: [
      '@fontsource-variable/space-grotesk/index.css',
      '@fontsource/space-mono/400.css',
      '@fontsource/space-mono/700.css',
      './src/styles/theme.css'
    ],
    expressiveCode: {
      themes: ['github-dark']
    },
    pagination: false,
    lastUpdated: true
  })],
  output: "static"
});