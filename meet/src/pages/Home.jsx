import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Heading1 } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import Card from '../components/Card'
let url = 'https://frontend-cohort-default-rtdb.asia-southeast1.firebasedatabase.app/'

function Home() {
  let [meetings, setMeetings] = useState([]);
  useEffect(()=>{
      axios.get(`${url}meet.json`).then((meetings)=>{
          let tempMeetings = [];
          for(let key in meetings.data){
            let meeting = {
              id:key,
              ...meetings.data[key]
            }
            tempMeetings.push(meeting)
          }
          setMeetings(tempMeetings)
      })
  })
  return (
    <div className='mt-32 max-w-4xl mx-auto flex flex-wrap gap-4'>
      
      {
        meetings.map(meeting => <Card title={meeting.title} date={meeting.date} />)
      }
    </div>
  )
}

export default Home
