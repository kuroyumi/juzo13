var dressConfig = {
    layers: [
        { id: 'body0', zIndex: 0 },  // 基础层
        { id: 'fajia', zIndex: 10 },   // 发夹
        { id: 'hair', zIndex: 5 }, // 前发
        { id: 'beidai', zIndex: 20 }, // 背带
        { id: 'shirt', zIndex: 15 },  // 衬衫
        { id: 'jeans', zIndex: 14 },  // 裤子
        { id: 'shoes', zIndex: 13 },  // 鞋
        { id: 'cixiu', zIndex: 3 },  // 刺绣
        { id: 'hold', zIndex: 3 },
    ],
    //10 解体人
    //20 铃屋玲
    //30 铃屋玲 学院
    //40 白发常服 漫画
    //50 白发常服 动画
    //55 白发战斗状态 外套刀子 背带
    //60 黑发常服 蓝拖鞋
    //65 黑发常服外套
    //70 黑发女装
    //80 军装
    //81 班长 立领外套 袖套
    //82 战斗服
    //83 护士服
    //84 和服

    parts: [
        {
            id: 'fajia',
            title: '',
            items: [
                './assets/images/style/fajia20.png',//兔儿
                './assets/images/style/fajia40.png',//40-50一样
                './assets/images/style/fajia60.png',
                './assets/images/style/fajia65.png',
                './assets/images/style/fajia70.png',
                './assets/images/style/fajia80.png',
            ]
        },
        {
            id: 'hair',
            title: '',
            items: [
                './assets/images/style/hair10.png',
                './assets/images/style/hair20.png',
                './assets/images/style/hair60.png',
                './assets/images/style/hair70.png',
                './assets/images/style/hair80.png',
                './assets/images/style/hair81.png',
            ]
        },
        {
            id: 'beidai',
            title: '',
            items: [
                './assets/images/style/beidai10.png',//马甲和领结
                './assets/images/style/beidai40.png',
                './assets/images/style/beidai50.png',
                './assets/images/style/beidai55.png',
                './assets/images/style/beidai60.png',
            ]
        },
        {
            id: 'shirt',
            title: '',
            items: [
                './assets/images/style/shirt10.png',
                './assets/images/style/shirt20.png',
                './assets/images/style/shirt30.png',
                './assets/images/style/shirt40.png',
                './assets/images/style/shirt50.png',
                './assets/images/style/shirt55.png',
                './assets/images/style/shirt60.png',
                './assets/images/style/shirt70.png',
                './assets/images/style/shirt80.png',
                './assets/images/style/shirt82.png',
                './assets/images/style/shirt82.png',
            ]
        },
        {
            id: 'jeans',
            title: '',
            items: [
                './assets/images/style/jeans10.png',
                './assets/images/style/jeans30.png',
                './assets/images/style/jeans40.png',
                './assets/images/style/jeans50.png',
                './assets/images/style/jeans80.png',
                './assets/images/style/jeans82.png',
            ]
        },
        {
            id: 'shoes',
            title: '',
            items: [
                './assets/images/style/shoes20.png',
                './assets/images/style/shoes30.png',
                './assets/images/style/shoes40.png',
                './assets/images/style/shoes60.png',
                './assets/images/style/shoes65.png',
                './assets/images/style/shoes70.png',
                './assets/images/style/shoes80.png',
            ]
        },

        {
            id: 'cixiu',
            title: '',
            items: [
                './assets/images/style/cixiu10.png',
                './assets/images/style/cixiu30.png',
            ]
        },
        {
            id: 'hold',
            title: '',
            items: [
                './assets/images/style/hold10.png',
                './assets/images/style/hold30.png',
            ]
        }
    ],
    suits: [
        // 0 为不戴  1234是右侧图片显示的顺序 1就是第1个图片
        {
            name: '解体人',
            config: {
                'fajia': 0,
                'hair': 1,
                'beidai': 1,
                'shirt': 1,
                'jeans': 1,
                'shoes': 0,
                'cixiu': 1
            }
        },
        {
            name: '玲女装',
            config: {
                'fajia': 1,
                'hair': 2,
                'beidai': 0,
                'shirt': 2,
                'jeans': 0,
                'shoes': 1,
                'cixiu': 0
            }
        },
        {
            name: '玲学院',
            config: {
                'fajia': 0,
                'hair': 1,
                'beidai': 0,
                'shirt': 3,
                'jeans': 2,
                'shoes': 2,
                'cixiu': 0//小花
            }
        },
        {
            name: '漫画常',
            config: {
                'fajia': 2,
                'hair': 1,
                'beidai': 2,
                'shirt': 4,
                'jeans': 3,
                'shoes': 3,
                'cixiu': 0
            }
        },
        {
            name: '动画常',
            config: {
                'fajia': 2,
                'hair': 1,
                'beidai': 3,
                'shirt': 5,
                'jeans': 4,
                'shoes': 3,
                'cixiu': 0
            }
        },
        {
            name: '漫画战',
            config: {
                'fajia': 2,
                'hair': 1,
                'beidai': 4,
                'shirt': 6,
                'jeans': 3,
                'shoes': 3,
                'cixiu': 0
            }
        },
        {
            name: '拍女装',
            config: {
                'fajia': 5,
                'hair': 4,
                'beidai': 0,
                'shirt': 8,
                'jeans': 0,
                'shoes': 6,
                'cixiu': 0
            }
        },
        {
            name: '特等军',
            config: {
                'fajia': 4,
                'hair': 5,
                'beidai': 0,
                'shirt': 9,
                'jeans': 5,
                'shoes': 7,
                'cixiu': 0
            }
        },
        {
            name: 'S班长',
            config: {
                'fajia': 6,
                'hair': 6,
                'beidai': 0,
                'shirt': 10,
                'jeans': 6,
                'shoes': 3,
                'cixiu': 0
            }
        }

    ]
};