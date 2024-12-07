import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ColectarElementosComponent } from '../../pages/colectar-elementos/colectar-elementos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'colectar',
    pathMatch: 'full',
  },
  {
    path: 'colectar',
    component: ColectarElementosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
