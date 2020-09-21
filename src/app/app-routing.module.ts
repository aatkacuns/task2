import { NgModule} from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FlatsComponent } from './flats/flats.component';
import { HousesComponent } from './houses/houses.component';

const routes: Routes = [
    {path: 'houses', component: HousesComponent},
    {path: 'flats', component: FlatsComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HousesComponent, FlatsComponent]
