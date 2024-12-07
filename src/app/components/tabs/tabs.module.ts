import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { TabsRoutingModule } from './tabs-routing.module';
import { ColectarElementosComponent } from '../../pages/colectar-elementos/colectar-elementos.component';
import { PendientesComponent } from '../../pages/pendientes/pendientes.component';
import { EnCierreComponent } from '../../pages/en-cierre/en-cierre.component';
import { CerradosComponent } from '../../pages/cerrados/cerrados.component';

@NgModule({
  declarations: [
    TabsComponent,
    ColectarElementosComponent,
    PendientesComponent,
    EnCierreComponent,
    CerradosComponent,
  ],
  imports: [CommonModule, IonicModule, RouterLink, TabsRoutingModule],
})
export class TabsModule {}
