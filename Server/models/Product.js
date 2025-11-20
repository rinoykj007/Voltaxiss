import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide product name'],
      trim: true,
      maxlength: [200, 'Product name cannot exceed 200 characters']
    },
    description: {
      type: String,
      required: [true, 'Please provide product description'],
      maxlength: [2000, 'Description cannot exceed 2000 characters']
    },
    category: {
      type: String,
      required: [true, 'Please specify product category'],
      enum: [
        'Industrial Supplies',
        'Safety Equipment',
        'Construction Materials',
        'Electrical Components',
        'Tools & Equipment',
        'PPE',
        'Other'
      ]
    },
    price: {
      type: Number,
      required: [true, 'Please provide product price'],
      min: [0, 'Price cannot be negative']
    },
    unit: {
      type: String,
      default: 'piece',
      enum: ['piece', 'set', 'box', 'bag', 'kg', 'meter', 'liter', 'sqm', 'pair', 'unit', 'pack', 'roll', 'day']
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
      min: [0, 'Stock cannot be negative']
    },
    images: [{
      url: String,
      alt: String
    }],
    specifications: {
      type: Map,
      of: String
    },
    manufacturer: {
      type: String,
      trim: true
    },
    inStock: {
      type: Boolean,
      default: true
    },
    featured: {
      type: Boolean,
      default: false
    },
    tags: [String]
  },
  {
    timestamps: true
  }
);

// Index for search
productSchema.index({ name: 'text', description: 'text' });

const Product = mongoose.model('Product', productSchema);

export default Product;
