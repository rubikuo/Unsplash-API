import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.css']
})
export class PhotographerComponent implements OnInit {

  serviceData: any[];


  constructor(private apiData: ApidataService) { }

  ngOnInit() {
    this.apiData.getApiData('travel')
    .subscribe((data: any) => {
       console.log(data);
       this.serviceData = data.results;
    });
  }

}
