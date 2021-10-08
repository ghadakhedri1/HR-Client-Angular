import { Component, OnInit } from '@angular/core';
import { loadScript } from 'src/app/helpers/loaderScript';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    loadScript("../../assets/js/pages/examples/login-register.js")
  }

}
