import { NgModule } from '@angular/core';

import { Test5SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [Test5SharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [Test5SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Test5SharedCommonModule {}
