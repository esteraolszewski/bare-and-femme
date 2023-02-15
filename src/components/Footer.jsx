import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline } from "@mui/icons-material";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`

`

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;

`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>BARE & FEMME</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quaerat dicta alias id neque voluptates. Repellendus doloremque quidem est possimus.</Desc>
                <SocialContainer>
                    <SocialIcon color="#CC8B86">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="#E7D3C7">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="#7D4F50">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="#AA998F">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/>111 Pixie Rd , Toronto ON L5T 0P1</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>444 444 4444</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/>contact@bareandfemme.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/> 
            </Right>
        </Container>
    )
}

export default Footer;