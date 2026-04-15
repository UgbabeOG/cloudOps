/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sidebar } from './components/shared/Sidebar';
import { DashboardView } from './components/dashboard/DashboardView';
import { EnvironmentsView } from './components/dashboard/EnvironmentsView';
import { RecommendationsView } from './components/dashboard/RecommendationsView';
import { Search, User, Bell } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'environments':
        return <EnvironmentsView />;
      case 'recommendations':
        return <RecommendationsView />;
      default:
        return (
          <div className="flex-1 flex items-center justify-center text-zinc-500">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p>The {activeTab} module is currently under development.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-[#09090b] text-[#fafafa] font-sans selection:bg-indigo-500/30 overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation */}
        <header className="h-16 border-b border-[#27272a] flex items-center justify-between px-10 bg-[#09090b]/50 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <div className="relative w-full group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a1a1aa] group-focus-within:text-[#6366f1] transition-colors" />
              <Input 
                placeholder="Search resources, costs, alerts..." 
                className="pl-10 bg-[#18181b]/50 border-[#27272a] focus:border-[#6366f1]/50 focus:ring-[#6366f1]/20 transition-all h-9 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-[#a1a1aa] hover:text-[#fafafa] relative h-9 w-9">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#6366f1] rounded-full border-2 border-[#09090b]" />
            </Button>
            
            <div className="h-6 w-px bg-[#27272a] mx-2" />
            
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-[#fafafa]">Ugbabe Og</p>
                <p className="text-[11px] text-[#a1a1aa] uppercase tracking-wider opacity-60">Senior Engineer</p>
              </div>
              <Avatar className="h-9 w-9 border border-[#27272a]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>UO</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-hidden flex flex-col relative bg-transparent">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex-1 flex flex-col overflow-hidden"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

