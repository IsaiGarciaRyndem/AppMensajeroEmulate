import { Component, OnInit } from '@angular/core';
import {ComunService} from "../../../providers/comun/comun";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent  implements OnInit {
  tab: any;
  tab1: any;
  tab2: any;
  tab3: any;

  isGDL: boolean = false;

  index: number = 0;
  usuario = this._login.getUsuario()
  constructor(private _login: ComunService) {

  }

  ngOnInit() {
/*    if(this.usuario['nivel'] === 46){
      this.isGDL = true
    }*/
  }

}
