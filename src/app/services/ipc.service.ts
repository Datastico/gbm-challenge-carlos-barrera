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
  ipcUrl = '/Mercados/ObtenerDatosGrafico?empresa=IPC';
  constructor(private http: HttpClient) {}

  getIpc(): Observable<Ipc> {
    return this.http.get<Ipc>(this.ipcUrl);
  }
}
