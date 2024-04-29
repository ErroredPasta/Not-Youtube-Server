import { Module } from '@nestjs/common';
import { VideosController as VideosController } from './videos.controller';
import { VideosService } from './videos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoDetail } from './video-detail.entity';
import { databaseRepositoryProvider } from './repository/videos.repository-impl';

@Module({
    imports: [TypeOrmModule.forFeature([VideoDetail])],
    controllers: [VideosController],
    providers: [VideosService, databaseRepositoryProvider],
})
export class VideosModule {}
