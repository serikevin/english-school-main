import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos-grid',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './cursos-grid.component.html',
  styleUrl: './cursos-grid.component.css',
})
export class CursosGridComponent {
  cursos = [
    {
      titulo: 'Maternelle et Primaire',
      imagem: 'assets/imagens/crianças.jpg',
      descricao: 'Nous encadrons vos enfants dès le bas age à la maternelle',
    },
    {
      titulo: 'College 6eme à la 3eme',
      imagem: 'assets/imagens/adolescentes.jpg',
      descricao: 'Notre college forme vos enfants et les prepare pour le lycée',
    },
    {
      titulo: 'Lycée 3eme à la Terminale',
      imagem: 'assets/imagens/adultos.jpg',
      descricao: 'Confiez nous vos lycéens et nous en ferons des Bacheliers',
    },
    {
      titulo: 'Enseignants',
      imagem: 'assets/imagens/professores.jpg',
      descricao: 'Nous avons une équipe de qualité.',
    },
  ];
}
