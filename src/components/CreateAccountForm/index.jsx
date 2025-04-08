import { useFormik } from "formik"
import { FormContainer, Form, Label, Input, CreateAccountBtn, ErrorContainer, ErrorMessage } from "./CreateAccountForm";
import * as Yup from 'yup';


const CreateAccountForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            cpf: '',
            telNumber: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            cpf: Yup.string()
                .max(11, 'Invalid CPF')
                .required('Required'),
            telNumber: Yup.string()
                .max(11, 'Invalid Number')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(8, 'Must have at least 8 characters')
                .required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <FormContainer>
            <Form onSubmit={formik.handleSubmit}>
                <Label htmlFor="name" >Nome:</Label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? <ErrorContainer><ErrorMessage>{formik.errors.name}</ErrorMessage></ErrorContainer> : null}

                <Label htmlFor="lastName" >Sobrenome:</Label>
                <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? <ErrorContainer><ErrorMessage>{formik.errors.lastName}</ErrorMessage></ErrorContainer> : null}

                <Label htmlFor="cpf" >CPF:</Label>
                <Input
                    id="cpf"
                    name="cpf"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cpf}
                />
                {formik.touched.cpf && formik.errors.cpf ? <ErrorContainer><ErrorMessage>{formik.errors.cpf}</ErrorMessage></ErrorContainer> : null}

                <Label htmlFor="telNumber" >Telefone:</Label>
                <Input
                    id="telNumber"
                    name="telNumber"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.telNumber}
                />
                {formik.touched.telNumber && formik.errors.telNumber ? <ErrorContainer><ErrorMessage>{formik.errors.telNumber}</ErrorMessage></ErrorContainer> : null}

                <Label htmlFor="email" >E-mail:</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? <ErrorContainer><ErrorMessage>{formik.errors.email}</ErrorMessage></ErrorContainer> : null}

                <Label htmlFor="password" >Senha:</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? <ErrorContainer><ErrorMessage>{formik.errors.password}</ErrorMessage></ErrorContainer> : null}

                <CreateAccountBtn type="submit">
                    Criar Conta
                </CreateAccountBtn>
            </Form>
        </FormContainer>
    )
}

export default CreateAccountForm;