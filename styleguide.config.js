const path = require('path');

module.exports = {
  title: 'Styleguide',
  usageMode: 'expand',
  exampleMode: 'expand',
  ignore: ['**/*.styles.js'],
  styleguideDir: 'build',
  components: 'src/components/**/index.js',
  sections: [
    {name: 'Structure', components: 'src/components/structure/*/[A-Z]*.js'},
    {name: 'Texts', components: 'src/components/texts/*/[A-Z]*.js'},
    {name: 'Form', components: 'src/components/form/*/[A-Z]*.js'},
    {name: 'Assets', components: 'src/components/assets/*/[A-Z]*.js'},
    {name: 'Utilities', content: 'src/docs/utilities.md'},
  ],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto+Mono:100,100i,300,300i,400,400i,500,500i,700,700i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&amp;subset=latin-ext',
        },
      ],
    },
  },
  require: [path.join(__dirname, 'styleguide/global.css')],
};
