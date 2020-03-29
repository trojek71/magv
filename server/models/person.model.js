import mongoose from 'mongoose'

const PersonSchema = new mongoose.Schema({
  
  name: {
    type: String,
    unique: true
  },
  email: {
    type:String,
    unique: true
  },
  address:{
    city: {type: String},
    street:{type: String}

  },
})

export default mongoose.model('person', PersonSchema)