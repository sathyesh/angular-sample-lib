export type languageType = 'en' | 'de';

export interface GlobalConfig {

    /**
       * Preferred language for the module
       * default: 'de'
    */
    preferredLang: languageType;
    languageJsonValue: any;
}
