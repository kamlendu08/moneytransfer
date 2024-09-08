const H1 = ({ text }) => {
    return (
        <div>
            <h2 className="text-4xl font-extrabold dark:text-white">{text}</h2>
        </div>
    )
}
const H2 = ({ text }) => {
    return (
        <div>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">{text}</p>
        </div>
    )
}

export { H1, H2 }