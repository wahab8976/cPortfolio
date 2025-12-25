import React from 'react'

// Card Props
interface GenreProps {
    imageURL: string;
    title: string;
    description: string;
    tag: string;
}

const ServiceCard = ({ imageURL, title, description, tag }: GenreProps) => {
    return (
        <div className="group w-full max-w-sm overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all hover:scale-[1.02] hover:bg-white/10 shadow-xl">

            {/* Image Container with dynamic src */}
            <div className="aspect-video w-full overflow-hidden bg-neutral-800">
                <img
                    src={imageURL}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            {/* Content Area */}
            <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-400/10 rounded">
                        {tag}
                    </span>
                </div>

                <h3 className="text-xl font-semibold leading-tight text-white group-hover:text-purple-400 transition-colors">
                    {title}
                </h3>

                <p className="text-sm text-gray-400 line-clamp-2">
                    {description}
                </p>

                <button className="w-full rounded-xl bg-purple-600 py-3 text-sm font-bold text-white transition-all hover:bg-purple-700 active:scale-95 shadow-lg shadow-purple-600/20">
                    Get Our Services
                </button>
            </div>
        </div>
    )
}

export default ServiceCard