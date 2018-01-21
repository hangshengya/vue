<template>
	<div class="panel-content" style="padding-bottom:50px">
		<router-link :to="'/luntan/'+item.id" class="panel-cont-finance item-ware-list" target="navView" rel="service-level2" v-for="(item,index) in list" :key="item.id">
			<div class="panel-cont-left"><img :src="item.img1" alt=""></div>
			<div class="panel-cont-right">
				<h2>{{item.title}}</h2>
				<h3><em>{{item.author}}</em><span>{{item.comment}}</span></h3>
			</div>
		</router-link>
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
//			console.log(this.$http)
			this.$http({
				url:"http://localhost:8001/luntan"
			}).then(res=>{
//				console.log(res.data[0].data);
				this.list = res.data[0].data;
//				console.log(this.list)
			}).catch(res=>{
				console.log('luntan.json error');
			})
		}
	}
</script>

<style>
</style>