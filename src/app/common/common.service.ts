import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class CommonService {

  constructor() { }


  addition(num1 : number, num2: number)
  {
   return num1 + num2;
  }


  userList()
  {
let data;
    return data = [{
      "name" : "ABC FD",
      "address": "Pune"
    },{

    "name" : "ABC A",
    "address": "Pune"
  },{
  "name" : "ABC RR",
  "address": "Pune"
}
  
  ]
  }
}
