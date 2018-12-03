<template>
	<div class="purple-dark-bg">
		<ul>
			<li class="sidebar-title white">
				<i class="fas fa-medkit"></i>
				 Classroom
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/"
				>
					Schedule and Cirriculum
				</router-link>
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/"
				>
					Evidence Based Practices
				</router-link>
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/"
				>
					Adaptive Tools and Strategies
				</router-link>
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/"
				>
					Student Spotlight
				</router-link>
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/"
				>
					Assignments
				</router-link>
			</li>
			<li class="sidebar-title white">
				<i class="fas fa-book"></i>
				 Information
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/"
				>
					Upcoming Events
				</router-link>
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/"
				>
					Standards and Goals
				</router-link>
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/"
				>
					Forms
				</router-link>
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/"
				>
					Educational Links and Apps
				</router-link>
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/"
				>
					Tips and Resources for Educators
				</router-link>
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/"
				>
					Parent Resources
				</router-link>
			</li>
		</ul>
	</div>
</template>

<style scoped>
	div {
		position: absolute;
		height: calc(100% - 120px);
		width: 260px;
		padding-top: 40px;
		padding-right: 16px;
		border-right: 2px solid #FF8B00;
	}

	ul {
		padding-left: 20px;
		list-style: none;
	}

	.sidebar-title {
		font-size: 24px;
		margin: 6px 0 10px 0;
	}
	.sidebar-item {
		font-size: 16px;
		letter-spacing: 1px;
		line-height: 18px;
		padding-left: 30px;
		margin-bottom: 15px;
	}
	.sidebar-item::hover {
		color: white;
	}
	.white {
		color: white;
	}
</style>