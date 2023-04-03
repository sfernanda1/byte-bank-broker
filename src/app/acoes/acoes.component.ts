import { Subscription, merge } from 'rxjs';
import { AcoesService } from './acoes.service';
import { Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import {Acoes} from './modelo/acoes.ts';
import { switchMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl();
  todasAcoes$ = this.acoesService.getAcoes().pipe(tap(() => console.log('fluxo inicial')));
  filtroPeloInput$ = this.acoesInput.valueChanges.pipe(
    tap(() => console.log('Fluxo do filtro')),
    switchMap((valoDigitado) => this.acoesService.getAcoes(valoDigitado)))
  acoes$ = merge(this.todasAcoes$, this.filtroPeloInput$)
  constructor(private acoesService : AcoesService) {}

}

