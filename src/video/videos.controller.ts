import { Controller, Get, Param } from '@nestjs/common';
import { VideosService } from './videos.service';
import { Video } from './video.entity';
import { VideoDetail } from './video-detail.entity';

@Controller('videos')
export class VideosController {
    constructor(private service: VideosService) {}

    @Get()
    getVideos(): Promise<Video[]> {
        return this.service.getVideos();
    }

    @Get('/:id')
    getVideoDetailById(@Param('id') id: string): Promise<VideoDetail> {
        return this.service.getVideoDetailById(id);
    }
}
