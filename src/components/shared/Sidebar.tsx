import { LayoutDashboard, Cloud, CreditCard, ShieldCheck, Bell, FileText, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, id: 'dashboard' },
  { name: 'Environments', icon: Cloud, id: 'environments' },
  { name: 'Cost Analysis', icon: CreditCard, id: 'costs' },
  { name: 'Health Score', icon: ShieldCheck, id: 'recommendations' },
  { name: 'Alerts', icon: Bell, id: 'alerts' },
  { name: 'Reports', icon: FileText, id: 'reports' },
];

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-[240px] bg-[#09090b] border-r border-[#27272a] h-screen p-6 flex flex-col shrink-0">
      <div className="mb-8 px-2 flex items-center gap-3">
        <div className="w-8 h-8 bg-[#6366f1] rounded-lg flex items-center justify-center font-black text-white shadow-[0_0_20px_rgba(99,102,241,0.15)]">
          C
        </div>
        <span className="font-bold text-lg text-[#fafafa] tracking-tight">CircuitSoul</span>
      </div>
      
      <nav className="space-y-1 flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 relative group",
              activeTab === item.id 
                ? "bg-[#18181b] text-[#fafafa] border border-[#27272a]" 
                : "text-[#a1a1aa] hover:text-[#fafafa] hover:bg-[#18181b]/50"
            )}
          >
            <item.icon className={cn("w-[18px] h-[18px]", activeTab === item.id ? "opacity-100" : "opacity-70")} />
            {item.name}
          </button>
        ))}
      </nav>

      <div className="mt-auto border-t border-[#27272a] pt-5">
        <button className="flex items-center gap-3 text-[#a1a1aa] text-sm py-2 hover:text-[#fafafa] transition-colors w-full group">
          <Settings className="w-[18px] h-[18px] opacity-70 group-hover:opacity-100" />
          Settings
        </button>
      </div>
    </div>
  );
}
