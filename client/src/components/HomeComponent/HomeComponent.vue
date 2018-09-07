<template>
	<div class="container">
		<ul>
			<li v-for="(user, index) of users" :key="index">{{ user.first_name }}</li>
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
						 let dat = res.data;
						 console.log(dat);
						 console.log(this.users);
						 this.users.push(dat);
					 })
					 .catch(err => console.log('Error!'));
			}
		}
	}
</script>
