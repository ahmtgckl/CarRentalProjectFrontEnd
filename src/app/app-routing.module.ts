import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { LoginComponent } from './components/login/login.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/color/:colorId/brand/:brandId",component:CarComponent},
  {path:"colors",component:CarComponent},
  {path:"carDetail", component:CarDetailComponent},
  {path:"cars/brand/:brandId/carDetail", component:CarDetailComponent},
  {path:"cars/color/:colorId/carDetail", component:CarDetailComponent},
  {path:"cars/carDetails/:carId",component:CarDetailComponent},
  {path:"cars/carAdd",component:CarAddComponent},
  {path:"cars/colorAdd",component:ColorAddComponent},
  {path:"cars/brandAdd",component:BrandAddComponent},
  {path:"cars/rentalAdd",component:RentalAddComponent},
  {path:"login",component:LoginComponent},


  /*
  {path:"cars/payment/:carId",component:PaymentComponent},

  {path:"register",component:RegisterComponent}
  */




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
