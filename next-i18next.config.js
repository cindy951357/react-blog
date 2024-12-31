module.exports = {
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
  },
  fallbackLng: {
    default: ['en'],
  },
  //如果未指定 defaultNS，useTranslation 預設會使用 common，導致翻譯載入失敗。
  defaultNS: 'translation',
};
