import { OnInit, Component, ViewChild, AfterViewInit } from '@angular/core';
import { UnicornsService } from './unicorns.service';

import { Datosu } from './datosu';
import { UnicornsViewComponent } from './unicorns-view.component';
import { MatDialog } from '@angular/material/dialog';
import { UnicornsUpdateComponent } from './unicorns-update.component';

import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-unicorns',
  templateUrl: './unicorns.component.html',

})
export class UnicornsComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombre', 'color', 'edad', 'acciones'];
  my_data: Datosu[] = [];
  dataSource = new MatTableDataSource<Datosu>(this.my_data);

  constructor( public ref: MatDialog, private unicornsService: UnicornsService) {
  }

  ngAfterViewInit() {
    this.unicornsService.getUnicorns().subscribe((data) => {
      this.dataSource.data = data.body;   
      console.log(data.body);
    });
  }

  verUni(unicorns: Datosu) {
    const dialogRef = this.ref.open(UnicornsViewComponent, {
      data: unicorns,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.unicornsService.getUnicorns().subscribe((data) => {});
    });
  }

  editUni(unicorns: Datosu) {
    const dialogRef = this.ref.open(UnicornsUpdateComponent, {
      data: unicorns,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.unicornsService.getUnicorns().subscribe((data) => {});
    });
  }

  crearUni() {
    const dialogRef = this.ref.open(UnicornsUpdateComponent, {
      data: null,
      });
    dialogRef.afterClosed().subscribe((result) => {
      this.unicornsService.getUnicorns().subscribe((data) => {  
        //console.log(data);

       }  ); 
    });

  }

  borrarUni(_id: string) {
    this.unicornsService.deleteUnicorns(_id).subscribe((data) => {
      this.unicornsService.getUnicorns().subscribe((data) => {});
    });
  }
}
