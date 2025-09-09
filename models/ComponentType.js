// models/ComponentType.js

// 1. Import Mongoose for schema creation.
const mongoose = require('mongoose');

// 2. Define the schema for the ComponentType model.
// This schema represents the metadata for a component that is available
// in the page builder, like a 'Hero Section' or 'Text Block'.
const componentTypeSchema = new mongoose.Schema(
  {
    // 'name' is the human-readable identifier for the component type.
    // This will be displayed in the admin UI. e.g., "Hero Section".
    name: {
      type: String,
      required: [true, 'ComponentType must have a name.'],
      unique: true, // Each component type must have a unique name.
      trim: true,
    },
    
    // 'icon' will store a string identifier for an icon to be displayed
    // in the admin UI, helping users visually identify components.
    // e.g., "FaImage", "FaHeading" from a library like react-icons.
    icon: {
      type: String,
      required: [true, 'ComponentType must have an icon identifier.'],
      trim: true,
    },

    // 'template' defines the structure of the props (the data fields)
    // for this component type. It's a blueprint for the editing form.
    // We use 'Mixed' to allow for a flexible JSON object structure.
    template: {
      type: mongoose.Schema.Types.Mixed,
      required: [true, 'ComponentType must have a template definition.'],
      default: {},
    },
  },
  {
    // Add timestamps to track when a component type is created or modified.
    timestamps: true,
  }
);

// 3. Create and export the Mongoose model.
// This compiles our schema into a model named 'ComponentType', which we can use
// to interact with the 'componenttypes' collection in MongoDB.
module.exports = mongoose.model('ComponentType', componentTypeSchema);
