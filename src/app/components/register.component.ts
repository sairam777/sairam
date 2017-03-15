
import { Component } from '@angular/core';
@Component({
  selector: 'home',
  templateUrl: "./register.component.html",
  styleUrls:['./register.component.css']
})
export class registerComponent {
  onSubmit(value: any){

    console.log(value);
  }



}

