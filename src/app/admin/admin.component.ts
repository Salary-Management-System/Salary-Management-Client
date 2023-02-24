import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewChild, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../login/login.component';
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
      state('in', style({ gridTemplateColumns : '270px calc(100% - 270px)' })),
      state('out', style({ gridTemplateColumns : '60px calc(100% - 60px)'})),
      transition('in<=>out', animate('400ms ease-in-out'))
    ])
  ]
})
export class AdminComponent implements OnInit, AfterViewInit {
  pinkColor = '#FAEBEFFF';
  navy_blueColor = '#333e7a';
  user : any;
  expandSidebarString = 'in';
  @ViewChild(HeaderComponent) header! : HeaderComponent;
  @ViewChild(SidebarComponent) sidebar! : SidebarComponent;
  constructor(
    private _apiService : ApiServiceService,
    private _localService : LocalStorageService,
    private _router : Router 
  ) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.onHandleExpandSidebar();
  }

  onHandleExpandSidebar() {
    // Applying the function that changes the state of grid layout when the hambuger button is clicked
    this.header.expandBtn.first['nativeElement'].addEventListener('click', this.handleExpandCallback.bind(this));
  }

  private handleExpandCallback() {
    if(this.expandSidebarString === 'out') {
      this.expandSidebarString = 'in';
    } else {
      if(this.sidebar.listFeatures.some(row => row.isExpand)) {
        this.sidebar.listFeatures.map(row => {
          if(row.isExpand) row.isExpand = false;
        })
        setTimeout(() => this.expandSidebarString = 'out', 100)
      } else {
        this.expandSidebarString = 'out'
      }
    }
    setTimeout(() => {
      this.sidebar.isExpand = !this.sidebar.isExpand;
    }, 250)
  }
}


