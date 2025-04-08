import { X } from "lucide-react";
import { Header, ModalContainer, Overlay, ItemImage, Item, ItemTitle, ItemDescription } from "./LearnBestPractice"

const LearnBestPractice = ({ onClose }) => {
    return (
        <Overlay>
            <ModalContainer>
                <X size={24} color="#FFFFFF" onClick={onClose} cursor={'pointer'} key='close-btn' />
                <Header>
                    <ItemImage src={'/feature-image-4.png'} />
                    <Item>
                        <ItemTitle>
                            Learn Best Practice
                        </ItemTitle>
                        <ItemDescription>
                            Understanding how cryptocurrency works doesn’t have to be complicated. Whether you’re just starting out or looking to sharpen your skills,
                            our platform makes learning simple, visual, and beginner-friendly.
                        </ItemDescription>
                        <ItemDescription>
                            What you'll gain:
                        </ItemDescription>
                        <ul>
                            <li><ItemDescription><strong>Clear explanations</strong> – Learn the basics of crypto, blockchain, and tokens in plain language.</ItemDescription></li>
                            <li><ItemDescription><strong>Step-by-step guidance</strong> – Follow interactive tutorials on how to buy, sell, and store cryptocurrencies safely.</ItemDescription></li>
                            <li><ItemDescription><strong>Beginner-friendly content</strong> – Designed with first-timers in mind, no jargon or technical confusion.</ItemDescription></li>
                            <li><ItemDescription><strong>Stay informed</strong> – Access tips, insights, and best practices from experts to grow your crypto confidence.</ItemDescription></li>
                        </ul>
                        <ItemDescription>
                            No matter your experience level, we make learning about crypto clear, engaging, and actionable—so you can take control of your investments.
                        </ItemDescription>
                    </Item>
                </Header>
            </ModalContainer>
        </Overlay>
    )
}

export default LearnBestPractice;