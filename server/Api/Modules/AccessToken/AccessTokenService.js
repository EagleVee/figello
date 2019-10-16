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

const service = {
  find,
  findById,
  create,
  update,
  deleteByID
}

export default service
