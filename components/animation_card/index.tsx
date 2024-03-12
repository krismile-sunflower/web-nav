import { cn } from "@/lib/utils";
import React, {useRef, useState} from "react";

interface Props {
    children: React.ReactNode;
    className: string;
    
}
const AnimationCard = (props: Props) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const lightRef = useRef<HTMLDivElement |null>(null);
    const [isShowLight, setIsShowLight] = useState<boolean>(false);
    const [pos, setPos] = useState({ left: '0px', top: '0px'});

    return <div>
        <div
            className={cn(" flex-center relative  flex-col overflow-hidden rounded-lg border p-3 hover:-translate-y-1 hover:scale-105 hover:bg-border hover:shadow-md", props.className)}
            onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
                if (cardRef.current) {
                    setIsShowLight(true)
                    // 父元素相对于页面窗口
                    const { x, y } = cardRef.current.getBoundingClientRect()
                    // 鼠标在页面位置
                    const { clientX, clientY } = e
                    //光源随鼠标移动
                    setPos({
                        left: clientX - x - 100 + 'px', // 100为光源宽度的1/2
                        top: clientY - y - 100 + 'px' // 100为光源高度的1/2
                    })
                }
            }}
            onMouseLeave={() => {
                setIsShowLight(false)
              
            }}
            ref={cardRef}


        >
            <div
                className={`${
                    isShowLight ? '' : 'hidden'
                } absolute size-[200px] rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 blur-[80px] `}
                ref={lightRef}
                style={pos}
            ></div>
            { props.children }
        </div>
    </div>
}

export default AnimationCard;
