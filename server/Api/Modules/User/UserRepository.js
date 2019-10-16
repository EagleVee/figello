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
  },
  role: {
    type: String,
    default: 'user'
  }
})

const UserModel = mongoose.model('User', UserSchema)

const find = async (query) => {
  const { paginate, page } = query
  if (paginate && page !== undefined) {
    const limit = Number(paginate)
    const skip = (Number(page) - 1) * Number(paginate)
    delete query.paginate
    delete query.page
    return UserModel.find(query)
      .limit(limit)
      .skip(skip)
  } else {
    return UserModel.find(query).populate('books')
  }
}

const count = async (query) => {
  return UserModel.count(query)
}

const findById = async (id) => {
  return UserModel.findById(id)
}

const findByEmail = async (email) => {
  return UserModel.findOne({ email: email })
}

const create = async (data) => {
  const newDocument = new UserModel(data)
  return newDocument.save()
}

const update = async (id, data) => {
  return UserModel.findByIdAndUpdate(id, { $set: data }, { new: true })
}

const deleteById = async (id) => {
  return UserModel.findByIdAndDelete(id)
}

const repository = {
  find,
  findById,
  findByEmail,
  count,
  create,
  update,
  deleteById
}

export default repository