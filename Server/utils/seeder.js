import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/Product.js';
import User from '../models/User.js';
import Contact from '../models/Contact.js';

dotenv.config();

// Sample data - Real Volt Axis Products
const products = [
  // Electrical Trading Products
  { name: 'High-Quality Cables', category: 'Electrical Components', description: 'Electrical cables for industrial and commercial applications', price: 250, unit: 'meter', stock: 5000, manufacturer: 'Volt Axis Trading Est.', featured: true, inStock: true, tags: ['electrical', 'cables', 'power distribution'] },
  { name: 'Electrical Wires', category: 'Electrical Components', description: 'Wiring solutions for various electrical installations', price: 80, unit: 'meter', stock: 10000, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['electrical', 'wires', 'installation'] },
  { name: 'Switchgear', category: 'Electrical Components', description: 'Electrical switchgear for power control and distribution', price: 3500, unit: 'unit', stock: 50, manufacturer: 'Volt Axis Trading Est.', featured: true, inStock: true, tags: ['electrical', 'switchgear', 'power control'] },
  { name: 'Circuit Breakers', category: 'Electrical Components', description: 'Safety circuit breakers for electrical systems', price: 450, unit: 'piece', stock: 200, manufacturer: 'Volt Axis Trading Est.', featured: true, inStock: true, tags: ['electrical', 'circuit breakers', 'safety'] },
  { name: 'Lighting Systems', category: 'Electrical Components', description: 'Industrial and commercial lighting solutions', price: 850, unit: 'set', stock: 150, manufacturer: 'Volt Axis Trading Est.', featured: true, inStock: true, tags: ['electrical', 'lighting', 'systems'] },
  { name: 'Control Devices', category: 'Electrical Components', description: 'Electrical control devices for automation', price: 680, unit: 'unit', stock: 120, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['electrical', 'control', 'automation'] },
  { name: 'Automatic Transfer Switch (ATS)', category: 'Electrical Components', description: 'Automatic transfer switches for power backup systems', price: 5500, unit: 'unit', stock: 30, manufacturer: 'Volt Axis Trading Est.', featured: true, inStock: true, tags: ['electrical', 'ATS', 'power backup'] },
  { name: 'Automation Panels', category: 'Electrical Components', description: 'Control panels for industrial automation', price: 4200, unit: 'unit', stock: 40, manufacturer: 'Volt Axis Trading Est.', featured: true, inStock: true, tags: ['electrical', 'automation', 'panels'] },
  { name: 'Industrial Control & Sensors', category: 'Electrical Components', description: 'Precision tools for automation and monitoring', price: 1200, unit: 'set', stock: 80, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['electrical', 'sensors', 'control', 'automation'] },
  { name: 'Wiring & Cable Management', category: 'Electrical Components', description: 'Cable management solutions for organized installations', price: 320, unit: 'set', stock: 250, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['electrical', 'cable management', 'organization'] },
  { name: 'Panel Climate Control', category: 'Electrical Components', description: 'Protecting sensitive equipment from heat and environmental risks', price: 2800, unit: 'unit', stock: 45, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['electrical', 'climate control', 'protection'] },
  { name: 'Motor Control Centers (MCCs)', category: 'Electrical Components', description: 'Centralized motor control systems', price: 12000, unit: 'unit', stock: 15, manufacturer: 'Volt Axis Trading Est.', featured: true, inStock: true, tags: ['electrical', 'motor control', 'MCC'] },
  { name: 'Distribution Panel Boards', category: 'Electrical Components', description: 'Engineered for stable, efficient, and safe power distribution', price: 3800, unit: 'unit', stock: 60, manufacturer: 'Volt Axis Trading Est.', featured: true, inStock: true, tags: ['electrical', 'distribution', 'panel boards'] },

  // General Materials Supply
  { name: 'Industrial Tools', category: 'Tools & Equipment', description: 'Various industrial tools for construction and manufacturing', price: 450, unit: 'set', stock: 200, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['tools', 'industrial', 'equipment'] },
  { name: 'Hardware', category: 'Industrial Supplies', description: 'General hardware supplies for industrial use', price: 180, unit: 'set', stock: 500, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['hardware', 'supplies', 'industrial'] },
  { name: 'Fasteners', category: 'Industrial Supplies', description: 'Bolts, nuts, screws, and other fastening solutions', price: 95, unit: 'kg', stock: 2000, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['fasteners', 'bolts', 'nuts', 'hardware'] },
  { name: 'Industrial Pipes', category: 'Construction Materials', description: 'Industrial piping solutions for various applications', price: 280, unit: 'meter', stock: 1500, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['pipes', 'plumbing', 'construction'] },
  { name: 'Pipes & Fittings', category: 'Construction Materials', description: 'Comprehensive piping and fitting solutions', price: 350, unit: 'set', stock: 800, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['pipes', 'fittings', 'plumbing'] },

  // Safety & Construction
  { name: 'Personal Protective Equipment (PPE)', category: 'PPE', description: 'Complete range of personal protective equipment', price: 420, unit: 'set', stock: 600, manufacturer: 'Volt Axis Trading Est.', featured: true, inStock: true, tags: ['PPE', 'safety', 'protection'] },
  { name: 'Fire Protection Tools', category: 'Safety Equipment', description: 'Fire safety equipment and protection tools', price: 1500, unit: 'set', stock: 100, manufacturer: 'Volt Axis Trading Est.', featured: true, inStock: true, tags: ['fire protection', 'safety', 'emergency'] },
  { name: 'Construction Consumables', category: 'Construction Materials', description: 'Consumable materials for construction projects', price: 180, unit: 'set', stock: 1000, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['construction', 'consumables', 'materials'] },
  { name: 'Safety Supplies', category: 'Safety Equipment', description: 'Comprehensive safety supplies for worksites', price: 320, unit: 'set', stock: 400, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['safety', 'supplies', 'protection'] },

  // Consumable Products
  { name: 'Adhesives', category: 'Industrial Supplies', description: 'Industrial adhesives for various applications', price: 85, unit: 'unit', stock: 800, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['adhesives', 'consumables', 'bonding'] },
  { name: 'Industrial Tapes', category: 'Industrial Supplies', description: 'Industrial tapes for sealing, bonding, and protection', price: 45, unit: 'roll', stock: 1200, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['tapes', 'consumables', 'sealing'] },
  { name: 'Lubricants', category: 'Industrial Supplies', description: 'Lubrication products for machinery maintenance', price: 120, unit: 'liter', stock: 500, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['lubricants', 'maintenance', 'consumables'] },
  { name: 'Cleaning Agents', category: 'Industrial Supplies', description: 'Industrial cleaning solutions', price: 75, unit: 'liter', stock: 600, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['cleaning', 'chemicals', 'maintenance'] },

  // Tools & Equipment
  { name: 'Power Tools', category: 'Tools & Equipment', description: 'Drills, grinders, welders, and saws for high-performance applications', price: 1200, unit: 'unit', stock: 150, manufacturer: 'Volt Axis Trading Est.', featured: true, inStock: true, tags: ['power tools', 'equipment', 'industrial'] },
  { name: 'Hand Tools', category: 'Tools & Equipment', description: 'Spanners, hammers, pliers, and wrenches that combine reliability with precision', price: 280, unit: 'set', stock: 300, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['hand tools', 'equipment', 'manual'] },
  { name: 'Industrial Machinery', category: 'Tools & Equipment', description: 'Heavy-duty machines built to enhance productivity and efficiency', price: 25000, unit: 'unit', stock: 20, manufacturer: 'Volt Axis Trading Est.', featured: true, inStock: true, tags: ['machinery', 'industrial', 'heavy equipment'] },

  // Welding Consumables & Fasteners
  { name: 'Brazing Alloys', category: 'Industrial Supplies', description: 'Provide strong, corrosion-resistant joints, suitable for piping and structural works in harsh conditions', price: 450, unit: 'kg', stock: 200, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['welding', 'brazing', 'alloys'] },
  { name: 'Welding Fluxes', category: 'Industrial Supplies', description: 'Ensure smooth welding operations, producing clean finishes with minimal defects', price: 180, unit: 'kg', stock: 300, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['welding', 'flux', 'consumables'] },
  { name: 'Gouging Carbons', category: 'Industrial Supplies', description: 'Premium rods for cutting, shaping, and removing metal with high accuracy', price: 220, unit: 'pack', stock: 150, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['welding', 'gouging', 'carbon rods'] },
  { name: 'High-Strength Fasteners', category: 'Industrial Supplies', description: 'High-strength nuts, bolts, and clamps engineered for durability and reliability', price: 150, unit: 'kg', stock: 1000, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['fasteners', 'nuts', 'bolts', 'clamps'] },
  { name: 'Abrasives - Flap & Cutting Discs', category: 'Tools & Equipment', description: 'High-quality tools for grinding, blending, and cutting metal efficiently', price: 95, unit: 'pack', stock: 800, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['abrasives', 'cutting discs', 'grinding'] },

  // Rental Equipment (featured items)
  { name: 'Mobile Cranes (Rental)', category: 'Tools & Equipment', description: 'Mobile cranes for lifting and structural works', price: 5000, unit: 'day', stock: 10, manufacturer: 'Volt Axis Trading Est.', featured: true, inStock: true, tags: ['rental', 'cranes', 'heavy equipment'] },
  { name: 'Excavators (Rental)', category: 'Tools & Equipment', description: 'High-performance earthmoving machines for construction and site preparation', price: 3500, unit: 'day', stock: 15, manufacturer: 'Volt Axis Trading Est.', featured: true, inStock: true, tags: ['rental', 'excavators', 'loaders'] },
  { name: 'Generators (Rental)', category: 'Tools & Equipment', description: 'Diesel and portable generators to ensure uninterrupted power supply on-site', price: 800, unit: 'day', stock: 25, manufacturer: 'Volt Axis Trading Est.', featured: true, inStock: true, tags: ['rental', 'generators', 'power'] },
  { name: 'Forklifts (Rental)', category: 'Tools & Equipment', description: 'For warehouses, factories, and logistics support', price: 1200, unit: 'day', stock: 12, manufacturer: 'Volt Axis Trading Est.', featured: true, inStock: true, tags: ['rental', 'forklifts', 'material handling'] },

  // Furniture Solutions
  { name: 'Executive Furniture', category: 'Other', description: 'Premium custom designs for leadership environments', price: 8500, unit: 'set', stock: 30, manufacturer: 'Volt Axis Trading Est.', featured: true, inStock: true, tags: ['furniture', 'executive', 'premium'] },
  { name: 'Office Furniture', category: 'Other', description: 'Practical furniture for staff areas and offices', price: 2500, unit: 'set', stock: 100, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['furniture', 'office', 'staff'] },
  { name: 'Camp Furniture', category: 'Other', description: 'Durable furniture for camp facilities', price: 1800, unit: 'set', stock: 80, manufacturer: 'Volt Axis Trading Est.', featured: false, inStock: true, tags: ['furniture', 'camp', 'accommodation'] }
];

const users = [
  {
    name: 'Admin User',
    email: 'admin@voltaxis.com',
    password: 'admin123456',
    role: 'admin',
    phone: '+966501234567',
    company: 'Volt Axis Trading Est.',
    isActive: true
  },
  {
    name: 'Test User',
    email: 'user@example.com',
    password: 'user123456',
    role: 'user',
    phone: '+966507654321',
    company: 'Test Company',
    isActive: true
  }
];

const contacts = [
  {
    name: 'Mohammed Ahmed',
    email: 'mohammed@example.com',
    phone: '+966501111111',
    company: 'Construction Arabia',
    subject: 'Bulk Order Inquiry',
    message: 'I am interested in placing a bulk order for safety equipment. Please contact me with pricing details.',
    status: 'new'
  },
  {
    name: 'Sarah Ali',
    email: 'sarah@example.com',
    phone: '+966502222222',
    company: 'BuildRight KSA',
    subject: 'Product Availability',
    message: 'Do you have steel rebars in stock? I need them urgently for a construction project.',
    status: 'new'
  }
];

// Connect to DB
mongoose.connect(process.env.MONGODB_URI);

// Import data
const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Contact.deleteMany();

    await Product.insertMany(products);

    // Use create() instead of insertMany() to trigger password hashing
    for (const userData of users) {
      await User.create(userData);
    }

    await Contact.insertMany(contacts);

    console.log('Data Imported Successfully!');
    console.log('Sample Users:');
    console.log('  Admin - Email: admin@voltaxis.com, Password: admin123456');
    console.log('  User  - Email: user@example.com, Password: user123456');
    process.exit();
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Contact.deleteMany();

    console.log('Data Destroyed Successfully!');
    process.exit();
  } catch (error) {
    console.error('Error deleting data:', error);
    process.exit(1);
  }
};

// Check command line arguments
if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
} else {
  console.log('Please use one of the following flags:');
  console.log('  -i  Import sample data');
  console.log('  -d  Delete all data');
  console.log('\nExample: node utils/seeder.js -i');
  process.exit();
}
