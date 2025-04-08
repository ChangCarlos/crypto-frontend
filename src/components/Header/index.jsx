import { GetStartedButton, HeaderContainer, HeaderTitle, SubTitle, SubTitleContainer, Title, TitleContainer } from "./Header"

const Header = ({openCreateAccount}) => {
    return (
        <HeaderContainer>
            <HeaderTitle>
                <TitleContainer>
                <Title>
                    Start and Build Your Crypto Portfolio Here
                </Title>
                </TitleContainer>
                <SubTitleContainer>
                <SubTitle>
                Only at CryptoCap, you can build a good portfolio and learn best practices about cryptocurrency.
                </SubTitle>
                </SubTitleContainer>
            </HeaderTitle>
            <GetStartedButton onClick={openCreateAccount}>
                Get Started
            </GetStartedButton>
        </HeaderContainer>
    )
}

export default Header;