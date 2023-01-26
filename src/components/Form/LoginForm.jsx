import {Form,Formik} from "formik"
import Button from "../Button/button"
import Input from "../ui/Input"
import { initialLoginValues } from "./utils/initialValues"
import { useLoginContext } from "../../contexts/LoginModeContext"
import { LoginFormSchema } from "./FormSchema"


export default function LoginForm(){
    const {logInAcc} = useLoginContext()
    const onSubmit = (values,actions)=>{
        logInAcc(values)
        actions.resetForm()
    }
    return (
        <Formik
        initialValues={initialLoginValues}
        validationSchema={LoginFormSchema}
        onSubmit={onSubmit}
        >
        {({isSubmitting})=>(
            <Form className="formLogin">
                <h5>Login</h5> 
                <div className="inputContainer">
                    <h6>Email</h6>
               <Input
               name="email"
               type="email"
               className="loginInput"
               />
                </div>
                <div className="inputContainer">
                    <h6>Password</h6>
               <Input
               name="password"
               type="password"
               className="loginInput"
               />
               </div>
               <Button value={"Sign In"} disabled={isSubmitting}/>
            </Form>
        )}
        </Formik>
    )
}