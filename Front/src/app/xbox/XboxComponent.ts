import { Component } from '@angular/core';


@Component({
  selector: 'xbox',
  template: `
  <ul class="breadcrumb">
  <li><a routerLinkActive="active" 
  routerLink="/home">Home</a></li>
  <li>xbox</li>
</ul>`,
})
export class XboxComponent {
}
