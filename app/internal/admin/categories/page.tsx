
import React from 'react'
import dbConnect from '@/lib/connectDB'
import serviceSchema from "@/models/service.model"
import ServiceCard from "@/components/admin/ServiceCard"

const page = async () => {

    await dbConnect();

    const services = await serviceSchema.find({}).lean();
    return (
        <div>
            <div className='flex justify-between text-white'>
                <h3 className='text-3xl'>Categories</h3>
                <button className='bg-purple-700 p-2 rounded-xl cursor-pointer'>Create new Category</button>
            </div>

            <div className="flex flex-wrap pt-10 justify-center gap-15">
                {services.map((service, index) => {
                    return (
                        <ServiceCard
                            key={index}
                            imageURL={service.imageURL}
                            tag={service.tag}
                            title={service.title}
                            description={service.description}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default page
