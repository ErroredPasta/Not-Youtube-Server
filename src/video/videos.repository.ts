import { Injectable } from '@nestjs/common';
import { Video } from './video.entity';

@Injectable()
export class VideosRepository {
  getVideos(): Video[] {
    return VIDEOS;
  }
}

const VIDEOS = [
  {
    id: '0652168c-6175-4e80-b85b-fe6b4716daf5',
    channelName: 'channel name 0',
    channelThumbnail:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    dateTime: '2024-01-22 10:11:12',
    length: 100,
    thumbnail: 'https://picsum.photos/seed/Blender/40',
    title: 'Big Buck Bunny',
    view: 100000,
  },
  {
    id: 'c03b57c3-b551-4fbe-8b2b-c66fa93ffe9d',
    channelName: 'channel name 1',
    channelThumbnail:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    dateTime: '2024-01-22 10:11:12',
    length: 200,
    thumbnail: 'https://picsum.photos/seed/Blender/40',
    title: 'Elephant Dream',
    view: 200000,
  },
  {
    id: '97577302-81a5-4ff7-be02-22ff81ea1c62',
    channelName: 'channel name 2',
    channelThumbnail:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    dateTime: '2024-01-22 10:11:12',
    length: 300,
    thumbnail: 'https://picsum.photos/seed/Google/40',
    title: 'For Bigger Blazes',
    view: 300000,
  },
  {
    id: '3220759f-214f-4dc1-a39e-9629785f6748',
    channelName: 'channel name 3',
    channelThumbnail:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
    dateTime: '2024-01-22 10:11:12',
    length: 400,
    thumbnail: 'https://picsum.photos/seed/Google/40',
    title: 'For Bigger Escape',
    view: 400000,
  },
  {
    id: 'ffa0c80d-a01f-4d5c-a783-d415c4d470b6',
    channelName: 'channel name 4',
    channelThumbnail:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
    dateTime: '2024-01-22 10:11:12',
    length: 500,
    thumbnail: 'https://picsum.photos/seed/Google/40',
    title: 'For Bigger Fun',
    view: 500000,
  },
  {
    id: 'aeccc2be-e4c9-44b3-af04-3e37ec4632b2',
    channelName: 'channel name 5',
    channelThumbnail:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
    dateTime: '2024-01-22 10:11:12',
    length: 600,
    thumbnail: 'https://picsum.photos/seed/Google/40',
    title: 'For Bigger Joyrides',
    view: 600000,
  },
  {
    id: 'c8405717-e7fe-4965-982a-94cf4a83c172',
    channelName: 'channel name 6',
    channelThumbnail:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
    dateTime: '2024-01-22 10:11:12',
    length: 700,
    thumbnail: 'https://picsum.photos/seed/Google/40',
    title: 'For Bigger Meltdowns',
    view: 700000,
  },
  {
    id: '22852a42-c8ec-41ee-b367-0eb99e050f6b',
    channelName: 'channel name 7',
    channelThumbnail:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
    dateTime: '2024-01-22 10:11:12',
    length: 800,
    thumbnail: 'https://picsum.photos/seed/Blender/40',
    title: 'Sintel',
    view: 800000,
  },
  {
    id: '3b70bea4-cc57-4f38-95ab-86ba270382fc',
    channelName: 'channel name 8',
    channelThumbnail:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
    dateTime: '2024-01-22 10:11:12',
    length: 900,
    thumbnail: 'https://picsum.photos/seed/Garage419/40',
    title: 'Subaru Outback On Street And Dirt',
    view: 900000,
  },
  {
    id: 'f4a84fb9-3b96-498f-bf84-e6180768434e',
    channelName: 'channel name 9',
    channelThumbnail:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg',
    dateTime: '2024-01-22 10:11:12',
    length: 1000,
    thumbnail: 'https://picsum.photos/seed/Blender/40',
    title: 'Tears of Steel',
    view: 1000000,
  },
  {
    id: 'ebeeb8d3-0ed3-4eff-855c-efe06a331465',
    channelName: 'channel name 10',
    channelThumbnail:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg',
    dateTime: '2024-01-22 10:11:12',
    length: 1100,
    thumbnail: 'https://picsum.photos/seed/Garage419/40',
    title: 'Volkswagen GTI Review',
    view: 1100000,
  },
  {
    id: '05f941d9-5e8b-4e65-b3f7-47e6b600bd1b',
    channelName: 'channel name 11',
    channelThumbnail:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg',
    dateTime: '2024-01-22 10:11:12',
    length: 1200,
    thumbnail: 'https://picsum.photos/seed/Garage419/40',
    title: 'We Are Going On Bullrun',
    view: 1200000,
  },
  {
    id: '2e34ead1-9f78-448a-a9d8-fa5e1c201826',
    channelName: 'channel name 12',
    channelThumbnail:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg',
    dateTime: '2024-01-22 10:11:12',
    length: 1300,
    thumbnail: 'https://picsum.photos/seed/Garage419/40',
    title: 'What care can you get for a grand?',
    view: 1300000,
  },
];

const VIDEO_URLS = [
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
];
