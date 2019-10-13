import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  }
})

const UserModel = mongoose.model('User', UserSchema)

export const find = async (query) => {
  if (query.limit && query.skip !== undefined) {
    const limit = Number(query.limit)
    const skip = Number(query.skip)
    delete query.limit
    delete query.skip
    return UserModel.find(query)
      .populate('books')
      .limit(limit)
      .skip(skip)
  } else {
    return UserModel.find(query).populate('books')
  }
}

export const count = async (query) => {
  return UserModel.count(query)
}

export const findById = async (id) => {
  return UserModel.findById(id)
}

export const findByEmail = async (email) => {
  return UserModel.findOne({ email: email })
}

export const create = async (data) => {
  const newDocument = new UserModel(data)
  return newDocument.save()
}

export const update = async function (id, data) {
  return UserModel.findByIdAndUpdate(id, { $set: data }, { new: true })
}

export const deleteById = async function (id) {
  return UserModel.findByIdAndDelete(id)
}
