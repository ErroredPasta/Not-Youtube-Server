import { Injectable } from '@nestjs/common';
import { Video } from './video.entity';
import { VideosRepository } from './videos.repository';
import { VideoDetail } from './video-detail.entity';

@Injectable()
export class VideosService {
    constructor(private repository: VideosRepository) {}

    getVideos(): Video[] {
        return this.repository.getVideos();
    }

    getVideoDetailById(id: string): VideoDetail {
        return this.repository.getVideoDetailById(id);
    }
}
