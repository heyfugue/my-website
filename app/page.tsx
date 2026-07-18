"use client"
import { motion, useDragControls } from "framer-motion"
import React, { useState } from "react"
import { FaBook, FaPen, FaYoutube } from "react-icons/fa"
import { FaXTwitter, FaTiktok, FaEnvelope, FaMoneyBill } from "react-icons/fa6"

const tabs: Record<string, { title: string, content: React.ReactNode }> = {
  about: {
    title: "about",
    content: (
      <div className="p-6 bg-[#823521] rounded-b w-full h-full border border-white">
        <h2>hi im fugue!</h2>
        <p>im currently studying cs, i love art, music and story telling</p>
        <br />
        <p>im still a beginner artist but mihoyo games has genuinely moved me, as i work on my art and story telling and maybe music? i want to make my own game and make a story and art for it!</p>
        <br />
        <p>while i work on that i plan to post my progress with all of it on twitter and tiktok, and id also love to stream working on art or just playing hsr</p>
        <br />
        <p>thanks for reading!</p>
      </div>
    ),
  },
  portfolio: {
    title: "portfolio",
    content: (
      <div className="p-6 bg-[#823521] rounded-b w-full h-full border border-white">
        <p>nothing here yet.. but this website was made by me!</p>
      </div>
    )
  },
  support: {
    title: "support",
    content: (
      <div className="p-6 bg-[#823521] rounded-b w-full h-full border border-white">
        <p>the best way to support me is simply following my socials and giving me feedback! i promise it means a lot</p>
        <br />
        <p>extra support is my ko-fi, though following along is enough support!</p>
      </div>
    )
  },
  contact: {
    title: "contact",
    content: (
      <div className="p-6 bg-[#823521] rounded-b w-full h-full border border-white">
        <p>the most reliable way to contact me is through my email: heyfugue@gmail.com</p>
        <br />
        <p>though feel free to contact me on any of my socials!</p>
      </div>
    )
  },
  journal: {
    title: "journal",
    content: (
      <div className="p-6 bg-[#823521] rounded-b w-full h-full border border-white overflow-y-auto">
        <div className="w-full h-[340px] bg-neutral-100/10 flex gap-6 p-6">
          <div className="flex-1 flex flex-col">
            <p>sketch - 7/16/26</p>
            <br />
            <p>this was the first time I tried clip studio paint, as a beginner i want to learn from better artists than i so i used the art from Day One of My New Life lc from hsr and tried to replicate it. i didnt finish but im happy with what i learned</p>
          </div>
          <img src="/march7th.jpg" className="w-[200px] h-[283px] object-cover rounded"/>
        </div>
      </div>
    )
  },
}

function TabWindow({ name, onClose, index }: { name: string, onClose: () => void, index: number }) {
  const dragControls = useDragControls()

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        top: `${20 + index * 80}px`,
        right: `${20 + index * 50}px`,
      }}
      className="fixed w-[500px] h-[350px] rounded z-50"
    >
      <div
        onPointerDown={(e) => dragControls.start(e)}
        className="w-full h-12 cursor-grab active:cursor-grabbing rounded-t border border-white bg-[#471102] flex items-center px-4 select-none"
      >
        <h1 className="font-bold text-[16px]">{tabs[name].title}</h1>
        <button onClick={onClose} className="ml-auto cursor-pointer font-bold">[ x ]</button>
      </div>
      {tabs[name].content}
    </motion.div>
  )
}

export default function Home() {
  const[openTabs, setOpenTabs] = useState<string[]>([])
  const openTab = (name: string) => {
    if (openTabs.includes(name)) {
      setOpenTabs(openTabs.filter(tab => tab !== name))
    } else {
      setOpenTabs([...openTabs, name])
    }
  }

  const closeTab = (name: string) => {
    setOpenTabs(openTabs.filter(tab => tab !== name))
  }

  return (
    <main className="flex justify-center items-center min-h-screen">

      {openTabs.map((tab, index) => (
        <TabWindow key={tab} name={tab} onClose={() => closeTab(tab)} index={index}/>
      ))}

      <div className="w-[700px] h-[400px] flex items-center">

        <motion.button
          onClick={() => openTab("about")}
          whileHover={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.25, ease: "easeInOut" }}
          className="cursor-pointer ml-16"
        >
          <div className="w-[280px] h-[280px] rounded-full border-2 border-white/50 flex items-center justify-center">
            <img src="/fugue1.jpg" className="w-[260px] h-[260px] rounded-full bg-neutral-300"/>
          </div>
        </motion.button>

        <div className="h-[100%] flex-1 flex flex-col items-start ml-10">
          <div className="w-[100%] h-[80px] mt-20 flex items-center">
            <p className="font-bold text-[40px] text-white">fugue</p>
          </div>
          <div className="w-[100%] flex-1 flex flex-col items-start">

            <div className="flex items-center gap-2">
              <a href="https://x.com/heyfugue" target="_blank" className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
                <FaXTwitter className="w-4 h-4" />
                <p>@ heyfugue</p>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a href="https://www.youtube.com/@heyfugue" target="_blank" className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
                <FaYoutube className="w-4 h-4"/>
                <p>@ heyfugue</p>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a href="https://www.tiktok.com/@heyfugue" target="_blank" className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
                <FaTiktok className="w-4 h-4" />
                <p>@ heyfugue</p>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a href="https://ko-fi.com/heyfugue" target="_blank" className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
              <img src="/kofi.png" className="w-4 h-4" />
              <p>@ heyfugue</p>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/*taskbar area*/}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
      
        <button onClick={() => openTab("portfolio")} className="flex flex-col items-center gap-1 cursor-pointer hover:-translate-y-1 transition-transform">
          <FaPen className="w-6 h-6"/>
          <p>portfolio</p>
        </button>

        <button onClick={() => openTab("journal")} className="flex flex-col items-center gap-1 cursor-pointer hover:-translate-y-1 transition-transform">
          <FaBook className="w-6 h-6"/>
          <p>journal</p>
        </button>

        <button onClick={() => openTab("contact")} className="flex flex-col items-center gap-1 cursor-pointer hover:-translate-y-1 transition-transform">
          <FaEnvelope className="w-6 h-6"/>
          <p>contact</p>
        </button>

        <button onClick={() => openTab("support")} className="flex flex-col items-center gap-1 cursor-pointer hover:-translate-y-1 transition-transform">
          <FaMoneyBill className="w-6 h-6"/>
          <p>support</p>
        </button>

      </div>
    </main>
  )
}