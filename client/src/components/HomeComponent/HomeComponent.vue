<template>
	<div class="container">
		<div class="row mb-4">
			<div class="col-md-5">
				<div class="card">
					<div class="card-header">Add User</div>
					<div class="card-body">
						<form @submit.prevent="addUser">
							<div class="form-group">
								<input type="text" class="form-control" v-model="firstName" placeholder="First Name">
							</div>
							<div class="form-group">
								<input type="text" class="form-control" v-model="lastName" placeholder="Last Name">
							</div>
							<div class="form-group">
								<input type="text" class="form-control" v-model="age" placeholder="Age">
							</div>
							<div class="form-group mb-0 text-right">
								<button type="submit" class="btn btn-primary">Add User</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

		<div class="table-responsive-sm">
			<table class="table table-striped table-hover table-sm table-bordered">
				<thead>
					<tr>
						<th scope="col" style="width: 65px">#</th>
						<th scope="col" class="text-center">First Name</th>
						<th scope="col" class="text-center">Last Name</th>
						<th scope="col" class="text-center">Age</th>
						<th scope="col" class="text-center" style="width: 105px">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(user, index) of users" :key="index">
						<td class="align-middle">{{ user.id.slice(0, 5) + '...' }}</td>
						<td class="text-center align-middle">{{ user.first_name }}</td>
						<td class="text-center align-middle">{{ user.last_name }}</td>
						<td class="text-center align-middle">{{ user.age }}</td>
						<td class="text-center">
							<button type="button" class="btn btn-sm btn-primary">Edit</button>
							<button type="button" class="btn btn-sm btn-danger">Del</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
	export default {
		data() {
			return {
				users: [],
				firstName: '',
				lastName: '',
				age: ''
			}
		},
		created() {
        	this.getAllUser();
    	},
		methods: {
			getAllUser() {
				axios.get('http://localhost:3100/api/users/')
					 .then(res => this.users = res.data)
					 .catch(err => console.log('Error!'));
			},
			addUser() {
				const data = JSON.stringify({
					first_name: this.firstName,
					last_name: this.lastName,
					age: this.age
			    });
				axios.post('http://localhost:3100/api/users/', data, {
				        headers: {
							//'Accept': 'application/json',
							'Content-Type': 'application/json'
						}
				    })
					 .then(res => {
						this.users.push(res.data);
						this.firstName = '';
						this.lastName = '';
						this.age = '';
					 })
					 .catch(err => console.log('Error!'));
			}
		}
	}
</script>
