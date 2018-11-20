import { Component, OnInit } from '@angular/core';
import { IpcService } from '../../services/ipc.service';
import { Ipc } from '../../models/Ipc';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  ipc: Ipc;
  constructor(private ipcService: IpcService) {}

  ngOnInit() {
    this.ipcService.getIpc().subscribe( ipc => {
      this.ipc = ipc;
    });
  }

}
