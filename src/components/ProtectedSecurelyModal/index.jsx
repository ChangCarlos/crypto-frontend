import { X } from "lucide-react";
import { Header, ModalContainer, Overlay, ItemImage, Item, ItemTitle, ItemDescription } from "./ProtectedSecurely"

const ProtectedSecurely = ({ onClose }) => {
    return (
        <Overlay>
            <ModalContainer>
                <X size={24} color="#FFFFFF" onClick={onClose} cursor={'pointer'} key='close-btn' />
                <Header>
                    <ItemImage src={'/feature-image-2.png'} />
                    <Item>
                        <ItemTitle>
                            Protected Securely
                        </ItemTitle>
                        <ItemDescription>
                            All your cash balances are protected with <strong>FDIC insurance</strong>, offering peace of mind in an unpredictable market.
                            We prioritize the safety of your assets by ensuring that funds are held with institutions that meet the highest standards of
                            security and compliance.
                        </ItemDescription>
                        <ItemDescription>
                            What this means for you:
                        </ItemDescription>
                        <ul>
                            <li><ItemDescription><strong>FDIC Coverage</strong> – Your cash is insured up to <strong>$250,000</strong> through FDIC-backed partners.</ItemDescription></li>
                            <li><ItemDescription><strong>Bank-grade Security</strong> – We use state-of-the-art encryption and protocols to safeguard your funds.</ItemDescription></li>
                            <li><ItemDescription><strong>Risk Reduction</strong> – Funds are stored separately from trading balances, minimizing exposure to volatility.</ItemDescription></li>
                            <li><ItemDescription><strong>Regulatory Compliance</strong> – We partner only with institutions that meet strict compliance standards.</ItemDescription></li>
                        </ul>
                        <ItemDescription>
                            Security is not just a feature – it's a commitment. With FDIC-insured accounts and industry-leading protection measures, you can trade and invest with confidence.
                        </ItemDescription>
                    </Item>
                </Header>
            </ModalContainer>
        </Overlay>
    )
}

export default ProtectedSecurely;