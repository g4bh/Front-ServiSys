import { Component } from '@angular/core';

@Component({
  selector: 'app-suas-ordens',
  templateUrl: './suas-ordens.component.html',
  styleUrls: ['./suas-ordens.component.scss']
})
export class SuasOrdensComponent {

  ordens = [
    { id: 'OS4568SA', status: 'Em andamento', data: '14-09-2023' },
    { id: 'OS4567SA', status: 'Concluída', data: '11-07-2023' },
    { id: 'OS4566SA', status: 'Rejeitado', data: '27-06-2023' }
  ]
}
