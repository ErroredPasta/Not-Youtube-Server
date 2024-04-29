import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'video'})
export class VideoDetail {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    videoUrl: string;

    @Column()
    thumbnail: string;
    
    @Column()
    title: string;
    
    @Column()
    channelName: string;
    
    @Column()
    channelThumbnail: string;

    @Column()
    view: number;

    @Column()
    dateTime: string;
    
    @Column()
    description: string;

    @Column()
    length: number;
}
