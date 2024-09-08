
import { Link, replace, useNavigate } from "react-router-dom"
import Button from "../components/button"
import Input, { PassInput } from "../components/input"
import { H1, H2 } from "../components/titles"
import { useRecoilState, useRecoilValue } from "recoil"
import { userState } from "../atoms/useratom"
import axios from "axios"

const SignUpPage = () => {
    const [user, setUser] = useRecoilState(userState);
    // const onclickInput = (tochange) => (e) => {
    //     setUser((prevVal) => ({
    //         ...prevVal,
    //         [tochange]: e.target.value,
    //     }))
    // }
    const navigate = useNavigate();
    const signUpClick = async ({ user }) => {
        console.log({ user });

        try {
            const res = await axios.post("https://moneytransfer-3cee.onrender.com/api/v1/user/signup", {
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName
            }, {
                headers: { 'Content-Type': 'application/json' }
            })
            console.log("first")
            console.log(res.data);
            const jwt  = res.data.token;
            localStorage.setItem("token",jwt);
            navigate('/dashboard',{replace: true});

        } catch (e) {
            console.log(e.response.data.msg);
            if(e.response.data.msg == 'Incorrect inputs' || e.response.data.msg == 'Email already taken' )
            {alert(e.response.data.msg)}


        }

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-300">
            <div className="p-6 bg-white rounded-lg shadow-lg w-96">
                <div className="flex justify-center mb-2"><H1 className="text-center mb-4" text={'SIGN UP'} /></div>
                <H2 className="text-center mb-4" text={'Enter your Information to create an account'} />
                <Input placeholder={"First Name"} onChange={(e) => {
                    setUser((prev) => ({
                        ...prev,
                        'firstName': e.target.value
                    }))
                }} />
                <Input placeholder={"Last Name"} onChange={(e) => {
                    setUser((prev) => ({
                        ...prev,
                        'lastName': e.target.value
                    }))
                }} />
                <Input placeholder={"Email"} onChange={(e) => {
                    setUser((prev) => ({
                        ...prev,
                        'username': e.target.value
                    }))
                }} />
                <PassInput onChange={(e) => {
                    setUser((prev) => ({
                        ...prev,
                        'password': e.target.value
                    }))
                }} />
                <div className="flex justify-center"><Button text={"Sign Up"} onClick={() => { signUpClick({ user }) }} /></div>
                <div className="mt-4 text-center">
                    Already have an account? <Link to="/" replace className="text-blue-500 hover:underline">Login</Link>
                </div>
            </div>
        </div>
    )
}





export default SignUpPage
