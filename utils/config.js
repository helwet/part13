const PORT = process.env.PORT || 3003;
const MONGODB_URI = `mongodb+srv://puhelinluettelo:${process.env.PASSWORD}@cluster0.ojph5.mongodb.net/blogilista?retryWrites=true&w=majority`;

module.exports = {
  MONGODB_URI,
  PORT
};
