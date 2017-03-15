import { AboutService } from './../services/about.service';
import { Component } from '@angular/core';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls:['./about.component.css'],
  providers:[AboutService]
})
export class aboutComponent {
  about:About[];

    constructor(private aboutSevice:AboutService){

  this.aboutSevice.getAbout().subscribe(about =>{
  this.about=about;
  });
}

}
interface About{
  sno:number;
  id:number;
  name:string;
  email:String;
}
