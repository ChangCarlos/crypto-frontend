import { X } from "lucide-react";
import { Header, Logo, ModalContainer, Overlay, Title, CreateAccountContainer, CreateAccount, CreateAccountTitle, CreateAccountLink } from "./LoginModal"
import LoginForm from "../LoginForm";


const LoginModal = ({onClose, onCreateAccount}) => {

    return (
        <Overlay>
            <ModalContainer>
            <X size={24} color="#FFFFFF" onClick={onClose} cursor={'pointer'} key='close-btn' />
                <Header>
                    <Logo>
                        CryptoCap
                    </Logo>
                    <Title>
                        Acesse sua conta
                    </Title>
                </Header>
                    <LoginForm />
                <CreateAccountContainer>
                    <CreateAccount>
                        <CreateAccountTitle>
                            Não tem uma conta?
                        </CreateAccountTitle>
                        <CreateAccountLink onClick={onCreateAccount}>
                            Crie gratuitamente
                        </CreateAccountLink>
                    </CreateAccount>
                </CreateAccountContainer>
            </ModalContainer>
        </Overlay>
    )
}

export default LoginModal;