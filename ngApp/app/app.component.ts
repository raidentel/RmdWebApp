import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';







@Component({
    selector: 'RAIDEN',
    template: `
   
        <h1>WebApp Angular js 2 and django</h1>
        
      
          <nav>
          <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
          <a routerLink="/tab2" routerLinkActive="active">Tab2</a>
          <a routerLink="/tab3" routerLinkActive="active">Tab3</a>
          <a routerLink="/tab4" routerLinkActive="active">Tab4</a>
          <a routerLink="/tab5" routerLinkActive="active">Tab5</a>
        </nav>

        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],

})





export class AppComponent { }





