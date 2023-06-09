/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify, useTheme } from 'vuetify'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as labsComponents from 'vuetify/labs/components';

import { en } from 'vuetify/locale';
//import { md2, md3 } from "vuetify/blueprints";

let defaultTheme = "light";
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  defaultTheme = "dark";
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: defaultTheme,
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
  locale: {
    locale: 'en',
    fallback: 'en',
    messages: { en },
  },
  //blueprint: md1,
})
