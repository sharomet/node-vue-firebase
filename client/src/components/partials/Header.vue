<template>
	<header id="header">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container">
				<router-link :to="{name: 'home'}" class="navbar-brand">Navbar</router-link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbar">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active">
							<router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>
