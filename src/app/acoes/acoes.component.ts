import { Subscription } from 'rxjs';
import { AcoesService } from './acoes.service';
import { Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import {Acoes} from './modelo/acoes.ts';
@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl();

  acoes$ = this.acaoService.getAcoes();

  constructor(private acaoService : AcoesService) {}

}

