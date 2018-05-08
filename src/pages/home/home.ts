import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

var datos;
var keys;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ApiProvider]
})
export class HomePage {
  datos: any[] = [];

  constructor(public navCtrl: NavController,
  public api: ApiProvider) {
  }
  ionViewDidLoad(){
  this.api.getLatestData().subscribe(
    (data) => { // Success
      keys=Object.keys(data);
      this.datos = data[keys[0]];
    },
    (error) =>{
      console.error(error);
    }
  )
  }
  ionViewCanEnter() {
    datos = {
      "0": {
        "altitud": 0,
        "gasCO2": 0,
        "gndHum": 0,
        "hin": 0,
        "hum": 0,
        "lluvia": 0,
        "lux": 0,
        "presBar": 0,
        "temp": 0
      }
    };
    keys = Object.keys(datos);
  }

refreshData(){
  console.log("hi");
}
fillTemp() {
  var result;
  setInterval(() => {
    result=datos[keys[0]].temp;
    this.fillTemp();
    //you can call function here
  }, 5000);
  return result;
}
fillHum() {
  var result;
  setInterval(() => {
    result=datos[keys[0]].hum;
    this.fillHum();
    //you can call function here
  }, 5000);
  return result;
}
  
}
