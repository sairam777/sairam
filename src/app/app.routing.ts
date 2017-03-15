import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { userComponent } from './components/user.component';
import {aboutComponent} from './components/about.component';
import {contactComponent} from './components/contact.component';
import {homeComponent} from './components/home.component';
import {registerComponent} from './components/register.component';
const appRoutes: Routes=[
  {
    path:'',
    component:homeComponent
  },
   {
    path:'register',
    component:registerComponent
  },
  {
    path:'welcome',
    component:userComponent
  }
  ,
  {
    path:'about',
    component:aboutComponent
  },
  {
    path:'contact',
    component:contactComponent
  }
]

export const routing :ModuleWithProviders =RouterModule.forRoot(appRoutes);
