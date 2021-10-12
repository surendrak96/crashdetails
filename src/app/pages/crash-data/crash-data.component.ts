import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

export interface CrashDetails {
  collision_id: number,
  contributing_factor_vehicle_1: string,
  contributing_factor_vehicle_2: string
  crash_date: Date,
  crash_time: string
  number_of_cyclist_injured: string,
  number_of_cyclist_killed: string,
  number_of_motorist_injured: string,
  number_of_motorist_killed: string,
  number_of_pedestrians_injured: string,
  number_of_pedestrians_killed: string,
  number_of_persons_injured: string,
  number_of_persons_killed: string,
  on_street_name: string,
  vehicle_type_code1: string,
  vehicle_type_code2: string,
}


@Component({
  selector: 'app-crash-data',
  templateUrl: './crash-data.component.html',
  styleUrls: ['./crash-data.component.less']
})
export class CrashDataComponent implements OnInit {
  listOfCrashDetails:CrashDetails[] = [];
  date:Date;
  loading:boolean = false;
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this._getCrashData()
  }

  _getCrashData() {
    this.loading = true;
    let params = this.date ? `crash_date=${moment(this.date).format("yyyy-MM-DDTHH:mm:ss")}` : '';
    return this.http.get(`https://data.cityofnewyork.us/resource/h9gi-nx95.json?${params}`).subscribe((res: CrashDetails[]) => {
      this.listOfCrashDetails = res;
      this.loading = false;
    },error=>{
      this.loading = false;
    })
  }

  _detailView(data: CrashDetails){
    this.router.navigate(['/details', data.collision_id]);
  }

  _onDateChange(){
     return this._getCrashData()
  }

}
