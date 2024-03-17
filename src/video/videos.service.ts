import { Injectable } from '@nestjs/common';
import { Video } from './video.entity';
import { VideosRepository } from './videos.repository';

@Injectable()
export class VideosService {
    constructor(private repository: VideosRepository) {}

    getVideos(): Video[] {
        return this.repository.getVideos();
    }
}
