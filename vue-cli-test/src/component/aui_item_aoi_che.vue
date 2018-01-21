<template>
	<div class="haoche">
		<div class="aui-item-aoi-che" v-for="(item,index) in list" :key="index">
	        <div class=" btn-ss">
	            <div class="b-line">
	                <h1>{{item.sid}}</h1>
	            </div>
	        </div>
	        <ul>
	            <li v-for="(item1,index1) in item.car">
	            	<router-link :to="'/car_page/'+item.aid+'/'+item1.id">
	            		<div class="aui-item-car-img"><img :src="item1.img"></div>
	                    <div class="aui-item-car-tie">{{item1.brand}}</div>
	            	</router-link>
	            </li>
	        </ul>
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
		mounted(){
			this.$http({
				url:"http://localhost:8001/car"
			}).then(res=>{		
				this.list = res.data[0].data;
				console.log(this.list)
			}).catch(res=>{
				console.log('car_msg error');
			});
		}
	}
</script>

<style>

</style>