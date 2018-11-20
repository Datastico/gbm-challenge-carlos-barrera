import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ipc } from '../models/Ipc';
import { IpcRow } from '../models/IpcRow';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class IpcService {
  fakeIpc: Ipc;
  ipcUrl = '/Mercados/ObtenerDatosGrafico?empresa=IPC';
  constructor(private http: HttpClient) {
    this.fakeIpc = {
      result: true,
      resultObj: [
        {
          'Fecha': '2018-11-16T08:30:01.29-06:00',
          'Precio': 41368.59,
          'Porcentaje': -0.2,
          'Volumen': 117913
        }, {
          'Fecha': '2018-11-16T08:30:32.14-06:00',
          'Precio': 41441.84,
          'Porcentaje': -0.02,
          'Volumen': 238212
        }, {
          'Fecha': '2018-11-16T08:31:03.043-06:00',
          'Precio': 41477.6,
          'Porcentaje': 0.07,
          'Volumen': 338789
        }, {
          'Fecha': '2018-11-16T08:31:34.06-06:00',
          'Precio': 41489.32,
          'Porcentaje': 0.09,
          'Volumen': 402622
        },
        {'Fecha':'2018-11-16T08:32:05.067-06:00','Precio':41502.68,'Porcentaje':0.13,'Volumen':476959},{'Fecha':'2018-11-16T08:32:36.077-06:00','Precio':41514.54,'Porcentaje':0.15,'Volumen':619569},{'Fecha':'2018-11-16T08:33:07.07-06:00','Precio':41494.95,'Porcentaje':0.11,'Volumen':677057},{'Fecha':'2018-11-16T08:33:38.053-06:00','Precio':41548.86,'Porcentaje':0.24,'Volumen':753333},{'Fecha':'2018-11-16T08:34:09.047-06:00','Precio':41562.1,'Porcentaje':0.27,'Volumen':826679},{'Fecha':'2018-11-16T08:34:40.05-06:00','Precio':41548.84,'Porcentaje':0.24,'Volumen':877103},{'Fecha':'2018-11-16T08:35:11.05-06:00','Precio':41566.96,'Porcentaje':0.28,'Volumen':916819}
      ],
      msg:'Ok'
    };
  }

  getFakeIpc(): Ipc {
    return this.fakeIpc;
  }
  getIpc(): Observable<Ipc> {
    return this.http.get<Ipc>(this.ipcUrl);
  }
}
