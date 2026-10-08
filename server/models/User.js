import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  profileImage: {
    type: String,
    default: ''
  },
  workspace: {
    type: String,
    enum: ['Gym', 'Office', 'Warehouse', 'Construction', 'Brewing Industries'],
    default: 'Gym'
  }
}, { timestamps: true });

export default mongoose.model('User', userSchema);