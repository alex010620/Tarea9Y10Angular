import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { FormsModule } from '@angular/forms';
import { RegClientesComponent } from './componentes/reg-clientes/reg-clientes.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { HttpClientModule } from '@angular/common/http';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake




// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    RegClientesComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
