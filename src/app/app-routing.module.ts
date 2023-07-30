import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'locations',
    loadChildren: () =>
      import('./modules/location/location.module').then(
        (m) => m.LocationModule
      ),
  },
  {
    path: 'episodes',
    loadChildren: () =>
      import('./modules/episode/episode.module').then((m) => m.EpisodeModule),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./modules/character/character.module').then((m) => m.CharacterModule),
  },
  {
    path: '**',
    redirectTo: 'characters'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
