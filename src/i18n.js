import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './langs/ko'; // ko/index.js index 라는 명칭이 같으므로 생략 가능
import en from './langs/en';

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

i18n.use(initReactI18next).init({
  resources, // 이름명 & 변수명 동일 -> 생략 가능 resources: resources,
  lng: navigator.language,
});
