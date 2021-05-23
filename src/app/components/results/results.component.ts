import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { DataService } from 'src/app/data-service/data.service';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

    faArrowLeft = faArrowLeft;
    user: User;
    repos = [];
    dataService: DataService;

  constructor(dataService: DataService) { 
      this.dataService = dataService;
  }

  ngOnInit(): void {
      this.user = this.dataService.user;
      this.repos = this.dataService.repos;
  }

}
