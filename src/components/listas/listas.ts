import { Component, Input } from '@angular/core';
import { DeseosProvider } from '../../providers/deseos/deseos';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../../pages/agregar/agregar';
import { Lista } from '../../app/models/lista.model';

/**
 * Generated class for the ListasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-listas',
  templateUrl: 'listas.html'
})
export class ListasComponent {

  text: string;
  @Input() completada: boolean = true;
  constructor(private deseosService: DeseosProvider, private navCtrl: NavController) {
  }

  listaSeleccionada(lista: Lista){
    this.navCtrl.push(AgregarPage,{listaId:lista.id});
  }
  borrarLista(lista: Lista){
    this.deseosService.borrarLista(lista);
  }
}
