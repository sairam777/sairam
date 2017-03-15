import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';


@Injectable()

export class PostService{
  constructor(private http:Http){
    console.log("PostService Initilized..");
  }
  getPosts(){
    return this.http.get('http://localhost:4200/src/api/sample.json').map(res => res.json());
  }

}

