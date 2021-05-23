import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data-service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    username: string;
    dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
   }

  startSearch(){
    this.dataService.getData(this.username);
  }
  ngOnInit(): void {
    
  }

}
