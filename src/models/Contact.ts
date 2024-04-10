import * as enums from '../utils/enums/Contact'

class Contacts {
  name: string
  priority: enums.Priority
  phone: string
  email: string
  id: number

  constructor(
    name: string,
    phone: string,
    email: string,
    id: number,
    priority: enums.Priority
  ) {
    this.name = name
    this.priority = priority
    this.phone = phone
    this.email = email
    this.id = id
  }
}

export default Contacts
