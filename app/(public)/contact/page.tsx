import GenreCard from "@/components/public/ServiceCard";
import Image from "next/image";
import dbConnect from "@/lib/connectDB";
import serviceSchema from "@/models/service.model";

export default async function Home() {

    await dbConnect();

    // .lean() is vital to turn Mongoose docs into plain objects Next.js can read
    const services = await serviceSchema.find({}).lean();

    return (
        // min-h-screen ensures the section takes up the full height
        // flex items-center centers it vertically on the page
        <div className="min-h-screen flex flex-col gap-45 items-center justify-center bg-neutral-900 px-4">

            {/* Container: Changed to max-w-7xl for better responsiveness */}
            <section className="flex pt-50 flex-col md:flex-row max-w-7xl w-full justify-between items-center gap-12">

                {/* Text Content */}
                {/* Text Content */}
                <div className="flex flex-col items-start space-y-6 md:w-1/2 animate-float">
                    <div>
                        <h1 className="text-5xl text-purple-500 font-bold leading-tight">
                            Ready to Start
                        </h1>
                        <h1 className="text-5xl text-white font-bold leading-tight">
                            Your Next Project?
                        </h1>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Our team is here to help you navigate your digital transformation.
                        Whether you have a specific project in mind or just want to explore
                        the possibilities, we’re ready to build something great together.
                    </p>
                </div>

                {/* Image Container */}
                <div className="md:w-1/2 flex justify-center animate-float-delayed">
                    <img
                        src="/contact_us.svg"
                        alt="A Tech Team Image"
                        className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
                    />
                </div>

            </section>

            <section className="max-w-7xl w-full">
                <div className="flex items-center gap-4 mb-12">
                    {/* The Accent Bar */}
                    <span className="w-1.5 h-10 bg-purple-600 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.5)]"></span>

                    {/* The Heading */}
                    <h2 className="text-white text-4xl font-bold tracking-tight">
                        Send us a Message
                    </h2>
                </div>


                {/* Message Here  */}

                <section className="flex pb-50 flex-col md:flex-row gap-6 justify-center items-stretch max-w-6xl mx-auto p-4">
                    {/* Left Side: Contact Form Card */}
                    <div className="flex-1 max-w-lg bg-[#111111] border border-gray-800 p-8 rounded-3xl shadow-2xl shadow-purple-500/5 flex flex-col">
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-white">Send Us a Message</h2>
                            <p className="text-sm text-gray-500">We'll get back to you within 24 hours.</p>
                        </div>

                        <form className="flex flex-col grow space-y-5">
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-[#1a1a1a] border border-gray-800 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all placeholder:text-gray-600"
                                />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-[#1a1a1a] border border-gray-800 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all placeholder:text-gray-600"
                                />
                            </div>

                            <div className="flex flex-col space-y-2 grow">
                                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                                <textarea
                                    placeholder="Tell us about your project..."
                                    className="w-full grow bg-[#1a1a1a] border border-gray-800 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all placeholder:text-gray-600 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/20 transition-all active:scale-[0.98] hover:shadow-purple-500/40"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="flex-1 max-w-lg flex flex-col gap-5">

                        {/* Phone Card */}
                        <div className="flex-1 flex flex-row items-center gap-6 bg-[#111111] border border-gray-800 p-8 rounded-3xl shadow-2xl shadow-purple-500/5 transition-all hover:border-purple-500/30">
                            <div className="shrink-0">
                                <img src="/phone_call.svg" alt="Phone" className="w-20 h-20" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-1">
                                    Phone
                                </span>
                                <div className="text-gray-300 text-lg font-medium">03248-4392427</div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="flex-1 flex flex-row items-center gap-6 bg-[#111111] border border-gray-800 p-8 rounded-3xl shadow-2xl shadow-purple-500/5 transition-all hover:border-purple-500/30">
                            <div className="shrink-0">
                                <img src="/email.svg" alt="Email" className="w-25 h-25" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-1">
                                    Email
                                </span>
                                <div className="text-gray-300 text-lg font-medium">aw792100@gmail.com</div>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="flex-1 flex flex-row items-center gap-6 bg-[#111111] border border-gray-800 p-8 rounded-3xl shadow-2xl shadow-purple-500/5 transition-all hover:border-purple-500/30">
                            <div className="shrink-0">
                                <img src="/location.svg" alt="Location" className="w-20 h-20" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-1">
                                    Location
                                </span>
                                <div className="text-gray-300 text-lg font-medium">
                                    Service Morr Gujrat, Punjab, Pakistan
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </section>

        </div>
    );
}