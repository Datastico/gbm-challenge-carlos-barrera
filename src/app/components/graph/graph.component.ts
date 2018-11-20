import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import * as Plotly from '../../../../node_modules/plotly.js/dist/plotly.js';
import {Config, Data, Layout} from '../../../../node_modules/plotly.js/dist/plotly.js';

import { IpcService } from '../../services/ipc.service';
import { Ipc } from '../../models/Ipc';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  @ViewChild('chart') el: ElementRef;

  ipc: Ipc;
  fechas: string[] = [];
  precios: number[] = [];
  precioMin: number;
  precioMax: number;
  constructor(private ipcService: IpcService) {}

  ngOnInit() {
    const self = this;

    this.ipcService.getIpc().subscribe( ipc => {
      this.ipc = ipc;
      this.ipc.resultObj.forEach(element => {
          self.fechas.push(element.Fecha);
          self.precios.push(element.Precio);
      });
      this.basicChart();
    });
  }
  basicChart() {
    const element = this.el.nativeElement;
    this.precioMax = Math.max.apply(null, this.precios);
    this.precioMin = Math.min.apply(null, this.precios);
    const rangeMargin = 100;
    const data = [{
        x: this.fechas,
        y: this.precios,
        fill: 'tozeroy',
        fillcolor: '#ece0c3',
        line: {
          color: '#3e3934'
        },
        mode: 'lines',
        type: 'scatter'
    }];
    const layout = {
        title: 'IPC (price vs time)',
        margin: {
          l: 80,
          r: 40,
          b: 65,
          t: 90,
        },
        xaxis: {
          title: 'Time'
        },
        yaxis: {
          range: [this.precioMin-rangeMargin, this.precioMax+rangeMargin],
          title: 'Price (MXN)'
        },
        shapes: [
            {
                type: 'line',
                xref: 'paper',
                x0: 0,
                y0: this.precioMax,
                x1: 1,
                y1: this.precioMax,
                line: {
                    color: 'rgb(0, 200, 0)',
                    width: 2,
                    dash: 'dot'
                }
            },
            {
                type: 'line',
                xref: 'paper',
                x0: 0,
                y0: this.precioMin,
                x1: 1,
                y1: this.precioMin,
                line: {
                    color: 'rgb(200, 0, 0)',
                    width: 2,
                    dash: 'dot'
                }
            }
        ]
      };

    Plotly.plot(element, data, layout, {responsive: true});
  }
}
