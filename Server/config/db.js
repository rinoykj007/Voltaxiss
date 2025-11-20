import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`✅ Database Name: ${conn.connection.name}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.error('⚠️  Server will continue without database connection');
    console.error('⚠️  Please start MongoDB or configure MongoDB Atlas');
    console.error('⚠️  Connection string: ' + process.env.MONGODB_URI);
    // Don't exit - let server run without DB for testing
  }
};

export default connectDB;
