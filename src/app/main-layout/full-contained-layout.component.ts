import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-full-contained-layout',
    template: `
  <app-navigation></app-navigation>

  <main class="mx-lg-5">
    <div class="mt-5"><router-outlet></router-outlet></div>
  </main>
  
  <app-footer></app-footer>
`,
    styles: []
})
export class FullContainedLayoutComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
