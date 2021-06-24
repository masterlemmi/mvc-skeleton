import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  response = "<no response>";

  constructor(
    private _service: CoreService
  ) { }

  ngOnInit(): void {
    this._service.hello().subscribe(data => {
      this.response = "received response from api: " + data;
    })
  }

}
