import { DataSource, Repository } from 'typeorm';
import { RepositoryType, VideosRepository } from './videos.repository';
import { VideoDetail } from '../video-detail.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Video } from '../video.entity';

@Injectable()
export class VideosRepositoryImpl
    extends Repository<VideoDetail>
    implements VideosRepository
{
    constructor(datasource: DataSource) {
        super(VideoDetail, datasource.createEntityManager());
    }

    async getVideos(): Promise<Video[]> {
        const queryBuilder = this.createQueryBuilder();
        return (await queryBuilder.getMany()).map(mapToVideo);
    }

    async getVideoDetailById(id: string): Promise<VideoDetail> {
        const videoDetail = await this.findOne({ where: { id } });

        if (!videoDetail) throw new NotFoundException();

        return videoDetail;
    }
}


function mapToVideo(videoDetail: VideoDetail): Video {
    const video = new Video();

    video.id = videoDetail.id
    video.thumbnail = videoDetail.thumbnail
    video.title = videoDetail.title
    video.channelName = videoDetail.channelName
    video.channelThumbnail = videoDetail.channelThumbnail
    video.view = videoDetail.view
    video.dateTime = videoDetail.dateTime
    video.length = videoDetail.length

    return video
}

export const databaseRepositoryProvider = {
    provide: RepositoryType.DATABASE.toString(),
    useClass: VideosRepositoryImpl,
};