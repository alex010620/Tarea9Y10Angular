import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-reg-clientes',
  templateUrl: './reg-clientes.component.html',
  styles: [
  ]
})
export class RegClientesComponent implements OnInit {
 convercion:any
 convercion2:any
 nombre:string
 rnc:string=''
 telefono:string=''
 mensaje;
  constructor(private http:HttpClient,private modalService: NgbModal) { }

  ngOnInit(): void {
  }
   esccribir(event){
     this.http.get("https://api.adamix.net/apec/cedula/"+event.target.value+"").subscribe(data=>{
       this.convercion = data
       this.nombre = this.convercion.Nombres+" "+this.convercion.Apellido1
     })
   }

   registrarCliente(){
    this.http.get("http://localhost:8000/api/crear/"+this.rnc+"/"+this.nombre+"/"+this.telefono+"").subscribe(data=>{
      this.convercion2 = data
      this.mensaje= this.convercion2.true
      alert(this.mensaje)
    })
   }
   openVerticallyCentered(longContent) {
    this.modalService.open(longContent, { centered: true });
  }
}
