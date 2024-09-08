import axios from "axios";
import { atom, selector } from "recoil";

const userState = atom({
    key: "userAtom",
    default: {
        username: "",
        password: "",
        firstName: "",
        lastName: ""

    }
})
const newbal = atom({
    key: "newb",
    default : 0
})
const allUsersState = atom({
    key:"allUsers",
    default:[{}]
})

const balanceState = selector({
    key : "balanceselector",
    get : async({get})=>{
        try{
            const temp = "Bearer" +" " + localStorage.getItem('token');
            console.log(temp)
            const res = await axios.get('http://localhost:3000/api/v1/account/balance',{
                headers: {
                    authorization : temp
                }
            });
            //console.log(res);
            return res.data.balance;
        }catch(e){
            console.log(e)
        }
    }
})

export {userState,allUsersState,balanceState}