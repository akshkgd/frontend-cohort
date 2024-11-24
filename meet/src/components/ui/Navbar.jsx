import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import axios from 'axios'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useRef, useState } from 'react'
let Navifg
function Navbar() {
    let navigate = useNavigate()
    let url = 'https://frontend-cohort-default-rtdb.asia-southeast1.firebasedatabase.app/'
    const [date, setDate] = useState();
    const titleInput = useRef(null)
    function handleSubmit(){
        axios.post(`${url}meet.json`,{
            title: titleInput.current.value,
            date: date,
        }
        ).then(()=>{
            console.log('data saved');
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            });
            navigate('/');
        })
    }
  return (
    <div>
      <div className="border-b border-neutral-100 py-3 sm:max-w-4xl px-5 sm:px-0">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to='/'>Codekaro meetings</Link>
          <div className="flex gap-4 items-center">
            <Link to="/previous">Past Meetings</Link>
            <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Add Meeting</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add New Meeting</SheetTitle>
          <SheetDescription>
            Create new meeting with your members. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input id="name" ref={titleInput} placeholder="Meeting Title" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Date
            </Label>
            {/* <Input  id="username" placeholder="Meeting date" className="col-span-3" /> */}
            <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "col-span-3 justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
        <Select
          onValueChange={(value) =>
            setDate(addDays(new Date(), parseInt(value)))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="1">Tomorrow</SelectItem>
            <SelectItem value="3">In 3 days</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </PopoverContent>
    </Popover>
          </div>
          
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={handleSubmit}>Add Meeting</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

          </div>

      </div>
    </div>
    </div>
  )
}

export default Navbar
