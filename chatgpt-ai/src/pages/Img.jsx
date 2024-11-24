import { useRef, useState } from "react"
import axios from "axios";
import Markdown from "react-markdown";
import { Skeleton } from "@/components/ui/skeleton"

function Img() {
    let userInput = useRef(null)
    let [url, setUrl] = useState('');
    let [status, setStatus] = useState(false);
    async function  askChatgpt() {
        setStatus(true)
        let msg = userInput.current.value;
        let apiUrl = 'https://api.openai.com/v1/images/generations';
        const apiKey = '';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        }
        const requestBody = {
            model: 'dall-e-3',
            prompt: msg,
            n: 1,
            size: "1024x1024",
        }
        axios.post(apiUrl, requestBody, {headers}).then(({data})=>{
            {
                console.log(data)
                setUrl(data.data[0].url);
                console.log(url)
                setStatus(false)
                
            }
            
        })
    }
  return (
    <div>

    <div className="w-[700px] mt-12 mb-24 mx-auto">
        {
            status ? <div>
                <Skeleton className="h-[400px] w-full" />



            </div> : <img className="h-[400px] w-full object-cover" src={url} alt="" />
        }
        
    </div>

        {/* input */}
      <div className="fixed bg-white h-[100px] bottom-0 left-1/2 -translate-x-1/2 w-[700px]">
      <div className="flex">
        <input ref={userInput} placeholder="Ask chatgpt to generate image" type="text" className="border p-3 w-full focus:outline-none focus:border-neutral-300" />
        <button onClick={askChatgpt}  className="bg-black py-3 px-5 text-white">Send</button>
      </div>
        <p className="text-sm text-center text-neutral-600">This is an AI tool and can make mistakes</p>
      </div>
    </div>
  )
}

export default Img
