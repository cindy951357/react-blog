"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// next-i18next.config.js
var require_next_i18next_config = __commonJS({
  "next-i18next.config.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      i18n: {
        locales: ["en", "zh"],
        defaultLocale: "en"
      },
      fallbackLng: {
        default: ["en"]
      },
      //如果未指定 defaultNS，useTranslation 預設會使用 common，導致翻譯載入失敗。
      defaultNS: "translation"
    };
  }
});

// next.config.js
var { i18n } = require_next_i18next_config();
module.exports = {
  i18n,
  reactStrictMode: true,
  distDir: "out"
};
