import { Component, OnInit } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-outsourcing',
  templateUrl: './outsourcing.component.html',
  styleUrls: ['./outsourcing.component.scss']
})

export class OutsourcingComponent implements OnInit {
  painelSaas: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  abrirPainelSaas(){
    this.painelSaas = true;
  }

}
