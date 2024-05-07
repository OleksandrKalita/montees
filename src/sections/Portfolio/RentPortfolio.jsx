import {Box, Grid, Image, Text, useMediaQuery} from "@chakra-ui/react"

import AnimationText from "@/components/AnimationText/AnimationText"
import styles from "./Portfolio.module.css"
function RentPortfolio() {
    const [isSmallScreen] = useMediaQuery('(max-width: 700px)');
    return (
        <Box
            pt={{base: "0px", lg: "40px"}}
            display="flex"
            flexDirection="column"
            rowGap={{base: "20px", lg: "40px"}}
        >
            <Grid w="100%" display="flex" flexDirection={isSmallScreen ? "column" : "row"} columnGap="40px" rowGap="20px">
            
                <Box position="relative" width={isSmallScreen ? '350px' : "50%"} height={isSmallScreen ? '370px' :'max-content'} mx="auto" overflow="hidden"
                    >
                    <Image src="portfolio-images/port-image-1.svg" height="100%"/>
                    <Box
                        position="absolute"
                        top={isSmallScreen ? "15px" : '5%'}
                        right={isSmallScreen ? "15px" : "6%" }
                        boxSize="52px"
                        borderRadius="50%"
                        bgColor="#fff">
                        <Image alt="arrow-icon" src="/arrow-icon.svg"
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
                </Box>
            </Grid>
        </Box>
    )
}

export default RentPortfolio
