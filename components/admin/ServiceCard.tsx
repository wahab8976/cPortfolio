
import React from 'react'
import { Pencil, Trash2, ExternalLink } from 'lucide-react';

interface CategoryProps {
    imageURL: string;
    title: string;
    description: string;
    tag: string;
    onEdit?: () => void;
    onDelete?: () => void;
}

const AdminCategoryCard = ({ imageURL, title, description, tag, onEdit, onDelete }: CategoryProps) => {
    return (
        <div className="group w-100 overflow-hidden rounded-2xl bg-[#1a1625] border border-gray-800 transition-all hover:border-purple-500/50 shadow-2xl">

            {/* Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                <img
                    src={imageURL}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                {/* Status Tag Overlay */}
                <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-purple-600 rounded shadow-lg">
                        {tag}
                    </span>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white truncate pr-2">
                        {title}
                    </h3>
                    <div className="flex gap-2">
                        <button
                            onClick={onEdit}
                            className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-purple-600 transition-all"
                            title="Edit Category"
                        >
                            <Pencil size={16} />
                        </button>
                        <button
                            onClick={onDelete}
                            className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
                            title="Delete Category"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                </div>

                <p className="text-sm text-gray-400 line-clamp-2 mb-4 leading-relaxed">
                    {description}
                </p>

                {/* Footer Info / Meta */}
                <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                    <span className="text-xs text-gray-500 italic">Last edited: 2 days ago</span>
                    <button className="text-purple-400 hover:text-purple-300 text-xs font-medium flex items-center gap-1">
                        View Live <ExternalLink size={12} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminCategoryCard;