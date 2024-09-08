import { useRecoilState, useRecoilValue } from "recoil"
import Avatar from "../components/avatar"
import Button from "../components/button"
import Input from "../components/input"
import { allUsersState, balanceState, userState } from "../atoms/useratom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import AllUserSearch from "../components/users"
const Dashboard = () => {
    const user = useRecoilValue(userState);
    const navigate = useNavigate();
    const [tofind, settofind] = useState("");
    const [alluser, setalluser] = useRecoilState(allUsersState);
    const balance = useRecoilValue(balanceState);
    const findall = async () => {
        try {
            const res = await axios.get('https://moneytransfer-3cee.onrender.com/api/v1/user/bulk', {
                params: {
                    filter: tofind
                }
            });
            setalluser([]);
            setalluser(res.data.user);
            console.log(res.data)
            console.log(alluser);
        } catch (e) {
            console.log(e.response.data.msg)
        }
    }

    const Fn = () => {
        alluser.map((cur) => {
            let c = cur.firstName + cur.lastName;
            return (
                <div className="m-6"><AllUserSearch username={c} /></div>
            )
        })
    }
    return (
        <div>
            <div className="py-2 px-6 flex justify-between bg-slate-50 shadow-md">
                <h1 className="text-xl font-bold">Dashboard</h1>
                <div className="flex justify-end" >
                    <span className="mr-2 flex items-center font-semibold">Hello {user.firstName} {user.lastName} </span>
                    <div className="flex items-center"><Avatar initial={user.firstName} /></div>
                    <div className="ml-6 flex items-center"><Button text={"logout"} onClick={() => {
                        localStorage.removeItem('token');
                        navigate('/', { replace: true })
                    }} /></div>
                </div>
            </div>

            <div className="m-6 text-2xl font-semibold">Your balace: ${balance}</div>
            {/* <div className="mx-6 mt-2">Users</div> */}
            <div className="m-6"><Input placeholder={"Search User"} onChange={(e) => {
                settofind(e.target.value);
                findall();
            }} /></div>
            {alluser.map((cur) => {
                let c = cur.firstName + " " + cur.lastName;
                return (
                    <div className="m-6"><AllUserSearch username={c} onClick={
                        () => {
                            console.log("clicked")
                            navigate("/sendmoney?id=" + cur._id + "&name=" + cur.firstName);
                        }
                    } /></div>
                )
            })}
            {/* <div className="m-6"><AllUserSearch username={"kamlendu bala"} /></div> */}
        </div>
    )
}

export default Dashboard
