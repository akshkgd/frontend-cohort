import User from './assets/ashish.jpeg';
import Exp1 from './assets/splunk.svg';
import Exp2 from './assets/buildspace.jpg';
import Exp3 from './assets/mhacks-9.png'
import { ConfettiButton } from "@/components/magicui/confetti";
import BlurFade from "@/components/magicui/blur-fade";
import { ChevronRight } from "lucide-react";
 
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
 
function App() {
  return (
    <> 
    <BlurFade delay={0.5} inView>
    <section className="mt-12 max-w-2xl mx-auto">
    
      <div className="flex gap-14 items-center">
        <div>
          <h1 className='text-4xl font-black'>Hey, I am Ashish👋</h1>
          <p className='font-light text-lg mt-2'>Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.</p>
          {/* <div className="flex mt-3 gap-3">
            <a href="" className='text-xl'><FaTwitter /></a>
            <a href="" className='text-xl'><FaLinkedin /></a>
          </div> */}
        </div>
        <img src={User} className='h-40 w-40 object-cover rounded-full' alt="" />
      </div>
    </section>
    <section className="mt-12 max-w-2xl mx-auto">
          <h1 className='text-2xl font-black'>About Me</h1>
          
          <p className='font-light text-neutral-500'>At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, <span className="underline text-black">I pursued a double degree in computer science and business, interned at big tech companies in Silicon Valley</span>  , and competed in over 21 hackathons for fun. I also had the pleasure of being a part of the first ever in-person <span className="underline text-black">cohort of buildspace called buildspace sf1.</span> </p>
    </section>


    <section className="mt-12 max-w-2xl mx-auto">
          <h1 className='text-2xl font-black'>Work Experiece</h1>
          <p className='font-light text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam?</p>
          
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                  <img src={Exp1} className='h-12 rounded-full' alt="" />
                  <div className="">
                    <h2 className='text-sm'>Splunk Technologies</h2>
                    <p className='text-xs'>Senior Software Developer</p>
                  </div>
              </div>
              <p className='text-neutral-500 font-light text-sm'>May 2021 - Oct 2022</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                  <img src={Exp2} className='h-12 rounded-full' alt="" />
                  <div className="">
                    <h2 className='text-sm'>Build Space</h2>
                    <p className='text-xs'>Software Developer</p>
                  </div>
              </div>
              <p className='text-neutral-500 font-light text-sm'>May 2021 - Oct 2022</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                  <img src={Exp3} className='h-12 rounded-full' alt="" />
                  <div className="">
                    <h2 className='text-sm'>M Hacks 9</h2>
                    <p className='text-xs'>Frontend Developer</p>
                  </div>
              </div>
              <p className='text-neutral-500 text-sm font-light'>May 2021 - Oct 2022</p>
            </div>
          </div>  
    </section>
  

    <section className="mt-12 mb-36 max-w-2xl mx-auto">
    <h1 className='text-2xl font-black'>Get in Touch</h1>
          <p className='font-light text-neutral-500'>Want to chat? Just shoot me a dm with a direct question on twitter and I'll respond whenever I can. I will ignore all soliciting.</p>
          <div className="relative">
      <ConfettiButton className="mt-4 px-5 font-light rounded-full">Text me on Twitter</ConfettiButton>
    </div>
    </section>
    </BlurFade>
    </>
  )
}

export default App
