import Avatar from "./avatar"
import Button from "./button"

const AllUserSearch = ({username,onClick})=>{
    return (
        <div className="flex justify-between">
            <div>
                <Avatar initial={username.split(' ')[0][0].toUpperCase()}/>
                <span className="ml-3">{username}</span>
            </div>
            <div className="w-30"><Button text={"send money"} onClick={onClick}/></div>
        </div>
    )

}

const OnlyUser = ({username}) => {
    return (
        <div className="flex justify-between" >
            <div>
                <Avatar initial={username.split(' ')[0][0].toUpperCase()}/>
                <span className="ml-3">{username}</span>
            </div>
        </div>
    )
}

export default AllUserSearch

export {OnlyUser}