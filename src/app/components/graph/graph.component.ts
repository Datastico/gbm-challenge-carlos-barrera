import { Component, OnInit } from '@angular/core';
import { IpcService } from '../../services/ipc.service';
import { Ipc } from '../../models/Ipc';
import { IpcRow } from '../../models/IpcRow';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  ipc: Ipc;
  constructor(private ipcService: IpcService) {}

  ngOnInit() {
    this.ipcService.getIpc().subscribe( ipc => {
      console.log(ipc);
    });
    this.ipc = this.ipcService.getFakeIpc();
    console.log(this.ipc);
  }
}
