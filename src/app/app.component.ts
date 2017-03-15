import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <ul class="nav navbar-nav navbar-right">
    <li>
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/register']">Register</a>
        <a [routerLink]="['/welcome']">Welcome</a>
        <a [routerLink]="['/about']">About</a>
         <a [routerLink]="['/contact']">Contact</a>
    </li>
</ul>
<router-outlet></router-outlet>`


})
export class AppComponent {


}
