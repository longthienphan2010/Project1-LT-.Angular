import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { RestaurantComponent } from '../../restaurant/restaurant.component';
import { HotelComponent } from '../../hotel/hotel.component';
import { TeaComponent } from '../../tea/tea.component';
import { MotelComponent } from '../../motel/motel.component';
import { NewsComponent } from '../../news/news.component';
import { SyntheticComponent } from '../../synthetic/synthetic.component';
import { EvaluateComponent } from '../../evaluate/evaluate.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { LocationDetailComponent } from 'app/location-detail/location-detail.component';
import { NewsDetailComponent } from 'app/news-detail/news-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    RestaurantComponent,
    HotelComponent,
    TeaComponent,
    MotelComponent,
    NewsComponent,
    SyntheticComponent,
    EvaluateComponent,
    UpgradeComponent,
    LocationDetailComponent,
    NewsDetailComponent
  ]
})

export class AdminLayoutModule { }
