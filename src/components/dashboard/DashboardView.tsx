import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OverviewChart } from "./OverviewChart";
import { StatsCards } from "./StatsCards";
import { RecentAlerts } from "./RecentAlerts";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardView() {
  return (
    <div className="flex-1 space-y-8 p-10 pt-8 overflow-y-auto">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-[28px] font-bold tracking-[-1px] text-[#fafafa]">CloudOps Overview</h2>
          <p className="text-[#a1a1aa] text-sm">Welcome back, Senior Engineer. 4 environments currently active.</p>
        </div>
        <div className="flex items-center space-x-3">
           <Button variant="outline" className="bg-[#09090b] border-[#27272a] text-[#a1a1aa] hover:text-[#fafafa] h-10 px-5">
             <Download className="mr-2 h-4 w-4" />
             Download Report
           </Button>
           <Button className="bg-[#fafafa] hover:bg-[#fafafa]/90 text-[#09090b] font-semibold h-10 px-5">
             Add Environment
           </Button>
        </div>
      </div>
      
      <StatsCards />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-[#09090b] border-[#27272a] rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[#a1a1aa] text-xs font-medium uppercase tracking-[0.5px]">Cost Trends (Past 14 Days)</CardTitle>
            <Button variant="ghost" size="sm" className="text-[#a1a1aa] hover:text-[#fafafa] h-8">
              View Analytics
            </Button>
          </CardHeader>
          <CardContent className="pl-2">
            <OverviewChart />
          </CardContent>
        </Card>
        
        <Card className="col-span-3 bg-[#09090b] border-[#27272a] rounded-xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-radial-gradient from-[#22c55e]/10 to-transparent blur-[40px] pointer-events-none" />
          <CardHeader>
            <CardTitle className="text-[#a1a1aa] text-xs font-medium uppercase tracking-[0.5px]">Infrastructure Health Score</CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
             <div className="flex flex-col items-center justify-center py-6">
                <div className="relative flex items-center justify-center">
                  <div className="w-[140px] h-[140px] rounded-full border-[8px] border-[#18181b] border-t-[#22c55e] rotate-45 flex items-center justify-center">
                    <div className="-rotate-45 text-center">
                      <div className="text-[48px] font-extrabold text-[#22c55e] leading-none">84</div>
                      <div className="text-[12px] text-[#a1a1aa] mt-1">B+ Score</div>
                    </div>
                  </div>
                </div>
             </div>
             <RecentAlerts />
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-[#1e1b4b] to-[#312e81] border border-[#6366f1]/30 p-8 rounded-xl flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-white">Need expert DevOps support?</h3>
          <p className="text-white/80 text-sm">Our engineers can help you reduce your monthly cloud bill by up to 30% through optimized instance mapping.</p>
        </div>
        <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 font-semibold h-11">
          Book Consultation
        </Button>
      </div>
    </div>
  );
}
