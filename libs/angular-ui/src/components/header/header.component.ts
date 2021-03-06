import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'ui-header',
  template: `
    <div class="header">
      <div class="container">
        <div class="d-flex">
          <a class="navbar-brand" routerLink="/">
            <img src="assets/brand/tabler.svg" class="navbar-brand-img" alt="tabler.io">
            {{ config?.title }}
          </a>
          <div class="ml-auto d-flex order-lg-2">
            <div class="nav-item">
              <ng-container *ngFor="let link of config?.links">
                <a [href]="link.link" [class]="link.class" [target]="link.target || '_self' ">
                  <i [class]="link.icon"></i>
                  {{ link.label }}
                </a>
              </ng-container>
            </div>
            <div class="dropdown d-none d-md-flex" dropdown *ngIf="notifications">
              <a dropdownToggle class="nav-link icon" data-toggle="dropdown">
                <i class="fe fe-bell"></i>
                <span class="nav-unread"></span>
              </a>
              <div *dropdownMenu class="dropdown-menu dropdown-menu-right dropdown-menu-arrow px-4">
                <a href="#" class="dropdown-item d-flex">
                  <ui-avatar [image]="users[1].photo" class="mr-3"></ui-avatar>
                  <div>
                    <strong>{{ users[ 1 ].name }}</strong> pushed new commit: Fix page load performance issue.
                    <div class="small text-muted">10 minutes ago</div>
                  </div>
                </a>
                <a href="#" class="dropdown-item d-flex">
                  <ui-avatar [image]="users[2].photo" class="mr-3"></ui-avatar>
                  <div>
                    <strong>{{ users[ 2 ].name }}</strong> started new task: Tabler UI design.
                    <div class="small text-muted">1 hour ago</div>
                  </div>
                </a>
                <a href="#" class="dropdown-item d-flex">
                  <ui-avatar [image]="users[3].photo" class="mr-3"></ui-avatar>
                  <div>
                    <strong>{{ users[ 3 ].name }}</strong> deployed new version of NodeJS REST Api V3
                    <div class="small text-muted">2 hours ago</div>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item text-center text-muted-dark">Mark all as read</a>
              </div>
            </div>

            <div class="dropdown" dropdown *ngIf="user">
              <a class="nav-link pr-0" data-toggle="dropdown" dropdownToggle>
                <ui-avatar [image]="user.avatar"></ui-avatar>
                <span class="ml-2 d-none d-lg-block">
                  <span class="text-default">{{ user.name }} {{ user.surname }}</span>
                  <small class="text-muted d-block mt-1">Administrator</small>
                </span>
              </a>
              <div *dropdownMenu class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <a class="dropdown-item" routerLink="/profile">
                  <span>Profile</span>
                </a>
                <a class="dropdown-item" routerLink="">
                  <span>Settings</span>
                </a>
                <a class="dropdown-item" routerLink="/pages/email">
                  <span class="float-right"><span class="badge badge-primary">6</span></span>
                  <span>Inbox</span>
                </a>
                <a class="dropdown-item" routerLink="/pages/email/compose">
                  <span>New message</span>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" routerLink="">Need help?</a>
                <a class="dropdown-item" routerLink="/login">Sign out</a>
              </div>
            </div>
          </div>
          <div class="collapse navbar-collapse order-lg-1" id="navbarToggler">
            <ul class="navbar-nav mt-2 mt-lg-0 mx-0 mx-lg-2">
              <li class="nav-item"><a href="#" class="nav-link">Dashboard</a></li>
              <li class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Projects</a>
                <div class="dropdown-menu mt-2 text-color" role="menu">
                  <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-tag"></i> Action </a>
                  <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-pencil"></i> Another action </a>
                  <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-reply"></i> Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-ellipsis-h"></i> Separated link</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="header-nav d-none d-lg-flex">
      <div class="container">
        <div class="row align-items-center">
          <div class="col">
            <ui-menu [links]="config?.menu"></ui-menu>
          </div>
          <div class="col-3 ml-auto">
            <form class="input-icon">
              <input type="search" class="form-control header-search" placeholder="Search&hellip;" tabindex="1">
              <div class="input-icon-addon">
                <i class="fe fe-search"></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  @Input() public config
  @Input() public user
  @Input() public notifications

  public users = []
  constructor() {
  }
  public ngOnInit() {
    this.user = this.config.user
    this.notifications = this.config.notifications
  }
}
