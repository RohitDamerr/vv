const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('../config/db');
const ComponentType = require('../models/ComponentType');
const Page = require('../models/Page');
const componentTypesData = require('./componentData');

require('dotenv').config({ path: './.env' });
console.log(process.env.MONGO_URI);

connectDB();

const importData = async () => {
  try {
    await ComponentType.deleteMany();
    await Page.deleteMany();
    await ComponentType.insertMany(componentTypesData);
    console.log('\x1b[32m%s\x1b[0m', '✅ Data Seeded Successfully!');
    process.exit();
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', `❌ Error seeding data: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await ComponentType.deleteMany();
    await Page.deleteMany();
    console.log('\x1b[33m%s\x1b[0m', '🔥 Data Destroyed Successfully!');
    process.exit();
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', `❌ Error destroying data: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
