import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListLocationsComponent } from "./list-locations/list-locations.component";

const routes: Routes = [
  {
    path: "",
    component: ListLocationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule {}
