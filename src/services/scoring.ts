import { HealthMetrics } from '../types';

export function calculateDevOpsScore(metrics: HealthMetrics): {
  score: number;
  breakdown: Record<string, number>;
} {
  const breakdown = {
    monitoring: metrics.hasMonitoring ? 25 : 0,
    reliability: metrics.hasBackups ? 25 : 0,
    scalability: metrics.isAutoScaled ? 25 : 0,
    security: metrics.hasMFA ? 25 : 0,
  };

  const score = Object.values(breakdown).reduce((a, b) => a + b, 0);
  return { score, breakdown };
}
