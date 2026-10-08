import express from 'express';
import { isLoggedIn } from '../middleware/auth.js';
import Session from '../models/Session.js';

const router = express.Router();

// Start new session
router.post('/start', isLoggedIn, async (req, res) => {
  try {
    const session = new Session({
      user: req.userId,
      startTime: new Date()
    });

    await session.save();
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// End session
router.put('/:sessionId/end', isLoggedIn, async (req, res) => {
  try {
    const session = await Session.findById(req.params.sessionId);
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    session.endTime = new Date();
    session.postureCounts = req.body.postureCounts;
    session.gyroscopeData = req.body.gyroscopeData;
    session.accuracyMetrics = req.body.accuracyMetrics;

    await session.save();
    res.json(session);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user sessions
router.get('/user', isLoggedIn, async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.userId })
      .sort({ startTime: -1 });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get session details
router.get('/:sessionId', isLoggedIn, async (req, res) => {
  try {
    const session = await Session.findById(req.params.sessionId);
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }
    res.json(session);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;