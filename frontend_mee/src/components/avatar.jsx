const Avatar = ({initial}) => {
    console.log(initial)
    return (
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-green-300 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">{initial ? initial.split(" ")[0][0].toUpperCase() : "U"}</span>
        </div>

    )
}

export default Avatar