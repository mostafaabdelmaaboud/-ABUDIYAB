import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  active = 2;
  isCollapsed = false;
  model!: NgbDateStruct;
  today = this.calendar.getToday();
  loading = false;
  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
    this.loading = true;

  }
  print() {
    window.print();
  }

}
