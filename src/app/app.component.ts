import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  binding;
  title = 'tarea9Y10';
  cantidad;
  codigo;
  valor;
  existente;
  g;
  c;
  uno;
  dos;
  tres;
  suma;
constructor(private modalService: NgbModal, private http:HttpClient){

}

ngOnInit(){
this.http.get("http://localhost:8000/api/selectCodigo").subscribe(data=>{
this.binding = data

})
}
selectCodigo(){
 this.codigo
  this.g = this.codigo.split("|")
  for (let i = 0; i < this.g.length; i++) {
    this.uno = this.g[0];
    this.dos = this.g[1];
  }
  this.tres = this.dos

}
sumar(can){
 this.existente = can
 alert(this.existente)
}
openVerticallyCentered(longContent) {
  this.modalService.open(longContent, { centered: true });
}

actualizarCantidad(){
  this.suma = parseInt(this.tres) + this.cantidad
  if (this.cantidad== "Codigos del producto") {
    alert("No selecione esa opcion...")
  }else{
  this.http.get("http://localhost:8000/api/updateCantidad/"+this.suma+"/"+this.uno+"").subscribe(data=>{
    this.valor = data
    })
    alert(this.valor.true)
  }
}
}
