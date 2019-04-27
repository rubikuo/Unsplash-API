import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-photolibrary',
  templateUrl: './photolibrary.component.html',
  styleUrls: ['./photolibrary.component.css']
})
export class PhotolibraryComponent implements OnInit {
  searchterm = '';
  apiData: any[];

  collectionSize: number;
  pageSize = 12;
  page = 1;

  showPagination = false;
  showBackToTop = false;


  constructor(private apidata: ApidataService) { }

  ngOnInit() {

  }

  getDataFromService() {
    this.apidata.getApiData(this.searchterm)
      .subscribe((data: any) => {
        console.log(data);
        if (data.results.length === 0) {
          alert('Nothing found');
        } else {
        this.apiData = data.results;
        this.collectionSize = this.apiData.length;
        this.showPagination = true;
        this.showBackToTop = true;
      }
         // when the collectionSize is greater than 0 can show
      });

  }

}
