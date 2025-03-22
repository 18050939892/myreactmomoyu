import { FirstShow } from '../../jotai/store.ts'
import {useAtom} from 'jotai'
export function Title(props) {
    const [firstShow] = useAtom(FirstShow)
    console.log(props)
    return (
        <div
            className={`item title-${props.index}`}
            style={{
                paddingTop: '10px',
                height: '15px',
                width: '90.5%',
                borderRadius: '5px 5px',
                color: 'rgb(176, 179, 181)',
                display: firstShow ? 'block' : 'none' /* 默认隐藏所有元素 */
            }}
        >
            {props.item}
        </div>
    )
}
