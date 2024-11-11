import { IPost } from "./interfaces/IPost";

export const MOCK_POSTS: IPost[] = [
    {
        id: '1',
        postTitle: '關於我和彩色鉛筆的故事',
        content: '拾起彩色鉛筆已經三四年左右了，然而我還是必須不斷回到灰階鉛筆的階段去磨練無彩色的功夫\
        ，方能走到彩色的世界去揮灑色彩。彩色鉛筆的色彩呈現原理有點像是油畫，都是利用顏料的立體疊加效果去產生顏\
        色上的立體感，這也是畫家必須要自己去刻意練習去成就的。',
        time: '2024/06/28T20/07/05',
        numLikes: 90,
        imgUrls: ['RabbitMug.png',]
    }, {
        id: '2',
        postTitle: '讓生活順遂',
        content: '刻意練習的內容是\
        將生活的成功聚焦在鍛鍊出子彈習慣，而針對視覺化大腦的部分可以多加善用google keep與google calendar。',
        time: '20240706T08:55:33',
        numLikes: 22,
        imgUrls: ['RabbitFlower01.png'],
    }
];

export const MOCK_COMMENTS = [
    {
        id: 1,
        title: '慢性咳嗽還沒好呢',
        time: '2024/07/02T15:30:30',
        content: '這超過七週以來已經看了六次耳鼻喉科了，然而咳嗽的問題遲遲沒有改善，各位美女們怎麼看呢?',
        numLikes: 50,
    },
    {
        id: 2,
        title: '練舞不要忘記帶藍芽喇叭喔',
        time: '2024/07/02T16:19:20',
        content: '寶寶下次要記得帶藍芽喇叭來廣場這邊喔',
        numLikes: 50,
    },
    {
        id: 3,
        title: '新出的咖啡真好喝！',
        time: '2024/07/02T17:10:45',
        content: '剛剛試了一杯Cama新出的摩卡咖啡，味道棒極了，推薦大家去試試！',
        numLikes: 80,
    },
    {
        id: 4,
        title: '貓咪最近有點怪',
        time: '2024/07/02T18:05:30',
        content: '最近家裡的貓咪總是盯著天花板看，大家有什麼建議嗎？',
        numLikes: 65,
    },
    {
        id: 5,
        title: '瑜伽真是太放鬆了',
        time: '2024/07/02T18:45:15',
        content: '今天早上第一次試了瑜伽，感覺整個人都輕鬆了，非常推薦給大家！',
        numLikes: 90,
    },
    {
        id: 6,
        title: '夏日海灘之旅',
        time: '2024/07/02T19:30:00',
        content: '昨天去了海灘，陽光、沙灘和海浪，簡直是完美的一天！',
        numLikes: 100,
    },
    {
        id: 7,
        title: '最新的健身計劃',
        time: '2024/07/02T20:15:45',
        content: '我制定了一個新的健身計劃，準備每天堅持運動，搭配拉筋、筋膜放鬆，大家一起加油！',
        numLikes: 85,
    },
    {
        id: 8,
        title: '閱讀的快樂--刺蝟的優雅',
        time: '2024/07/02T21:05:30',
        content: '剛讀完一本好書，刺蝟的優雅，感覺收穫很多，真希望時間能夠停留在這一刻。',
        numLikes: 70,
    },
    {
        id: 9,
        title: '自製覆盆莓布朗尼蛋糕成功！',
        time: '2024/07/02T22:00:00',
        content: '第一次嘗試自製覆盆莓布朗尼蛋糕，沒想到居然非常成功，大家有空也可以試試哦！',
        numLikes: 75,
    },
    {
        id: 10,
        title: '寧馨公園散步',
        time: '2024/07/02T22:45:30',
        content: '晚上去寧馨公園散步，感覺心情愉快，真是一個不錯的放鬆方式。',
        numLikes: 60,
    }
];
