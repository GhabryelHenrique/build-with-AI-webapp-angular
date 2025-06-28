import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from './chat.models';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // A URL base do seu backend NestJS
  private readonly apiUrl = 'http://localhost:3000/chat';

  constructor(private http: HttpClient) { }

sendMessage(prompt: string, agentId: string, sessionId?: string | null): Observable<ApiResponse> {
  const body = { prompt, agentId, sessionId };
  return this.http.post<ApiResponse>(this.apiUrl, body);
}

  // Você também pode adicionar o método para buscar o histórico aqui
  getHistory(sessionId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/history/${sessionId}`);
  }
}
