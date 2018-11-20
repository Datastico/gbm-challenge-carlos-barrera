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
        }
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
