import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeseosProvider } from '../../providers/deseos/deseos';
import { Lista } from '../../app/models/lista.model';
import { ListaItem } from '../../app/models/lista-item.model';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  lista: Lista;
  nombreItem= '';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private deseosService: DeseosProvider) {
      let listaId= this.navParams.get('listaId');

      this.lista = this.deseosService.obtenerLista( listaId);
  }

  agregarItem(){
    if(this.nombreItem.length === 0){
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
    this.deseosService.guardarStorage();
  }

  cambioCheck(item: ListaItem){
    const pendientes = this.lista.items
    .filter(itemData =>{
      return !itemData.completado;
    })
    .length;

    if (pendientes === 0){
      this.lista.terminadaEn = new Date();
      this.lista.completada = true;
    }else{
      this.lista.terminadaEn = null;
      this.lista.completada = false;
    }
    console.log(pendientes);
    this.deseosService.guardarStorage();
  }

  borrar(i: number){
    this.lista.items.splice(i,1);
    this.deseosService.guardarStorage
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

}
