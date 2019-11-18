import {MusicRepository} from "./music.repository";
import {Artist, Song} from "../data/music.models";

export class MusicRealRepository implements MusicRepository {
    findSongsByArtists(artist: string): Array<Song> {
        return [
            new Song('Erase/Rewind', artist, 3),
            new Song('Not a addict', artist, 5),
            new Song('Ain\'t no sunshine', artist, 33),
        ];
    }

    findAllSongs(): Array<Song> {
        return [
            new Song('Son of a preacherman', 'Dusty Springfield', 32),
            new Song('Perfect Day', 'Lou Reed', 24),
            new Song('This is a Call', 'Foo Fighters', 12),
        ];
    }

    findAllArtist(): Array<Artist> {
        return [
            new Artist('Amy Winehouse'),
            new Artist('Dusty Springfield'),
            new Artist('Lou Reed'),
            new Artist('Foo Fighters'),
        ];
    }

}