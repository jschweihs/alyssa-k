<template>
	<div class="content white-off-bg">
		<div class="note">	
			<h1 class="purple-light">Contact</h1>
			<form>
				<div class="form-group">
					<label class="purple"for="contact-name">Name</label>
					<input 
						type="text" 
						id="contact-name" 
						class="form-control form-control-lg" 
						v-model="name"
					/>
					<label class="purple" for="contact-email">Email</label>
					<input 
						type="text" 
						id="contact-email" 
						class="form-control form-control-lg" 
						v-model="email"
					/>
					<label class="purple" for="contact-category">Role</label>
					<select 
						id="contact-category" 
						class="form-control form-control-lg" 
						v-model="category"
					>
						<option>Student</option>
						<option>Parent</option>
						<option>Faculty</option>
						<option>Other</option>
					</select>
					<label class="purple" for="contact-message">Message</label>
					<textarea 
						id="contact-message" 
						class="form-control form-control-lg" 
						v-model="message" 
						placeholder="Enter message here..."
					>
					</textarea>
					<button class="btn submit-btn white accent-bg">
						<i class="fas fa-envelope"></i> 
						<span class="large-text">Send Email</span>
					</button>
				</div>
			</form>
		</div>
		<div class="note">
			<p>I value your input and thank you so much for taking the time to reach out.  Please inform if you have any suggestions for our service.  It may take up to 24 hours to respond.</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: 		'',
				email: 		'',
				category: 	'Student',
				message: 	''
			}
		}
	}
</script>