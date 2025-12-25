import Link from 'next/link';
import { LayoutDashboard, FolderKanban, Tags, Settings, LogOut } from 'lucide-react';

const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/internal/admin/dashboard' },
    { name: 'Projects', icon: <FolderKanban size={20} />, href: '/internal/admin//projects' },
    { name: 'Categories', icon: <Tags size={20} />, href: '/internal/admin//categories' },
    { name: 'Settings', icon: <Settings size={20} />, href: '/internal/admin//settings' },
];

export default function Sidebar() {
    return (
        <aside className="w-64 flex flex-col h-screen bg-[#1a1625] text-gray-400 border-r border-gray-800">
            {/* Top Logo Section */}
            <div className="p-6">
                <h1 className="text-xl font-bold text-white flex items-center gap-2">
                    Flow<span className="text-purple-500">bite</span>
                </h1>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 space-y-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#2d283e] hover:text-white transition-colors group"
                    >
                        <span className="group-hover:text-purple-400">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                    </Link>
                ))}
            </nav>

            {/* User Profile Section (Bottom) */}
            <div className="p-4 border-t border-gray-800 bg-[#14111d]">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                        AD
                    </div>
                    <div className="flex flex-col overflow-hidden">
                        <span className="text-sm font-semibold text-white truncate">Admin</span>
                        <span className="text-xs text-gray-500 truncate">admin@flowbite.com</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}