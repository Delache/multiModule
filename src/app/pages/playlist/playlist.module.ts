import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsComponent } from './playlists/playlists.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { DetailsPlaylistComponent } from './details-playlist/details-playlist.component';
import { PlaylistRoutingModule } from './playlist-routing.module';


@NgModule({
  declarations: [PlaylistsComponent, CreatePlaylistComponent, DetailsPlaylistComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule
  ]
})
export class PlaylistModule { }
