import { FooterContainer, Logo, LogoContainer, LeftContainer, SocialMediaContainer, SocialMediaLinks, Link, CopyRight, RightContainer, FooterSection, SectionTitle, SectionLinks } from "./Footer"

const allSocialIcons = [
    {
        id: 1,
        url: '/instagram-ic.png'
    },
    {
        id: 2,
        url: '/facebook-ic.png'
    },
    {
        id: 3,
        url: '/twitter-ic.png'
    },
    {
        id: 4,
        url: '/youtube-ic.png'
    }
]

const aboutUs = [
    {
        title: 'About Us',
        links: [
            'About',
            'Careers',
            'Blog',
            'Legal & privacy'
        ]
    }
]

const services = [
    {
        title: 'Services',
        links: [
            'Aplications',
            'Buy Crypto',
            'Affilliate',
            'Institutional Services'
        ]
    }
]

const learn = [
    {
        title: 'Learn',
        links: [
            'What is Cryptocurency?',
            'Crypto Basic',
            'Tips and Tutorials',
            'Market Update'
        ]
    }
]

const Footer = () => {
    const socialIcons = allSocialIcons.map((icon, index) =>
        <Link key={index}>
            <img src={icon.url} alt="Social media icon" />
        </Link>
    )

    const aboutUsContent = aboutUs.map((content, index) =>
        <FooterSection key={index}>
            <SectionTitle>
                {content.title}
            </SectionTitle>
            {content.links.map((link, linkIndex) => (
                <SectionLinks key={linkIndex}>
                    {link}
                </SectionLinks>
            ))}
        </FooterSection>
    )

    const servicesContent = services.map((content, index) =>
        <FooterSection key={index}>
            <SectionTitle>
                {content.title}
            </SectionTitle>
            {content.links.map((link, linkIndex) => (
                <SectionLinks key={linkIndex}>
                    {link}
                </SectionLinks>
            ))}
        </FooterSection>
    )

    const learnContent = learn.map((content, index) =>
        <FooterSection key={index}>
            <SectionTitle>
                {content.title}
            </SectionTitle>
            {content.links.map((link, linkIndex) => (
                <SectionLinks key={linkIndex}>
                    {link}
                </SectionLinks>
            ))}
        </FooterSection>
    )

    return (
        <FooterContainer>
            <LeftContainer>
                <LogoContainer>
                    <Logo>
                        CryptoCap
                    </Logo>
                </LogoContainer>
                <SocialMediaContainer>
                    <SocialMediaLinks>
                        {socialIcons}
                    </SocialMediaLinks>
                    <CopyRight>
                        2021 CoinMarketCap. All rights reserved
                    </CopyRight>
                </SocialMediaContainer>
            </LeftContainer>
            <RightContainer>
                {aboutUsContent}
                {servicesContent}
                {learnContent}
            </RightContainer>
        </FooterContainer>
    )
}

export default Footer;