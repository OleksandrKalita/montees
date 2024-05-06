import {
    Box,
    Button,
    Grid,
    Image,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react"
import {useEffect, useState} from "react"

import AnimatedNumber from "@/components/AnimatedNumber/AnimatedNumber"
import AnimationText from "@/components/AnimationText/AnimationText"
import SepecialAnimationComponents from "@/components/SepecialAnimationComponents/SepecialAnimationComponents"
import AnimatedComponent from "@/components/AnimatedComponent/AnimatedComponent"

function StatisticSection() {
    const buttonSize = useBreakpointValue({base: "sm", md: "md"})
    const iconSize = useBreakpointValue({base: "12px", md: "16px"})

    const [isMobile, setMobile] = useState(false)
    const isMob = useBreakpointValue({base: true, lg: false})
    useEffect(() => {
        setMobile(isMob)
    }, [isMob])
    return (
        <Box
            width="100vw"
            maxH={{base: "2200px", lg: "none"}}
            h={{base: "none", lg: "900px"}}
        >
            <Box
                maxW="1400px"
                mx="auto"
                px="20px"
                py="40px"
                display="flex"
                flexDirection={{base: "column", lg: "row"}}
                columnGap="10px"
            >
                <Box
                    w={{base: "100%", lg: "50%"}}
                    display="flex"
                    flexDirection="column"
                >
                    <AnimationText
                        style={{fontSize: "16px", color: "rgba(0, 0, 0, 0.5)"}}
                        lines={[
                            "At Golden Gate Properties, we offer more than",
                            "just real estate services; we provide an unparalleled",
                            "experience tailored to meet your needs and exceed",
                            "your expectations.",
                        ]}
                    />
                    <Box
                        display="flex"
                        columnGap="18px"
                        alignItems="center"
                        pt="50px"
                    >
                        <Box width="260px" display="flex">
                            <SepecialAnimationComponents
                                delay={0.2}
                                animationFrom={{x: 0, autoAlpha: 0, scale: 0.5}}
                                animationTo={{
                                    x: 0,
                                    autoAlpha: 1,
                                    scale: 1,
                                    duration: 1.5,
                                    ease: "power3.out",
                                }}
                                Component={() => (
                                    <Image
                                        src="/avatar-4-icon.svg"
                                        width="60px"
                                        height="60px"
                                    />
                                )}
                            />
                            <SepecialAnimationComponents
                                delay={0.2}
                                animationFrom={{
                                    x: "-60px",
                                    autoAlpha: 0,
                                    scale: 0.5,
                                }}
                                animationTo={{
                                    x: "-18px",
                                    autoAlpha: 1,
                                    scale: 1,
                                    duration: 1.5,
                                    ease: "power3.out",
                                }}
                                Component={() => (
                                    <Image
                                        src="/avatar-3-icon.svg"
                                        width="60px"
                                        height="60px"
                                        zIndex={2}
                                    />
                                )}
                            />
                            <SepecialAnimationComponents
                                delay={0.2}
                                animationFrom={{
                                    x: "-120px",
                                    autoAlpha: 0,
                                    scale: 0.5,
                                }}
                                animationTo={{
                                    x: "-36px",
                                    autoAlpha: 1,
                                    scale: 1,
                                    duration: 1.5,
                                    ease: "power3.out",
                                }}
                                Component={() => (
                                    <Image
                                        src="/avatar-2-icon.svg"
                                        width="60px"
                                        height="60px"
                                        zIndex={3}
                                    />
                                )}
                            />
                            <SepecialAnimationComponents
                                delay={0.2}
                                animationFrom={{
                                    x: "-180px",
                                    autoAlpha: 0,
                                    scale: 0.5,
                                }}
                                animationTo={{
                                    x: "-48px",
                                    autoAlpha: 1,
                                    scale: 1,
                                    duration: 1.5,
                                    ease: "power3.out",
                                }}
                                Component={() => (
                                    <Image
                                        src="/avatar-1-icon.svg"
                                        width="60px"
                                        height="60px"
                                        zIndex={4}
                                    />
                                )}
                            />
                        </Box>
                        <AnimationText
                            style={{
                                fontSize: "16px",
                                color: "rgba(0, 0, 0, 0.5)",
                            }}
                            lines={["Meet Our", "Professional Team"]}
                        />
                    </Box>
                    <Grid
                        width="full"
                        display={{base: "block", lg: "none"}}
                        pt="50px"
                        pb="30px"
                    >
                        <Box
                            position="relative"
                            width="full"
                            height="auto"
                            colSpan={{base: 2, md: 1}}
                        >
                            <SepecialAnimationComponents
                                animationFrom={{x: 0, autoAlpha: 0, scale: 0.5}}
                                animationTo={{
                                    x: 0,
                                    autoAlpha: 1,
                                    scale: 1,
                                    duration: 1.5,
                                    ease: "power3.out",
                                }}
                                Component={() => (
                                    <Image
                                        src="/statisctic-dream-image.svg"
                                        width="full"
                                        height="auto"
                                        mx="auto "
                                    />
                                )}
                            />
                            <Box position="absolute" top="0" right="0" p="20px">
                                <SepecialAnimationComponents
                                    delay={0.8}
                                    animationFrom={{
                                        x: "-200%",
                                        autoAlpha: 0,
                                        scale: 0.5,
                                    }}
                                    animationTo={{
                                        x: 0,
                                        autoAlpha: 1,
                                        scale: 1,
                                        duration: 1.5,
                                        ease: "power3.out",
                                    }}
                                    Component={() => (
                                        <Box
                                            h="40px"
                                            bgColor="#D5E7EE"
                                            borderRadius="80px"
                                            py="3px"
                                            pl="3px"
                                            pr="20px"
                                            display="flex"
                                            columnGap="10px"
                                            textAlign="center"
                                            cursor="pointer"
                                        >
                                            <Box
                                                h="37px"
                                                w="37px"
                                                alignContent="center"
                                                bgColor="#fff"
                                                borderRadius="50%"
                                            >
                                                <Image
                                                    src="/phone-icon.svg"
                                                    width={10}
                                                    height={10}
                                                    pt="8px"
                                                />
                                            </Box>
                                            <Text
                                                color="#000"
                                                fontSize="16px"
                                                fontWeight={500}
                                                pt="5px"
                                            >
                                                Contact Us Now
                                            </Text>
                                        </Box>
                                    )}
                                />
                            </Box>
                            <SepecialAnimationComponents
                                delay={0.8}
                                animationFrom={{
                                    y: "200%",
                                    autoAlpha: 0,
                                    scale: 0.5,
                                }}
                                animationTo={{
                                    y: 0,
                                    autoAlpha: 1,
                                    scale: 1,
                                    duration: 1.5,
                                    ease: "power3.out",
                                }}
                                Component={() => (
                                    <Box
                                        position="absolute"
                                        right="0"
                                        bottom="0"
                                        p="20px"
                                    >
                                        <Box
                                            w="210px"
                                            h="69px"
                                            bgColor="#fff"
                                            borderRadius="20px"
                                            p="9px"
                                            display="flex"
                                            columnGap="20px"
                                            alignItems="center"
                                        >
                                            <Box
                                                position="relative"
                                                boxSize="50px"
                                            >
                                                <Image src="avatar-1-icon.svg" />
                                                <Box
                                                    boxSize="12px"
                                                    position="absolute"
                                                    top={0}
                                                    right={0}
                                                    borderRadius="50%"
                                                    bgColor="#fff"
                                                    border="4px solid #000"
                                                ></Box>
                                            </Box>
                                            <Box
                                                display="flex"
                                                flexDirection="column"
                                                justifyContent="space-between"
                                            >
                                                <AnimationText
                                                    style={{
                                                        fontSize: "10px",
                                                        color: "rgba(25,25,25,0.5)",
                                                    }}
                                                    lines={["Special Offer"]}
                                                />
                                                <AnimationText
                                                    style={{
                                                        fontSize: "10px",
                                                        color: "#000",
                                                        fontWeight: "500",
                                                    }}
                                                    lines={[
                                                        "Get The Consultation",
                                                        "With Our Expert",
                                                    ]}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                )}
                            />
                        </Box>
                    </Grid>
                    <Box>
                        <Box
                            display="flex"
                            columnGap="63px"
                            py="50px"
                            alignItems="center"
                            borderBottom="1px solid rgba(35,35,35,0.2)"
                        >
                            <AnimatedNumber text="+" end={100} duration={10} />
                            <AnimationText
                                style={{
                                    fontSize: "24px",
                                    color: "#000",
                                    fontWeight: 500,
                                }}
                                lines={["Successful", "Transactions Monthly"]}
                                delay={0.2}
                            />
                        </Box>
                        <Box
                            display="flex"
                            columnGap="63px"
                            py="50px"
                            alignItems="center"
                            borderBottom="1px solid rgba(35,35,35,0.2)"
                        >
                            <AnimatedNumber text="%" end={98} duration={10} />
                            <AnimationText
                                style={{
                                    fontSize: "24px",
                                    color: "#000",
                                    fontWeight: 500,
                                }}
                                lines={["Successful", "Transactions Monthly"]}
                                delay={0.2}
                            />
                        </Box>
                        <Box
                            display="flex"
                            columnGap="63px"
                            py="50px"
                            alignItems="center"
                        >
                            <AnimatedNumber text="" end={500} duration={0.3} />
                            <AnimationText
                                style={{
                                    fontSize: "24px",
                                    color: "#000",
                                    fontWeight: 500,
                                }}
                                lines={["Successful", "Transactions Monthly"]}
                                delay={0.2}
                            />
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <Grid width="full" display={{base: "none", lg: "block"}}>
                        <Box position="relative" width="full" height="auto" colSpan={{base: 2, md: 1}}>
                            <AnimatedComponent>
                                <Image src="/statisctic-dream-image.svg" width="full" height="auto" mx="auto"/>
                            </AnimatedComponent>
                            <Box position="absolute" top="0" right="0" p="20px">
                                <AnimatedComponent delay={0.7}>
                                <Box
                                            h="45px"
                                            bgColor="#D5E7EE"
                                            borderRadius="80px"
                                            py="4px"
                                            pl="4px"
                                            pr="20px"
                                            display="flex"
                                            columnGap="10px"
                                            textAlign="center"
                                            cursor="pointer"
                                        >
                                            <Box
                                                h="37px"
                                                w="37px"
                                                alignContent="center"
                                                bgColor="#fff"
                                                borderRadius="50%"
                                            >
                                                <Image
                                                    src="/phone-icon.svg"
                                                    width={10}
                                                    height={10}
                                                    pt="8px"
                                                />
                                            </Box>
                                            <Text
                                                color="#000"
                                                fontSize="18px"
                                                fontWeight={500}
                                                pt="5px"
                                            >
                                                Contact Us Now
                                            </Text>
                                        </Box>
                                </AnimatedComponent>
                            </Box>
                            <Box
                                position="absolute"
                                left="0"
                                bottom="0"
                                p="20px"
                            >
                                <AnimatedComponent>
                                    <Text fontSize="18px" fontWeight="800" color="#fff">
                                        Building your dreams
                                    </Text>
                                </AnimatedComponent>
                            </Box>
                            <AnimatedComponent>
                                <Box
                                        position="absolute"
                                        right="0"
                                        bottom="0"
                                        p="20px"
                                    >
                                        <Box
                                            w="304px"
                                            h="96px"
                                            bgColor="#fff"
                                            borderRadius="20px"
                                            p="20px"
                                            display="flex"
                                            columnGap="20px"
                                            alignItems="center"
                                        >
                                            <Box position="relative"boxSize="60px" >
                                                <Image src="avatar-1-icon.svg" />
                                            <Box boxSize="15px" position="absolute" top={0} right={0} borderRadius="50%" bgColor="#fff" border="4px solid #000"></Box>
                                        </Box>
                                        <Box display="flex" flexDirection="column" justifyContent="space-between">
                                            <AnimationText style={{fontSize: "12px", color: "rgba(25,25,25,0.5)",}} lines={["Special Offer"]}/>
                                            <AnimationText style={{fontSize: "16px",color: "#000",fontWeight: "500",}} lines={["Get The Consultation","With Our Expert",]}/>
                                        </Box>
                                    </Box>
                                </Box>
                            </AnimatedComponent>
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default StatisticSection
