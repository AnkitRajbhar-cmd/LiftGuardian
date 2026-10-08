import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date
  },
  postureCounts: {
    good: { type: Number, default: 0 },
    risky: { type: Number, default: 0 },
    bad: { type: Number, default: 0 }
  },
  gyroscopeData: [{
    timestamp: Date,
    x: Number,
    y: Number,
    z: Number,
    classification: {
      type: String,
      enum: ['good', 'risky', 'bad']
    }
  }],
  accuracyMetrics: {
    overall: Number,
    byPostureType: {
      good: Number,
      risky: Number,
      bad: Number
    }
  }
}, { timestamps: true });

export default mongoose.model('Session', sessionSchema);