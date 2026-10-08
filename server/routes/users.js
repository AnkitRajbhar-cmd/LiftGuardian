import express from 'express';
import { isLoggedIn } from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();

// Get user profile
router.get('/profile', isLoggedIn, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update user workspace
router.put('/workspace', isLoggedIn, async (req, res) => {
  try {
    const { workspace } = req.body;
    const user = await User.findByIdAndUpdate(
      req.userId,
      { workspace },
      { new: true }
    ).select('-password');

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;