import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import kz from './locales/kz.json';
import ru from './locales/ru.json';

const i18n = createI18n({
  locale: 'en', 
  messages: {
    en, 
    kz, 
    ru, 
  },
});

export default i18n;
