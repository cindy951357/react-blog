interface IComment {
    id: string;
    postId: string;
    author: string;
    time: string;
    content: string;
    numLikes: number;
    numBookmarked: number;
}