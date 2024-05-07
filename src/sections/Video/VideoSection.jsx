import {Box, Image, useMediaQuery,} from "@chakra-ui/react"
import React, { useEffect, useRef} from "react"
import Marquee from "react-fast-marquee"

import styles from "./Video.module.css"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"



 export default function VideoSection() {
    const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

    const refRoot = useRef(null)
    const refVideoBox = useRef(null)
    const refVideo = useRef(null)

    // useGSAP(() => {
    //   setTimeout(() => {
    //     ScrollTrigger.create({
    //       trigger: refRoot.current,
    //       start: `top top`,
    //       end: `top+=100% top`,
    //       pin: true,
    //       scrub: 1,
    //       markers: true,
    //       onUpdate(self) {
    //         const progress = self.progress
    //       }
    //     })
    //   }, 100)
    // }, [])

    useEffect(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({defaults: {
          ease: "power2.inOut"
        }}).to(refVideoBox.current, {
          width: "100%",
          height: "100%",
          borderRadius: 0
        })

        ScrollTrigger.create({
          trigger: refRoot.current,
          start: `top top`,
          end: `top+=100% top`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          markers: false,
          onUpdate(self) {
            const progress = self.progress
          },
          animation: tl
        })
      }, [isSmallScreen])

      return () => ctx.revert()
    })

    return (
        <div className={styles.wrapper} ref={refRoot}>
        <div className={styles.container}>
                <div className={styles.button_con} >
                    <Box
                        bgColor="#232323"
                        boxSize="46px"
                        borderRadius="50%"
                        alignContent="center"
                        pl="11px"
                        cursor="pointer"
                    >
                        <Image src="house2.svg" />
                    </Box>
                    <Box
                        bgColor="#232323"
                        boxSize="46px"
                        borderRadius="50%"
                        alignContent="center"
                        pl="12px"
                        cursor="pointer"
                    >
                        <Image src="key2.svg" />
                    </Box>
                </div>
                <div
                    className={styles.video_wrapper}
                    ref={refVideoBox}
                >
                    <video
                        className={styles.video}
                        loop
                        muted
                        autoPlay
                        ref={refVideo}
                    >
                        <source src="/video/v-1.mp4" />
                    </video>
                    <Marquee style={{position: 'absolute',top: '45%', zIndex: 2}} speed={150}>
                        <div className={styles.marquee_text}>Apartments with an initial payment from $25,000</div>
                        <div className={styles.marquee_text}><Box boxSize='18px' bgColor='#fff' borderRadius='50%'></Box></div>
                        <div className={styles.marquee_text}>interest-free</div>
                        <div className={styles.marquee_text}><Box boxSize='18px' bgColor='#fff' borderRadius='50%'></Box></div>
                        <div className={styles.marquee_text}>installment plan up to 8 years</div>
                    </Marquee>
                </div>
            </div>
            </div>
    )
}
