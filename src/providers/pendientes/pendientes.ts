import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {URL} from '../config/config.services' //Trae las ips

@Injectable({
  providedIn: 'root',
})
export class PendientesProvider {
  private readonly key: string = 'AIzaSyCjtEyMAWq3wRg6sN2z4bdb7YDBfIvyaLc';
  private readonly elementosAColectar = `${URL}consultarPendientesDeMensajeroPL`;
  private readonly obtenerPersonalAlmacen = `${URL}obtenerPersonalAlmacenCliente`;
  private readonly actualizarPersonalAlmacen = `${URL}actualizarPersonalAlmacenCliente`;
  private readonly ejecutarRutaMensajeroPL = `${URL}ejecutarRutaMensajeroPL`;
  private readonly consultarPendientesEnCierrePL = `${URL}consultarPendientesEnCierrePL`;
  private readonly concluirEjecucionDeRuta = `${URL}concluirEjecucionDeRutaPL`;
  private readonly guardarComentariosRutaDP = `${URL}guardarComentariosRutaDP`;
  private readonly listarPendientesCerradosPL = `${URL}listarPendientesCerradosPL`;
  private readonly apiURLguardarArchivo = `${URL}guardarFirma`;
  private readonly apiURLguardarFotos = `${URL}guardarFotos`;
  private readonly apiURLvalidarCoordenadasGPS = `${URL}validarCoordenadasGPS`;
  private readonly apiURLInsertarRecorrido = `${URL}insertarRecorrido`;

  constructor(private http: HttpClient) {}

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  elementosColectar(username: string): Observable<any> {
    const body = { valor: username, estado: 'AEjecutar' };
    return this.http
      .post<any>(this.elementosAColectar, body, { headers: this.createHeaders() })
      .pipe(catchError(this.handleError));
  }

  ejecutarRuta(lstPendientes: any[]): Observable<any> {
    return this.http
      .post<any>(this.ejecutarRutaMensajeroPL, lstPendientes, { headers: this.createHeaders() })
      .pipe(catchError(this.handleError));
  }

  cerrarRuta(lstPendientes: any[], idUsuario: number, username: string): Observable<any> {
    const body = { pendientes: lstPendientes, idUsuario, valor: username };
    return this.http
      .post<any>(this.concluirEjecucionDeRuta, body, { headers: this.createHeaders() })
      .pipe(catchError(this.handleError));
  }

  cerrarRutaDPNoRealizados(lstComentariosRutaDP: any): Observable<any> {
    const body = { comentariosRutaDP: lstComentariosRutaDP };
    return this.http
      .post<any>(this.guardarComentariosRutaDP, body, { headers: this.createHeaders() })
      .pipe(catchError(this.handleError));
  }

  pendientes(username: string): Observable<any> {
    const body = { valor: username, estado: 'Colectado' };
    return this.http
      .post<any>(this.elementosAColectar, body, { headers: this.createHeaders() })
      .pipe(catchError(this.handleError));
  }

  enCierre(username: string): Observable<any> {
    const body = { valor: username };
    return this.http
      .post<any>(this.consultarPendientesEnCierrePL, body, { headers: this.createHeaders() })
      .pipe(catchError(this.handleError));
  }

  clientes(id: number): Observable<any> {
    const body = { idCliente: id };
    return this.http
      .post<any>(this.obtenerPersonalAlmacen, body, { headers: this.createHeaders() })
      .pipe(catchError(this.handleError));
  }

  actualizarCliente(personal: any): Observable<any> {
    const body = { personal };
    return this.http
      .post<any>(this.actualizarPersonalAlmacen, body, { headers: this.createHeaders() })
      .pipe(catchError(this.handleError));
  }

  guardaDocumentacion(archivo: any): Observable<any> {
    return this.http
      .post<any>(this.apiURLguardarArchivo, archivo, { headers: this.createHeaders() })
      .pipe(catchError(this.handleError));
  }

  guardaDocumentacionFotos(imagenes: any, pendiente: any, path: string): Observable<any> {
    const body = { archivos: pendiente, fotos: imagenes, valor: path, tipo: 'RT' };
    return this.http
      .post<any>(this.apiURLguardarFotos, body, { headers: this.createHeaders() })
      .pipe(catchError(this.handleError));
  }

  obtenerPendientesCerrados(username: string): Observable<any> {
    const body = { valor: username };
    return this.http
      .post<any>(this.listarPendientesCerradosPL, body, { headers: this.createHeaders() })
      .pipe(catchError(this.handleError));
  }

  validarCoordenadasGPS(lstPendientes: any): Observable<any> {
    const body = { pendientes: lstPendientes };
    return this.http
      .post<any>(this.apiURLvalidarCoordenadasGPS, body, { headers: this.createHeaders() })
      .pipe(catchError(this.handleError));
  }

  insertarRecorrido(recorrido: any): Observable<any> {
    return this.http
      .post<any>(this.apiURLInsertarRecorrido, recorrido, { headers: this.createHeaders() })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    return throwError(() => error.error || 'Server error');
  }
}
