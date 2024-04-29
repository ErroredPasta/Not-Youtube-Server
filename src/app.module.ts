import { Module } from '@nestjs/common';
import { VideosModule } from './video/videos.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        VideosModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'root',
            password: 'password',
            database: 'not-youtube',
            autoLoadEntities: true,
            synchronize: true,
        }),
    ],
})
export class AppModule {}
