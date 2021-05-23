import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { DataService } from 'src/app/data-service/data.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

    user: User;
    dataService: DataService;
    
  constructor(dataService: DataService) { 
      this.dataService = dataService;
  }

  ngOnInit(): void {
      this.user = this.dataService.user;
  }

}
