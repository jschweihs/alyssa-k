<template>
	<div class="purple-dark-bg">
		<ul>
			<li class="sidebar-title white">
				<i class="fas fa-university"></i>
				 Classroom
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/statement"
				>
					Educational Statement
				</router-link>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/curriculum"
				>
					 Curriculum Guide
				</router-link>
			</li>
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/schedule"
				>
					Schedule
				</router-link>
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/practices"
				>
					Evidence Based Practices
				</router-link>
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/tools"
				>
					Adaptive Tools & Strategies
				</router-link>
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/assignments"
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
					to="/events"
				>
					Upcoming Events
				</router-link>
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/forms"
				>
					Forms
				</router-link>
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/links"
				>
					Educational Links for Students
				</router-link>
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/educators"
				>
					Resources for Educators
				</router-link>
			</li>
			<li class="sidebar-item">
				<router-link 
					class="purple-verylight"
					tag="a" 
					to="/parents"
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
		min-height: 574px;
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