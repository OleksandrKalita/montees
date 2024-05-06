import {Box, ChakraProvider,} from "@chakra-ui/react"
import Head from "next/head"

import AdvantagesSection from "@/sections/Advantages/AdvantagesSection"
import Footer from "@/sections/Footer/Footer"
import Home from "@/sections/Home/Home"
import PartnersSection from "@/sections/Partners/PartnersSection"
import PortfolioSection from "@/sections/Portfolio/PortfolioSection"
import PropertySection from "@/sections/Property/PropertySection"
import QuestionsSection from "@/sections/Questions/QustionsSection"
import SolutionsSection from "@/sections/Solutions/SolutionsSection"
import StatisticSection from "@/sections/Statistic/StatisticSection"
import VideoSection from "@/sections/Video/VideoSection"
import Script from "next/script"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useState } from "react"



export default function HomePage() {

  useGSAP(() => {
    setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger)
    }, 100)
  }, [] )

  const [countScriptLoad, setCountScriptLoad] = useState(0)
  const [load, setLoad] = useState(false)

      const libs = [
        "/libs/ScrollSmoother.min.js",
        "/libs/ScrollTrigger.min.js",
        
    ]

    useGSAP(() => {
      if (countScriptLoad == libs.length) {
        console.log("load scripts")
          gsap.registerPlugin(
              ScrollSmoother,
              ScrollTrigger,
          )

          setLoad(true)
      }

    }, [countScriptLoad])

    return (
      <>
      {countScriptLoad == libs.length && (
        <ChakraProvider>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet"
            />
        </Head>
        <Box
            fontFamily="montserrat"
            w="100vw"
            minH="100vh"
            display="flex"
            flexDirection="column"
            bgColor="#F8F5F2"
        >
            <Home />
            <VideoSection />
            <PortfolioSection />
            <StatisticSection />
            <SolutionsSection />
            <AdvantagesSection />
            <PropertySection />
            <PartnersSection />
            <QuestionsSection />
            <Footer />
        </Box>

        
    </ChakraProvider>
    )}
      

        {libs.map((lib, i) => (
                <Script
                    src={lib}
                    onLoad={() => setCountScriptLoad((prev) => prev + 1)}
                    key={i}
                />
            ))}
      </>
    )
}
