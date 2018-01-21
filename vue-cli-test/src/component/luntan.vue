<template>
	<div class="head">
		<div class="header">
			<div class="icon-back" @click="$router.go(-1)"></div>
		</div>
		<div class="news-detail news-detail-page">
			<h1 class="title">{{list.title}}</h1>
			<div class="news-info b-line">
				<span class="data">{{list.time}}</span>
				<span class="publi">来源：{{list.author}}</span>
			</div>
		</div>
		<div class="news-page-text" style="overflow: scroll;height: 80vh;">
			<p v-html="list.content"></p>
			<p><img :src="list.img2" class="hero-pic"></p>
		</div>
	</div>
	

</template>

<script>
	export default{ 
		data(){
			return{
				list:[]
			}
		},
		created(){

			let id = this.$route.params.id;
	
			this.$http({
				url:"http://localhost:8001/luntan"
			}).then(res=>{

				this.list = res.data[0].data[id-1];
				console.log(this.list)
			}).catch(res=>{
				console.log('luntan.json error');
			})
		}
	}
</script>

<style>
	.news-page-text {
    	margin-top: 20px;
	}
</style>