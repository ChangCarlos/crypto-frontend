import { Article, ArticlesContainer, Content, HeaderSubtitle, HeaderTitle, Label, LearnContainer, LearnHeader, SeeAllArticles, Subtitle, Thumbnail, Title } from "./LearnCrypto"

const allArticles = [
    {
        id: 1,
        thumbnail: '/Thumbnail-1.png',
        label: 'CRYPTO BASIC',
        title: 'What is Cryptocurrency? All you need to know',
        subtitle: 'Cryptocurrencies are basically digital assets. It is secured by cryptography..'
    },
    {
        id: 2,
        thumbnail: '/Thumbnail-2.png',
        label: 'CRYPTO BASIC',
        title: 'Can crypto really replace your bank account?',
        subtitle: 'From direct deposit to earning yield, key ways crypto can help you take control..'
    },
    {
        id: 3,
        thumbnail: '/Thumbnail-3.png',
        label: 'TIPS & TRICKS',
        title: 'How to setup crypto wallet in your account',
        subtitle: 'A crypto wallet is a place where you can securely keep your crypto..'
    },
    {
        id: 4,
        thumbnail: '/Thumbnail-4.png',
        label: 'CRYPTO BASIC',
        title: 'The fact about bitcoin must you know',
        subtitle: "Bitcoin is the world's first widely adopted cryptocurrency, it allows for secure.."
    },
    {
        id: 5,
        thumbnail: '/Thumbnail-5.png',
        label: 'TIPS & TRICKS',
        title: 'When is the best time to invest in crypto?',
        subtitle: 'When prices are fluctuating, how do you know when to buy?'
    },
    {
        id: 6,
        thumbnail: '/Thumbnail-6.png',
        label: 'TIPS & TRICKS',
        title: 'What Is DeFi? Inside the Wild West of Cryptocurrency.',
        subtitle: 'Welcome to decentralized finance or DeFi, the new frontier of crypto that will..'
    }
]

const LearnCrypto = () => {
    const articles = allArticles.map(article =>
        <Article>
        <Thumbnail src={article.thumbnail} />
        <Content>
            <Label>
                {article.label}
            </Label>
            <Title>
                {article.title}
            </Title>
            <Subtitle>
                {article.subtitle}
            </Subtitle>
        </Content>
        </Article>
    )

    return (
        <LearnContainer>
            <LearnHeader>
                <HeaderTitle>
                    Learn About Cryptocurrency
                </HeaderTitle>
                <HeaderSubtitle>
                    Learn all about cryptocurrency to start investing
                </HeaderSubtitle>
            </LearnHeader>
            <ArticlesContainer>
                {articles}
            </ArticlesContainer>
            <SeeAllArticles>
                See All Articles
            </SeeAllArticles>
        </LearnContainer>
    )
}

export default LearnCrypto;