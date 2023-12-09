import { Component } from '@angular/core';
import { Calculator } from './unit-test-basico/calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-list-app';

  ngOnInit(){
    const calculator = new Calculator;
    //Multiplicacion
    const rta = calculator.multiply(2,3);
    console.log("rta", rta);

    //Division

    const rta1 = calculator.divide(3,5);
    console.log("rta1", rta1);
  }
}
