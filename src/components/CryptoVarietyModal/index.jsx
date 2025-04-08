import { X } from "lucide-react";
import { Header, ModalContainer, Overlay, ItemImage, Item, ItemTitle, ItemDescription } from "./CryptoVariety"

const CryptoVariety = ({ onClose }) => {
    return (
        <Overlay>
            <ModalContainer>
                <X size={24} color="#FFFFFF" onClick={onClose} cursor={'pointer'} key='close-btn' />
                <Header>
                    <ItemImage src={'/feature-image-3.png'} />
                    <Item>
                        <ItemTitle>
                            Cryptocurrency Variety
                        </ItemTitle>
                        <ItemDescription>
                            Diversify your portfolio with access to a wide range of popular and emerging digital currencies. Stay updated with real-time support
                            for new coins and tokens, so you never miss out on the next big opportunity.
                        </ItemDescription>
                        <ItemDescription>
                            Why variety matters:
                        </ItemDescription>
                        <ul>
                            <li><ItemDescription><strong>Access to top currencies</strong> – Trade Bitcoin, Ethereum, and other major digital assets.</ItemDescription></li>
                            <li><ItemDescription><strong>Discover new tokens</strong> – Be among the first to invest in promising new cryptocurrencies.</ItemDescription></li>
                            <li><ItemDescription><strong>Always up-to-date</strong> – Our platform continuously adds support for new assets as the market evolves.</ItemDescription></li>
                            <li><ItemDescription><strong>Smarter diversification</strong> – Reduce risk and increase potential returns through varied holdings.</ItemDescription></li>
                        </ul>
                        <ItemDescription>
                            From mainstream coins to the latest innovations, our platform keeps your investment options flexible and future-ready.
                        </ItemDescription>
                    </Item>
                </Header>
            </ModalContainer>
        </Overlay>
    )
}

export default CryptoVariety;