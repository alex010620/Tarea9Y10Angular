import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})
export class ProductosComponent implements OnInit {
rnc:string
nombre:string
precio:string
cantidad:string
convertir;
mensaje;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  RegistrarProductos(){
    this.http.get("http://localhost:8000/api/producto/"+this.rnc+"/"+this.nombre+"/"+this.precio+"/"+this.cantidad+"").subscribe(data=>{
      this.convertir= data
      this.mensaje = this.convertir.true
      alert(this.mensaje)
    })
  }

}
