import { DetailsPlaylistComponent } from './details-playlist/details-playlist.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'playlists' },
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'createplaylist', component: CreatePlaylistComponent },
  { path: 'detailsplaylist', component: DetailsPlaylistComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }

