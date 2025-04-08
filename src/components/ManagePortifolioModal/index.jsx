import { X } from "lucide-react";
import { Header, ModalContainer, Overlay, ItemImage, Item, ItemTitle, ItemDescription } from "./ManagePortifolio"

const ManagePortifolio = ({ onClose }) => {
    return (
        <Overlay>
            <ModalContainer>
                <X size={24} color="#FFFFFF" onClick={onClose} cursor={'pointer'} key='close-btn' />
                <Header>
                    <ItemImage src={'/feature-image-1.png'} />
                    <Item>
                        <ItemTitle>
                            Manage Your Crypto Portfolio
                        </ItemTitle>
                        <ItemDescription>
                            Investing in cryptocurrencies requires organization and strategy. With proper portfolio management,
                            you can track the performance of your assets, identify market opportunities, and optimize your investments.
                        </ItemDescription>
                        <ItemDescription>
                            Benefits of managing your portfolio:
                        </ItemDescription>
                        <ul>
                            <li><ItemDescription>Real-time monitoring – Instantly see the rise and fall of your assets.</ItemDescription></li>
                            <li><ItemDescription>Smart diversification – Maintain a healthy balance between stablecoins and high-risk assets.</ItemDescription></li>
                            <li><ItemDescription>Strategic order execution – Buy and sell at the right moments to maximize profit.</ItemDescription></li>
                            <li><ItemDescription>Transaction history – Keep a complete record of your trades for analysis and planning.</ItemDescription></li>
                        </ul>
                        <ItemDescription>
                            Whether you're a beginner or an experienced investor, a well-managed portfolio is essential for making safer and smarter decisions in the crypto market.
                        </ItemDescription>
                    </Item>
                </Header>
            </ModalContainer>
        </Overlay>
    )
}

export default ManagePortifolio;