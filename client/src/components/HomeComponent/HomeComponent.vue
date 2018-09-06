<template>
	<div class="container">
		<ul>
			<li v-for="(user, index) of users" :key="index">{{ user.first_name }}</li>
		</ul>
	</div>
</template>
<script>
import axios from 'axios';
	export default {
		data() {
			return {
				users: ''
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
			}
		}
	}
</script>
