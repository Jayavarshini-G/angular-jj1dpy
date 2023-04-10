import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from '../dashBoard/dashBoard-routing.module';
import { DashBoardHomeComponent } from '../dashBoard/dash-board-home/dash-board-home.component';


@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DashBoardHomeComponent],
})
export class DashboardModule {}
