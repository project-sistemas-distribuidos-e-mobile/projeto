import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
    <h1 style="color: red; text-align: center;"> 404! Page Not Found </h1>
    <small style="text-align: center; display: block;">Try <a routerLink="">here!</a></small>
  `,
})
export class NotfoundComponent {
}
