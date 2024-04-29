import { Inject, Injectable } from '@nestjs/common';
import { Video } from './video.entity';
import { VideoDetail } from './video-detail.entity';
import { RepositoryType, VideosRepository } from './repository/videos.repository';

@Injectable()
export class VideosService {
    constructor(
        @Inject(RepositoryType.DATABASE.toString())
        private repository: VideosRepository,
    ) {}

    async getVideos(): Promise<Video[]> {
        return this.repository.getVideos();
    }

    async getVideoDetailById(id: string): Promise<VideoDetail> {
        return this.repository.getVideoDetailById(id);
    }
}
