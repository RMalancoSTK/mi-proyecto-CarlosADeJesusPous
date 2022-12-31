import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRouteModule } from './login.route';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [LoginRouteModule, FormsModule, MatSnackBarModule],
  declarations: [LoginComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule {}
