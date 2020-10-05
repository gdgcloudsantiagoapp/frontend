import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  youtubeLink = 'https://youtube.com/gdgcloudsantiago?sub_confirmation=1';

  constructor() { }

  ngOnInit(): void {
  }

}
