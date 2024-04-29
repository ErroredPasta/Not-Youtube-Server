import { VideoDetail } from "../video-detail.entity";
import { Video } from "../video.entity";

export interface VideosRepository {
    getVideos(): Promise<Video[]>;
    getVideoDetailById(id: string): Promise<VideoDetail>;
}

export enum RepositoryType {
    IN_MEMORY, DATABASE
}