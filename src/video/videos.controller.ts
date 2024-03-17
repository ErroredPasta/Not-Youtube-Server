import { Controller, Get } from '@nestjs/common';
import { VideosService } from './videos.service';
import { Video } from './video.entity';

@Controller('videos')
export class VideosController {
    constructor(private service: VideosService) {}

    @Get()
    getVideos(): Video[] {
        return this.service.getVideos();
    }
}
