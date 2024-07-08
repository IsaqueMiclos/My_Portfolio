import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "ServiceNow Developer",
        p: "Outlus | Set 2024 - Present",
      },
      text: "<p>Atuando como desenvolvedor na plataforma ServiceNow, para a empresa Outlus Italy.</p>",
    }
  ])
}
