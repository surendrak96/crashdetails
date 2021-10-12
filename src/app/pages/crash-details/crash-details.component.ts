import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrashDetails } from '../crash-data/crash-data.component';

@Component({
  selector: 'app-crash-details',
  templateUrl: './crash-details.component.html',
  styleUrls: ['./crash-details.component.less']
})
export class CrashDetailsComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }
  crashDetails: CrashDetails;
  
  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this._getCrashData(res.id);
    })
  }

  _getCrashData(id) {
    return this.http.get(`https://data.cityofnewyork.us/resource/h9gi-nx95.json?collision_id=${id}`).subscribe((res: CrashDetails[]) => {
      this.crashDetails = res[0];
    })
  }

  ngOnDestroy(): void {

  }

}
