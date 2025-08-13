const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema(
  {
    line1: { type: String, trim: true },
    city:  { type: String, trim: true },
    state: { type: String, trim: true },
    country: { type: String, trim: true },
    postalCode: { type: String, trim: true }
  },
  { _id: false }
);

const StoreSchema = new mongoose.Schema(
  {
    name:   { type: String, required: true, trim: true },
    code:   { type: String, required: true, unique: true, uppercase: true, trim: true }, // e.g., "ACC-MAIN"
    email:  { type: String, trim: true, lowercase: true },
    phone:  { type: String, trim: true },
    address:{ type: AddressSchema, default: {} },
    isActive: { type: Boolean, default: true },
    deletedAt: { type: Date, default: null }
  },
  { timestamps: true, versionKey: false }
);

// Text search helpers
StoreSchema.index({ name: 'text', code: 'text', 'address.city': 'text' });

module.exports = mongoose.model('Store', StoreSchema);
