import CreateAccountForm from "../CreateAccountForm";
import { Overlay, ModalContainer, Header, Logo, Title, LoginContainer, Login, LoginTitle, LoginLink } from "./CreateAccount";
import { X } from "lucide-react";


const CreateAccountModal = ({onClose, onLogin}) => {

    return (
        <Overlay>
            <ModalContainer>
            <X size={24} color="#FFFFFF" onClick={onClose} cursor={'pointer'} key='close-btn' />
                <Header>
                    <Logo>
                        CryptoCap
                    </Logo>
                    <Title>
                        Crie sua conta
                    </Title>
                </Header>
                    <CreateAccountForm />
                <LoginContainer>
                    <Login>
                        <LoginTitle>
                            Já tem sua conta?
                        </LoginTitle>
                        <LoginLink onClick={onLogin}>
                            Faça o login
                        </LoginLink>
                    </Login>
                </LoginContainer>
            </ModalContainer>
        </Overlay>
    )
}

export default CreateAccountModal;