export interface RootObject {
  items: Item[];
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
  regionCode: string;
}

export interface Item {
  statistics: any;
  id: ID;
  kind: string;
  snippet: Snippet;
}

export interface ID {
  kind: string;
  videoId: string;
  channelId: string;
}

export interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: Date;
  publishedAt: Date;
  thumbnails: Thumbnails;
  title: string;
}

export interface Thumbnails {
  default: Default;
  high: Default;
  medium: Default;
}

export interface Default {
  height: number;
  url: string;
  width: number;
}

export interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
