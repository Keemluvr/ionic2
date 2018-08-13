import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Carro } from '../../domain/carro/carro';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';

@Component({
  templateUrl: 'cadastro.html'
})
export class CadastroPage{

  public carro: Carro
  public precoTotal: number
  
  public nome: string
  public endereco: string
  public email: string
  public data: string = new Date().toISOString()

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.carro = this.navParams.get('carro')
    this.precoTotal = this.navParams.get('precoTotal')
  }

  /*ionViewDidLoad() { //tipo onInit mas o onInit recarrega, o ionViewDidLoadcarrega apenas a primeira vez
    console.log('ionViewDidLoad CadastroPagePage');
  }*/

  agenda(){
    console.log(this.nome)
    console.log(this.endereco)
    console.log(this.email)
    console.log(this.data)
  }


}
