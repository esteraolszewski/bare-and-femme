import styled from "styled-components";
import ArrowLeftOutlined from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlined from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    // background-color: pink;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: snow;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw);
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg}
`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px; 
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide bg="FFE4E1">
                    <ImgContainer>
                        <Image src="https://www.thearthritisconnection.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTc5MTc5Mzg0Mjk2NTgwMTQx/image-placeholder-title.png"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>WINTER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="FFF5EE">
                    <ImgContainer>
                        <Image src="https://www.thearthritisconnection.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTc5MTc5Mzg0Mjk2NTgwMTQx/image-placeholder-title.png"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SPRING SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="FFC0CB">
                    <ImgContainer>
                        <Image src="https://www.thearthritisconnection.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTc5MTc5Mzg0Mjk2NTgwMTQx/image-placeholder-title.png"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider;