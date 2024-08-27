export interface PodcastModel {
    podcastName: string;
    episode: string;
    videoId: string;
    categories: string[];
    ratings: Number[];
    comments: Comment[];
}

interface Comment {
    username: string;
    text: string;
}