import { CloudEnvironment, Recommendation, Impact, Category } from '../types';

export function generateInsights(env: CloudEnvironment): Recommendation[] {
  const recommendations: Recommendation[] = [];

  if (env.monthlyCost > 500 && env.services.some((s) => s.type === 'COMPUTE')) {
    recommendations.push({
      id: Math.random().toString(36).substr(2, 9),
      title: "Optimize Compute Instances",
      impact: Impact.HIGH,
      category: Category.COST,
      description: "Compute costs are higher than average for this region.",
      fixSuggestion: "Review T3/T4g instance types or implement Spot Instances for non-critical workloads.",
      status: 'OPEN',
    });
  }

  if (env.healthScore < 80) {
    recommendations.push({
      id: Math.random().toString(36).substr(2, 9),
      title: "Enhance Infrastructure Reliability",
      impact: Impact.MEDIUM,
      category: Category.RELIABILITY,
      description: "Health score is below target. Some critical reliability features are missing.",
      fixSuggestion: "Enable automated backups and multi-AZ deployment for database services.",
      status: 'OPEN',
    });
  }

  return recommendations;
}
