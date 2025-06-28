// src/app/components/chat/chat.component.ts

import { Component, OnInit } from '@angular/core';
import { Message } from './chat.models';
import { ChatService } from './chat.service';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';
import { Agent, AgentService } from '../agent/agent.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  imports: [CommonModule, FormsModule, MarkdownModule],
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit { // Implemente OnInit
  messages: Message[] = [];
  newMessage: string = '';
  sessionId: string | null = null;
  isLoading: boolean = false;

  // Novas propriedades
  agents: Agent[] = [];
  selectedAgentId: string = ''; // Inicia vazio
agentName: string = '';
constructor(
    private chatService: ChatService,
    private agentService: AgentService
  ) {}

  ngOnInit(): void {
    // Carrega os agentes (lógica existente)
    this.agentService.getAgents().subscribe(agents => {
      this.agents = agents;
    });
  }

  // --- NOVO MÉTODO PARA SELECIONAR O AGENTE ---
  selectAgent(agentId: string): void {
    console.log('Agente selecionado:', agentId);
    // Se o usuário clicar no mesmo agente, desmarque-o (opcional)
    if (this.selectedAgentId === agentId) {
      this.selectedAgentId = '';
    } else {
      this.selectedAgentId = agentId;
      this.agentName = this.agents.find(agent => agent._id === agentId)?.name || '';
    }
  }

  sendMessage(): void {
    if (!this.newMessage.trim() || !this.selectedAgentId) {
      // Não envia se não houver texto ou agente selecionado
      return;
    }

    this.messages.push({ text: this.newMessage, sender: 'user' });
    const userPrompt = this.newMessage;
    this.newMessage = '';

    setTimeout(() => {
      this.isLoading = true;

      // Passe o agentId selecionado para o serviço
      this.chatService.sendMessage(userPrompt, this.selectedAgentId, this.sessionId).subscribe({
        next: (apiResponse) => {
          this.isLoading = false;
          this.messages.push({ text: apiResponse.response, sender: 'bot' });
          this.sessionId = apiResponse.sessionId;
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Ocorreu um erro:', err);
          this.messages.push({ text: 'Desculpe, ocorreu um erro.', sender: 'bot' });
        }
      });
    }, 1000)
  }
}
