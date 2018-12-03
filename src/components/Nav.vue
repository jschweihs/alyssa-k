<template>
		<div>
			<router-link tag="img" to="/" class="logo" src="/images/logo.png"/>
			<h2 class="purple-light">lyssaKordpitoulas.com</h2>
			<ul>
				<li>
					<router-link class="accent" tag="a" to="/">
						<i class="fas fa-home"></i> Home
					</router-link>
				</li>
				<li>
					<router-link class="accent" tag="a" to="/about">
						<i class="fas fa-user-alt"></i> About
					</router-link>
				</li>
				<li>
					<router-link class="accent" tag="a" to="/contact">
						<i class="fas fa-envelope"></i> Contact
					</router-link>
				</li>
			</ul>
		</div>
</template>

<style scoped>
	div {
		height: 120px;
		margin: 0;
		border-bottom: 1px solid #FFF2E3;
	}

	.logo {
		margin-top: 16px;
		margin-left: 45px;
		cursor: pointer;
	}

	h2 {
		margin-left: 20px;
		position: absolute;
		top: 52px;
		left: 124px;
		font-size: 48px;
	}
	ul {
		list-style-type: none;
		margin: 0;
		margin-top: 74px;
		padding: 0;
		padding-right: 40px;
		float: right;
		overflow: hidden;
	}

	li {
		margin: 0;
		float: left;
	}

	li a {
		display: block;
		text-align: center;
		padding: 0 20px;
		font-size: 24px;
		text-decoration: none;
	}
</style>