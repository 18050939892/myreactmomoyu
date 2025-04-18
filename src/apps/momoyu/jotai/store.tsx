import { atom, getDefaultStore } from 'jotai'

// todo 支持主题配置存储到 本地缓存里，用 localStorage 实现。 做到刷新页面后，主题仍然是设置的那个主题
export const store = getDefaultStore()
export const FirstShow = atom(false)
export const LogoShow = atom(true)
type ScrType = 'show' | 'hide'
export const OverHidden = atom<ScrType>('show')
export const CheckWork = atom(true)
export const FontSize = atom(13)
export const themeList = [
    {
        name: '暗夜',
        value: 'dark',
        backgroundColor: '#1f2025',
        color: 'rgb(176, 179, 181)',
    },
    {
        name: '护眼',
        value: 'eye',
        backgroundColor: '#333e43',
        color: 'rgb(176, 179, 181)',
    },
    {
        name: '极客',
        value: 'geek',
        backgroundColor: 'white',
        color: 'black',
    }
]
export const ThemeIndex = atom(0)
export const CurrentTheme = atom((get) => themeList[get(ThemeIndex)])
export const SetScrShow = atom<ScrType>('hide')

