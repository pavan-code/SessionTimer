import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'file-upload';
  constructor() {
  }
  time: any;
  minutes: any;
  sec: any;
  message: String = "";
  ngOnInit() {
    // alert("got")
   
    this.call();
  }
  call() {
    let seconds = Number.parseInt(localStorage.getItem("time"))/(1000);
    console.log(seconds);
  
    setInterval(() => {
      this.time = new Date();
      if(seconds>0) {
        seconds--;
        this.minutes = Math.floor(seconds/60);
        this.sec = seconds%60;
      } else {
        this.message = "Session Expired !! Login Again"
        localStorage.clear();
        setTimeout(() => {
          location.href = "login"          
        }, 1500);
      }
    }, 1000);
  }
}
