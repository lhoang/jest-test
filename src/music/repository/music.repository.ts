import {Song, Artist} from "../data/music.models";

export interface MusicRepository {
    findAllArtist(): Array<Artist>;
    findSongsByArtists(artist: string): Array<Song>;
    findAllSongs(from: Date, to: Date): Array<Song>;
}