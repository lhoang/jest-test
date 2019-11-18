export class Artist {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class Song {
    title: string;
    artist: Artist;
    sales: number;

    constructor(title: string, artist: string, sales: number = 0) {
        this.title = title;
        this.artist = new Artist(artist);
        this.sales = sales;
    }
}

export class Top5Result {
    date: string;
    songs: Array<Song>;
}