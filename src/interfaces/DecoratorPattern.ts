
export interface ILikable {
    numLikes: number;
}

export interface IBookmarked {
    numBookmarked: number;
}

// 工廠函數：默認的按讚和收藏
export const createDefaultDecorator =
    (initialLikes: number = 0,
    initialBookmarks: number = 0
): ILikable & IBookmarked => ({
    numLikes: initialLikes,
    numBookmarked: initialBookmarks,
});