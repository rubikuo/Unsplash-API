import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  usersPhoto: any[];
  name = '';
  constructor(private route: ActivatedRoute, private apiData: ApidataService) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      console.log(data);
      this.name = data.id;
      console.log(data.id);
      this.apiData.getUserPhoto(this.name)
      .subscribe((info: any) => {
           console.log(info);
           this.usersPhoto = info;

          // this.serviceData = info.forEach((res: any) => {
          //   console.log(res);
          //   return res;

       // });
      });
    });


  }

}
