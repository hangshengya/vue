<template>
	<div class="car-exhibition">
		<div class="header">
			<div class="icon-back" @click="$router.go(-1)"></div>
		</div>
		<div style="overflow:auto;height: 100vh;margin-top: 10vw;">
			<div><img :src="list.img1" style="width:100%"></div>
			<div class="item-exhibition">
				<div class="item-exhibition-title">
					<h2>{{list.name}}</h2>
					<p>官方指导价:<em>{{list.price}}</em></p>
				</div>
				<span class="item-exhibition-h">{{list.show.length}}款有售</span>
			</div>
			<div class="item-exhibition-centre">
				<router-link tag="button" :to="'/goods_list/'+sid+'/'+id+'/'+uid">查看在售车辆</router-link>
			</div>
			<div class="devider t-line"></div>
			<div class="item-exhibition-les b-line">
				<h2>促销活动</h2>
				<span class="item-exhibition-more">更多优惠</span>
			</div>
			<div class="panel-content">
				<a class="panel-cont-finance item-ware-list" data-href="event-detail.html" target="navView" rel="service-level2">
					<div class="panel-cont-left"><img src="/src/assets/images/corolla.png" alt=""></div>
					<div class="panel-cont-right item-exhibition-t">
						<h2>志成一派 锐志邀您共享法兰西盛夏激情！</h2>
						<h3>爱车就在眼前，立刻拥有它不是问题。“零”利率购车更划算.爱车就在眼前，立刻拥有它不是问题。“零”利率购车更划算.</h3>
						<p>2016年10月9日-2016年12月28日</p>
					</div>
				</a>
				<a class="panel-cont-finance item-ware-list" data-href="event-detail.html" target="navView" rel="service-level2">
					<div class="panel-cont-left"><img src="/src/assets/images/corolla.png" alt=""></div>
					<div class="panel-cont-right item-exhibition-t">
						<h2>车窗侧挡雨板</h2>
						<h3>白色LED光源节能且彰显贵族时尚气质的设计。白天行...</h3>
						<p>时间：2016年10月9日-2016年12月28日</p>
					</div>
				</a>
				<a class="panel-cont-finance item-ware-list" data-href="event-detail.html" target="navView" rel="service-level2">
					<div class="panel-cont-left"><img src="/src/assets/images/corolla.png" alt=""></div>
					<div class="panel-cont-right item-exhibition-t">
						<h2>志成一派 锐志邀您共享法兰西盛夏激情！</h2>
						<h3>爱车就在眼前，立刻拥有它不是问题。“零”利率购车更划算.爱车就在眼前，立刻拥有它不是问题。“零”利率购车更划算.</h3>
						<p>2016年10月9日-2016年12月28日</p>
					</div>
				</a>
				<a class="panel-cont-finance item-ware-list" data-href="event-detail.html" target="navView" rel="service-level2">
					<div class="panel-cont-left"><img src="/src/assets/images/corolla.png" alt=""></div>
					<div class="panel-cont-right item-exhibition-t">
						<h2>车窗侧挡雨板</h2>
						<h3>白色LED光源节能且彰显贵族时尚气质的设计。白天行...</h3>
						<p>时间：2016年10月9日-2016年12月28日</p>
					</div>
				</a>
			</div>
		</div>
	</div>

</template>

<script>
	export default{ 
		data(){
			return{
				list:[],
				sid:'',
				id:'',
				uid:''
			}
		},
		created(){
			let sid = this.$route.params.sid;
			let id = this.$route.params.id;
			let uid = this.$route.params.uid;
			console.log(this.$route.params)
			this.$http({
				url:"http://localhost:8001/car"
			}).then(res=>{
				this.list = res.data[0].data[sid-1].car[id-1].seller[uid];
				this.sid = sid;
				this.id = id;
				this.uid = uid;
				console.log(this.list)
			}).catch(res=>{
				console.log('car_msg.json error');
			})
		}
	}
</script>

<style>
	.panel-cont-finance .panel-cont-right p {position:static;}

</style>