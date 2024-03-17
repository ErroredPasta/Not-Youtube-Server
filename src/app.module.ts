import { Module } from '@nestjs/common';
import { VideosModule } from './video/videos.module';

@Module({
    imports: [VideosModule],
})
export class AppModule {}
