import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial-cpd',
  templateUrl: './pagina-inicial-cpd.component.html',
  styleUrls: ['./pagina-inicial-cpd.component.scss']
})
export class PaginaInicialCpdComponent {
  ordens = [
    { id: 'OS4568SA', status: 'Concluída', data: '14-09-2023' },
    { id: 'OS4567SA', status: 'Concluída', data: '11-07-2023' },
    { id: 'OS4567SA', status: 'Em andamento', data: '11-07-2023' },
    { id: 'OS4566SA', status: 'Em andamento', data: '27-06-2023' }
  ]
}
