import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Account } from '../../../app/account';

@Component({
  selector: 'app-navbar',
  styleUrls: ['./navbar.component.less'],
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar"
                  aria-expanded="false"
                  aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" [routerLink]="['/stock']"><i class="fa fa-glass"></i>&nbsp;Wine cellar</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a [routerLink]="['/stock']"><i class="fa fa-user"></i>&nbsp;My wines</a></li>
            <li><a [routerLink]="['/about']"><i class="fa fa-info-circle"></i>&nbsp;About</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="navbar-text hidden-sm hidden-xs hidden-md">
              Welcome {{account?.firstName}} {{ account?.lastName}}
            </li>
            <li>
              <a href="javascript: void(0)" (click)="logoutClicked()">
                <i class="fa fa-sign-out"></i>&nbsp;Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`
})
export class NavbarComponent {
  @Input() account: Account;
  @Output() logout = new EventEmitter();

  logoutClicked(): void {
    this.logout.emit(null);
  }
}
