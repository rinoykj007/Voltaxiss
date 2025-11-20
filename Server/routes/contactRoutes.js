import express from 'express';
import {
  submitContact,
  getContactMessages,
  getContactMessage,
  updateContactMessage,
  deleteContactMessage
} from '../controllers/contactController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.post('/', submitContact);

router.route('/messages')
  .get(protect, authorize('admin'), getContactMessages);

router.route('/messages/:id')
  .get(protect, authorize('admin'), getContactMessage)
  .put(protect, authorize('admin'), updateContactMessage)
  .delete(protect, authorize('admin'), deleteContactMessage);

export default router;
