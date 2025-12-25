import GenreCard from "@/components/GenreCard";
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
        <div className="flex flex-col items-start space-y-6 md:w-1/2 animate-float">
          <div>
            <h1 className="text-5xl text-purple-500 font-bold leading-tight">
              We Build Digital
            </h1>
            <h1 className="text-5xl text-white font-bold leading-tight">
              Software Solutions
            </h1>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed">
            Transforming your visionary ideas into robust digital realities.
            We specialize in custom software development, cloud architecture,
            and intuitive user experiences that scale with your business growth.
          </p>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-purple-500/20">
            Contact Us
          </button>
        </div>

        {/* Image Container */}
        <div className="md:w-1/2 flex justify-center animate-float-delayed">
          <img
            src="/tech_team.svg"
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
            Our Expertise
          </h2>
        </div>


        <div className="flex flex-wrap justify-center gap-15">
          {services.map((service, index) => {
            return (
              <GenreCard
                key={index}
                imageURL={service.imageURL}
                tag={service.tag}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </div>


      </section>

      <section className="max-w-7xl w-full">
        <div className="flex items-center gap-4 mb-12">
          {/* The Accent Bar */}
          <span className="w-1.5 h-10 bg-purple-600 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.5)]"></span>

          {/* The Heading */}
          <h2 className="text-white text-4xl font-bold tracking-tight">
            Projects
          </h2>
        </div>
      </section>

    </div>
  );
}