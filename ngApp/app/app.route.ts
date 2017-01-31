import { provideRouter, RouterConfig } from '@angular/router';
import {Component1Component} from "./heroes/views/heroes.component";
import {Component2Component} from "./component2.component";
import {DjangoComponent} from "./django.component";
import {Component3Component} from "./component3.component";
import {Component4Component} from "./component4.component";


const routes: RouterConfig = [
  {path: '',redirectTo: '/heroes',pathMatch: 'full'},
  { path: 'heroes', component: Component1Component },
  { path: 'tab2', component: Component2Component },
  { path: 'tab3', component: DjangoComponent },
  { path: 'tab4', component: Component3Component },
  { path: 'tab5', component: Component4Component },
];

export const appRouterProviders = [
  provideRouter(routes)
];
