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
const routes: Routes = [
  { path: "register/:name", component: RegisterComponent },
  {path:"login",component:LoginComponent}
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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   FormsModule,
   RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }