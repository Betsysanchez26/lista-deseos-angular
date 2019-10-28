import { Component, Input } from '@angular/core';
import { DeseosProvider } from '../../providers/deseos/deseos';
import { NavController, AlertController } from 'ionic-angular';
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
  constructor(private deseosService: DeseosProvider, private navCtrl: NavController
  , private alertCtrl: AlertController) {
  }

  listaSeleccionada(lista: Lista){
    this.navCtrl.push(AgregarPage,{listaId:lista.id});
  }
  borrarLista(lista: Lista){
    this.deseosService.borrarLista(lista);
  }

  async editarLista(lista: Lista){
      const alert = await this.alertCtrl.create({
        title: 'Editar lista',
        inputs: [
          {
            name: 'titulo',
            type: 'text',
            value: lista.titulo,
            placeholder: 'Nombre de la lista'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Actualizar',
            handler: (data) => {
              console.log(data);
              if (data.titulo.length === 0){
                return;
              }
             lista.titulo = data.titulo;
             this.deseosService.guardarStorage();
            }
          }
        ]
      });
      await alert.present();
      //this.navCtrl.push(AgregarPage);

  }
}
