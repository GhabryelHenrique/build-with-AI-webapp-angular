// src/app/theme.service.ts
import { Injectable, signal, effect, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Usamos um sinal para o tema atual. Inicia com 'light' por padrão.
  theme = signal<Theme>('light');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Verificamos se estamos no navegador antes de acessar localStorage e document
    if (isPlatformBrowser(this.platformId)) {
      this.initializeTheme();

      // Usamos um 'effect' para reagir a mudanças no sinal 'theme'.
      // Toda vez que o valor do sinal mudar, este código será executado.
      effect(() => {
        // Guarda a preferência no localStorage
        localStorage.setItem('theme', this.theme());

        // Aplica ou remove a classe do body
        if (this.theme() === 'dark') {
          document.body.classList.add('dark-theme');
        } else {
          document.body.classList.remove('dark-theme');
        }
      });
    }
  }

  private initializeTheme() {
    // 1. Tenta pegar o tema do localStorage
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      this.theme.set(storedTheme);
      return;
    }

    // 2. Se não houver, verifica a preferência do sistema operacional do usuário
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (userPrefersDark) {
      this.theme.set('dark');
    } else {
      this.theme.set('light');
    }
  }

  /**
   * Alterna o tema entre 'light' e 'dark'.
   */
  toggleTheme() {
    this.theme.update(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  }
}
