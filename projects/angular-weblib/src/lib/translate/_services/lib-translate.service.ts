import { Injectable, Inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { GlobalConfig } from "../../angular-weblib-config";

@Injectable({
  providedIn: "root",
})
export class LibTranslateService {
  constructor(
    private translateService: TranslateService,
    @Inject("MSBWEBLIB_CONFIG") config: GlobalConfig
  ) {
    this.setLanguage(config.preferredLang);
  }

  setLanguage(lang = "en") {
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
  }

  getTranslateService() {
    return this.translateService;
  }
}
