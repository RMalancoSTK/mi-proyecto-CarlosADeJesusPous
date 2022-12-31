import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UnicornsComponent } from './unicorns.component';
import { UnicornsRouteModule } from './unicorns.route';
import { InputDataModule } from 'src/app/shared/input-data-component/input-data-component.module';
import { UnicornsViewComponent } from './unicorns-view.component';
import { UnicornsUpdateComponent } from './unicorns-update.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  imports: [
    UnicornsRouteModule,

    MatInputModule,

    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,

    InputDataModule,
  ],
  declarations: [
    UnicornsComponent,
    UnicornsViewComponent,
    UnicornsUpdateComponent,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UnicornsModule {}
