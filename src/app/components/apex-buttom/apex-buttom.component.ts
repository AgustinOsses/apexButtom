import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apex-buttom',
  templateUrl: './apex-buttom.component.html',
  styles: [
  ]
})
export class ApexButtomComponent implements OnInit {

  frase:string ='Firmar entrada';
  
  horarioEntrada:Date;
  horarioSalida:Date;

  propiedades={
    firmaEntrada:false,
    firmaSalida:false,
  };

  constructor() { }

  ngOnInit(): void {
  }


  cambio(){
    if(this.propiedades.firmaEntrada == false){
      this.frase = "Firmar salida";
      this.propiedades.firmaEntrada=true;
      this.horarioEntrada = new Date();
    }else{
      this.propiedades.firmaSalida=true;
      this.horarioSalida = new Date();
    }
    
    }

}
