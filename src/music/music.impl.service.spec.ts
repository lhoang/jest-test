import {MusicImplService} from "./music.impl.service";
import {MusicMockRepository} from "./repository/music.mock.repository";

describe('Music Service Impl', () => {
    let service : MusicImplService;
    beforeAll(() => {
        service = new MusicImplService(new MusicMockRepository());
    });

    it('should get all the artists', () => {
        const res = service.getArtists();
        expect(res).toHaveLength(4);
    });

    it('should find the Top 5', () => {
        const res = service.getTop5();
        expect(res).toEqual([
            {
                "title": "Son of a preacherman",
                "artist": {
                    "name": "Dusty Springfield"
                },
                "sales": 32
            },
            {
                "title": "Perfect Day",
                "artist": {
                    "name": "Lou Reed"
                },
                "sales": 24
            },
            {
                "title": "This is a Call",
                "artist": {
                    "name": "Foo Fighters"
                },
                "sales": 12
            }
        ]);
    });
});