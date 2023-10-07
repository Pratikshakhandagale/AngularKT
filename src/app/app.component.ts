import { Component } from '@angular/core';
import { CommonService } from '../app/common/common.service';
import { SharedService } from '../app/services/shared.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sum: number;
  users: any;
  profile: any;
  name: any;
  job: any;
  constructor(
    private commonService : CommonService,
    private sharedService: SharedService
    ){

   this.sum =  this.commonService.addition(10, 20);
  }
  title = 'demo';

  getUser()
  {
      this.sharedService.getUserList().subscribe((res: any)=>{
        this.users = res['data'];
        console.log(this.users);
     })
    
  }

  getProfile(id: number)
  {
    this.sharedService.getUserProfile(id).subscribe((res: any)=>{
      this.profile = res.data;
    })
  }

  postData()
  {
    let param = {
      "name" : this.name,
      "job" : this.job
    }
    this.sharedService.postUser(param).subscribe((res)=>{
      console.log(res);
      alert('Data stored successfully');
    })
  }

  updateUser()
  {
    let param = {
      "name" : this.name,
      "job" : this.job
    }
    this.sharedService.updateUser(param).subscribe((res)=>{
      console.log(res);
      alert('Data stored successfully');
    })
  }

  deleteUser(id: number)
  {
    this.sharedService.deleteUser(id).subscribe((res: any)=>{
      console.log(res);
    });
  }

  
}
