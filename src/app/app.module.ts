import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppView } from './app.view';
import { CoreModule } from './core';

@NgModule({
  declarations: [
    AppView,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppView],
})
export class AppModule {
}
