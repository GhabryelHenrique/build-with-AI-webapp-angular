import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, MatTreeModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    navItems = [
    { name: 'Chat', icon: 'chat', path: 'chat' },
  ]
}
