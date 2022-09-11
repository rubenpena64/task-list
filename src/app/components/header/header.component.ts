import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Task List';
  constructor() { }


  ngOnInit(): void {
  }
  toggleAddTask(){
   // this.uiService.toggleAddTask();
  }
}
