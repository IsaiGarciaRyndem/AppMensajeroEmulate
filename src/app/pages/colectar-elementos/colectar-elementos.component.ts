import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from "@ionic/angular";
import {ComunService} from "../../../providers/comun/comun";
import {PendientesProvider} from "../../../providers/pendientes/pendientes";

@Component({
  selector: 'app-colectar-elementos',
  templateUrl: './colectar-elementos.component.html',
  styleUrls: ['./colectar-elementos.component.scss'],
})
export class ColectarElementosComponent implements OnInit {

  usuario = this._login.getUsuario()
  arrayAux: any = [];

  pendientes: any[] = [];
  pendientesAgrupados: any[] = [];

  totalPendientes: number = 0;
  constructor(
    public _pendientes: PendientesProvider,
    public navCtrl: NavController,
    private _login: ComunService
  ) {}

  ngOnInit() {
    let us = this.usuario['usuario'];
    this.arrayAux = [];
    this.totalPendientes = 0;
    this.pendientes = [];
    this.pendientesAgrupados = [];
    debugger;
    this._pendientes.elementosColectar(us).subscribe(
      (data) => {
        this.pendientes = [...this.pendientes, ...data.current];
        this.pendientes.forEach((item) => {
          let agrupado = this.pendientesAgrupados.find(
            (pa) => pa.empresa === item.empresa && pa.idHorario === item.idHorario
          );

          if (!agrupado) {
            agrupado = {
              empresa: item.empresa,
              eventos: 0,
              inaplasables: 0,
              urgentes: 0,
              normales: 0,
              ruta: item.direccion,
              items: [],
              coordenada: [{ lat: item.latitud, lng: item.longitud }],
              idHorario: item.idHorario,
            };
            this.pendientesAgrupados.push(agrupado);
          }

          // Procesar el item actual
          const itemExistente = agrupado.items.find(
            (i: any) => i.folioEvento === item.folioEvento
          );

          if (!itemExistente) {
            agrupado.eventos++;
            agrupado.inaplasables += item.prioridad === "Inaplazable" ? 1 : 0;
            agrupado.urgentes += item.prioridad === "Urgente" ? 1 : 0;
            agrupado.normales += item.prioridad === "Normal" ? 1 : 0;
            agrupado.items.push(item);
          } else {
            if (!itemExistente.folioProducto.includes(item.folioProducto)) {
              itemExistente.folioProducto += `,${item.folioProducto}`;
            }
            if (!itemExistente.folioDocumento.includes(item.folioDocumento)) {
              itemExistente.folioDocumento += `,${item.folioDocumento}`;
            }
          }
        });
        // Actualizar métricas
        this.arrayAux = [...this.arrayAux, ...this.pendientesAgrupados];
        this.totalPendientes = this.arrayAux.length;
      },
      (error) => {
        console.error(error);
      }
    );

  }

  go(i: any): void {
    // this.navCtrl.push(ColectarDetallesPage, {items: this.arrayAux[i].items});
  }
}
