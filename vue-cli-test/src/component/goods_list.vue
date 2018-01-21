<template>
	<div class="goods">
		<div class="header">
			<div class="icon-back" @click="$router.go(-1)"></div>
			<p>在售车辆</p>
		</div>
		<section>
			<ul>
				<li v-for="(item,index) in list" :key="item.pid">
					<img :src="item.img"/>
					<div class="msg">
						<h3>{{item.txt}}</h3>
						<p>￥<span>{{item.price}}</span></p>
						<!--<button @click="changenum({pid:item.pid,num:1})">+</button>
						<input type="number" v-model="num[item.pid]" value="0"/>
						<button @click="changenum({pid:item.pid,num:-1})">-</button>-->
						
						<a href="#" @click="additem(item)">加入购物车</a>
					</div>
				</li>
				
				<router-link to="/shop_cart" class="come">进入购物车</router-link>
			</ul>
			
		</section>
	</div>
</template>

<script>
	
	import {mapActions,mapGetters} from 'vuex';
	export default{ 
		data(){
			return{
				list:[],
				num:{}
			}
		},
		created(){
//			changenum;
			let sid = this.$route.params.sid;
			let id = this.$route.params.id;
			let uid = this.$route.params.uid;
//			console.log(this.$route.params)
			this.$http({
				url:"http://localhost:8001/car"
			}).then(res=>{
				this.list = res.data[0].data[sid-1].car[id-1].seller[uid].show;
				console.log(this.list)
			}).catch(res=>{
				console.log('car_msg.json error');
			})
		},

		/*methods:mapActions([
				'additem','changeitem'
			])*/
		methods:{
			...mapActions([
				'additem','changeitem'
			]),
			changenum(obj){
				if(!this.num[obj.pid]){
					this.num[obj.pid] = 1;
				}else{
					this.num[obj.pid]+=obj.num;
					console.log(this.num)
				}
				
			}
		}
	}
	
	
</script>

<style scoped="scoped">
	.header{height: 8vh;position: relative;border-bottom: 1px solid #bbb;}
	.header .icon-back{position: absolute;left: 0;top: 50%;margin-top: -16px;}
	.header p{text-align: center;line-height: 8vh;}
	section{height: 92vh;overflow: auto;}
	ul li a{padding: 2vw 3vw;background: #f00;color: #fff;font-size: 3vw;}
	ul li{overflow: hidden;border-bottom: 1px solid #ccc;padding: 3vw;}
	ul li img{width: 40vw;float: left;}
	.msg{float: left;}
	.msg h3{font-size: 5vw;}
	.msg p span{color: #f00;font-size: 6vw;}
	button{width: 6vw;height: 6vw;vertical-align: middle;}
	input{width: 15vw;height:6vw;border: 1px solid #bbb;text-align: center;vertical-align: middle;}
	.come{display: block;width: 50vw;height: 10vw;background: #f00;color: #fff;font-size: 6vw;text-align: center;margin: 0 auto;margin-top: 5vw;}
</style>