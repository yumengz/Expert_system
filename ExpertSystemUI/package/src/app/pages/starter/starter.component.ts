import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AppSalesOverviewComponent } from 'src/app/components/sales-overview/sales-overview.component';

import { AppActivityTimelineComponent } from 'src/app/components/activity-timeline/activity-timeline.component';
import { AppMyContactsComponent } from 'src/app/components/my-contacts/my-contacts.component';
import { AppSalesOurVisitorsComponent } from 'src/app/components/our-visitors/our-visitors.component';
import { AppProfileCardComponent } from 'src/app/components/profile-card/profile-card.component';


// Import the new components
import { AppLlmPlaygroundComponent } from 'src/app/components/llm-playground/llm-playground.component';
import { AppChatSessionComponent } from 'src/app/components/chat-session/chat-session.component';


@Component({
  selector: 'app-starter',
  imports: [
    MaterialModule,
    AppSalesOverviewComponent,
    AppSalesOurVisitorsComponent,
    AppProfileCardComponent,
    AppMyContactsComponent,
    AppActivityTimelineComponent,
    AppLlmPlaygroundComponent,  // Added LLM Playground
    AppChatSessionComponent,     // Added Chat Session
  ],
  templateUrl: './starter.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent { }