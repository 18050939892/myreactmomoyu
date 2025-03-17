import { useState } from 'react'
import './index.less'
import { SvgList } from './svg.tsx'
import { useAtom } from 'jotai'
import {
    CheckWork, FirstShow, FontSize, LogoShow, OverHidden, SetScrShow, StyleValue
} from '../../jotai/store.ts'
import { setScrStyle, StoreObject } from './StoreObject.ts'

type Theme = '暗夜' | '护眼' | '极客';

export function SetScreen() {
    // 零散原子实例
    const [, setFirstShow] = useAtom(FirstShow)
    const [, setLogoShow] = useAtom(LogoShow)
    const [, setOverHidden] = useAtom(OverHidden)
    const [, setCheckWork] = useAtom(CheckWork)
    const [fontSize, setFontSize] = useAtom(FontSize)
    const [styleValue, setStyleValue] = useAtom(StyleValue)
    const [setScrShow, setSetScrShow] = useAtom(SetScrShow)
    const style = StoreObject()
    const setScrStyleItem = setScrStyle()
    // 主题切换功能
    const [theme, setTheme] = useState<Theme>('暗夜')
    const zjOnmouseDown = (event) => {
        // todo 这里的 if else 本质上是可以完全优化掉的， 没有 if else 这种东西
        // 主题切换其实就是维护一个 主题色数组，然后 上一个 ，下一个，切换序号，而不是像这种写死的方式
        const themeList = ['暗夜', '护眼', '极客']
        if (event.target.value == '<') {
            let newTheme: Theme
            switch (theme) {
            case '暗夜':
                newTheme = '护眼'
                setStyleValue('eye')
                break
            case '护眼':
                newTheme = '极客'
                setStyleValue('geek')
                break
            default:
                newTheme = '暗夜'
                setStyleValue('dark')
            }
            setTheme(newTheme)
        } else {
            let newTheme: Theme
            switch (theme) {
            case '暗夜':
                newTheme = '极客'
                setStyleValue('geek')
                break
            case '极客':
                newTheme = '护眼'
                setStyleValue('eye')
                break
            default:
                newTheme = '暗夜'
                setStyleValue('dark')
            }
            setTheme(newTheme)
        }
        console.log(theme)
    }
    // 其余各类各类功能+按键滑动效果
    const checkOnclock = (event) => {
        const actionName = event.currentTarget.getAttribute('name')
        const toggleActions = {
            'toumo': () => setCheckWork(prevState => !prevState),
            'yincang': () => setOverHidden(prevState =>
                prevState === 'hide' ? 'show' : 'hide'
            ),
            'logo': () => setLogoShow(prevState => !prevState),
            'first': () => setFirstShow(prevState => !prevState)
        }
        // 如果存在对应的动作，则执行
        toggleActions[actionName]()
    }
    // 重复Html循环遍历化

    // todo 这里的思路错了，主题切换和字体大小，完全可以直接写在标签上，然后 onMouseDown={item.onMethod} 也是直接写内联函数，一切都很自然
    const LiOne = [{
        htmlFor: 'zhuti',
        title: '主题切换',
        onMethod: zjOnmouseDown,
        value: theme,
        data: '<',
        dataTwo: '>'
    },
    {
        htmlFor: 'ziti',
        title: '字体大小',
        onMethod: (event) => {
            if (event.target.value == '-') {
                setFontSize(fontSize - 1)
            } else {
                setFontSize(fontSize + 1)
            }
        },
        value: fontSize,
        data: '-',
        dataTwo: '+'
    }]

    // todo 这种一次性表达式需要内联在 标签里，直接铺上去，不要间接
    const LiOneList = LiOne.map((item, index) =>
        <li>
            <label htmlFor={item.htmlFor}>{item.title}</label>
            <div className="number-box">
                <input
                    type="button"
                    className="on-number"
                    value={item.data}
                    data-v={item.data}
                    onMouseDown={item.onMethod}
                />
                <input type="text" value={item.value} />
                <input
                    type="button"
                    className="on-number"
                    value={item.dataTwo}
                    data-v={item.dataTwo}
                    onMouseDown={item.onMethod}
                />
            </div>
        </li>
    )
    const LiTwo = [{
        htmlFor: 'toumo',
        title: '偷摸模式',
    },
    {
        htmlFor: 'yincang',
        title: '超出隐藏',
    },
    {
        htmlFor: 'logo',
        title: 'LOGO显示',
    }, {
        htmlFor: 'first',
        title: '首页分类',
    },
    ]

    // todo 这种一次性表达式需要内联在 标签里，直接铺上去，不要间接
    const LiTwoList = LiTwo.map((item, index) =>
        <li>
            <label htmlFor={item.htmlFor}>{item.title}</label>
            {/* 添加隐藏的复选框控制CSS状态 */}
            <input
                type="checkbox"
                id={`toggle-${item.htmlFor}`}
                className="toggle-checkbox"
                defaultChecked={index === 2}
                style={{
                    position: 'absolute',
                    opacity: 0
                }}
            />
            {index != 2 ? (
                <div
                    className="check"
                    name={item.htmlFor}
                    onClick={(e) => {
                        // 手动切换复选框状态，触发CSS效果
                        document.getElementById(`toggle-${item.htmlFor}`).checked =
                            !document.getElementById(`toggle-${item.htmlFor}`).checked
                        // 执行原有的点击事件处理
                        checkOnclock(e)
                    }}
                >
                    <a href="#" className="true left">开启</a>
                    <a href="#" className="empty start"></a>
                    <a href="#" className="close between">关闭</a>
                </div>
            ) : (
                <div
                    className="check"
                    name={item.htmlFor}
                    id={item.htmlFor}
                    onClick={(e) => {
                        // 手动切换复选框状态，触发CSS效果
                        document.getElementById(`toggle-${item.htmlFor}`).checked =
                            !document.getElementById(`toggle-${item.htmlFor}`).checked
                        // 执行原有的点击事件处理
                        checkOnclock(e)
                    }}
                >
                    <a href="#" className="true start">开启</a>
                    <a href="#" className="empty between"></a>
                    <a href="#" className="close right">关闭</a>
                </div>
            )}
        </li>
    )
    return (
        <div
            className="setscreen "
            id="set"
            style={{
                display: setScrStyleItem[setScrShow].display,
                backgroundColor: style[styleValue].backgroundColor,
                color: style[styleValue].color
            }}
        >
            <div className="settop">
                <span>{SvgList[0]}设置</span>
                {style[styleValue].svg ? style[styleValue].svg : <svg
                    t="1741179270154"
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2629"
                    width="200"
                    height="200"
                    onClick={(event) => {
                        setSetScrShow('hide')
                        event.preventDefault()
                    }}
                >
                    <path
                        d="M0 0h1024v1024H0z"
                        fill="#ffffff"
                        fill-opacity="0"
                        p-id="2630"
                    ></path>
                    {SvgList[1]}</svg>
                }
            </div>
            <div className="contentOne">
                <ul>
                    {LiOneList}
                    {LiTwoList}
                    <li>
                        <label htmlFor="nowday">今日热门</label>
                        <input
                            type="text"
                            name="nowday"
                            placeholder="略"
                            id="nowday"
                        />
                    </li>
                </ul>

            </div>
            <div className="contentTwo">略</div>
            <div
                className="setbuttom"
                onClick={(event) => {
                    setSetScrShow('hide')
                    event.preventDefault()
                }}
            ><a href="#">开摸!</a></div>
        </div>
    )
}
