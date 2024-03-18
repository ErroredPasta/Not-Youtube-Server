export class VideoDetail {
    constructor(
        public id: string,
        public videoUrl: string,
        public title: string,
        public view: number,
        public dateTime: string,
        public channelName: string,
        public channelThumbnail: string,
        public description: string,
    ) {}
}
