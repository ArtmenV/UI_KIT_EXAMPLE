import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import RU from '../../constants/vocabularies/ru';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: RU,
        },
        fallbackLng: 'ru',
        debug: true,

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: '.',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
