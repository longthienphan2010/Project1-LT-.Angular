import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/restaurant', title: 'Nhà hàng', icon: 'restaurant', class: '' },
  { path: '/hotel', title: 'Khách sạn', icon: 'hotel', class: '' },
  { path: '/tea', title: 'Trà', icon: 'coffee', class: '' },
  { path: '/motel', title: 'Motel', icon: 'house', class: '' }
];

export const ROUTES2: RouteInfo[] = [
  { path: '/news', title: 'Tin tức', icon: 'newspaper', class: '' },
  { path: '/synthetic', title: 'Tổng hợp', icon: 'person', class: '' },
  { path: '/evaluate', title: 'Đánh giá', icon: 'content_paste', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  menuItems2: any[];
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItems2 = ROUTES2.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
