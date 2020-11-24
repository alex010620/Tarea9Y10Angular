import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { PdfMakeWrapper,Table,Txt,Cell } from 'pdfmake-wrapper';
import * as html2pdf from 'html2pdf.js'

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResourceLoader } from '@angular/compiler';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styles: [
  ]
})

export class VentasComponent implements OnInit {
@ViewChild('content') content: ElementRef;
conver:any
con:any
descrpcion;
nombre:string
cantidax:number
precio:number
text1: boolean = true
text2: boolean = true
text3: boolean = true
cantidad;
valor:number
name;
productos;
codigo;
prod={}
tipos=[]
fecha;
num;
ca;
itebis1;
itebis2=0;
total=0;
total1;
num2;
num3;
cantidadRestante;
idCliente;
num4 =[];
num5;
telefono;
rnc:any = ""
colorTabla;
converc:any
df;
h = 7;
validationCustom04;
subtotal:number =0
public fd: Array<any> = [];
public LeerPdf: Array<any> = [];
  constructor(private http:HttpClient,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8000/api/selectName").subscribe(data=>{
        this.conver = data
        console.log(this.conver)
    });
    this.http.get("http://localhost:8000/api/selectProd").subscribe(data=>{
        this.df = data
    })
  }
  reload(){
    this.http.get("http://localhost:8000/api/selectProd").subscribe(data=>{
      this.df = data
  })
  }
 cargar(event){
   this.http.get("http://localhost:8000/api/selectProducto/"+event.target.value+"").subscribe(data=>{
      this.con=data
      this.nombre=this.con.nombre
      this.cantidax = this.con.cantidad
      this.precio = this.con.precio
   })
 }

 reducir(){
   this.valor = this.cantidax-this.cantidad
   alert(this.valor)
 }


 guardar(){
 if (this.rnc != "") {
  this.num2=this.precio*parseInt(this.cantidad)
  this.itebis1 = this.precio*18/100
  this.total1=this.num2+this.itebis1
  this.cantidadRestante = this.cantidax-parseInt(this.cantidad)
  this.http.get("http://localhost:8000/api/venta/"+parseInt(this.idCliente)+"/"+this.codigo+"/"+this.nombre+"/"+this.precio+"/"+this.cantidad+"/"+this.num2+"/"+this.itebis1+"/"+this.total1+"").subscribe(data=>{
    console.log(data)
  });
  this.http.get("http://localhost:8000/api/selectFacturaventa/"+this.idCliente+"").subscribe(data=>{
    this.productos= data
   });
   this.http.get("http://localhost:8000/api/selectTotal/"+this.idCliente+"").subscribe(data=>{
     this.num5 = data
     this.subtotal=this.num5.subtotal
     this.itebis2=this.num5.ITEBIS
     this.total=this.num5.total
   })
   this.http.get("http://localhost:8000/api/updateTotal/"+this.cantidadRestante+"/"+this.codigo+"").subscribe(data=>{
     console.log(data)
   })
 } else {
  alert("El campo RNCC no puede estar vacio")
 }

 }


addprod(prod){
let produ = [];
if (localStorage.getItem('data')) {
  produ = JSON.parse(localStorage.getItem('data'));
  produ = [prod, ...produ];
} else {
  produ = [prod];
}
localStorage.setItem('data', JSON.stringify(produ));
}

  eliimiinarproducto(id){

    for(let i=0; i<this.fd.length; i++){
      if(id === this.fd[i]){

        this.tipos.push(this.fd[i])
      }
      this.fd.splice(i,1)
    }
    //Sthis.fd.splice(index, 1);
this.fd = this.tipos
      localStorage.setItem('data', JSON.stringify(this.fd));
}

carga(){
this.ca = this.validationCustom04
}
rncCliente(event){
  this.http.get("http://localhost:8000/api/selectCliente/"+event.target.value+"").subscribe(data=>{
    this.converc = data
    console.log(this.converc)
   this.name= this.converc.nombre
   this.idCliente=this.converc.idCliente
   this.telefono  = this.converc.telefono

     })

     let fecha = new Date();
     let dia = fecha.getDay();
     let mes = fecha.getMonth();
     let año = fecha.getFullYear();
     this.fecha= dia +'-'+ mes + '-'+año
}



public pdf(){
const options ={
filename: 'factura.pdf',
image: {type:'jpg'},
html2canvas:{},
jsPDF:{orientation:'landscape'}
};
const element: Element = document.getElementById('content');

html2pdf()
 .from(element)
 .set(options)
 .save();
}
imprimir(el){
  var valor1 = document.body.innerHTML;
  var valor2 = document.getElementById(el).innerHTML;
  document.body.innerHTML = valor2;
  window.print();
  document.body.innerHTML = valor1;
  this.http.get("http://localhost:8000/api/factura/"+this.idCliente+"/"+this.name+"/"+this.rnc+"/"+this.telefono+"/"+this.descrpcion+"/"+this.fecha+"/"+this.subtotal+"/"+this.itebis2.toFixed(2)+"/"+this.total.toFixed(2)+"").subscribe(data=>{
    console.log(data)
  })
  localStorage.removeItem('data');
  localStorage.clear();
  window.location.reload()
}
openVerticallyCentered(longContent) {
  this.modalService.open(longContent, { centered: true });
}

}
