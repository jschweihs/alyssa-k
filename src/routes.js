import Home			from './components/Home.vue';
import About		from './components/About.vue';
import Contact		from './components/Contact.vue';

import Statement 	from './components/Statement.vue';
import Schedule 	from './components/Schedule.vue';
import Curriculum 	from './components/Curriculum.vue';
import Practices 	from './components/Practices.vue';
import Tools 		from './components/Tools.vue';
import Assignments 	from './components/Assignments.vue';
import Events 	 	from './components/Events.vue';
import Forms 		from './components/Forms.vue';
import Links 		from './components/Links.vue';
import Educators 	from './components/Educators.vue';
import Parents 	 	from './components/Parents.vue';

export const routes = [
	{
		path: 		'/',
		component: 	Home
	},
	{
		path: 		'/about',
		component: 	About
	},
	{
		path: 		'/contact',
		component: 	Contact
	},
	{
		path: 		'/statement',
		component:  Statement
	},
	{
		path: 		'/schedule',
		component: 	Schedule
	},
	{
		path: 		'/curriculum',
		component: 	Curriculum
	},
	{
		path: 		'/practices',
		component: 	Practices
	},
	{
		path: 		'/tools',
		component: 	Tools
	},
	{
		path: 		'/assignments',
		component: 	Assignments
	},
	{
		path: 		'/events',
		component: 	Events
	},
	{
		path: 		'/forms',
		component: 	Forms
	},
	{
		path: 		'/links',
		component: 	Links
	},
	{
		path: 		'/educators',
		component: 	Educators
	},
	{
		path: 		'/parents',
		component: 	Parents
	},
	{
		path: 		'*',
		component: 	Home
	}
];