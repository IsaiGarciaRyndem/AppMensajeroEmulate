import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [TabsComponent],
  imports: [CommonModule, IonicModule, RouterLink],
})
export class TabsModule {}
