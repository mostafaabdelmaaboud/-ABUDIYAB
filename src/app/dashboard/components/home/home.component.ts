import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sidebarExpanded = false;
  public isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
