import { TranslateLoader } from "@ngx-translate/core";
import { Inject } from "@angular/core";
import { GlobalConfig } from "../angular-weblib-config";

import { Observable, of } from "rxjs";

import { default as contentDe } from "./de.json";
import { default as contentEn } from "./en.json";

export class TranslateLibraryLoader implements TranslateLoader {
  private readonly TRANSLATIONS = {
    de: contentDe,
    en: contentEn,
  };

  private ALL_TRANSLATIONS: any;

  constructor(@Inject("MSBWEBLIB_CONFIG") config: GlobalConfig) {
    this.ALL_TRANSLATIONS = {
      en: {
        ...this.TRANSLATIONS.en,
        ...config.languageJsonValue.en,
      },
      de: {
        ...this.TRANSLATIONS.de,
        ...config.languageJsonValue.de,
      },
    };
  }

  getTranslation(lang: string): Observable<any> {
    return of(this.ALL_TRANSLATIONS[lang]);
  }
}
