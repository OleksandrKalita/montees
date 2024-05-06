import AnimationText from "@/components/AnimationText/AnimationText"; // Імпорт компонента анімації тексту
import { Box, Image, Text, Circle, useMediaQuery, useBreakpointValue, position } from "@chakra-ui/react"; // Імпорт компонентів Chakra UI
import { useEffect, useRef } from "react"; // Імпорт React хуків
import gsap from "gsap"; // Імпорт анімаційної бібліотеки
import { useInView } from 'react-intersection-observer'; // Імпорт бібліотеки для виявлення видимості елементів на екрані
import AnimatedComponent from "@/components/AnimatedComponent/AnimatedComponent";
import Marquee from "react-fast-marquee";

function SolutionsSection() { // Оголошення функції компонента SolutionsSection
    const [isSmallScreen] = useMediaQuery('(max-width: 1365px)'); // Використання хука медіа-запиту для визначення розміру екрана
    const [mobileMarker] = useMediaQuery('(max-width: 551px)');

    const { ref, inView } = useInView({ // Використання хука для виявлення видимості елемента
        triggerOnce: false, // Запускати один раз
        threshold: 0.5 // Виявлення, коли половина елемента видима
    });

    const animated = useRef(false); // Створення стану для слідкування, чи вже виконана анімація


    useEffect(() => { // Використання ефекту для анімації
        if(isSmallScreen) {
            animated.current = false;
        }
        if (inView && !animated.current && !isSmallScreen) { // Перевірка, чи елемент знаходиться в полі зору і анімація ще не виконана
            const tl0 = gsap.timeline(); // Створення таймлайну для анімації
            const tl1 = gsap.timeline(); // Створення таймлайну для анімації
            const tl2 = gsap.timeline(); // Створення таймлайну для анімації

            const circles = document.querySelectorAll('.animated-circle'); // Вибір всіх елементів з класом .animated-circle
            const texts = document.querySelectorAll('.circle_text');


            tl0.to(circles[0], { x: '-=100', duration: 0.8}) // 
            tl0.to(circles[0], { x: '+=100', duration: 1.1, opacity: 1 }) // second
                .to(texts[0], { duration: 0.5, opacity: 1})
            tl0.to(circles[0], { duration: 0.6 }) // delay
            tl0.to(circles[0], { x: '+=190', y: '+=70', duration: 1.3 })
            tl0.to(circles[0], { duration: 0.6 }) // delay
                .to(texts[0], { duration: 0.6, opacity: 0 }) 
            tl0.to(circles[0], { x: '+=210', y: '-=80', duration: 1.3 }) 
            
            tl1.to(circles[1], { y: '+=100', duration: 0.8, scale: 0.5 }) 
            tl1.to(circles[1], { y: '-=100', duration: 1.1, opacity: 1, scale: 1 }) 
                .to(texts[1], { duration: 0.5, opacity: 1})
            tl1.to(circles[1], { duration: 0.6 }) // delay
            tl1.to(circles[1], { y: '-=210', duration: 1.3 }) 
            tl1.to(circles[1], { duration: 0.6 }) // delay
            tl1.to(circles[1], { y: '+=200', duration: 2.1 }) 

            tl2.to(circles[2], { x: '+=100', duration: 0.8 })
            tl2.to(circles[2], { x: '-=100', duration: 1.1, opacity: 1}) 
                .to(texts[2], { duration: 0.5, opacity: 1})
            tl2.to(circles[2], { duration: 0.6 }) // delay
            tl2.to(circles[2], { x: '-=190', y: '+=70', duration: 1.3 }) 
            tl2.to(circles[2], { duration: 0.6 }) // delay
                .to(texts[2], { duration: 0.6, opacity: 0 }) 
            tl2.to(circles[2], { x: '-=210', y: '-=80', duration: 1.3 }) 


            animated.current = true; // Позначення, що анімація вже виконана
        }
    }, [isSmallScreen, inView]); // Запуск ефекту при зміні видимості елемента

    // Функція для відображення кругів
    const renderCircle = (text, index, isLast) => {
        const offset = isSmallScreen ? index * 500 : index * 650 + (index * -250);
        const circleStyles = { // Стилі круга
            left: !isSmallScreen && index !== 0 ? `${offset}px` : undefined, // Значення left для круга
            top: (isSmallScreen && index !==0 ? `${offset}px` : undefined), // Значення top для круга
            zIndex: isLast ? 1 : 0 ,// Значення zIndex для круга
            opacity: isSmallScreen && 1 || animated.current && !isSmallScreen && 1 || 0
        };
        return (
            <Circle
                className={!isSmallScreen && "animated-circle"} // Клас для анімації
                key={index} // Унікальний ключ круга
                size={mobileMarker && '370px' || isSmallScreen && '520px' || '536px'} // Розмір круга залежно від розміру екрана
                border="2px solid white" // Стиль рамки круга
                position={() => {
                    if (!isLast) {
                        return 'absolute';
                    } else if (isLast && isSmallScreen) {
                        return 'absolute';
                    } else {
                        return 'relative';
                    }
                }}
                top={isSmallScreen && isLast && '700px'} // Позиціонування круга
                {...circleStyles} // Застосування стилів круга
            >
                {<Text className="circle_text" color="white" fontSize="lg" p={4} opacity={isSmallScreen ? 1 : 0}> {/* Текст у кругу */}
                    {text} {/* Вміст тексту */}
                </Text>}
            </Circle>
        );
    };

    return (
        <Box w='100%' bgColor='#232323'> {/* Контейнер для всього компонента */}
            <Box maxW='1400px' px='20px' py='100px' mx='auto'> {/* Контейнер для вмісту */}
                <Box w='100%' display='flex' flexDirection={{ base: 'column', lg: 'row' }}> {/* Обгортка для заголовку і кнопки */}
                    <Box w={{ base: '100%', lg: '50%' }} display='flex' flexDirection='column' rowGap='30px'> {/* Контейнер для заголовку */}
                        <AnimationText style={{ fontSize: isSmallScreen ? '38px' : '58px', color: '#fff', fontWeight: '500' }} lines={['Tailored Solutions', 'for Your Real Estate', 'Needs']} /> {/* Анімований текст заголовку */}
                        <Box display='flex' columnGap='12px' alignItems='center' cursor='pointer' transition='all 0.4s'
                            _hover={{ columnGap: '20px' }}>
                            <Box bgColor='#D5E7EE' boxSize='12px' borderRadius='50%'></Box> {/* Колірна позначка */}
                            <Box display='flex' columnGap='5px' alignItems='center'>
                                <Text fontSize='16px' color='#D5E7EE'>Explore More</Text> {/* Текст */}
                                <Image src='/color-arrow.svg' width='15px' height='15px' /> {/* Зображення стрілки */}
                            </Box>
                        </Box>
                    </Box>
                    <Box w={{ base: '100%', lg: '50%' }} display='flex' flexDirection='column' rowGap='30px' pt={{ base: '30px', lg: '0px' }}>
                        <AnimatedComponent>
                            <Box w='100%' h={{base: '100px', lg: '120px'}} bgColor='#fff' borderRadius='80px' p='10px' display='flex' justifyContent='flex-start' alignItems='center' columnGap='20px'>
                                <Image src='48634.svg' boxSize={{base: '76px', lg: '100px'}} />
                                <Box w='100%' display='flex' justifyContent='space-between' alignItems='center'>
                                    <Box position='relative' mt='-8px' pt={{base: '3', lg: '8px'}} pr={{base: '10px', lg: '17px'}}>
                                        <Text fontSize={{base: '18px', lg: '28px'}} fontWeight='500' color='#000'>Property Sales</Text>
                                        <Text fontSize='14px' color='#000' position='absolute' top={0} right={0}>01</Text>
                                    </Box>
                                    <Box boxSize={{base: '56px', lg: '78px'}} bgColor='#fff' borderRadius='50%' transition='all 0.4s' mr={{base: '10px',lg: '20px'}}
                                        _hover={{bgColor: '#D5E7EE', pt: '5px'}}>
                                        <Image src='arrow-icon.svg' boxSize={{base: '40px', lg: '60px'}} transform='rotate(135deg)'/>
                                    </Box>
                                </Box>
                            </Box>
                        </AnimatedComponent>
                        <AnimatedComponent>
                            <Box w='100%' h={{base: '100px', lg: '120px'}} bgColor='#fff' borderRadius='80px' p='10px' display='flex' justifyContent='flex-start' alignItems='center' columnGap='20px'>
                                <Image src='48635.svg' boxSize={{base: '76px', lg: '100px'}} />
                                <Box w='100%' display='flex' justifyContent='space-between' alignItems='center'>
                                    <Box position='relative' mt='-8px' pt={{base: '3', lg: '8px'}} pr={{base: '10px', lg: '17px'}}>
                                        <Text fontSize={{base: '18px', lg: '28px'}} fontWeight='500' color='#000'>Property Management</Text>
                                        <Text fontSize='14px' color='#000' position='absolute' top={0} right={0}>02</Text>
                                    </Box>
                                    <Box boxSize={{base: '56px', lg: '78px'}} bgColor='#fff' borderRadius='50%' transition='all 0.4s' mr={{base: '10px',lg: '20px'}}
                                        _hover={{bgColor: '#D5E7EE', pt: '5px'}}>
                                        <Image src='arrow-icon.svg' boxSize={{base: '40px', lg: '60px'}} transform='rotate(135deg)'/>
                                    </Box>
                                </Box>
                            </Box>
                        </AnimatedComponent>

                        <AnimatedComponent>
                            <Box w='100%' h={{base: '100px', lg: '120px'}} bgColor='#fff' borderRadius='80px' p='10px' display='flex' justifyContent='flex-start' alignItems='center' columnGap='20px'>
                                <Image src='48636.svg' boxSize={{base: '76px', lg: '100px'}} />
                                <Box w='100%' display='flex' justifyContent='space-between' alignItems='center'>
                                    <Box position='relative' mt='-8px' pt={{base: '3', lg: '8px'}} pr={{base: '10px', lg: '17px'}}>
                                        <Text fontSize={{base: '18px', lg: '28px'}} fontWeight='500' color='#000'>Investment Consultation</Text>
                                        <Text fontSize='14px' color='#000' position='absolute' top={0} right={0}>03</Text>
                                    </Box>
                                    <Box boxSize={{base: '56px', lg: '78px'}} bgColor='#fff' borderRadius='50%' transition='all 0.4s' mr={{base: '10px',lg: '20px'}}
                                        _hover={{bgColor: '#D5E7EE', pt: '5px'}}>
                                        <Image src='arrow-icon.svg' boxSize={{base: '40px', lg: '60px'}} transform='rotate(135deg)'/>
                                    </Box>
                                </Box>
                            </Box>
                        </AnimatedComponent>

                        <AnimatedComponent>
                            <Box w='100%' h={{base: '100px', lg: '120px'}} bgColor='#fff' borderRadius='80px' p='10px' display='flex' justifyContent='flex-start' alignItems='center' columnGap='20px'>
                                <Image src='48637.svg' boxSize={{base: '76px', lg: '100px'}} />
                                <Box w='100%' display='flex' justifyContent='space-between' alignItems='center'>
                                    <Box position='relative' mt='-8px' pt={{base: '3', lg: '8px'}} pr={{base: '10px', lg: '17px'}}>
                                        <Text fontSize={{base: '18px', lg: '28px'}} fontWeight='500' color='#000'>Market Analysis</Text>
                                        <Text fontSize='14px' color='#000' position='absolute' top={0} right={0}>04</Text>
                                    </Box>
                                    <Box boxSize={{base: '56px', lg: '78px'}} bgColor='#fff' borderRadius='50%' transition='all 0.4s' mr={{base: '10px',lg: '20px'}}
                                        _hover={{bgColor: '#D5E7EE', pt: '5px'}}>
                                        <Image src='arrow-icon.svg' boxSize={{base: '40px', lg: '60px'}} transform='rotate(135deg)'/>
                                    </Box>
                                </Box>
                            </Box>
                        </AnimatedComponent>
                    </Box>
                </Box>
            </Box>
            <Box pb={{ base: '140px', lg: '180px' }}>
                <Marquee style={{position: 'absolute', zIndex: 2}} speed={120}>
                    <Box h={{base: '85px', lg: '120px'}} bgColor='#575757' fontSize={{base: '56px', lg: '82px'}} color='#232323' mx='20px' px='30px' borderRadius='80px'>Payment from Almaty</Box>
                    <Box h={{base: '85px', lg: '120px'}}bgColor='#575757' fontSize={{base: '56px', lg: '82px'}} color='#232323' mx='20px' px='30px' borderRadius='80px'>0% Commission</Box>
                    <Box h={{base: '85px', lg: '120px'}} bgColor='#575757' fontSize={{base: '56px', lg: '82px'}} color='#232323' mx='20px' px='30px' borderRadius='80px'>Remote Purchase</Box>
                </Marquee>
            </Box>
            <Box ref={ref} maxW='1400px' px='20px' py='30px' mx='auto'>
                <Box w='100%' display='flex' flexDirection='column' rowGap={isSmallScreen ? '80px' : '215px'} alignItems='center' pb='50px'>
                    <AnimationText style={{ color: '#fff', fontSize: isSmallScreen ? '36px' : '56px', textAlign: 'center' }} lines={['Path to Smart Ownership']} /> {/* Анімований текст заголовку */}
                    <Box position="relative" h={isSmallScreen ? '535px' : '400px'} w={mobileMarker && '370px' || isSmallScreen && '519px' || '1339px'} mx='auto'>
                        <Box className="animated-circle-container" position="relative">
                            {mobileMarker && ['5 years installment, 0% overpayment'].map((text, index, arr) => // кола
                                renderCircle(text, index, index === arr.length - 1) // Відображення круга
                            )}
                            {isSmallScreen && !mobileMarker && ['5 years installment, 0% overpayment'].map((text, index, arr) => // кола
                                renderCircle(text, index, index === arr.length - 1) // Відображення круга
                            )}
                            {!isSmallScreen && !mobileMarker && ['10% Initial Payment', '5 years installment, 0% overpayment', 'Rental income ~ 15%'].map((text, index, arr) => // кола
                                renderCircle(text, index, index === arr.length - 1) // Відображення круга
                            )}
                        </Box>
                    </Box>
                    <Box h='45px' bgColor='#393939' borderRadius='80px' py='4px' pl='4px' pr='20px' display='flex' columnGap='10px' textAlign='center' cursor='pointer' mt='30px'>
                        <Box h='37px' w='37px' alignContent='center' bgColor='#fff' borderRadius='50%' >
                            <Image src='/download-icon.svg' width="22px" height='22px' ml='7px' />
                        </Box>
                        <Text color='#fff' fontSize='18px' fontWeight={500} pt='5px'>Contact Us Now</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default SolutionsSection; // Експорт компонента SolutionsSection
