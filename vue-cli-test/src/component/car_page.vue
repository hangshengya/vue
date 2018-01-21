<template>
	<div class="car-page">
		<div class="header">
			<div class="icon-back" @click="$router.go(-1)"></div>
		</div>
		<div class=" btn-ss">
			<div class="b-line">
				<h1>{{list.brand}}</h1>
			</div>
		</div>
		<div class="show-home-slide active show-home-slide11">
			
			<router-link :to="'/car_exhibition/'+sid+'/'+id+'/'+item.uid" class="item-tnp item-tnp-tab b-line" target="navView" rel="service-level2" v-for="(item,index) in list.seller" :key="item.uid">
				<div class="aui-item-im"><img class="thumbnail" :src="item.img1"></div>
				<div>
					<p class="name">{{item.name}}</p>
					<p class="price">{{item.price}}</p>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{ 
		data(){
			return{
				list:[],
				sid:'',
				id:''
				
			}
		},
		created(){
			let sid = this.$route.params.sid;
			let id = this.$route.params.id;
			console.log(this.$route.params)
			this.$http({
				url:"http://localhost:8001/car"
			}).then(res=>{
				this.list = res.data[0].data[sid-1].car[id-1];
				this.sid = sid;
				this.id = id;
				console.log(this.list)
			}).catch(res=>{
				console.log('car_msg.json error');
			})
		}
	}
</script>

<style>
	.show-home-slide{overflow: scroll;height: 90vh;}
</style>