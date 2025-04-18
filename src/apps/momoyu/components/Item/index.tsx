import { MySvg } from './mysvg.tsx'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { CurrentTheme, FirstShow } from '../../jotai/store.tsx'
import { useAtom } from 'jotai'
import axios from 'axios'
import { NewsItem } from '../NewsList'

interface Props {
    item: {
        title: string,
        svg: React.ReactNode,
        link: string,
        weight: number,
    }
}

export function Item(props: Props) {
    const [currentTheme] = useAtom(CurrentTheme)
    const {
        svg, title, link, weight
    } = props.item
    const [message, setMessage] = useState<Array<any>>([])
    const [nowTime, setNowTime] = useState<Date>(new Date())
    const [firstShow] = useAtom(FirstShow)

    async function sendAjax(): Promise<void> {
        const res = await axios.get(`https://my-repository-orcin-beta.vercel.app${link}`)
        const {data} = res.data
        setMessage(data)
        setNowTime(new Date())
    }

    useEffect(() => {
        sendAjax().then()
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    return <div
        className={`item`}
        style={{
            backgroundColor: currentTheme.backgroundColor,
            order: !firstShow ? weight : 0
        }}
    >
        <a href="#" className="title">
            <MySvg>{svg}</MySvg>
            <h4>{title}</h4>&nbsp;
            <h6>{(Math.floor((new Date().getTime() - nowTime.getTime()) / (1000 * 60))) + '分钟前' || ''}</h6>
        </a>
        <div
            onClick={sendAjax}
        >
            <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2651"
                width="200"
                height="200"
            >
                <path
                    d="M969.916221 501.771031c-11.116175 0-20.128433 9.012258-20.128433 20.128433 0 57.860802-11.328 113.980961-33.668821 166.799934-21.583574 51.027164-52.485375 96.860025-91.848894 136.222521-39.362496 39.36352-85.195358 70.26532-136.222521 91.848894-52.819996 22.340821-108.940155 33.668821-166.800957 33.668821s-113.979938-11.328-166.79891-33.668821c-51.027164-21.583574-96.859002-52.485375-136.221498-91.847871-39.362496-39.36352-70.264297-85.195358-91.846848-136.223544-22.340821-52.818973-33.667797-108.939131-33.667797-166.799934s11.328-113.980961 33.667797-166.799934c21.582551-51.027164 52.485375-96.859002 91.846848-136.221498 39.362496-39.362496 85.194334-70.264297 136.221498-91.846848 52.818973-22.340821 108.939131-33.667797 166.79891-33.667797 88.588641 0 174.554548 27.421536 246.359944 77.895091L662.939711 188.895161c-10.961656 1.847068-18.351973 12.231579-16.503882 23.193235 1.655709 9.830903 10.17678 16.787338 19.824511 16.787338 1.110287 0 2.237971-0.092098 3.368724-0.283456l151.254889-25.487487c10.961656-1.847068 18.351973-12.230556 16.503882-23.193235L813.903981 40.545438c-1.847068-10.961656-12.229532-18.349927-23.193235-16.503882-10.961656 1.847068-18.351973 12.230556-16.503882 23.193235l15.182794 90.107227C711.11185 82.737376 617.58985 53.105498 521.246595 53.105498c-63.277162 0-124.673487 12.397355-182.482101 36.848233-55.82647 23.612791-105.95824 57.411571-149.005662 100.457969-43.046399 43.046399-76.845179 93.179193-100.457969 149.004639C64.851007 397.224953 52.453652 458.621279 52.453652 521.898441c0 63.277162 12.397355 124.673487 36.848233 182.483124 23.612791 55.82647 57.411571 105.959264 100.457969 149.006685 43.046399 43.046399 93.179193 76.846202 149.005662 100.458993 57.808614 24.451902 119.203916 36.849256 182.482101 36.849256 63.278185 0 124.674511-12.397355 182.483124-36.849256 55.82647-23.612791 105.959264-57.411571 149.006685-100.458993 43.046399-43.047422 76.846202-93.181239 100.458993-149.006685 24.451902-57.808614 36.849256-119.204939 36.849256-182.483124C990.044654 510.782266 981.032396 501.771031 969.916221 501.771031z"
                    fill="#e6e6e6"
                    p-id="2652"
                ></path>
            </svg>
        </div>
        <ul>
            {
                message && message.map((NewValue, index) =>
                    <NewsItem NewValue={NewValue} id={index + 1} key={index}></NewsItem>
                )
            }
        </ul>
    </div>
}
