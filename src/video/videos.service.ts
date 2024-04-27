import { Inject, Injectable } from '@nestjs/common';
import { Video } from './video.entity';
import { VideoDetail } from './video-detail.entity';
import { RepositoryType, VideosRepository } from './repository/videos.repository';

@Injectable()
export class VideosService {
    constructor(
        @Inject(RepositoryType.IN_MEMORY.toString())
        private repository: VideosRepository,
    ) {}

    getVideos(): Video[] {
        return this.repository.getVideos();
    }

    getVideoDetailById(id: string): VideoDetail {
        return this.repository.getVideoDetailById(id);
    }
}
