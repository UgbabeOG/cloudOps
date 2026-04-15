import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Cloud, Activity, ShieldCheck } from "lucide-react";
import { MOCK_ENVIRONMENTS } from "@/src/lib/mock-data";
import { cn } from "@/lib/utils";

export function StatsCards() {
  const totalMonthlyCost = MOCK_ENVIRONMENTS.reduce((acc, env) => acc + env.monthlyCost, 0);
  const avgHealthScore = Math.round(MOCK_ENVIRONMENTS.reduce((acc, env) => acc + env.healthScore, 0) / MOCK_ENVIRONMENTS.length);
  const totalServices = MOCK_ENVIRONMENTS.reduce((acc, env) => acc + env.services.length, 0);

  const stats = [
    {
      title: "Monthly Spend",
      value: `$${totalMonthlyCost.toLocaleString()}`,
      change: "+4.2%",
      icon: CreditCard,
      color: "text-indigo-500",
    },
    {
      title: "Active Nodes",
      value: totalServices.toString(),
      subValue: "EC2/RDS",
      icon: Cloud,
      color: "text-blue-500",
    },
    {
      title: "Avg Health",
      value: `${avgHealthScore}%`,
      status: "Excellent",
      icon: ShieldCheck,
      color: "text-green-500",
    },
    {
      title: "Cloud Provider",
      value: "Multi-Tenant",
      badge: "AWS + AZURE",
      icon: Activity,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-[#09090b] border-[#27272a] rounded-xl p-5">
          <div className="flex flex-col space-y-2">
            <div className="text-[12px] font-medium text-[#a1a1aa] uppercase tracking-[0.5px]">
              {stat.title}
            </div>
            <div className="flex items-baseline gap-2">
              <div className={cn(
                "text-2xl font-bold",
                stat.title === "Avg Health" ? "text-[#22c55e]" : "text-[#fafafa]"
              )}>
                {stat.value}
              </div>
              {stat.change && (
                <span className="text-[12px] font-medium text-[#22c55e]">
                  {stat.change}
                </span>
              )}
              {stat.subValue && (
                <span className="text-[12px] opacity-50 text-[#a1a1aa]">
                  {stat.subValue}
                </span>
              )}
              {stat.status && (
                <span className="text-[12px] font-medium text-[#22c55e]">
                  {stat.status}
                </span>
              )}
              {stat.badge && (
                <span className="text-[10px] px-1.5 py-0.5 border border-[#6366f1] rounded text-[#6366f1] font-bold ml-1">
                  {stat.badge}
                </span>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
