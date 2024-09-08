import { useNavigate, useSearchParams } from "react-router-dom"
import Button from "../components/button"
import Input from "../components/input"
import { H1 } from "../components/titles"
import { OnlyUser } from "../components/users"
import { useState } from "react"
import axios from "axios"
const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amt, setamt] = useState(0);
    const navigate = useNavigate();
    const sendfn = async () => {
        try {
            const temp = "Bearer" +" " + localStorage.getItem('token');
            let data = JSON.stringify({
                "to": id,
                "amount": amt
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:3000/api/v1/account/transfer',
                headers: {
                    'authorization': temp,
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    alert(JSON.stringify(response.data));
                    if(response.data.msg === "Transfer Successful"){
                        navigate("/dashboard")
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

        }catch(e){
            console.log(e)
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-300">
            <div className="bg-white p-6 w-96 rounded-lg shadow-lg">
                <div className="text-center mb-6"><H1 text={"Send Money"} /></div>
                <div className="my-6"><OnlyUser username={name} /></div>
                <div className="mb-12"><Input placeholder={"Amount (in Rs) "} onChange={(e)=>{
                    setamt(e.target.value);
                }}/></div>
                <Button text={"Initiate Transfer"} onClick={()=>{
                    sendfn()
                }}/>
            </div>
        </div>
    )
}

export default SendMoney