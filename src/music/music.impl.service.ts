import {MusicService} from "./music.service";
import {MusicRepository} from "./repository/music.repository";
import {Artist, Top5Result} from "./data/music.models";
import * as mt from 'moment';

export class MusicImplService implements MusicService {

    private readonly repository: MusicRepository;
    /**
     * To be Injected.
     * (Simplified here).
     * Do not used Property based Injection please.
     */
    constructor(repository: MusicRepository) {
        this.repository = repository;
    }

    getArtists(): Array<Artist> {
        return this.repository.findAllArtist();
    }

    getTop5(): Top5Result {
        const from = mt().subtract(1, "month").toDate();
        const to = mt().toDate();

        const songs = this.repository.findAllSongs(from, to)
            .sort((a, b) => b.sales - a.sales);

        return {
            date: mt().format('YYYY-MM-DD'),
            songs,
        };
    }
}