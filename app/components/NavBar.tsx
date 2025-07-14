

export default function NavBar () {


    return <div className="navbar">
        <div className="w-full">
            Cogrea
        </div>
        <div className="w-full flex justify-end items-center gap-4">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <button className="primary-button">Join Waitlist</button>
        </div>
    </div>

}