import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data-service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    username: string;
    dataService: DataService;

  constructor(dataService: DataService, private router: Router) {
    this.dataService = dataService;
   }

  startSearch(){
    this.dataService.getData(this.username);
    this.router.navigate(['../results']);
  }
  ngOnInit(): void {
  }

}
