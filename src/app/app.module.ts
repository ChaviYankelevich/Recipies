import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
 import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { StarsPipe } from './pipes/stars.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import {MaterialModule} from '@angular/material';
import { FormatHourPipe } from './pipes/format-hour.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {MaterialExampleModule} from '@angular/material';
import {SidenavBackdropExample} from '@angular/sidenav-backdrop-example';
import {ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
const routes: Routes = [
  { path: "register/:name", component: RegisterComponent },
  {path:"login",component:LoginComponent},
  {path:"all",component:AllRecipeComponent},
  {path:"add",component:AddRecipeComponent},
  {path:"register",component:RegisterComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    AllRecipeComponent,
    SmallRecipeComponent,
    StarsPipe,
    LoginComponent,
    RegisterComponent,
    AddRecipeComponent,
    FormatHourPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   FormsModule,
   RouterModule.forRoot(routes),
   MatFormFieldModule,
   BrowserAnimationsModule,
   MatIconModule,
   MatInputModule,
   MatSelectModule,
   MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }