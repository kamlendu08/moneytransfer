const Button = ({ text, onClick }) => {
    return (
        <div className="w-full">
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 " onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button

// const Button = ({ text, onClick }) => {
//     return (
//         <div className="w-full">
//             <button 
//                 type="button" 
//                 className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" 
//                 onClick={onClick}
//             >
//                 {text}
//             </button>
//         </div>
//     )
// }

// export default Button
