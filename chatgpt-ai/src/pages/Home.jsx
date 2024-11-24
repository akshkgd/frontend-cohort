import { useRef, useState } from "react"
import axios from "axios";
import Markdown from "react-markdown";
import { Skeleton } from "@/components/ui/skeleton"

function Home() {
    let userInput = useRef(null)
    let [response, setResponse] = useState('');
    let [status, setStatus] = useState(false);
    async function  askChatgpt() {
        setStatus(true)
        let msg = userInput.current.value;
        let apiUrl = 'https://api.openai.com/v1/chat/completions';
        const apiKey = ''
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        }
        const requestBody = {
            model: 'gpt-4',
            messages: [
                {
                    role: 'user',
                    content: msg
                }
            ]
        }
        axios.post(apiUrl, requestBody, {headers}).then(({data})=>{
            // console.log(data.choices)
            {
                setResponse(data.choices[0].message.content)
                setStatus(false)
                
            }
            
        })
    }
  return (
    <div>

    <div className="w-[700px] mt-24 mb-40 mx-auto">
        {
            status ? <div>
                <Skeleton className="w-full h-[10px] mt-2 rounded-full" />
                <Skeleton className="w-1/2 h-[10px] mt-2 rounded-full" />
                <Skeleton className="w-1/3 h-[10px] mt-2 rounded-full" />



            </div> : <Markdown>{response}</Markdown>
        }
        
    </div>

        {/* input */}
      <div className="fixed bg-white h-[100px] bottom-0 left-1/2 -translate-x-1/2 w-[700px]">
      <div className="flex">
        <input ref={userInput} placeholder="Ask chatgpt" type="text" className="border p-3 w-full focus:outline-none focus:border-neutral-300" />
        <button onClick={askChatgpt}  className="bg-black py-3 px-5 text-white">Send</button>
      </div>
        <p className="text-sm text-center text-neutral-600">This is an AI tool and can make mistakes</p>
      </div>
    </div>
  )
}

export default Home
