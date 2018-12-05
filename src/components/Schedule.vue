<template>
	<div class="content white-bg">
		<div class="note">

			<h1 class="purple-light">Schedule</h1>
			<h3 class="orange">"A Day in the Life"</h3>
			<p>Our classroom is a low incidence high school classroom that is mainly comprised of students with Autism Spectrum Disorder.</p>

			<table>
				<tr>
					<th class="time">Time</th>
					<th>Monday</th>
					<th>Tuesday</th>
					<th>Wednesday</th>
					<th>Thursday</th>
					<th>Friday</th>
				</tr>
				<tr>
					<td class="time">7:45am-8:00am</td>
					<td class="activity" colspan="5">Students arrive / Unpack belongings / Hygiene</td>
				</tr>
				<tr>
					<td class="time">8:00am-8:20am</td>
					<td class="activity" colspan="5">Morning Meeting</td>
				</tr>
				<tr>
					<td class="time">8:20am-9:20am</td>
					<td class="activity" colspan="5">Writing</td>
				</tr>
				<tr>
					<td class="time">9:20am-9:30am</td>
					<td class="activity" colspan="5">Brain Break</td>
				</tr>
				<tr>
					<td class="time">9:30am-10:15am</td>
					<td class="activity" colspan="5">Reading</td>
				</tr>
				<tr>
					<td class="time">10:15am-11:15am</td>
					<td class="activity" colspan="5">Math</td>
				</tr>
				<tr>
					<td class="time">11:15am-12:45pm</td>
					<td class="activity" colspan="5">Meal prep / Lunch / Clean-up</td>
				</tr>
				<tr>
					<td class="time">11:45pm-1:45pm</td>
					<td class="activity">Science</td>
					<td class="activity">Technology</td>
					<td class="activity">Social Studies</td>
					<td class="activity">Health</td>
					<td class="activity" rowspan="5">Community Outing</td>
				</tr>
				<tr>
					<td class="time">1:45pm-2:00pm</td>
					<td class="activity" colspan="4">Brain Break</td>
				</tr>
				<tr>
					<td class="time">2:00pm-2:45pm</td>
					<td class="activity" colspan="4">Vocational / Life Skills</td>
				</tr>
				<tr>
					<td class="time">2:45pm-3:15pm</td>
					<td class="activity" colspan="4">Social / Group-Centered Activities</td>
				</tr>
				<tr>
					<td class="time">3:15pm-3:30pm</td>
					<td class="activity" colspan="4">Goodbye Group / Pack up / Go Home</td>
				</tr>
			</table>
			<p>Student schedules may vary as they are often pulled out of the classroom for therapies. These specific times will be shown on individual student schedules.</p>
		</div>
	</div>
</template>

<style scoped>

	table {
		margin-top: 3 0px;
		margin-bottom: 30px;
	}
	th {
		width: 200px;
		color: #666;
	}

	th, td {
		border: 1px solid #FFBC6D;
		padding: 5px;
		font-size: 18px;
	}

	.time {
		width: 300px;
		padding-left: 20px;
	}
	.activity {
		text-align: center;
	}
</style>