
import { Globe } from "lucide-react";
import { Item, LangOption, LangSelectContainer, LangSelector, LoginButton, LoginContainer, Logo, LogoContainer, NavbarContainer, NavItem } from "./Navbar";

const items = [
    'Home',
    'Businesses',
    'Trade',
    'Market',
    'Learn'
]

const Navbar = ({openLogin}) => {
    const mappedItems = items.map(item => <Item>{item}</Item>)
    return (
        <NavbarContainer>
            <LogoContainer>
                <Logo>
                    CryptoCap
                </Logo>
            </LogoContainer>
            <NavItem>
                {mappedItems}
            </NavItem>
            <LoginContainer>
                <LangSelectContainer>
                    <Globe 
                        size={24}
                        color="#C6C6C6"
                    />
                    <LangSelector>
                        <LangOption>
                            EN
                        </LangOption>
                        <LangOption>
                            BR
                        </LangOption>
                        <LangOption>
                            CH
                        </LangOption>
                    </LangSelector>
                </LangSelectContainer>
                <LoginButton onClick={openLogin}>
                    Login
                </LoginButton>
            </LoginContainer>
        </NavbarContainer>
    )
}

export default Navbar;