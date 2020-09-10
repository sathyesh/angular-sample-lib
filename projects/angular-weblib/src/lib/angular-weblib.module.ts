import { NgModule, ModuleWithProviders } from "@angular/core";

// Internal Modules
import { ToastModule } from "./toast/toast.module";
import { ModalModule } from "./modal/modal.module";
import { TemplateModule } from "./template/template.module";

// External Modules
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";

// Other Files
import { TranslateLibraryLoader } from "./translate/translate-library-loader";
import { GlobalConfig } from "./angular-weblib-config";

const ANGULAR_WEBLIB_MODULES = [ToastModule, ModalModule, TemplateModule];

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateLibraryLoader,
      },
    }),
    ANGULAR_WEBLIB_MODULES,
  ],
  exports: ANGULAR_WEBLIB_MODULES,
})
export class AngularWeblibModule {
  constructor() {}
  static forRoot(config: Partial<GlobalConfig>): ModuleWithProviders {
    return {
      ngModule: AngularWeblibModule,
      providers: [
        {
          provide: "MSBWEBLIB_CONFIG",
          useValue: config,
        },
      ],
    };
  }
}
