import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'comunicacion';
  articulos: any;
  
  art={
    codigo : null,
   
    descripcion:null,
    precio:null
  }
  constructor(private articulosServicio: ArticulosService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.articulosServicio.recuperarTodos().subscribe(result => this.articulos = result);
  }

  alta() {
    this.articulosServicio.alta(this.art).subscribe(datos => {
      if (datos=='OK') {
        alert(datos);
        this.recuperarTodos();
      }
    });
  }

  baja(codigo:any) {
    this.articulosServicio.baja(codigo).subscribe(datos => {
      if (datos=='OK') {
        alert(datos);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.articulosServicio.modificacion(this.art).subscribe(datos => {
      if (datos=='OK') {
        alert(datos);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(codigo:any) {
 //falta this.articulosServicio.seleccionar(codigo).subscribe(result => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  } 

}

