import { Module } from '@nestjs/common';
import { VideosController as VideosController } from './videos.controller';
import { VideosService } from './videos.service';
import { VideosRepository } from './videos.repository';

@Module({
    controllers: [VideosController],
    providers: [VideosService, VideosRepository],
})
export class VideosModule {}
