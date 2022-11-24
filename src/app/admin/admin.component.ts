import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewChild, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { ApiServiceService } from '../services/api.service/api-service.service';
import { LocalStorageService } from '../services/local-storage.service/local-storage.service';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations : [
    trigger('slideInOut', [
      state('in', style({ gridTemplateColumns : '300px auto' })),
      state('out', style({ gridTemplateColumns : '60px auto'})),
      transition('in<=>out', animate('400ms ease-in-out'))
    ])
  ]
})
export class AdminComponent implements OnInit, AfterViewInit {
  user : any;
  expandSidebarString = 'in';
  @ViewChild(HeaderComponent) header! : HeaderComponent;
  @ViewChild(SidebarComponent) sidebar! : SidebarComponent;
  constructor(
    private _apiService : ApiServiceService,
    private _localService : LocalStorageService  
  ) {}

  ngOnInit(): void {
    const accessToken = this._localService.get('accessToken');
    this._apiService.setAccessToken(accessToken);
  }

  ngAfterViewInit(): void {
    this.onHandleExpandSidebar();
  }

  onHandleExpandSidebar() {
    this.header.expandBtn.first['nativeElement'].addEventListener('click', this.handleExpandCallback.bind(this));
  }

  private handleExpandCallback() {
    this.expandSidebarString = this.expandSidebarString === 'out' ? 'in' : 'out';
    this.sidebar.expandLabel = this.sidebar.expandLabel === 'out' ? 'in' : 'out';
  }
}


