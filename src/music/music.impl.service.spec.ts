import {MusicImplService} from "./music.impl.service";
import {MusicRepository} from "./repository/music.repository";
import {Artist, Song} from "./data/music.models";
import {MusicRealRepository} from "./repository/music.real.repository";
import * as mt from 'moment';


jest.mock('./repository/music.real.repository');
jest.mock('moment', () => {
    const moment = jest.requireActual('moment');
    return () => {
        const momentInstance = moment(new Date(2019, 10, 3));
        jest.spyOn(momentInstance, 'format');

        return momentInstance;
    };
});

describe('Music Service Impl', () => {
    let service: MusicImplService;
    let repository: MusicRepository;
    beforeAll(() => {
        repository = new MusicRealRepository();
        service = new MusicImplService(repository);
    });

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should get all the artists', () => {
        repository.findAllArtist = jest.fn(() => [
            'Sylvain',
            'Tom',
            'Patrice',
            'Hubert',
        ] as unknown as Array<Artist>); // Do not do this hack unless forced to

        const res = service.getArtists();
        expect(res).toHaveLength(4);
    });

    it('should find the Top 5', () => {
        repository.findAllSongs = jest.fn(() =>
            [
                new Song('Son of a preacherman', 'Dusty Springfield', 32),
                new Song('Perfect Day', 'Lou Reed', 24),
                new Song('This is a Call', 'Foo Fighters', 12),
            ]);

        const res = service.getTop5();
        expect(res).toEqual({
            date: '2019-11-03',
            songs: [
                new Song('Son of a preacherman', 'Dusty Springfield', 32),
                new Song('Perfect Day', 'Lou Reed', 24),
                new Song('This is a Call', 'Foo Fighters', 12),
            ]
        });
    });

    it('should test moment', () => {
        const m1 = mt();
        const m2 = mt(m1).subtract(3, 'months');

        expect(m1.format('YYYY-MM-DD')).toEqual('2019-11-03');
        expect(m2.format('YYYY-MM-DD')).toEqual('2019-08-03');
    });
});