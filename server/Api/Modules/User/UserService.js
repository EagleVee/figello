import Repository from './UserRepository'

const find = async (query) => {
  const data = await Repository.find(query)
  const total = await Repository.count(query)
  return {
    data: data
  }
}

const findById = async (id) => {
  return Repository.findById(id)
}

const create = async (data) => {
  if (!data || !data.name || !data.email) {
    throw new Error('Missing input!')
  }

  if (!data || !data.name || !data.email) {
    throw new Error('Missing input!')
  }

  if (!validateEmail(data.email)) {
    throw new Error('Email is not valid!')
  }

  return Repository.create(data)
}

const update = async function (id, data) {
  const existedRecord = await Repository.findById(id)
  if (!existedRecord) {
    throw new Error('Entity not found!')
  }

  return Repository.update(id, data)
}

const deleteByID = async (id) => {
  const existedRecord = await Repository.findById(id)
  if (!existedRecord) {
    throw new Error('Entity not found!')
  }

  return Repository.delete(id)
}

function validateEmail (email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const UserService = {
  find,
  findById,
  create,
  update,
  deleteByID
}

export default UserService
