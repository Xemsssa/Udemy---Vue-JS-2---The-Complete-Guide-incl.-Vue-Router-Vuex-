
<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<!-- <app-quote quote="Quote from props"></app-quote> -->
				<button @click="selected = 'Quote'">Quote</button>	
				<button @click="selected = 'Author'">Author</button>	
				<button @click="selected = 'New'">New</button>

				<p>{{selected}}</p>	

				<!-- <app-quote> -->
					<!-- <h1>Quote header</h1> -->
					<!-- <h1>{{quoteHeader}}</h1> -->
 					<!-- <p>Lorem ipsum dolor.</p> -->

 				<!-- 	<h1 slot="title">{{quoteHeader}}</h1>					
 					<p slot="paragr">Lorem ipsum dolor.</p> -->

 					<!-- <h1 slot="title">{{quoteHeader}}</h1> -->
 					<!-- <span slot="subtitle">Passed Subtitle</span> -->
 					<!-- <p>Lorem ipsum dolor.</p> -->
				<!-- </app-quote> -->
				<keep-alive>
					<components :is='selected'>
						<h1 slot="title">{{quoteHeader}}</h1>
	 					<span slot="subtitle">Passed Subtitle</span>
	 					<p>Lorem ipsum dolor.</p>
					</components>
				</keep-alive>
			</div>
		</div>
	</div>
</template>

<script>
import Quote from './components/Quote.vue';
import Author from './components/Author.vue';
import New from './components/New.vue';

export default {
	data() {
		return {
			quoteHeader: "Quote header",
			selected: "Quote"
		}
	},

	components: {
		"app-quote": Quote,
		Author,
		New
	}
}
</script>

<style scoped>

</style>
