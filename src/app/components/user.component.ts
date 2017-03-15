
import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'user',
  templateUrl: '../app.component.html',
  styleUrls: ['../app.component.css'],
  providers:[PostService]
})
export class userComponent {
  name:String;
  email:String;
  address:address;
  hobbies:String[];
  showhobbies:boolean;
  posts: Post[];
  ShowEditUser:boolean;

  constructor(private postSevice:PostService){
    this.name="Sairam";
    this.email="sallampalli@innominds.com";
    this.address={
              drno  :"2-650",
              block:"B-Block",
              city:"Rajahmundry"
  }
  this.hobbies=["ludo","carroms","youtube"]
  this.showhobbies=false;


  this.postSevice.getPosts().subscribe(posts =>{
  this.posts=posts;
  });
}
togglehobbies(){
  if(this.showhobbies==true){
     this.showhobbies=false;
  }else
  this.showhobbies=true;
}
toggleedit(){
  if(this.ShowEditUser==true){
     this.ShowEditUser=false;
  }else
  this.ShowEditUser=true;

}
addHobby(hobby){
  this.hobbies.push(hobby);
}
deleteHobby(i){
  this.hobbies.splice(i,1);
}
}
interface address{
              drno:String;
              block:String;
              city:String;
}

interface Post{
  id: number;
    name:String;
    price: String;
}
