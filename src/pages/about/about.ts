import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeseosProvider } from '../../providers/deseos/deseos';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  completada: boolean = true;
  constructor(public navCtrl: NavController, public deseosService: DeseosProvider) {

  }

}
