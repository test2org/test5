import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Test5SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Test5SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Test5SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Test5SharedModule {
  static forRoot() {
    return {
      ngModule: Test5SharedModule
    };
  }
}
