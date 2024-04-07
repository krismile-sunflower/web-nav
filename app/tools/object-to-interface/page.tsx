'use client'
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useRef, useState } from "react";

export default function Index() {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();
  const [text, setText] = useState<string>('{}');
  function convertToInterface(obj: { [x: string]: any; }) {
    let interfaceString = 'interface MyInterface {\n';
    for (const key in obj) {
      let type = typeof obj[key];
      if (type === 'object') {
        // 如果是对象，则递归调用
        type = "object"; // 或者您可以为嵌套对象创建更具体的接口
      }
      interfaceString += `  ${key}: ${type};\n`;
    }
    interfaceString += '}';
    return interfaceString;
  }

  const copyAccessKey = (value?: string) => {
    console.log("🚀 ~ copyAccessKey ~ value:", value)
    const textareaC = document.createElement('textarea')
    textareaC.setAttribute('readonly', 'readonly') //设置只读属性防止手机上弹出软键盘
    if (value) {
      textareaC.value = value;
    } else {
      textareaC.value = JSON.stringify(text);
    }
   
    
    document.body.appendChild(textareaC) //将textarea添加为body子元素
    textareaC.select()
    const successful = document.execCommand('copy') // 执行 copy 操作
    if (successful) {
      toast({
        title: "复制成功.",
      })
      document.body.removeChild(textareaC) //移除DOM元素
    } else {
      toast({
        title: "复制失败，请手动复制.",
      })
    }
  }

  return <div className=" p-5">

    <div className="flex w-full">


      <div onClick={() => copyAccessKey} className="h-96 w-1/2 cursor-pointer">
        <Textarea placeholder="Type your message here." className="h-full" autoFocus ref={textRef} />
      </div>



      <div className={'w-1/2 whitespace-pre-wrap'}>
        <code className="block">
          <div onClick={() => copyAccessKey(convertToInterface(JSON.parse(text) ?? {}))} className="cursor-pointer">
            {convertToInterface(JSON.parse(text) ?? {})}
          </div>
        </code>
      </div>
    </div>

    <div className="w-full p-3 text-center">
      <button onClick={() => {
        const data = textRef.current?.value;
        try {
          JSON.parse(data ?? '');
          setText(data ?? '');
        } catch(err) {
          console.log("🚀 ~ Index ~ err:", err)
          toast({
            title: "转换失败.",
          })
        }
        // 

      }}>对象转换为 TypeScript 中的接口对象</button>
    </div>
  </div>
}

