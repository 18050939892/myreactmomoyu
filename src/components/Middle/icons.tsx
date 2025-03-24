import {
    AiFan,
    BZhan,
    CSDN,
    DouBan,
    HuPu,
    HuXiou,
    It,
    JueJin,
    KaiYuan,
    Re,
    TouTiao,
    WeiBo,
    ZhiDe,
    ZhiHu,
    ZhongGuan
} from './icons/all'

export const Icons = [
    {
        svg: <ZhiHu />,
        title: '知乎热榜',
        nowtime: '(15分钟前)',
        // 这个 svg2 会变化吗？ 不会变化的话直接写源码里
        svg2: <Re name="/zhihu" number={0} />
    },
    {
        svg: <DouBan />,
        title:
            '豆瓣热话',
        nowtime:
            '(15分钟前)',
        svg2:
    <Re name='/douban-movie' number={1} />
    }
    ,
    {
        svg: <WeiBo />,
        title:
            '微博热搜',
        nowtime:
            '(15分钟前)',
        svg2:
    <Re name='/weibo' number={2} />
    }
    ,
    {
        svg: <TouTiao />,
        title:
            '今日头条',
        nowtime:
            '(15分钟前)',
        svg2:
    <Re name='/toutiao' number={3} />
    }
    ,
    {
        svg: <HuPu />,
        title:
            '虎扑步行街',
        nowtime:
            '(15分钟前)',
        svg2:
    <Re name="/hupu" number={4}/>
    }
    ,
    {
        svg: <BZhan />,
        title:
            'B站',
        nowtime:
            '(15分钟前)',
        svg2:
    <Re name='/bilibili' number={5} />
    }
    ,
    {
        svg: <ZhongGuan />,
        title:
            '中关村在线',
        nowtime:
            '(15分钟前)',
        svg2:
    <Re name='' number={6} />
    }
    ,
    {
        svg: <AiFan />,
        title:
            '爱范儿',
        nowtime:
            '(15分钟前)',
        svg2:
    <Re name='/ifanr' number={7} />
    }
    ,
    {
        svg: <It />,
        title:
            'IT之家',
        nowtime:
            '(15分钟前)',
        svg2:
    <Re name='/ithome' number={8} />
    }
    ,
    {
        svg: <KaiYuan />,
        title:
            '开源中国',
        nowtime:
            '(15分钟前)',
        svg2:
    <Re name='' number={9} />
    }
    ,
    {
        svg: <CSDN />,
        title:
            'CSDN',
        nowtime:
            '(15分钟前)',
        svg2:
    <Re name='/csdn' number={10} />
    }
    ,
    {
        svg: <HuXiou />,
        title:
            '虎嗅',
        nowtime:
            '(15分钟前)',
        svg2:
    <Re name='/huxiu' number={11} />
    }
    ,
    {
        svg: <ZhiDe />,
        title:
            '值得买三小时热门',
        nowtime:
            '(15分钟前)',
        svg2:
    <Re name='' number={12} />
    }
    ,
    {
        svg: <JueJin />,
        title:
            '掘金',
        nowtime:
            '(15分钟前)',
        svg2:
    <Re name='/juejin' number={13} />
    }
    ,
]
