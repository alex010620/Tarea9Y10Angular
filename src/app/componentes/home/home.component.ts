import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]

})
export class HomeComponent implements OnInit {
  prueba;
  casa;
  mensajeEliminar;
  nombrep;
  mensaje;
  EliminarFactura;
  nombre:string
  telefono:string
  fecha:string
  descripcion:string
  productos;
  rnc;
  name;
  descrpcion;
  subtotal;
  itebis2;
  total;
  constructor(private modalService: NgbModal, private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8000/api/selectFactura").subscribe(data=>{
      this.prueba=data
    })

  }
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
  openVerticallyCentered(longContent) {
    this.modalService.open(longContent, { centered: true });
  }

  prueva(){
    this.http.get("https://finalapis.herokuapp.com/api/iniciar/alex@gmail.com/1234").subscribe(data=>{
      console.log(data)
    })
  }
  ver(id,idClie){
    this.http.get("http://localhost:8000/api/selectFacturaProducto/"+id+"").subscribe(data=>{
     this.casa = data
     this.nombre = this.casa.nombre
     this.fecha = this.casa.fecha
     this.descripcion = this.casa.descripcion
     this.telefono = this.casa.telefono
    });
    this.http.get("http://localhost:8000/api/selectFacturaventa/"+idClie+"").subscribe(data=>{
     this.productos= data
    })
  }
  eliminar(nombre,id){
   this.EliminarFactura = nombre
   this.nombrep = id
   this.mensajeEliminar = "Quieres eliminar la factura de  "+this.EliminarFactura+"?"
  }

  eliminarF(){
    this.http.get("http://localhost:8000/api/Eliminarfactura/"+this.nombrep+"").subscribe(data=>{
      this.mensaje= data
      if (this.mensaje == true) {
        this.mensajeEliminar = this.mensaje.true
      } else {
        this.mensajeEliminar = this.mensaje.false
      }
     });
  }
  recargar(){
    window.location.reload()
  }

  imprimir(el){
    var valor1 = document.body.innerHTML;
    var valor2 = document.getElementById(el).innerHTML;
    document.body.innerHTML = valor2;
    window.print();
    document.body.innerHTML = valor1;
  }
}
