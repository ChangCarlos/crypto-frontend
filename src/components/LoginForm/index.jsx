import { useFormik } from "formik"
import { Form, FormContainer, Input, Label, LogInBtn, ErrorContainer, ErrorMessage } from "./LoginForm"
import * as Yup from 'yup';


const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .email('Incorrect email')
            .required('Required'),
            password: Yup.string()
            .required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <FormContainer>
            <Form onSubmit={formik.handleSubmit}>
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

                <LogInBtn type="submit">
                    Entrar
                </LogInBtn>
            </Form>
        </FormContainer>
    )
}

export default LoginForm;
