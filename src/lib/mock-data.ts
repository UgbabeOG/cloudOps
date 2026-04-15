import { CloudEnvironment, Provider, ServiceType, Alert, Impact, Category, Recommendation } from '../types';

export const MOCK_ENVIRONMENTS: CloudEnvironment[] = [
  {
    id: 'env-1',
    name: 'Production API',
    provider: Provider.AWS,
    region: 'af-south-1',
    monthlyCost: 1240.50,
    healthScore: 84,
    updatedAt: new Date().toISOString(),
    services: [
      { id: 's1', name: 'EC2 Cluster', type: ServiceType.COMPUTE, estimatedCost: 600 },
      { id: 's2', name: 'RDS Postgres', type: ServiceType.DATABASE, estimatedCost: 400 },
      { id: 's3', name: 'S3 Storage', type: ServiceType.STORAGE, estimatedCost: 240.50 },
    ]
  },
  {
    id: 'env-2',
    name: 'Staging Environment',
    provider: Provider.AWS,
    region: 'eu-west-1',
    monthlyCost: 450.20,
    healthScore: 92,
    updatedAt: new Date().toISOString(),
    services: [
      { id: 's4', name: 'EC2 Instance', type: ServiceType.COMPUTE, estimatedCost: 300 },
      { id: 's5', name: 'RDS MySQL', type: ServiceType.DATABASE, estimatedCost: 150.20 },
    ]
  },
  {
    id: 'env-3',
    name: 'GCP Analytics',
    provider: Provider.GCP,
    region: 'us-central1',
    monthlyCost: 890.00,
    healthScore: 78,
    updatedAt: new Date().toISOString(),
    services: [
      { id: 's6', name: 'BigQuery', type: ServiceType.DATABASE, estimatedCost: 500 },
      { id: 's7', name: 'Compute Engine', type: ServiceType.COMPUTE, estimatedCost: 390 },
    ]
  }
];

export const MOCK_ALERTS: Alert[] = [
  { id: 'a1', message: 'Cost spike detected in Production API', severity: 'WARNING', createdAt: new Date().toISOString() },
  { id: 'a2', message: 'Database backup failed for GCP Analytics', severity: 'CRITICAL', createdAt: new Date().toISOString() },
  { id: 'a3', message: 'New security recommendation available', severity: 'INFO', createdAt: new Date().toISOString() },
];

export const MOCK_RECOMMENDATIONS: Recommendation[] = [
  {
    id: 'r1',
    title: 'Switch to Graviton instances',
    description: 'Using AWS Graviton (ARM) instances can reduce costs by up to 20% with better performance.',
    impact: Impact.HIGH,
    category: Category.COST,
    fixSuggestion: 'Update EC2 instance types to t4g or c6g series.',
    status: 'OPEN'
  },
  {
    id: 'r2',
    title: 'Enable MFA for Root Account',
    description: 'The root account for GCP Analytics does not have MFA enabled.',
    impact: Impact.HIGH,
    category: Category.SECURITY,
    fixSuggestion: 'Enable multi-factor authentication in IAM settings.',
    status: 'OPEN'
  }
];

export const COST_TRENDS = [
  { month: 'Jan', cost: 2100 },
  { month: 'Feb', cost: 2300 },
  { month: 'Mar', cost: 2200 },
  { month: 'Apr', cost: 2580 },
];
