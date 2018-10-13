<template>
	<div>
		This is New

		<button @click="counter++"></button>
		<p>{{counter}}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				counter: 0
			}
		},

		destroyed() {
			console.log("destroyed");
		},
		deactivated() {
			
		}
	}
	
</script>