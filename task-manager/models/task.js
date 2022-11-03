const mongoose = require('mongoose');

/**
 * A schema, in general is a JSON object that defines the the structure and
 * contents of your data.
 * Schemas maintain structure, giving a clear idea of what is going into
 * the database, reducing preventable bugs and allowing for cleaner
 * code (no more having to check the type of a field coming out of the
 * database before using it).
 *
 * Schemas not only define the structure of your document
 * and casting of properties, they also define document instance methods,
 * static Model methods, compound indexes, and document lifecycle hooks
 * called middleware.
 *
 * Everything in Mongoose starts with a Schema.
 * Each schema maps to a MongoDB collection and
 * defines the shape of the documents within that collection.
 *
 * For better understating watch -> https://www.youtube.com/watch?v=QiGVCOM-DfY
 *
 */
const TaskSchema = new mongoose.Schema({
  // Mongoose has several built-in validators.
  // Some are shown below.
  name: {
    // interprets this schema to mean that `asset` is a string
    type: String,
    // Adds required validator to this SchemaType and custom error constructor
    required: [true, 'name cannot be empty'],
    // boolean, whether to always call .trim() on the value
    trim: true,
    // creates a validator that checks if the value length is not less
    // than the given number
    maxLength: [20, 'name cannot be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    // Sets a default value for this SchemaType.
    default: false,
  },
});

/**
 * Models are fancy constructors compiled from Schema definitions.
 *
 * An instance of a model is called a document.
 *
 * Models are responsible for creating and reading documents from the
 * underlying MongoDB database.
 */
module.exports = mongoose.model('Task', TaskSchema);
