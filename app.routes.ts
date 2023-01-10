import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ExampleComponent } from './example/example.component';

const routes : Routes = [
  {path : 'signup', component: MenuComponent},
  {path :  'user', component: ExampleComponent}
]

export {routes}
