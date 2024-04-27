import { VideoDetail } from "../video-detail.entity";
import { Video } from "../video.entity";

export interface VideosRepository {
    getVideos(): Video[];
    getVideoDetailById(id: string): VideoDetail;
}

export enum RepositoryType {
    IN_MEMORY, DATABASE
}