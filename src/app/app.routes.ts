import { Routes } from '@angular/router';
import { AgentFormComponent } from './modules/agent/components/agent-form/agent-form.component';
import { AgentListComponent } from './modules/agent/components/agent-list/agent-list.component';
import { ChatComponent } from './modules/chat/chat.component';

export const routes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: 'agents', component: AgentListComponent },
  { path: 'agents/new', component: AgentFormComponent },
];
