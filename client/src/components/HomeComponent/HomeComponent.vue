<template>
	<div class="container">
		<ul>
			<li v-for="(user, index) of users" :key="index">{{ user.id + ' ' + user.first_name + ' ' + user.last_name }}</li>
		</ul>
		<div class="row">
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
