// src/app/components/agent-list/agent-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { Agent, AgentService } from '../../agent.service';

@Component({
  selector: 'app-agent-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.scss']
})
export class AgentListComponent implements OnInit {
  agents$!: Observable<Agent[]>;

  constructor(private agentService: AgentService) {}

  ngOnInit(): void {
    this.agents$ = this.agentService.getAgents();
  }
}
