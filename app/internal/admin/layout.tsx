// app/(admin)/layout.tsx
import Sidebar from '@/components/admin/Sidebar';
import { Bell, MessageSquare, Mic, User } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-[#0f0c15]">
            {/* Sidebar - Stays fixed on the left */}
            <Sidebar />

            <div className="flex-1 flex flex-col">
                {/* Header / Top Nav */}
                <header className="h-16 flex items-center justify-between px-8 border-b border-gray-800 bg-[#1a1625]">
                    <h2 className="text-lg font-medium text-white">Admin Dashboard</h2>
                    <div className="flex items-center gap-6 text-gray-400">
                        <Bell size={20} className="hover:text-white cursor-pointer" />
                        <MessageSquare size={20} className="hover:text-white cursor-pointer" />
                        <Mic size={20} className="hover:text-white cursor-pointer" />
                        <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden border border-gray-600">
                            <User size={32} /> {/* Placeholder for user image */}
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}