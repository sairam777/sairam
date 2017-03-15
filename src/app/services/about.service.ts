import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';


@Injectable()

export class AboutService{
  constructor(private http:Http){
  }
  getAbout(){
    return this.http.get('http://localhost:4200/src/api/about.json').map(res => res.json());
  }

}

