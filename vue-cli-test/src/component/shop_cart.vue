<template>
	<div class="cart">
		<div class="header">
			<div class="icon-back" @click="$router.go(-1)"></div>
			<p>购物车</p>
		</div>
		<div class="kong" v-show="!shopcart.length">
			空空如也
		</div>
		<section v-show="shopcart.length">
			<ul>
				<li v-for="(item,index) in shopcart" :key="item.pid">
					<img :src="item.img"/>
					<div class="msg">
						<h3>{{item.txt}}</h3>
						<p>￥<span class="oprice">{{item.price*item.num}}</span></p>
						<button @click="changeitem({pid:item.pid,num:1})">+</button>
						<input type="number" v-model="item.num"/>
						<button @click="changeitem({pid:item.pid,num:-1})">-</button>
						<a href="#" @click="removeitem({pid:item.pid})">删除</a>
					</div>
				</li>
				
				<span href="#" @click="clearshopcart">清空购物车</span>
				<!--<h2>总计：￥<span>32423,666</span></h2>-->
				<a href="#">去下单</a>
				
			</ul>
		</section>
	</div>
</template>

<script>
	import {mapGetters,mapActions}from 'vuex';
	export default{
		
		computed:mapGetters([
			'shopcart'
		]),
		methods:mapActions([
			'changeitem','removeitem','clearshopcart'
		])
	}
</script>

<style scoped="scoped">
	.header{height: 8vh;position: relative;border-bottom: 1px solid #bbb;}
	.header .icon-back{position: absolute;left: 0;top: 50%;margin-top: -16px;}
	.header p{text-align: center;line-height: 8vh;}
	section{height: 92vh;overflow: auto;}
	ul h2{padding: 3vw;font-size: 6vw;}
	ul h2 span{color: #f00;font-size: 7vw;}
	ul>a{display: block;width: 50vw;height: 10vw;background: #f00;color: #fff;font-size: 6vw;text-align: center;margin: 0 auto;}
	ul>span{display: block;width: 30vw;height: 8vw;background: #f00;color: #fff;font-size: 5vw;text-align: center;margin: 10px;}
	ul li a{padding: 2vw 3vw;background: #f00;color: #fff;font-size: 3vw;}
	ul li{overflow: hidden;border-bottom: 1px solid #ccc;padding: 3vw;}
	ul li img{width: 40vw;float: left;}
	.msg{float: left;}
	.msg h3{font-size: 5vw;}
	.msg p span{color: #f00;font-size: 6vw;}
	button{width: 6vw;height: 6vw;vertical-align: middle;}
	input{width: 20vw;height:6vw;border: 1px solid #bbb;text-align: center;vertical-align: middle;}
	
	.kong{position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);}
</style>