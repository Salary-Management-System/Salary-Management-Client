import { Component, ElementRef, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { faUserAlt, faCalendar, faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons'
import { LocalStorageService } from 'src/app/services/local-storage.service/local-storage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import axios from 'axios';
import { ApiServiceService } from 'src/app/services/api.service/api-service.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

const events = [
  { content : 'Access', date : '11/03/2000' },
  { content : 'Denied', date : '22/09/2002' },
  { content : 'Access', date : '11/03/2011' },
  { content : 'Forbidden', date : '11/03/2012' },
  { content : 'Success', date : '11/03/2014' },
  { content : 'Pending', date : '11/03/2019' }
]

const apiPath = '/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // Data
  user : any;
  employee : any;
  events = events;
  geo : any;
  listUsers : any[] = [];
  // roles : any[]

  // Icon
  iconUser = faUserAlt;
  iconCalendar = faCalendar;
  geoIcon = faLocationDot;
  searchIcon = faSearch;

  // State DOM
  displayTextInBtnCopy = 'Copy';
  
  // Children View
  @ViewChildren('subMenuItem') private subMenuItem! : QueryList<ElementRef<HTMLLIElement>>;
  @ViewChildren('section') private sections! : QueryList<ElementRef<HTMLDivElement>>;

  constructor(
    private _localStorageService : LocalStorageService,
    private _modalService: NgbModal,
    private _apiService : ApiServiceService
  ) { }

  ngOnInit(): void {
    this.user = this._localStorageService.getObject('user');
    const [dateConvert] = new Date(this.user['created_at']).toLocaleString().split(',');
    this.user['created_at'] = dateConvert

    this.user = {...this.user}
    this.employee = this.user.employee ? {...this.user.employee} : null;

    // Get IP
    axios.get('http://ip-api.com/json').then(res => {
      this.geo = {...res.data};
    })

    // Get list of users
    this._apiService.get(apiPath).then(
      res => {
        // @ts-ignore
        if(res.data.code == 200) {
          // @ts-ignore
          this.listUsers = res.data.data;
        }
      }
    ).catch(err => console.log('Error : ' ,err))
  }

  ngAfterViewInit() {
    const sectionDefault = 'timeline';
    this.subMenuItem.forEach((category) => {
      if(category.nativeElement.className.includes(sectionDefault)) {
        category.nativeElement.classList.add('active')
      } else {
        category.nativeElement.classList.contains('active') && category.nativeElement.classList.remove('active');
      }
    })
    this.sections.map(section => {
      if(section.nativeElement.id == sectionDefault) {
        section.nativeElement.classList.add('show');
      }
      return section;
    })
  }

  onCopyToClipboard(text : string) {
    window.navigator.clipboard.writeText(text);
    this.displayTextInBtnCopy = 'Copied !';
  }
  
  onChangeCategory(idSection : string) {
    this.subMenuItem.forEach((category) => {
      if(category.nativeElement.className.includes(idSection)) {
        category.nativeElement.classList.add('active');
      } else {
        category.nativeElement.classList.contains('active') && category.nativeElement.classList.remove('active');
      }
    })
    this.sections.map(section => {
      if(section.nativeElement.id == idSection) {
        if(section.nativeElement.classList.contains('show')) {
          return;
        } else {
          section.nativeElement.classList.add('show');
        }
      } else {
        section.nativeElement.classList.contains('show')
        && section.nativeElement.classList.remove('show')
      }
    })
  }

  // @ts-ignore
  openModal(content) {
		this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
  }
}
