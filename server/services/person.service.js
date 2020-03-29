import Person from '../models/person.model'

export function create(data) {
  return Person.create(data)
}

export function updateOne(data) {
  return Person.update(data)
}
export function findAll() {
  return Person.find()
}