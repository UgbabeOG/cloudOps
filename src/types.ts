export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum Provider {
  AWS = 'AWS',
  AZURE = 'AZURE',
  GCP = 'GCP',
}

export enum ServiceType {
  COMPUTE = 'COMPUTE',
  STORAGE = 'STORAGE',
  NETWORKING = 'NETWORKING',
  DATABASE = 'DATABASE',
  OTHER = 'OTHER',
}

export enum Impact {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}

export enum Category {
  COST = 'COST',
  SECURITY = 'SECURITY',
  PERFORMANCE = 'PERFORMANCE',
  RELIABILITY = 'RELIABILITY',
}

export interface CloudService {
  id: string;
  name: string;
  type: ServiceType;
  estimatedCost: number;
}

export interface CloudEnvironment {
  id: string;
  name: string;
  provider: Provider;
  region: string;
  monthlyCost: number;
  healthScore: number;
  services: CloudService[];
  updatedAt: string;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  impact: Impact;
  category: Category;
  fixSuggestion: string;
  status: 'OPEN' | 'RESOLVED' | 'IGNORED';
}

export interface Alert {
  id: string;
  message: string;
  severity: 'INFO' | 'WARNING' | 'CRITICAL';
  createdAt: string;
}

export interface HealthMetrics {
  hasMonitoring: boolean;
  hasBackups: boolean;
  isAutoScaled: boolean;
  hasMFA: boolean;
}
