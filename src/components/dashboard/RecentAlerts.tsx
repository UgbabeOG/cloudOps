import { MOCK_ALERTS } from "@/src/lib/mock-data";
import { AlertCircle, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export function RecentAlerts() {
  return (
    <div className="space-y-4 w-full mt-6 relative z-10">
      <div className="space-y-2">
        {MOCK_ALERTS.map((alert) => (
          <div 
            key={alert.id} 
            className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group"
          >
            <div className={cn(
              "w-2 h-2 rounded-full shrink-0",
              alert.severity === 'CRITICAL' ? "bg-[#ef4444]" : 
              alert.severity === 'WARNING' ? "bg-[#f59e0b]" : "bg-[#22c55e]"
            )} />
            <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
              <p className="text-[13px] text-[#fafafa] line-clamp-1 group-hover:text-white transition-colors">
                {alert.message}
              </p>
              <p className="text-[11px] text-[#a1a1aa] opacity-50 shrink-0">
                {new Date(alert.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
