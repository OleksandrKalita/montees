import {Box, Grid, Image, Text, useMediaQuery} from "@chakra-ui/react"

import AnimationText from "@/components/AnimationText/AnimationText"
import styles from "./Portfolio.module.css"
import { useState } from "react";
function RentPortfolio() {
    const [isSmallScreen] = useMediaQuery('(max-width: 700px)');
    const [isHover, setHover] = useState(false);
    return (
        <Box
            pt={{base: "0px", lg: "40px"}}
            display="flex"
            flexDirection="column"
            rowGap={{base: "20px", lg: "40px"}}
        >
            <Grid w="100%" display="flex" flexDirection={isSmallScreen ? "column" : "row"} columnGap="40px" rowGap="20px">
            
                <Box position="relative" width={isSmallScreen ? '342px' : "657px"} height={isSmallScreen ? '370px' :'711px'} mx="auto" overflow="hidden"
                    onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <Image src="portfolio-images/port-image-1.svg" height="100%"/>
                    <Box
                        position="absolute"
                        top={isSmallScreen ? "15px" : '5%'}
                        right={isSmallScreen ? "15px" : "6%" }
                        boxSize={isSmallScreen ? "40px" : "52px"}
                        borderRadius="50%"
                        bgColor="#fff">
                        <Image alt="arrow-icon" src="/arrow-icon.svg"
                            width={isSmallScreen ? "28px" : "38px"}
                            height={isSmallScreen ? "28px" : "38px"}
                            mt={isSmallScreen ? "12px" : "16px"}
                            ml="6px"
                            transition="all 0.4s"
                            // _hover={{
                            //     transform: "translateX(5px) translateY(-5px)",
                            // }}
                        />
                    </Box>
                    <Box position={"absolute"} top={0} left={0} width={isSmallScreen ? '342px' : "657px"} height={isSmallScreen ? '370px' :'711px'} overflow={"hidden"} >
                        <Box w="100%" h="100%" textAlign='left'>
                            <Box pl={isSmallScreen ? '20px' : '30px'} transform={isSmallScreen && isHover && 'translate(0, 20px)' ||  isSmallScreen && 'translate(0, 320px)' || isHover && 'translate(0, 30px)' || 'translate(0, 600px)'} transition={'all 0.4s'}>
                                <AnimationText
                                    lines={["Azure Heights", "Luxury Residences"]}
                                    style={{
                                        fontSize: isSmallScreen ? "12px" : "22px",
                                        color: "#fff",
                                        fontWeight: "600",
                                    }}
                                    delay={0.2}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        position="absolute"
                        bottom={isSmallScreen ? "90px" : "120px"}
                        right={isSmallScreen ? "15px" : "40px"}
                        display="flex"
                        columnGap="4px"
                        transition={"all 0.5s"}
                        opacity={isHover ? 1 : 0}>
                        <Box
                            w={isSmallScreen ? "136px" : "167px"}
                            h={isSmallScreen ? "52px" : "82px"}
                            borderRadius="18px"
                            bgColor="#fff"
                            py="16px"
                            px="12px"
                            display="flex"
                            columnGap='10px'
                            alignItems="center"
                            justifyContent="space-between"
                            transition="all 0.5s"
                            _hover={{bgColor: "#D5E7EE"}}
                        >
                            <Image src="/map-pointer.svg" />
                            <Text fontSize={isSmallScreen ? "12px" : "16px"} color="#000">
                                Dubai Marina
                            </Text>
                        </Box>
                    </Box>
                    <Box
                            position="absolute"
                            bottom={isSmallScreen ? "10px" : "30px"}
                            left={isSmallScreen ? "10px" : '40px'}
                            display="flex"
                            columnGap="4px"
                            textAlign="left"
                            transition={"all 0.4s"}
                            opacity={isHover ? 1 : 0}
                        >
                            <Box
                                w={isSmallScreen ? "90px" : "113px"}
                                h={isSmallScreen ? "68px" : "82px"}
                                borderRadius="18px"
                                bgColor="#fff"
                                py="12px"
                                px="10px"
                                display="flex"
                                flexDirection="column"
                                justifyContent="space-between"
                                transition="all 0.4s"
                                _hover={{bgColor: "#D5E7EE"}}
                            >
                                <Text fontSize={isSmallScreen ? "10px" : "12px"} color="#2E2F30">
                                    Price
                                </Text>
                                <Text fontSize={isSmallScreen ? "12px" : "16px"} color="#000">
                                    from $290k
                                </Text>
                            </Box>
                            <Box
                                w={isSmallScreen ? "90px" : "113px"}
                                h={isSmallScreen ? "68px" : "82px"}
                                borderRadius="18px"
                                bgColor="#fff"
                                py="12px"
                                px="12px"
                                display="flex"
                                flexDirection="column"
                                justifyContent="space-between"
                                transition="all 0.4s"
                                _hover={{bgColor: "#D5E7EE"}}
                            >
                                <Text fontSize={isSmallScreen ? "10px" : "12px"} color="#2E2F30">
                                    Installment Plan
                                </Text>
                                <Text fontSize={isSmallScreen ? "12px" : "16px"} color="#000">
                                    for 10 years
                                </Text>
                            </Box>
                            <Box
                                w={isSmallScreen ? "90px" : "113px"}
                                h={isSmallScreen ? "68px" : "82px"}
                                borderRadius="18px"
                                bgColor="#fff"
                                py="12px"
                                px="12px"
                                display="flex"
                                flexDirection="column"
                                justifyContent="space-between"
                                transition="all 0.4s"
                                _hover={{bgColor: "#D5E7EE"}}
                            >
                                <Text fontSize={isSmallScreen ? "10px" : "12px"} color="#2E2F30">
                                    Initial Payment
                                </Text>
                                <Text fontSize={isSmallScreen ? "12px" : "16px"} color="#000">
                                    $30,000
                                </Text>
                            </Box>
                            <Box 
                                w={isSmallScreen ? "90px" : "113px"}
                                h={isSmallScreen ? "68px" : "82px"}
                                borderRadius="18px" bgColor="#fff" py="12px"px="12px" display="flex" flexDirection="column" justifyContent="space-between" transition="all 0.4s"_hover={{bgColor: "#D5E7EE"}}>
                                <Text fontSize={isSmallScreen ? "10px" : "12px"} color="#2E2F30">
                                    Upgraded Features
                                </Text>
                                <Box display="flex" columnGap="15px">
                                    <Image src="/icon-p-1.svg" />
                                    <Image src="/icon-p-2.svg" />
                                </Box>
                            </Box>
                            <Box 
                                w={isSmallScreen ? "90px" : "113px"}
                                h={isSmallScreen ? "68px" : "82px"} 
                                borderRadius="18px" bgColor="#fff" py="12px" px="12px" display="flex" flexDirection="column" justifyContent="space-between" transition="all 0.4s" _hover={{bgColor: "#D5E7EE"}}>
                                <Text fontSize={isSmallScreen ? "10px" : "12px"} color="#2E2F30">
                                    Completion Date
                                </Text>
                                <Text fontSize={isSmallScreen ? "12px" : "16px"} color="#000">
                                    09/2025
                                </Text>
                            </Box>
                        </Box>
                </Box>
            </Grid>
        </Box>
    )
}

export default RentPortfolio
