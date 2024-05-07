import {Box, Grid, Image, Text, useMediaQuery} from "@chakra-ui/react"

import AnimationText from "@/components/AnimationText/AnimationText"
import styles from "./Portfolio.module.css"
import { useState } from "react";
import PortfolioBlockComponent from "@/components/PortfolioBlockComponent/PortfolioBlockComponent";
function RentPortfolio() {
    const [isSmallScreen] = useMediaQuery('(max-width: 700px)');
    const [isMediumScreen] = useMediaQuery('(max-width: 1352px)');
    // const [isHover, setHover] = useState(false);
    return (
        <Box
            pt={{base: "0px", lg: "40px"}}
            display="flex"
            flexDirection="column"
            rowGap={{base: "20px", lg: "40px"}}
        >
            <Grid w="100%" display="flex" flexDirection={isMediumScreen ? "column" : "row"} columnGap="20px" rowGap="20px">
                <PortfolioBlockComponent imageUrl={"portfolio-images/port-image-1.svg"} />
                <PortfolioBlockComponent imageUrl={"portfolio-images/port-image-1.svg"} />
            </Grid>
        </Box>
    )
}

export default RentPortfolio
