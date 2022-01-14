import axios from 'axios'

const baseUrl = axios.create({baseURL:'http://localhost:3000'})

// Users Information Class
class UsersManageServices {

 // Create a Function for get All Users
  static getAllUsersServices() {
    return baseUrl.get('users')
  }
// Add New User
  static addUsersServices(user) {
    return baseUrl.post('/users' , user)
  }
}
export default UsersManageServices
