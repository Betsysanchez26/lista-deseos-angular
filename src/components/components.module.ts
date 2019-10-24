import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListasComponent } from './listas/listas';
import { IonicModule } from 'ionic-angular';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
	declarations: [ListasComponent],
	imports: [
    IonicModule,
    PipesModule
  ],
  exports: [ListasComponent]
  ,schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
