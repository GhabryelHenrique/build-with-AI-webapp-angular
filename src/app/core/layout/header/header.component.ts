import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { ThemeService } from '../../../shared/theme/theme.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // Criamos um sinal computado para verificar facilmente se está no modo escuro.
  // Isso é mais limpo do que colocar a lógica no template.
  isDarkMode = computed(() => this.themeService.theme() === 'dark');

  // Injetamos o serviço e o tornamos 'public' para que possamos chamá-lo do template.
  // Uma alternativa é criar um método local, como fizemos com toggleTheme().
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
