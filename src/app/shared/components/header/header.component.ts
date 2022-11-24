import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { faUserSecret, faMagnifyingGlass, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userIcon = faUserSecret;
  glassSearch = faMagnifyingGlass;
  messageIcon = faEnvelope;
  notificationIcon = faBell;
  isHoverForShowMenu = false;
  isExpand = false;
  @ViewChildren('expandBtn') expandBtn! : QueryList<ElementRef<HTMLButtonElement>>;
  constructor() { }

  ngOnInit(): void {
  }

  onHoverHandler() {
     this.isHoverForShowMenu = !this.isHoverForShowMenu
  }
  onExpandSidebar() {
    this.expandBtn.first.nativeElement.children[0].classList.toggle('expand');
  }
}
