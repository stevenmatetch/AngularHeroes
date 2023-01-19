import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private router: Router) {}

  gotoHome(){
    console.log("hej");
    this.router.navigate(['second-component']);
    console.log()  // define your component where you want to go
}


  ngOnInit(): void {
    
  }

}
