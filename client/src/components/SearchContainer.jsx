import Question from "./Question"
import Response from "./Response"

const SearchContainer = ({ handleChange }) => {
    return (
        <div className='mt-4 mx-4 h-screen w-full lg:w-[75%] lg:container lg:mx-auto'>
            {/* Chat Box */}
            <div className="bg-gray-50 p-5 grid-cols-1 gap-y-2">
                <Question />
                <Response />
            </div>
            {/* SearchBar */}
            <div className="mx-auto flex w-[50%] justify-center items-center mt-5">
                <form className="w-full">
                    <div className="relative w-full">
                        <input type="search" id="default-search" className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-gray-50 focus:ring-0 focus:border-transparent " placeholder="Type your question..." required />
                        <button type="submit" className="text-gray-500 absolute right-1 bottom-1.5 bg-transparent  focus:ring-0 focus:outline-none focus:ring-transparent font-medium rounded-lg text-sm px-4 py-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"> <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" /> </svg></button>
                    </div>
                </form>
                <button className="flex p-3 bg-gray-100 ml-3 rounded-lg whitespace-nowrap" onClick={handleChange}>
                    Reset Chat
                </button>

            </div>
        </div>
    )
}

export default SearchContainer