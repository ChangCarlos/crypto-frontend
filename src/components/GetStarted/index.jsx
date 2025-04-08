import { Content, ContentContainer, ContentDescription, ContentImage, ContentSubtitle, ContentTitle, Description, GetStartedButton, GetStartedContainer, GetStartedSubtitle, GetStartedTitle, HowToGetStarted } from "./GetStarted"


const GetStarted = ({openCreateAccount}) => {
    return (
        <GetStartedContainer>
            <HowToGetStarted>
                <Description>
                    <GetStartedTitle>
                        How To Get Started
                    </GetStartedTitle>
                    <GetStartedSubtitle>
                        Simple and easy to start your investment in cryptocurrency
                    </GetStartedSubtitle>
                    <GetStartedButton onClick={openCreateAccount}>
                        Get Started
                    </GetStartedButton>
                </Description>
            </HowToGetStarted>
            <ContentContainer>
                <Content>
                    <ContentImage src="/get-started-icon-1.png" />
                    <ContentDescription>
                        <ContentTitle>
                            Create Your Account
                        </ContentTitle>
                        <ContentSubtitle>
                            Your account and personal identity are guaranteed safe.
                        </ContentSubtitle>
                    </ContentDescription>
                </Content>
                <Content>
                    <ContentImage src="/get-started-icon-2.png" />
                    <ContentDescription>
                        <ContentTitle>
                            Connect Bank Account
                        </ContentTitle>
                        <ContentSubtitle>
                            Connect the bank account to start transactions.
                        </ContentSubtitle>
                    </ContentDescription>
                </Content>
                <Content>
                    <ContentImage src="/get-started-icon-3.png" />
                    <ContentDescription>
                        <ContentTitle>
                            Start Build Portfolio
                        </ContentTitle>
                        <ContentSubtitle>
                            Buy and sell popular currencies and keep track of them.
                        </ContentSubtitle>
                    </ContentDescription>
                </Content>
            </ContentContainer>
        </GetStartedContainer>
    )
}

export default GetStarted;