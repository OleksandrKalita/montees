import {
    Box,
    Grid,
    GridItem,
    Image,
    Text,
    VStack,
    useBreakpointValue,
} from "@chakra-ui/react"
import {useEffect, useState} from "react"

import styles from "./property.module.css"
import AnimationText from "@/components/AnimationText/AnimationText"
import AnimatedComponent from "@/components/AnimatedComponent/AnimatedComponent"

function PropertySection() {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsNarrowScreen(window.innerWidth < 792)
        }

        checkScreenSize()

        window.addEventListener("resize", checkScreenSize)

        return () => {
            window.removeEventListener("resize", checkScreenSize)
        }
    }, [])
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {isNarrowScreen ? (
                    <AnimationText
                        style={{fontSize: "36px"}}
                        lines={["Discover Your Ideal", "Property Type"]}
                    />
                ) : (
                    <AnimationText
                        style={{fontSize: "58px"}}
                        lines={["Discover Your Ideal", "Property Type"]}
                    />
                )}
                <div className={styles.bottom_container}>
                    <AnimatedComponent>
                    <Box position="relative" w="266px" h="266px" mx="auto">
                        <img className={styles.logo_icon} src="/logo-2.svg" />
                        <Text fontSize="16px" color="#000">
                            Explore Our Diverse Range of Property Types and Find
                            Your Perfect Match
                        </Text>
                        <Box
                                    h="45px"
                                    bgColor="#141414"
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
                                        bgColor="#D5E7EE"
                                        borderRadius="50%"
                                        pl="6px"
                                    >
                                        <Image
                                            src="/download-icon.svg"
                                            width="24px"
                                            height="24px"
                                        />
                                    </Box>
                                    <Text
                                        color="#fff"
                                        fontSize="18px"
                                        fontWeight={500}
                                        pt="5px"
                                    >
                                        Catalog Download
                                    </Text>
                                </Box>
                    </Box>
                    </AnimatedComponent>
                </div>
                <div className={styles.content}>
                    <div className={styles.l_block}>
                        <Box h="max-content" display="flex" flexDirection="column" rowGap="8px">
                            <AnimatedComponent>
                            <Box
                                position="relative"
                                w="266px"
                                h="266px"
                                bgColor="#cccccc"
                                borderRadius="18px"
                                overflow="hidden">
                                <Image
                                    src="/property/box-image-2.png"
                                    objectFit="cover"
                                />
                                <Box
                                    position="absolute"
                                    top="15px"
                                    right="15px"
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
                                            transform:
                                                "translateX(3px) translateY(-3px)",
                                        }}
                                    />
                                </Box>
                                <Box
                                    position="absolute"
                                    bottom="15px"
                                    left="15px"
                                    right="15px"
                                    textAlign="left"
                                >
                                    <Text fontSize="16px" color="#fff">
                                        01
                                    </Text>
                                    <Text fontSize="30px" color="#fff">
                                        Luxury Villa
                                    </Text>
                                </Box>
                            </Box>
                            </AnimatedComponent>
                            <AnimatedComponent>
                            <Box
                                position="relative"
                                w="266px"
                                h="409px"
                                bgColor="#cccccc"
                                borderRadius="18px"
                                overflow="hidden"
                            >
                                <Image
                                    src="/property/box-image-3.png"
                                    objectFit="cover"
                                />
                                <Box
                                    position="absolute"
                                    top="15px"
                                    right="15px"
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
                                            transform:
                                                "translateX(3px) translateY(-3px)",
                                        }}
                                    />
                                </Box>
                                <Box
                                    position="absolute"
                                    bottom="15px"
                                    left="15px"
                                    right="15px"
                                    textAlign="left"
                                >
                                    <Text fontSize="16px" color="#fff">
                                        06
                                    </Text>
                                    <Text fontSize="30px" color="#fff">
                                        Commercial Spaces
                                    </Text>
                                </Box>
                            </Box>
                            </AnimatedComponent>
                        </Box>
                        <Box
                            h="max-content"
                            display="flex"
                            flexDirection="column"
                            rowGap="8px"
                        >
                            <AnimatedComponent>
                            <Box
                                position="relative"
                                w="266px"
                                h="409px"
                                bgColor="#cccccc"
                                borderRadius="18px"
                                overflow="hidden"
                            >
                                <Image
                                    src="/property/box-image-4.png"
                                    objectFit="cover"
                                />
                                <Box
                                    position="absolute"
                                    top="15px"
                                    right="15px"
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
                                            transform:
                                                "translateX(3px) translateY(-3px)",
                                        }}
                                    />
                                </Box>
                                <Box
                                    position="absolute"
                                    bottom="15px"
                                    left="15px"
                                    right="15px"
                                    textAlign="left"
                                >
                                    <Text fontSize="16px" color="#fff">
                                        02
                                    </Text>
                                    <Text fontSize="30px" color="#fff">
                                        Penthouse Suites
                                    </Text>
                                </Box>
                            </Box>
                            </AnimatedComponent>
                            <AnimatedComponent>
                            <Box
                                position="relative"
                                w="266px"
                                h="409px"
                                bgColor="#cccccc"
                                borderRadius="18px"
                                overflow="hidden"
                            >
                                <Image
                                    src="/property/box-image-5.png"
                                    objectFit="cover"
                                />
                                <Box
                                    position="absolute"
                                    top="15px"
                                    right="15px"
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
                                            transform:
                                                "translateX(3px) translateY(-3px)",
                                        }}
                                    />
                                </Box>
                                <Box
                                    position="absolute"
                                    bottom="15px"
                                    left="15px"
                                    right="15px"
                                    textAlign="left"
                                >
                                    <Text fontSize="16px" color="#fff">
                                        07
                                    </Text>
                                    <Text fontSize="30px" color="#fff">
                                        Townhouses
                                    </Text>
                                </Box>
                            </Box>
                            </AnimatedComponent>
                            <AnimatedComponent>
                            <Box
                                position="relative"
                                w="266px"
                                h="266px"
                                bgColor="#cccccc"
                                borderRadius="18px"
                                overflow="hidden"
                            >
                                <Image
                                    src="/property/box-image-1.png"
                                    objectFit="cover"
                                />
                                <Box
                                    position="absolute"
                                    top="15px"
                                    right="15px"
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
                                            transform:
                                                "translateX(3px) translateY(-3px)",
                                        }}
                                    />
                                </Box>
                                <Box
                                    position="absolute"
                                    bottom="15px"
                                    left="15px"
                                    right="15px"
                                    textAlign="left"
                                >
                                    <Text fontSize="16px" color="#fff">
                                        10
                                    </Text>
                                    <Text fontSize="30px" color="#fff">
                                        Investment
                                    </Text>
                                </Box>
                            </Box>
                            </AnimatedComponent>
                        </Box>
                        <div className={styles.middle_box}>
                            <AnimatedComponent>
                            <Box
                                position="relative"
                                w="266px"
                                h="266px"
                                bgColor="#cccccc"
                                borderRadius="18px"
                                overflow="hidden"
                            >
                                <Image
                                    src="/property/box-image-8.png"
                                    objectFit="cover"
                                />
                                <Box
                                    position="absolute"
                                    top="15px"
                                    right="15px"
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
                                            transform:
                                                "translateX(3px) translateY(-3px)",
                                        }}
                                    />
                                </Box>
                                <Box
                                    position="absolute"
                                    bottom="15px"
                                    left="15px"
                                    right="15px"
                                    textAlign="left"
                                >
                                    <Text fontSize="16px" color="#fff">
                                        03
                                    </Text>
                                    <Text fontSize="30px" color="#fff">
                                        Apartments
                                    </Text>
                                </Box>
                            </Box>
                            </AnimatedComponent>
                        </div>
                    </div>
                    <div className={styles.middle_block}>
                        <AnimatedComponent>
                        <Box
                            position="relative"
                            w="266px"
                            h="266px"
                            bgColor="#cccccc"
                            borderRadius="18px"
                            overflow="hidden"
                        >
                            <Image
                                src="/property/box-image-8.png"
                                objectFit="cover"
                            />
                            <Box
                                position="absolute"
                                top="15px"
                                right="15px"
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
                                        transform:
                                            "translateX(3px) translateY(-3px)",
                                    }}
                                />
                            </Box>
                            <Box
                                position="absolute"
                                bottom="15px"
                                left="15px"
                                right="15px"
                                textAlign="left"
                            >
                                <Text fontSize="16px" color="#fff">
                                    03
                                </Text>
                                <Text fontSize="30px" color="#fff">
                                    Apartments
                                </Text>
                            </Box>
                        </Box>
                        </AnimatedComponent>
                        <AnimatedComponent>
                        <Box
                            position="relative"
                            w="266px"
                            h="409px"
                            bgColor="#cccccc"
                            borderRadius="18px"
                            overflow="hidden"
                        >
                            <Image
                                src="/property/box-image-7.png"
                                objectFit="cover"
                            />
                            <Box
                                position="absolute"
                                top="15px"
                                right="15px"
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
                                        transform:
                                            "translateX(3px) translateY(-3px)",
                                    }}
                                />
                            </Box>
                            <Box
                                position="absolute"
                                bottom="15px"
                                left="15px"
                                right="15px"
                                textAlign="left"
                            >
                                <Text fontSize="16px" color="#fff">
                                    08
                                </Text>
                                <Text fontSize="30px" color="#fff">
                                    Waterfront Homes
                                </Text>
                            </Box>
                        </Box>
                        </AnimatedComponent>
                    </div>
                    <div className={styles.r_block}>
                        <div className={styles.middle_box}>
                            <AnimatedComponent>
                            <Box
                                position="relative"
                                w="266px"
                                h="409px"
                                bgColor="#cccccc"
                                borderRadius="18px"
                                overflow="hidden"
                            >
                                <Image
                                    src="/property/box-image-7.png"
                                    objectFit="cover"
                                />
                                <Box
                                    position="absolute"
                                    top="15px"
                                    right="15px"
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
                                            transform:
                                                "translateX(3px) translateY(-3px)",
                                        }}
                                    />
                                </Box>
                                <Box
                                    position="absolute"
                                    bottom="15px"
                                    left="15px"
                                    right="15px"
                                    textAlign="left"
                                >
                                    <Text fontSize="16px" color="#fff">
                                        08
                                    </Text>
                                    <Text fontSize="30px" color="#fff">
                                        Waterfront Homes
                                    </Text>
                                </Box>
                            </Box>
                            </AnimatedComponent>
                        </div>
                        <Box
                            h="max-content"
                            display="flex"
                            flexDirection="column"
                            rowGap="8px"
                        >
                            <AnimatedComponent>
                            <Box
                                position="relative"
                                w="266px"
                                h="409px"
                                bgColor="#cccccc"
                                borderRadius="18px"
                                overflow="hidden"
                            >
                                <Image
                                    src="/property/box-image-8.png"
                                    objectFit="cover"
                                />
                                <Box
                                    position="absolute"
                                    top="15px"
                                    right="15px"
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
                                            transform:
                                                "translateX(3px) translateY(-3px)",
                                        }}
                                    />
                                </Box>
                                <Box
                                    position="absolute"
                                    bottom="15px"
                                    left="15px"
                                    right="15px"
                                    textAlign="left"
                                >
                                    <Text fontSize="16px" color="#fff">
                                        04
                                    </Text>
                                    <Text fontSize="30px" color="#fff">
                                        Beachfront Properties
                                    </Text>
                                </Box>
                            </Box>
                            </AnimatedComponent>
                            <AnimatedComponent>
                            <Box
                                position="relative"
                                w="266px"
                                h="266px"
                                bgColor="#cccccc"
                                borderRadius="18px"
                                overflow="hidden"
                            >
                                <Image
                                    src="/property/box-image-11.png"
                                    objectFit="cover"
                                />
                                <Box
                                    position="absolute"
                                    top="15px"
                                    right="15px"
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
                                            transform:
                                                "translateX(3px) translateY(-3px)",
                                        }}
                                    />
                                </Box>
                                <Box
                                    position="absolute"
                                    bottom="15px"
                                    left="15px"
                                    right="15px"
                                    textAlign="left"
                                >
                                    <Text fontSize="16px" color="#fff">
                                        09
                                    </Text>
                                    <Text fontSize="30px" color="#fff">
                                        Holiday Homes
                                    </Text>
                                </Box>
                            </Box>
                            </AnimatedComponent>
                            <AnimatedComponent>
                            <Box
                                position="relative"
                                w="266px"
                                h="409px"
                                bgColor="#cccccc"
                                borderRadius="18px"
                                overflow="hidden"
                            >
                                <Image
                                    src="/property/box-image-10.png"
                                    objectFit="cover"
                                />
                                <Box
                                    position="absolute"
                                    top="15px"
                                    right="15px"
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
                                            transform:
                                                "translateX(3px) translateY(-3px)",
                                        }}
                                    />
                                </Box>
                                <Box
                                    position="absolute"
                                    bottom="15px"
                                    left="15px"
                                    right="15px"
                                    textAlign="left"
                                >
                                    <Text fontSize="16px" color="#fff">
                                        11
                                    </Text>
                                    <Text fontSize="30px" color="#fff">
                                        Eco-friendly Properties
                                    </Text>
                                </Box>
                            </Box>
                            </AnimatedComponent>
                        </Box>
                        <Box
                            h="max-content"
                            display="flex"
                            flexDirection="column"
                            rowGap="8px"
                        >
                            <AnimatedComponent>
                            <Box
                                position="relative"
                                w="266px"
                                h="409px"
                                bgColor="#cccccc"
                                borderRadius="18px"
                                overflow="hidden"
                            >
                                <Image
                                    src="/property/box-image-10.png"
                                    objectFit="cover"
                                />
                                <Box
                                    position="absolute"
                                    top="15px"
                                    right="15px"
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
                                            transform:
                                                "translateX(3px) translateY(-3px)",
                                        }}
                                    />
                                </Box>
                                <Box
                                    position="absolute"
                                    bottom="15px"
                                    left="15px"
                                    right="15px"
                                    textAlign="left"
                                >
                                    <Text fontSize="16px" color="#fff">
                                        05
                                    </Text>
                                    <Text fontSize="30px" color="#fff">
                                        Golf Course Residences
                                    </Text>
                                </Box>
                            </Box>
                            </AnimatedComponent>
                            <AnimatedComponent>
                            <Box
                                position="relative"
                                w="266px"
                                h="266px"
                                bgColor="#cccccc"
                                borderRadius="18px"
                                overflow="hidden"
                            >
                                <Image
                                    src="/property/box-image-12.png"
                                    objectFit="cover"
                                />
                                <Box
                                    position="absolute"
                                    top="15px"
                                    right="15px"
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
                                            transform:
                                                "translateX(3px) translateY(-3px)",
                                        }}
                                    />
                                </Box>
                                <Box
                                    position="absolute"
                                    bottom="15px"
                                    left="15px"
                                    right="15px"
                                    textAlign="left"
                                >
                                    <Text fontSize="16px" color="#fff">
                                        12
                                    </Text>
                                    <Text fontSize="30px" color="#fff">
                                        Desert Retreats
                                    </Text>
                                </Box>
                            </Box>
                            </AnimatedComponent>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertySection
