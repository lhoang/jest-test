import {MusicRepository} from "./music.repository";
import {Artist, Song} from "../data/music.models";

export class MusicMockRepository implements MusicRepository {
    findSongsByArtists(artist: string): Array<Song> {
        return [
            new Song('MOCK - Erase/Rewind', artist, 3),
            new Song('MOCK - Not a addict', artist, 5),
            new Song('MOCK - Ain\'t no sunshine', artist, 33),
        ];
    }

    findAllSongs(): Array<Song> {
        return [
            new Song('MOCK - Son of a preacherman', 'Dusty Springfield', 32),
            new Song('MOCK - Perfect Day', 'Lou Reed', 24),
            new Song('MOCK - This is a Call', 'Foo Fighters', 12),
        ];
    }

    findAllArtist(): Array<Artist> {
        return [
            new Artist('MOCK - Amy Winehouse'),
            new Artist('MOCK - Dusty Springfield'),
            new Artist('MOCK - Lou Reed'),
            new Artist('MOCK - Foo Fighters'),
        ];
    }

}