import {Album, Artist} from "./data/music.models";

export interface MusicRepository {
    findAllArtist(): Array<Artist>;
    findAlbumsByArtists(artist: string): Array<Album>;
    findAllAlbums(): Array<Album>;
}