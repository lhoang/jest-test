import {Artist, Top5Result} from "./data/music.models";

export interface MusicService {
    getArtists():Array<Artist>;
    getTop5(): Top5Result;
}