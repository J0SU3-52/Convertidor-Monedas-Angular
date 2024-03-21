import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//Components
import { NavbarJEVLComponent } from './components/navbar-jevl/navbar-jevl.component';
import { ConvertidorJEVLComponent } from './components/convertidor-jevl/convertidor-jevl.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarJEVLComponent,
    ConvertidorJEVLComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
