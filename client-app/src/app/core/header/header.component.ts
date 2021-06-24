import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user = {name: ""}


  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }



  logout(){
    this.router.navigate(["/login"])
  }

  home(){
    this.router.navigate(["/home"])
  }


}
