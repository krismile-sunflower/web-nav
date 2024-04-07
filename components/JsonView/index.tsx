
import { useEffect, useState } from 'react'

type Props = {
  text: string
}

export default function Index(props: Props) {
  const { text } = props
  const [jsonData, setJsonData] = useState({})
  const [isExpand, setIsExpand] = useState<boolean>(true)
  const handleJsonChange = (e: string) => {
    try {
      const parsedJson = JSON.parse(e)
      setJsonData(parsedJson)
    } catch (error) {
      console.error('解析错误:', error)
    }
  }

  useEffect(() => {
    if (text !== '') {
      handleJsonChange(text)
    }
  }, [text])
  const copyAccessKey = () => {
    const textareaC = document.createElement('textarea')
    textareaC.setAttribute('readonly', 'readonly') //设置只读属性防止手机上弹出软键盘
    textareaC.value = isExpand ? JSON.stringify(jsonData, null, 2) : JSON.stringify(jsonData)
    document.body.appendChild(textareaC) //将textarea添加为body子元素
    textareaC.select()
    const successful = document.execCommand('copy') // 执行 copy 操作
    if (successful) {
    //   message.success('复制成功！')
      document.body.removeChild(textareaC) //移除DOM元素
    } else {
    //   message.warning('复制失败，请手动复制！')
    }
  }
  return (
    <div className={isExpand ? 'whitespace-pre-wrap' : ''}>
      <code className="block">
        <div className="cursor-pointer text-lg" onClick={() => setIsExpand(!isExpand)}>
          {isExpand ? <>xx</> : <>oo</>}
        </div>
        <div onClick={copyAccessKey} className="cursor-pointer">
          {JSON.stringify(jsonData, null, 2)}
        </div>
      </code>
    </div>
  )
}
