// models/Page.js

// 1. Import Mongoose to use its schema creation capabilities.
const mongoose = require('mongoose');

// 2. Define the schema for our Page model.
// A schema is a blueprint that defines the structure of documents in a MongoDB collection.
const pageSchema = new mongoose.Schema(
  {
    // 'title' is the human-readable name of the page.
    title: {
      type: String,       // The data type must be a string.
      required: true,     // This field is mandatory. A page must have a title.
      trim: true,         // Removes any leading or trailing whitespace from the title.
    },
    // 'slug' is the URL-friendly version of the title. e.g., "About Us" -> "about-us".
    slug: {
      type: String,
      required: true,
      unique: true,       // Every page must have a unique slug to avoid URL conflicts.
      trim: true,
      lowercase: true,    // Slugs are typically stored in lowercase for consistency.
    },
    // 'status' indicates whether the page is a draft or published.
     status: {
    type: String,
    enum: ['DRAFT', 'PUBLISHED', 'ARCHIVED'],
    default: 'DRAFT'
  },
    // 'content' is the core of our page builder. It will store a flexible array of component data.
 content: [
      {
        // 'componentType' stores a reference to a document in the 'ComponentType' collection.
        // This is the link that tells us what kind of component this is (e.g., Hero, TextBlock).
        componentType: {
          type: mongoose.Schema.Types.ObjectId, // We store the ID of the component type.
          ref: 'ComponentType',                 // This 'ref' tells Mongoose which model to look in for this ID.
          required: true,
        },
        // 'props' will hold the specific data for this instance of the component.
        // We still use 'Mixed' here because the props structure will be different
        // for every component type, giving us the flexibility we need.
        props: {
          type: mongoose.Schema.Types.Mixed,
          required: true,
          default: {},
        },
      },
    ],                      // Defaults to an empty array for new pages.
    },
  
  {
    // 3. Add options to the schema.
    // 'timestamps: true' automatically adds 'createdAt' and 'updatedAt' fields to our documents.
    timestamps: true,
  }
);

// 4. Create and export the Mongoose model.
// mongoose.model() compiles the schema into a model.
// The first argument 'Page' is the singular name of the model.
// Mongoose will automatically look for the plural, lowercased version of this name
// for the collection in MongoDB (i.e., 'pages').
module.exports = mongoose.model('Page', pageSchema);