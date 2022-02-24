 import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginsucessComponent } from './loginsucess/loginsucess.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
 {path:'', redirectTo: '/shop', pathMatch:'full'},
 {path: 'login',component:LoginComponent} ,
 {path:'sign-up',component: SignUpComponent},
 {path:'shop', component: ShoppingCartComponent},
 {path:'loginsucess', component: LoginsucessComponent},
 {path:'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
