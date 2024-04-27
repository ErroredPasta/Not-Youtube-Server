import { Module } from '@nestjs/common';
import { VideosController as VideosController } from './videos.controller';
import { VideosService } from './videos.service';
import { inmemoryRepositoryProvider } from './repository/videos.in-memory-repository';

@Module({
    controllers: [VideosController],
    providers: [VideosService, inmemoryRepositoryProvider],
})
export class VideosModule {}
