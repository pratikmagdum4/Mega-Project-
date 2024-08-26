import React from 'react';

const Home = () => {
    return (
        <>
            <header className="bg-gray-800 p-4 flex justify-between items-center">
                <div className="text-2xl font-bold">Logo</div>
                <nav>
                    <ul className="flex gap-5 m-0 p-0 list-none">
                        <li><a href="#" className="text-white no-underline">Home</a></li>
                        <li><a href="#" className="text-white no-underline">About Us</a></li>
                        <li><a href="Login.html" className="text-white no-underline">Log In</a></li>
                        <li><a href="Signup.html" className="text-white no-underline">Sign Up</a></li>
                    </ul>
                </nav>
            </header>

            <main className="p-5 text-center">
                <section className="my-5">
                    <h1 className="text-4xl my-5">Website Tagline</h1>
                </section>

                <section className="my-5">
                    <h2 className="text-3xl my-5">Daily Quotes</h2>
                    <p>Quote of the day will go here.</p>
                </section>

                <section className="flex justify-center gap-5 my-5">
                    <div className="bg-green-600 p-5 rounded-md w-36 text-center transition-colors duration-300 hover:bg-green-700">Daily Note</div>
                    <div className="bg-green-600 p-5 rounded-md w-36 text-center transition-colors duration-300 hover:bg-green-700">See Events</div>
                    <div className="bg-green-600 p-5 rounded-md w-36 text-center transition-colors duration-300 hover:bg-green-700">Mental Health</div>
                </section>
            </main>

            <footer className="bg-gray-800 p-4 text-center">
                <p>Footer content goes here</p>
            </footer>
        </>
    );
}

export default Home;
