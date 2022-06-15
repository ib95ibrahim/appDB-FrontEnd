import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private httpClient : HttpClient ) {}

  title = 'client-for-Api';
  users  : any;

  ngOnInit(): void {
     this.httpClient.get("https://localhost:5001/api/users").subscribe((data)=>{
        this.users = data;
     })
  }

}
