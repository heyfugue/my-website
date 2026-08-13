"use client"
import { motion, useDragControls, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"
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
    <div className="p-6 bg-[#823521] rounded-b w-full h-full overflow-y-auto border border-white">
      <div className="w-full bg-neutral-100/10 flex flex-col sm:flex-row gap-6 p-6">
        <img src="/march7th.jpg" className="w-full sm:w-[200px] sm:h-[283px] aspect-[200/283] sm:aspect-auto object-cover rounded self-start" />
        <div className="flex flex-col gap-2">
          <p>sketch - 7/16/26</p>
          <p>this was the first time I tried clip studio paint, as a beginner i want to learn from better artists than i so i used the art from Day One of My New Life lc from hsr and tried to replicate it. i didnt finish but im happy with what i learned</p>
        </div>
      </div>

      <div className="w-full bg-neutral-100/10 flex flex-col sm:flex-row gap-6 p-6 mt-4">
        <img src="/fugue.png" className="w-full sm:w-[200px] sm:h-[283px] aspect-[200/283] sm:aspect-auto object-cover rounded self-start" />
        <div className="flex flex-col gap-2">
          <p>sketch - 8/12/26</p>
          <p>I was really tired making this one, I personally feel like ive been improving! Though I can't lie I am not particularly happy with how the sketch turned out but I do feel like I learned a bit more about anatomy.</p>
        </div>
      </div>

      <div className="w-full bg-neutral-100/10 flex flex-col sm:flex-row gap-6 p-6 mt-4">
        <img src="/castorice.png" className="w-full sm:w-[200px] sm:h-[283px] aspect-[200/283] sm:aspect-auto object-cover rounded self-start" />
        <div className="flex flex-col gap-2">
          <p>sketch - 8/13/26</p>
          <p>Castorice from HSR! This was the absolutely most difficult sketch I have made so far. Though I am really happy with the progress I've made, this was a challenge from a commenter on tiktok so thanks! The hardest part was the arms and the hands, it's honestly still all over the place but honestly I am still happy with how it turned out.</p>
        </div>
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
      className="fixed w-[600px] h-[450px] rounded z-50"
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

function MobileSheet({ name, onClose }: { name: string, onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <motion.div
        className="relative w-full rounded-t-xl"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
      >
        {/* title bar */}
        <div className="w-full h-12 bg-[#471102] border border-white flex items-center px-4">
          <h1 className="font-bold text-[16px]">{tabs[name].title}</h1>
          <button onClick={onClose} className="ml-auto cursor-pointer font-bold">[ x ]</button>
        </div>

        <div className="h-[55vh] overflow-y-auto">
          {tabs[name].content}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Home() {
  const [openTabs, setOpenTabs] = useState<string[]>([])
  const [mobileSheet, setMobileSheet] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const openTab = (name: string) => {
    if (isMobile) {
      setMobileSheet(name)
      return
    }
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

      {!isMobile && openTabs.map((tab, index) => (
        <TabWindow key={tab} name={tab} onClose={() => closeTab(tab)} index={index} />
      ))}

      <AnimatePresence>
        {isMobile && mobileSheet && (
          <MobileSheet
            key={mobileSheet}
            name={mobileSheet}
            onClose={() => setMobileSheet(null)}
          />
        )}
      </AnimatePresence>

      <div className="w-full max-w-[700px] px-6 sm:px-0 sm:w-[700px] h-auto sm:h-[400px] flex flex-col sm:flex-row items-center gap-6 sm:gap-0">

        <motion.button
          onClick={() => openTab("about")}
          whileHover={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.25, ease: "easeInOut" }}
          className="cursor-pointer sm:ml-16 flex-shrink-0"
        >
          <div className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] rounded-full border-2 border-white/50 flex items-center justify-center">
            <img src="/fugue1.jpg" className="w-[164px] h-[164px] sm:w-[260px] sm:h-[260px] rounded-full bg-neutral-300 object-cover" />
          </div>
        </motion.button>

        <div className="flex-1 flex flex-col items-center sm:items-start sm:ml-10">
          <div className="flex items-center">
            <p className="font-bold text-[32px] sm:text-[40px] text-white">fugue</p>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-1 mt-2">

            <div className="flex items-center gap-2">
              <a href="https://x.com/heyfugue" target="_blank" className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
                <FaXTwitter className="w-4 h-4" />
                <p>@ heyfugue</p>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a href="https://www.youtube.com/@heyfugue" target="_blank" className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
                <FaYoutube className="w-4 h-4" />
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

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-4">

        <button onClick={() => openTab("portfolio")} className="flex flex-col items-center gap-1 cursor-pointer hover:-translate-y-1 transition-transform">
          <FaPen className="w-5 h-5 sm:w-6 sm:h-6" />
          <p className="text-xs sm:text-sm">portfolio</p>
        </button>

        <button onClick={() => openTab("journal")} className="flex flex-col items-center gap-1 cursor-pointer hover:-translate-y-1 transition-transform">
          <FaBook className="w-5 h-5 sm:w-6 sm:h-6" />
          <p className="text-xs sm:text-sm">journal</p>
        </button>

        <button onClick={() => openTab("contact")} className="flex flex-col items-center gap-1 cursor-pointer hover:-translate-y-1 transition-transform">
          <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
          <p className="text-xs sm:text-sm">contact</p>
        </button>

        <button onClick={() => openTab("support")} className="flex flex-col items-center gap-1 cursor-pointer hover:-translate-y-1 transition-transform">
          <FaMoneyBill className="w-5 h-5 sm:w-6 sm:h-6" />
          <p className="text-xs sm:text-sm">support</p>
        </button>

      </div>
    </main>
  )
}