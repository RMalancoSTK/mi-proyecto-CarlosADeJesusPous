import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRouteModule } from './welcome.route';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [WelcomeRouteModule, MatTableModule],
  declarations: [WelcomeComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WelcomeModule {}
