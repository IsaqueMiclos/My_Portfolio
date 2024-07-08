import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Materials
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Enum
import { EDialogPanelClass } from '../enum/EDialogPanelClass.enum';


// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayDeProjects = signal<IProjects[]>([
    {
      src: "assets/img/projects/calculator.svg",
      alt: "Projeto calculadora",
      title: "Calculadora",
      width: "100px",
      height: "51px",
      description: "Calculadora feita em Js, HTML e CSS",
      links: [
        {
          name: "github",
          href: "#",
        },
      ],
    },
    {
      src: "assets/img/projects/lista-de-tarefas.svg",
      alt: "Projeto Lista de tarefas",
      title: "Lista de tarefas",
      width: "100px",
      height: "51px",
      description: "Lista de tarefas feita em Js, HTML e CSS",
      links: [
        {
          name: "github",
          href: "#",
        },
      ],
    }
  ])

  public openDiaLog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    })
  } 
}
