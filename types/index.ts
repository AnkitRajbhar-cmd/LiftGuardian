export type PostureType = 'Good' | 'Bad' | 'Risky';

export interface PostureData {
  timestamp: Date;
  postureType: PostureType;
  confidence: number;
  sensorData: {
    accelerometer: { x: number; y: number; z: number };
    gyroscope: { x: number; y: number; z: number };
  };
}

export interface ChartData {
  time: string;
  Good: number;
  Bad: number;
  Risky: number;
}

export type TimeRange = 'day' | 'week' | 'month';
export type ChartType = 'area' | 'bar';