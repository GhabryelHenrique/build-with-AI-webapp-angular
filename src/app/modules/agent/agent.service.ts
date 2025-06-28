// src/app/services/agent.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definindo uma interface para o nosso Agente
export interface Agent {
  _id: string;
  name: string;
  persona: string;
}

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private readonly apiUrl = 'http://localhost:3000/agents';

  constructor(private http: HttpClient) { }

  // Busca todos os agentes
  getAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.apiUrl);
  }

  // Cria um novo agente
  createAgent(data: { name: string; persona: string }): Observable<Agent> {
    return this.http.post<Agent>(this.apiUrl, data);
  }
}
