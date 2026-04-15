import { MOCK_ENVIRONMENTS } from "@/src/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Server, Database, HardDrive, Network } from "lucide-react";
import { ServiceType } from "@/src/types";

const serviceIcons = {
  [ServiceType.COMPUTE]: Server,
  [ServiceType.DATABASE]: Database,
  [ServiceType.STORAGE]: HardDrive,
  [ServiceType.NETWORKING]: Network,
  [ServiceType.OTHER]: MoreHorizontal,
};

export function EnvironmentsView() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6 overflow-y-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Cloud Environments</h2>
          <p className="text-zinc-500">Manage and monitor your infrastructure across providers.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-500 text-white">
          New Environment
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {MOCK_ENVIRONMENTS.map((env) => (
          <Card key={env.id} className="bg-zinc-950 border-zinc-800 hover:border-zinc-700 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div className="space-y-1">
                <CardTitle className="text-lg font-bold text-white">{env.name}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-zinc-900 border-zinc-800 text-zinc-400 font-normal">
                    {env.provider}
                  </Badge>
                  <span className="text-xs text-zinc-600">{env.region}</span>
                </div>
              </div>
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm",
                env.healthScore >= 90 ? "bg-green-500/10 text-green-500" :
                env.healthScore >= 80 ? "bg-yellow-500/10 text-yellow-500" : "bg-red-500/10 text-red-500"
              )}>
                {env.healthScore}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Monthly Cost</span>
                  <span className="text-white font-medium">${env.monthlyCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Services</span>
                  <span className="text-white font-medium">{env.services.length} Active</span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-900">
                <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Key Services</h4>
                <div className="space-y-2">
                  {env.services.map((service) => {
                    const Icon = serviceIcons[service.type];
                    return (
                      <div key={service.id} className="flex items-center justify-between p-2 rounded-md bg-zinc-900/30">
                        <div className="flex items-center gap-2">
                          <Icon className="w-3.5 h-3.5 text-zinc-400" />
                          <span className="text-sm text-zinc-300">{service.name}</span>
                        </div>
                        <span className="text-xs text-zinc-500">${service.estimatedCost}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Button variant="outline" className="w-full bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white mt-4">
                Manage Infrastructure
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
