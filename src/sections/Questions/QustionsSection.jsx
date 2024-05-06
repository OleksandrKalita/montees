import React, {useEffect} from "react"
import {useState} from "react"

import AnimationText from "@/components/AnimationText/AnimationText"
import SepecialAnimationComponents from "@/components/SepecialAnimationComponents/SepecialAnimationComponents"

const {Box, Text, Image, useBreakpointValue} = require("@chakra-ui/react")
function QuestionsSection() {
    const [isMobile, setMobile] = useState(false)
    const isMob = useBreakpointValue({base: true, lg: false})
    useEffect(() => {
        setMobile(isMob)
    }, [isMob])

    return (
        <Box w="100%" bgColor="#F8F5F2">
            <Box
                maxW="1400px"
                px="20px"
                py="100px"
                mx="auto"
                display="flex"
                flexDirection={{base: "column", lg: "row"}}
            >
                <Box w={{base: "100%", lg: "50%"}}>
                    <Box
                        display="flex"
                        columnGap="12px"
                        alignItems="center"
                        cursor="pointer"
                        transition="all 0.4s"
                        _hover={{columnGap: "20px"}}
                    >
                        <Box
                            bgColor="#000"
                            boxSize="12px"
                            borderRadius="50%"
                        ></Box>
                        <Box display="flex" columnGap="5px" alignItems="center">
                            <Text fontSize="16px" color="#000">
                                Explore Our Advantages
                            </Text>
                        </Box>
                    </Box>
                    {
                        <AnimationText
                            style={{
                                fontSize: "56px",
                                color: "#000",
                                fontWeight: "500",
                            }}
                            lines={["Frequent Asked", "Questions"]}
                        /> /*тут */
                    }
                    <AnimationText
                        style={{fontSize: "16px", color: "rgba(0, 0, 0, 0.5)"}}
                        lines={[
                            "At Monte, we offer more than just real estate",
                            "services; we provide an unparalleled experience",
                            "tailored to meet your needs and exceed your",
                            "expectations.",
                        ]}
                    />
                </Box>
                <Box
                    w={{base: "100%", lg: "50%"}}
                    display="flex"
                    columnGap="40px"
                    flexWrap="wrap"
                    rowGap="95px"
                    position="relative"
                    pt={{base: "20px", lg: "0px"}}
                >
                    <SepecialAnimationComponents
                        delay={1}
                        animationFrom={{x: "100px", autoAlpha: 0, scale: 1}}
                        animationTo={{
                            x: 0,
                            autoAlpha: 1,
                            scale: 1,
                            duration: 1.5,
                            ease: "power3.out",
                        }}
                        Component={() => (
                            <Box
                                bgColor="#fff"
                                borderRadius="20px"
                                px="20px"
                                py="50px"
                            >
                                <Box
                                    borderTop="1px solid rgba(0, 0, 0, 0.2)"
                                    borderBottom="1px solid rgba(0, 0, 0, 0.2)"
                                    display="flex"
                                    columnGap="10px"
                                    alignItems="center"
                                    transition="all 0.4s"
                                    justifyContent="space-between"
                                >
                                    <Text
                                        fontSize="20px"
                                        color="#000"
                                        py="25px"
                                        width="80%"
                                    >
                                        What types of properties do we offer in
                                        Dubai?
                                    </Text>
                                    <Box
                                        boxSize="52px"
                                        bgColor="#fff"
                                        borderRadius="50%"
                                        transition="all 0.4s"
                                        _hover={{bgColor: "#D5E7EE"}}
                                    >
                                        <Image
                                            src="plus-icon.svg"
                                            width="35px"
                                            height="35px"
                                            pt="16px"
                                            pl="16px"
                                        />
                                    </Box>
                                </Box>

                                <Box
                                    borderTop="1px solid rgba(0, 0, 0, 0.2)"
                                    borderBottom="1px solid rgba(0, 0, 0, 0.2)"
                                    display="flex"
                                    alignItems="center"
                                    transition="all 0.4s"
                                    mt="-1px"
                                    justifyContent="space-between"
                                >
                                    <Text
                                        fontSize="20px"
                                        color="#000"
                                        py="25px"
                                        flex="1 1 auto"
                                        width="80%"
                                    >
                                        What are the payment options available
                                        for purchasing a property?
                                    </Text>
                                    <Box
                                        boxSize="52px"
                                        bgColor="#fff"
                                        borderRadius="50%"
                                        transition="all 0.4s"
                                        _hover={{bgColor: "#D5E7EE"}}
                                    >
                                        <Image
                                            src="plus-icon.svg"
                                            width="35px"
                                            height="35px"
                                            pt="16px"
                                            pl="16px"
                                        />
                                    </Box>
                                </Box>

                                <Box
                                    borderTop="1px solid rgba(0, 0, 0, 0.2)"
                                    borderBottom="1px solid rgba(0, 0, 0, 0.2)"
                                    display="flex"
                                    alignItems="center"
                                    transition="all 0.4s"
                                    mt="-1px"
                                    justifyContent="space-between"
                                >
                                    <Text
                                        fontSize="20px"
                                        color="#000"
                                        py="25px"
                                        flex="1 1 auto"
                                        width="80%"
                                    >
                                        Can foreign nationals buy property in
                                        Dubai?
                                    </Text>
                                    <Box
                                        boxSize="52px"
                                        bgColor="#fff"
                                        borderRadius="50%"
                                        transition="all 0.4s"
                                        _hover={{bgColor: "#D5E7EE"}}
                                    >
                                        <Image
                                            src="plus-icon.svg"
                                            width="35px"
                                            height="35px"
                                            pt="16px"
                                            pl="16px"
                                        />
                                    </Box>
                                </Box>

                                <Box
                                    borderTop="1px solid rgba(0, 0, 0, 0.2)"
                                    borderBottom="1px solid rgba(0, 0, 0, 0.2)"
                                    display="flex"
                                    alignItems="center"
                                    transition="all 0.4s"
                                    mt="-1px"
                                    justifyContent="space-between"
                                >
                                    <Text
                                        fontSize="20px"
                                        color="#000"
                                        py="25px"
                                        width="80%"
                                    >
                                        What is the process for obtaining a
                                        residency visa through property
                                        investment?
                                    </Text>
                                    <Box
                                        boxSize="52px"
                                        bgColor="#fff"
                                        borderRadius="100px"
                                        transition="all 0.4s"
                                        _hover={{bgColor: "#D5E7EE"}}
                                    >
                                        <Image
                                            src="plus-icon.svg"
                                            width="35px"
                                            height="35px"
                                            pt="16px"
                                            pl="16px"
                                        />
                                    </Box>
                                </Box>

                                <Box
                                    borderTop="1px solid rgba(0, 0, 0, 0.2)"
                                    borderBottom="1px solid rgba(0, 0, 0, 0.2)"
                                    display="flex"
                                    alignItems="center"
                                    transition="all 0.4s"
                                    mt="-1px"
                                    justifyContent="space-between"
                                >
                                    <Text
                                        fontSize="20px"
                                        color="#000"
                                        py="25px"
                                        flex="1 1 auto"
                                        width="80%"
                                    >
                                        Are there any additional costs
                                        associated with property ownership in
                                        Dubai?
                                    </Text>
                                    <Box
                                        boxSize="52px"
                                        bgColor="#fff"
                                        borderRadius="100px"
                                        transition="all 0.4s"
                                        _hover={{bgColor: "#D5E7EE"}}
                                    >
                                        <Image
                                            src="plus-icon.svg"
                                            width="35px"
                                            height="35px"
                                            pt="16px"
                                            pl="16px"
                                        />
                                    </Box>
                                </Box>

                                <Box
                                    borderTop="1px solid rgba(0, 0, 0, 0.2)"
                                    borderBottom="1px solid rgba(0, 0, 0, 0.2)"
                                    display="flex"
                                    alignItems="center"
                                    transition="all 0.4s"
                                    mt="-1px"
                                    justifyContent="space-between"
                                >
                                    <Text
                                        fontSize="20px"
                                        color="#000"
                                        py="25px"
                                        flex="1 1 auto"
                                        width="80%"
                                    >
                                        Do we offer property management services
                                        for rental properties?
                                    </Text>
                                    <Box
                                        boxSize="52px"
                                        bgColor="#fff"
                                        borderRadius="100px"
                                        transition="all 0.4s"
                                        _hover={{bgColor: "#D5E7EE"}}
                                    >
                                        <Image
                                            src="plus-icon.svg"
                                            width="35px"
                                            height="35px"
                                            pt="16px"
                                            pl="16px"
                                        />
                                    </Box>
                                </Box>

                                <Box
                                    borderTop="1px solid rgba(0, 0, 0, 0.2)"
                                    borderBottom="1px solid rgba(0, 0, 0, 0.2)"
                                    display="flex"
                                    alignItems="center"
                                    transition="all 0.4s"
                                    mt="-1px"
                                    justifyContent="space-between"
                                >
                                    <Text
                                        fontSize="20px"
                                        color="#000"
                                        py="25px"
                                        flex="1 1 auto"
                                        width="80%"
                                    >
                                        Can we assist with property financing
                                        for non-resident buyers?
                                    </Text>
                                    <Box
                                        boxSize="52px"
                                        bgColor="#fff"
                                        borderRadius="100px"
                                        transition="all 0.4s"
                                        _hover={{bgColor: "#D5E7EE"}}
                                    >
                                        <Image
                                            src="plus-icon.svg"
                                            width="35px"
                                            height="35px"
                                            pt="16px"
                                            pl="16px"
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default QuestionsSection
