import { MOCK_RECOMMENDATIONS } from "@/src/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, DollarSign, RefreshCcw, ArrowRight } from "lucide-react";
import { Category, Impact } from "@/src/types";

const categoryIcons = {
  [Category.COST]: DollarSign,
  [Category.SECURITY]: ShieldCheck,
  [Category.PERFORMANCE]: Zap,
  [Category.RELIABILITY]: RefreshCcw,
};

const impactColors = {
  [Impact.HIGH]: "bg-red-500/10 text-red-500 border-red-500/20",
  [Impact.MEDIUM]: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  [Impact.LOW]: "bg-blue-500/10 text-blue-500 border-blue-500/20",
};

export function RecommendationsView() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6 overflow-y-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Health & Recommendations</h2>
          <p className="text-zinc-500">AI-driven insights to optimize your cloud infrastructure.</p>
        </div>
        <Button variant="outline" className="bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white">
          Scan Infrastructure
        </Button>
      </div>

      <div className="grid gap-4">
        {MOCK_RECOMMENDATIONS.map((rec) => {
          const Icon = categoryIcons[rec.category];
          return (
            <Card key={rec.id} className="bg-zinc-950 border-zinc-800 overflow-hidden group">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-16 bg-zinc-900 flex items-center justify-center p-4 md:p-0">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-white">{rec.title}</h3>
                        <Badge variant="outline" className={impactColors[rec.impact]}>
                          {rec.impact} IMPACT
                        </Badge>
                      </div>
                      <p className="text-zinc-400 text-sm max-w-2xl">{rec.description}</p>
                    </div>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 h-fit w-fit">
                      {rec.category}
                    </Badge>
                  </div>

                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 mb-6">
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Suggested Fix</h4>
                    <p className="text-sm text-zinc-300">{rec.fixSuggestion}</p>
                  </div>

                  <div className="flex items-center justify-end gap-3">
                    <Button variant="ghost" className="text-zinc-500 hover:text-white">
                      Ignore
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-500 text-white">
                      Apply Fix
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
