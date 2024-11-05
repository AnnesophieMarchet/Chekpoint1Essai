export type Video = {
  title: string;
  url: string;
  imgSrc: string;
  channelName: string;
  likes: number;
  comments: Comment[];
  nbViews: string;
  uploadDate: string;
  categories: string[];
};
