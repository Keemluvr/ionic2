import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController, Alert, Button } from 'ionic-angular';
import { Http} from '@angular/http'

import { Carro } from '../../domain/carro/carro';
import {EscolhaPage } from '../escolha/escolha';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  public carros: Carro[];

  constructor(public navCtrl: NavController, private _http: Http, private _loadingCtrl: LoadingController, private _alertCtrl: AlertController) {
    
    let loader = this._loadingCtrl.create({
      content:'Buscando novos carros. Aguarde ...'
    });

    loader.present(); // para exibir o loader que acabamos de construir
    this._http
    .get('https://aluracar.herokuapp.com')
    .map(res => res.json())
    .toPromise()
    .then(carros => {
      this.carros = carros
      loader.dismiss(); // para fechar o loader!
    }).catch( err => {
      console.log(err);
      loader.dismiss();
      this._alertCtrl
        .create({
          title:'Falha na conexão',
          buttons: [{ text: 'Estou ciente'}],
          subTitle: 'Não foi possível obter a lista de carros. Tente novamente.'
          
      }).present();
    });

    /*this.carros = [
      {"nome":"Azera V6","preco":85000},
      {"nome":"Onix 1.6","preco":35000},
      {"nome":"Fiesta 2.0","preco":52000},
      {"nome":"C3 1.0","preco":22000},
      {"nome":"Uno Fire","preco":11000},
      {"nome":"Sentra 2.0","preco":53000},
      {"nome":"Astra Sedan","preco":39000},
      {"nome":"Vectra 2.0 Turbo","preco":37000},
      {"nome":"Hilux 4x4","preco":90000},
      {"nome":"Montana Cabine dupla","preco":57000},
      {"nome":"Outlander 2.4","preco":99000},
      {"nome":"Brasilia Amarela","preco":9500},
      {"nome":"Omega Hatch","preco":8000}
    ]*/
  }

  seleciona(carro){
    this.navCtrl.push(EscolhaPage, {carroSelecionado: carro});
  }


  ngOnInit() {

  }

}
