import { IComment, IPost } from "@/interfaces/PostInterface";

export const MOCK_POSTS: IPost[] = [
    {
        id: '1',
        postTitle: '彩色鉛筆的故事',
        content: '彩色鉛筆的色彩呈現原理有點像是油畫，都是利用顏料的立體疊加效果去產生顏\
        色上的立體感。',
        time: '2024/06/28T20/07/05',
        numLikes: 90,
        imgUrls: ['RabbitMug.png',],
        commentIds: ['1', '2', '3',],
    }, {
        id: '2',
        postTitle: '讓生活順遂',
        content: '刻意練習的內容是\
        將生活的成功聚焦在鍛鍊出子彈習慣，而針對視覺化大腦的部分可以多加善用google keep與google calendar。',
        time: '20240706T08:55:33',
        numLikes: 22,
        imgUrls: ['RabbitFlower01.png'],
        commentIds: ['4', '5', '6',],
    }, {
        id: '3',
        postTitle: '自我慈悲',
        content: '對自己說感謝你\
        我諒解我自己\
        對自己說我心疼你',
        time: '20241126T08:55:33',
        numLikes: 22,
        imgUrls: ['RabbitFlower03.png'],
        commentIds: ['7', '8',],
    }
];

export const MOCK_COMMENTS: IComment[] = [
    {
        id: '1',
        author: 'nicole',
        time: '2024/07/02T15:30:30',
        content: '這超過七週以來已經看了六次耳鼻喉科了，然而咳嗽的問題遲遲沒有改善',
        numLikes: 50,
        postId: '1',
    },
    {
        id: '2',
        author: 'nicole',
        time: '2024/07/02T16:19:20',
        content: '寶寶下次要記得帶藍芽喇叭來廣場這邊喔',
        numLikes: 50,
        postId: '1',
    },
    {
        id: '3',
        author: 'nicole',
        time: '2024/07/02T17:10:45',
        content: '剛剛試了一杯Cama新出的摩卡咖啡，味道棒極了，推薦大家去試試！',
        numLikes: 80,
        postId: '1',
    },
    {
        id: '4',
        author: 'cocoa',
        time: '2024/07/02T18:05:30',
        content: '最近家裡的貓咪總是盯著天花板看，大家有什麼建議嗎？',
        numLikes: 65,
        postId: '2',
    },
    {
        id: '5',
        author: 'cocoa',
        time: '2024/07/02T18:45:15',
        content: '今天早上第一次試了瑜伽，感覺整個人都輕鬆了，非常推薦給大家！',
        numLikes: 90,
        postId: '2',
    },
    {
        id: '6',
        author: 'cocoa',
        time: '2024/07/02T19:30:00',
        content: '昨天去了海灘，陽光、沙灘和海浪，簡直是完美的一天！',
        numLikes: 100,
        postId: '2',
    },
    {
        id: '7',
        author: 'cocoa',
        time: '2024/07/02T20:15:45',
        content: '我制定了一個新的健身計劃，準備每天堅持運動，搭配拉筋、筋膜放鬆，大家一起加油！',
        numLikes: 85,
        postId: '2',
    },
    {
        id: '8',
        author: 'cocoa',
        time: '2024/07/02T21:05:30',
        content: '剛讀完一本好書，刺蝟的優雅，感覺收穫很多，真希望時間能夠停留在這一刻。',
        numLikes: 70,
        postId: '3',
    },
    {
        id: '9',
        author: 'gina',
        time: '2024/07/02T22:00:00',
        content: '第一次嘗試自製覆盆莓布朗尼蛋糕，沒想到居然非常成功，大家有空也可以試試哦！',
        numLikes: 75,
        postId: '3',
    },
    {
        id: '10',
        author: 'gina',
        time: '2024/07/02T22:45:30',
        content: '晚上去寧馨公園散步，感覺心情愉快，真是一個不錯的放鬆方式。',
        numLikes: 60,
        postId: '3',
    }
];
