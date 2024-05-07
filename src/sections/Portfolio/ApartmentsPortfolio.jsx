import {Box, Grid, Image, Text, useMediaQuery} from "@chakra-ui/react"

import AnimationText from "@/components/AnimationText/AnimationText"
import styles from  './Portfolio.module.css';
import PortfolioBlockComponent from "@/components/PortfolioBlockComponent/PortfolioBlockComponent";

function ApartmentsPortfolio() {
    const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
    const [isMediumScreen] = useMediaQuery('(max-width: 1352px)');
    return (
        <Box
            pt={{base: "0px", lg: "40px"}}
            display="flex"
            flexDirection="column"
            rowGap={{base: "20px", lg: "40px"}}
        >
            <Grid
                w="100%"
                display="flex"
                flexDirection={isMediumScreen ? "column" : "row"} 
                columnGap="40px"
                rowGap="20px">
                <PortfolioBlockComponent imageUrl={"portfolio-images/port-image-1.svg"} />
                <PortfolioBlockComponent imageUrl={"portfolio-images/port-image-2.svg"} />
                
            </Grid>
            <Grid
                w="100%"
                display="flex"
                flexDirection={isMediumScreen ? "column" : "row"} 
                columnGap="40px"
                rowGap="20px"
            >
                <PortfolioBlockComponent imageUrl={"portfolio-images/port-image-3.svg"} />
                <PortfolioBlockComponent imageUrl={"portfolio-images/port-image-4.svg"} />
            </Grid>

            <Grid
                w="100%"
                display="flex"
                flexDirection={isMediumScreen ? "column" : "row"} 
                columnGap="40px"
                rowGap="20px"
            >
                <PortfolioBlockComponent imageUrl={"portfolio-images/port-image-5.svg"} />
                <PortfolioBlockComponent imageUrl={"portfolio-images/port-image-6.svg"} optionButton={true} />

                {/* <Box position="relative" width={{lg: "50%"}} mx="auto">
                    <Image
                        src="portfolio-images/port-image-6.svg"
                        height="100%"
                    />
                    <Box
                        position="absolute"
                        top={{base: "15px", lg: "40px"}}
                        right={{base: "15px", lg: "40px"}}
                        boxSize="52px"
                        borderRadius="50%"
                        bgColor="#fff"
                        textAlign="center"
                    >
                        <Image
                            src="/arrow-icon.svg"
                            width="38px"
                            height="38px"
                            mt="16px"
                            ml="6px"
                            transition="all 0.4s"
                            _hover={{
                                transform: "translateX(3px) translateY(-3px)",
                            }}
                        />
                    </Box>
                    <Box
                        position="absolute"
                        top={{base: "15px", lg: "40px"}}
                        left={{base: "15px", lg: "40px"}}
                        display="flex"
                    >
                        <Box
                            bgColor="#fff"
                            w="173px"
                            h="52px"
                            borderRadius="80px"
                            fontSize="18px"
                            textAlign="center"
                            pt="12px"
                            transition="all 0.4s"
                            _hover={{bgColor: "#c0c0c0"}}
                        >
                            Find On The Map
                        </Box>
                    </Box>
                </Box> */}
            </Grid>
        </Box>
    )
}

export default ApartmentsPortfolio
