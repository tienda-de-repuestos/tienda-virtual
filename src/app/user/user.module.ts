import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule }   from '@angular/forms';
import { ConfirmEqualValidatorDirective } from "./valids/confirm-equal-validator.directive";

@NgModule({
  declarations: [UserRegisterComponent,ConfirmEqualValidatorDirective],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
  ],
  
})
export class UserModule { }
