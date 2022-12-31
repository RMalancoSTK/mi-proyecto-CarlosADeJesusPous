import { Component, OnInit } from '@angular/core';
import { WelcomeService } from './welcome.service';
import { Data } from '../../data';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
 
  longText = `Hola, mi nombre es Carlos Antonio De Jesus Pous, mi IS es CADJ1, tengo 24 y soy de Veracruz, Ver`
  constructor(private welcomeService: WelcomeService) {}
  displayedColumns: string[] = [ 'name', 'age', 'is', 'city', 'state'];
  misDatos: Data[] = [];


  ngOnInit(): void {
    this.welcomeService.getData().subscribe((data) => {
      console.log(data.mydata);
      this.misDatos = data.my_data;
       
      
    });
  }
}

