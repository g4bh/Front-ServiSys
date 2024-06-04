import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent {
  ordens = [
    { id: 'OS4568SA', status: 'Em andamento', data: '14-09-2023' },
    { id: 'OS4567SA', status: 'Concluída', data: '11-07-2023' },
    { id: 'OS4566SA', status: 'Rejeitado', data: '27-06-2023' },
    { id: 'OS4566SA', status: 'Em análise', data: '27-06-2023' },
    { id: 'OS4566SA', status: 'Rejeitado', data: '27-06-2023' },
    { id: 'OS4566SA', status: 'Concluída', data: '27-06-2023' }
  ];

  abrirModal(ordem: any) {
    console.log('Ordem selecionada:', ordem);
  }
}
