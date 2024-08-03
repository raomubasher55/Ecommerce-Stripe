import React from 'react'

const NewsLetter = () => {
    return (
        <>
            <hr />
            <div className="bg-card p-8 my-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 px-4 md:px-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-foreground">Join Us &amp; Get Updates</h2>
                        <p className="text-muted-foreground">Sign up for exclusive offers, latest news and updates</p>
                    </div>
                    <form className="flex w-full md:w-auto items-center space-x-2">
                        <div className="relative flex-1">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <img aria-hidden="true" alt="search-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🔍" />
                            </span>
                            <input type="email" placeholder="Enter email address" className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:ring-primary focus:border-primary" required />
                        </div>
                        <button type="submit" className="bg-blue-600 text-white text-primary-foreground px-4 py-2 rounded-lg hover:bg-blue-700">Subscribe →</button>
                    </form>
                </div>
            </div>
        <hr />
        </>
    )
}

export default NewsLetter
