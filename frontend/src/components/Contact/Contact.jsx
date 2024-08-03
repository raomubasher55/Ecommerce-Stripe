import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
    return (
        <>
            <div className="p-6 bg-background text-foreground">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
                    <p className="text-muted-foreground mb-6">Fill the form below or write us. We will help you as soon as possible.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="flex items-center p-4 bg-red-100 rounded-lg">
                            <FaPhoneAlt className="mr-4" />
                            <div>
                                <h3 className="text-lg font-medium">Phone No</h3>
                                <p className="text-muted-foreground">+88 01682 825 123</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 bg-blue-100 rounded-lg">
                            <MdOutlineMailOutline className="mr-4" />
                            <div>
                                <h3 className="text-lg font-medium">Email</h3>
                                <p className="text-muted-foreground">EXstore@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <form   action="https://formspree.io/f/myzgzwre" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="mb-2 font-medium">Name*</label>
                            <input type="text" id="name" name='name' placeholder="Enter Your Name" className="p-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-primary" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-2 font-medium">Email*</label>
                            <input type="email" id="email" name='email' placeholder="Enter Your Email" className="p-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-primary" />
                        </div>
                        <div className="flex flex-col md:col-span-2">
                            <label htmlFor="subject" className="mb-2 font-medium">Subject*</label>
                            <input type="text" id="subject" name='subject' placeholder="Your Subject Here" className="p-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-primary" />
                        </div>
                        <div className="flex flex-col md:col-span-2">
                            <label htmlFor="message" className="mb-2 font-medium">Message*</label>
                            <textarea id="message" name='message' placeholder="Your Message Here" className="p-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-primary h-32" defaultValue={""} />
                        </div>
                        <div className="md:col-span-2">
                            <button type="submit" className="w-full p-3 bg-blue-600 text-white text-primary-foreground rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:ring-primary">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default Contact
