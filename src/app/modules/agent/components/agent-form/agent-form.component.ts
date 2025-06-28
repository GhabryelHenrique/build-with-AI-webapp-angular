// src/app/components/agent-form/agent-form.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService } from '../../agent.service';

@Component({
  selector: 'app-agent-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Importe ReactiveFormsModule
  templateUrl: './agent-form.component.html',
  styleUrls: ['./agent-form.component.scss']
})
export class AgentFormComponent {
  agentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private agentService: AgentService,
    private router: Router
  ) {
    this.agentForm = this.fb.group({
      name: ['', Validators.required],
      persona: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.agentForm.invalid) {
      return;
    }

    this.agentService.createAgent(this.agentForm.value).subscribe({
      next: () => {
        alert('Agente criado com sucesso!');
        this.router.navigate(['/agents']); // Volta para a lista
      },
      error: (err) => {
        console.error('Erro ao criar agente:', err);
        alert('Falha ao criar o agente.');
      }
    });
  }
}
