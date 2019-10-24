import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DeseosProvider } from '../../providers/deseos/deseos';
import { AgregarPage } from '../agregar/agregar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  completada: boolean = false;
  constructor(public navCtrl: NavController,
    public deseosService : DeseosProvider,
    public alertController: AlertController
) {
      //add = AgregarPage;
  }

  async irAgregar() {
    const alert = await this.alertController.create({
      title: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
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
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if (data.titulo.length === 0){
              return;
            }
           const listaId = this.deseosService.crearLista(data.titulo);
           this.navCtrl.push(AgregarPage,{listaId:listaId});
          }
        }
      ]
    });
    await alert.present();
    //this.navCtrl.push(AgregarPage);
  }

}
