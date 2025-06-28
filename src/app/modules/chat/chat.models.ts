export interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export interface ApiResponse {
  response: string;
  sessionId: string;
}
