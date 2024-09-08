
import { Link, replace, useNavigate } from "react-router-dom"
import Button from "../components/button"
import Input, { PassInput } from "../components/input"
import { H1, H2 } from "../components/titles"
import axios from "axios"
import { useRecoilState } from "recoil"
import { userState } from "../atoms/useratom"

const SignInPage = () => {
    const [user, setuser] = useRecoilState(userState);
    const navigate = useNavigate();
    const siginClick = async () => {
        //console.log(user)
        try {
            const res = await axios.post('https://moneytransfer-3cee.onrender.com/api/v1/user/signin', {
                username: user.username,
                password: user.password
            },{
                headers : {'Content-Type':'application/json'}
            });
            // console.log(res.data.msg === "user does not exist/password incorrect")
            if(res.data.msg === "user does not exist/password incorrect"){
                alert(res.data.msg)
            }
            setuser((prev)=>({
                ...prev,
                'firstName':res.data.user.firstName
            }))
            const token = res.data.token
            localStorage.setItem('token',token);
            navigate('/dashboard',{replace:true})
            // const s
            // if(res.data.msg){
            //     alert(res.data.msg)
            // }
        } catch (e) {
            // console.log(e.response)
            //console.log(e.response.data.msg)
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-300">
            <div className="bg-white p-6 w-96 rounded-lg shadow-lg">
                <div className="text-center"><H1 text={"SIGN IN"} /></div>
                <div className="flex justify-center"><H2 text={"Enter you credentials to login!"} /></div>
                <Input placeholder={"Email"} onChange={(e) => {
                    setuser((prev) => ({
                        ...prev,
                        'username': e.target.value,
                    }))
                }} />
                <PassInput onChange={(e) => {
                    setuser((prev) => ({
                        ...prev,
                        'password': e.target.value
                    }))
                }} />
                <Button text={"Sign In"} onClick={() => {
                        siginClick();
                }} />
                <div className="mt-4 text-center">Don't have an account? <Link to="/signup" replace className="text-blue-500 hover:underline">Sign Up!</Link></div>

            </div>
        </div>
    )
}

export default SignInPage
