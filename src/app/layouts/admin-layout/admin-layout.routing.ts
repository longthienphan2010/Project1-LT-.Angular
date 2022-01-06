import { TeaComponent } from './../../tea/tea.component';
import { Routes } from '@angular/router';

import { RestaurantComponent } from '../../restaurant/restaurant.component';
import { HotelComponent } from '../../hotel/hotel.component';
import { MotelComponent } from '../../motel/motel.component';
import { NewsComponent } from '../../news/news.component';
import { SyntheticComponent } from '../../synthetic/synthetic.component';
import { EvaluateComponent } from '../../evaluate/evaluate.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LocationDetailComponent } from 'app/location-detail/location-detail.component';
import { NewsDetailComponent } from 'app/news-detail/news-detail.component';
import { ManageNewsComponent } from 'app/manage-news/manage-news.component';
import { ManageLocationComponent } from 'app/manage-location/manage-location.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'news-detail/:id', component: NewsDetailComponent },
    { path: 'motel-detail/:id', component: LocationDetailComponent },
    { path: 'tea-detail/:id', component: LocationDetailComponent },
    { path: 'hotel-detail/:id', component: LocationDetailComponent },
    { path: 'restaurant-detail/:id', component: LocationDetailComponent },
    { path: 'restaurant', component: RestaurantComponent },
    { path: 'hotel', component: HotelComponent },
    { path: 'tea', component: TeaComponent },
    { path: 'motel', component: MotelComponent },
    { path: 'news', component: NewsComponent },
    { path: 'synthetic', component: SyntheticComponent },
    { path: 'evaluate', component: EvaluateComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: 'manage-location', component: ManageLocationComponent },
    { path: 'manage-news', component: ManageNewsComponent },
];
