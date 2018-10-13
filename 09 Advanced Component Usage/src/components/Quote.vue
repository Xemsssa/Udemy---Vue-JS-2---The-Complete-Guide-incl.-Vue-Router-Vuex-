<template>
	<div>
	 	<!-- <p>{{ quote }}</p> -->
	 	<!-- <slot></slot> -->

	 <!-- 	<slot name="title"></slot>
	 	<hr>
	 	<slot name="paragr"></slot> -->

	 <!-- 	<slot name="title"></slot>
	 	<span><slot name="subtitle">Default Subtitle</slot></span>
	 	<hr>
	 	<slot></slot> -->

	 	<!-- <h1 slot="title">{{quoteHeader}}</h1>
		<span slot="subtitle">Passed Subtitle</span>
		<p>Lorem ipsum dolor.</p> -->
	 </div> 
</template>

<script >
export default {
	// props: ['quote']
}
</script>

<style type="text/css" scoped>
	
	div {
		border: 1px solid #ccc;
		box-shadow:  1px 1px 2px black;
		padding: 30px;
		margin: 30px auto;
		text-align: center;
	}

	h1 {
		color: red;
	}
</style>