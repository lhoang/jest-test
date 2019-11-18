import {Song, Artist} from "./music.models";

export function buildArtist(name: string): Artist {
    return {
        name,
    } as Artist;
}

export function buildSong(props: Object = {}): Song {
    return {
        title: 'Fake Title',
        artist: buildArtist('Fake Artist'),
        sales: 0,
        ...props,
    } as Song;
}