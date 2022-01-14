<template>
    <div class="vue-form py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <!-- Title -->
            <h1 class=" text-info border-bottom py-2 ">Vue Form API</h1>
            <!-- Form -->
              <form @submit.prevent="addUser()" class="row g-3  p-3 shadow mt-4 rounded">
                <!-- First Name -->
                <div class="col-md-6">
                  <label for="inputFirstName" class="form-label">First Name</label>
                  <input v-model="userInfo.firstName" required type="text" class="form-control" id="inputFirstName">
                </div>
                <!-- Last Name -->
                <div class="col-md-6">
                  <label for="inputLastName" class="form-label">Last Name</label>
                  <input v-model="userInfo.lastName" required type="text" class="form-control" id="inputLastName">
                </div>
                <!-- Email  -->
                <div class="col-md-6">
                  <label for="inputEmail" class="form-label">Email</label>
                  <input v-model="userInfo.email" required type="email" class="form-control" id="inputEmail">
                </div>
                <!-- Password -->
                <div class="col-md-6">
                  <label for="inputPassword" class="form-label">Password</label>
                  <input v-model="userInfo.password" required type="password" class="form-control" id="inputPassword">
                </div>
                <!-- Address -->
                <div class="col-12">
                  <label for="inputAddress" class="form-label">Address</label>
                  <input  v-model="userInfo.address" required type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                </div>
                <div class="col-12 text-center">
                  <button type="submit" class="btn btn-primary ">Submit</button>
                </div>
              </form>
          </div>
          <div class="col-md-6">
            <!-- List User Information -->
            <div v-if="AllUsers" class="user-info ">
              <h1 class=" text-info border-bottom py-2">Users List</h1>
                  <table class="table table-striped table-dark mt-4 ">
                    <thead>
                      <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">password</th>
                        <th scope="col">address</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in AllUsers " :key="user">
                        <td>{{user.firstName + " " + user.lastName}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.password}}</td>
                        <td>{{user.address}}</td>
                      </tr>
                    </tbody>
                  </table>
            </div>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
// Import Users Services
import UsersManageServices from '@/Services/Users.services'

export default {
  name: "App",
    data() {
    return {
      AllUsers:[],
      userInfo:{
        firstName:'',
        lastName:'',
        email:'', 
        password:'',
        address:'',
      },
    }
  },
  created() {
    this.getAllUser()
  },
  methods:{
  // Get All User 
    getAllUser(){
      UsersManageServices.getAllUsersServices().then(res => {
        this.AllUsers = res.data
        // console.log(res.data)
      }).catch((error) => {
        console.error(error)
      })
    },
    // Add New User
    addUser(){
      UsersManageServices.addUsersServices(this.userInfo).then(res => {
        console.log('Add Success')
        this.getAllUser()
      }).catch((error) => {
        console.error(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
