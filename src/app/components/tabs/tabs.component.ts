import { Component, OnInit } from '@angular/core';
import { ComunService } from '../../../providers/comun/comun';

interface ITabOption {
  id: number;
  name: string;
  defaultIcon: string;
  selectedIcon: string;
  selected: boolean;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  tabOptions: Array<ITabOption> = [
    {
      id: 1,
      name: 'Colectar',
      defaultIcon: 'assets/img/imgs2/icono_colectar_gris.svg',
      selectedIcon: 'assets/img/imgs2/icono_colectar_verde.svg',
      selected: true,
    },
    {
      id: 2,
      name: 'Pendientes',
      defaultIcon: 'assets/img/imgs2/menu_pendientes_inactivo.svg',
      selectedIcon: 'assets/img/imgs2/menu_pendientes_select.svg',
      selected: false,
    },
    {
      id: 3,
      name: 'En Cierre',
      defaultIcon: 'assets/img/imgs2/menu_cierre_inactivo.svg',
      selectedIcon: 'assets/img/imgs2/menu_cierre_select.svg',
      selected: false,
    },
    {
      id: 4,
      name: 'Cerrados',
      defaultIcon: 'assets/img/imgs2/menu_cierre_inactivo.svg',
      selectedIcon: 'assets/img/imgs2/menu_cierre_select.svg',
      selected: false,
    },
  ];
  selectedTabOption = this.tabOptions[0];
  isGDL: boolean = false;
  index: number = 0;
  usuario = this._login.getUsuario();
  constructor(private _login: ComunService) {}

  ngOnInit() {
    /*    if(this.usuario['nivel'] === 46){
      this.isGDL = true
    }*/
  }

  handleTrackBy(index: number, item: ITabOption) {
    return item.id;
  }

  handleSelectedTab(id: number) {
    this.tabOptions = this.tabOptions.map((o: ITabOption) => {
      if (o.id === id) {
        this.selectedTabOption = {
          ...o,
          selected: true,
        };
      }
      return {
        ...o,
        selected: o.id === id,
      };
    });
  }
}
