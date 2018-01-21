<template>
	<div class="scroll-content">
	    <div class="scroll">
	        <div class="header home-header">
	            <div class="toolbar statusbar-padding active">
	                <button class="bar-button current-city"><i class="icon icon-set"></i></button>
	                <button class="bar-button icon-button"><i class="icon icon-msg"></i></button>
	            </div>
	        </div>
	        <div class="my-info">
	            <div class="my-info-background" style="background-color:#fa4949; -webkit-filter:blur(0px)"></div>
	            <img class="my-avatar" src="/src/assets/img/my-photo1.jpg">
	           
	            
	            <span class="name"><router-link tag="i" to="/login">{{this.$root.userName}}</router-link> |  <router-link to="/login" style="color: #fff;" @click.native="exit">注销</router-link></span>
	            <span class="my-vip" style="background:none">普通会员&nbsp;|&nbsp;积分:590&nbsp;|&nbsp;级别:初级</span>
	        </div>
	        <div class="my-car-shortcut">
	            <div class="layout-column">
	            	<router-link to="/my_reserve" class="col" rel="test">
	            		<span class="img-icon ">
									<img class="img-icon-home" src="/src/assets/images/icon-png/icon-ax-6.png" />
								</span>
	                    <span class="img-icon-name">我的收藏</span>
	            	</router-link>
	            	<router-link to="/my_coupon_content1" class="col" rel="test">
	            		<span class="img-icon ">
									<img class="img-icon-home" src="/src/assets/images/icon-png/icon-ax-7.png" />
								</span>
	                    <span class="img-icon-name">我的卡券</span>
	            	</router-link>
	                <router-link to="/my_order" class="col" rel="test">
	                	<span class="img-icon ">
									<img class="img-icon-home" src="/src/assets/images/icon-png/icon-ax-8.png" />
								</span>
	                    <span class="img-icon-name">我的消息</span>
	                </router-link>
	            </div>
	
	        </div>
	        <div class="devider b-line"></div>
	        <!-- 个人中心 begin-->
	        <div>
	            <div class="aui-list-cells" style="overflow: scroll;height: 45vh;">
	                <a href="javascript:;" class="aui-list-cell">
	                    <div class="aui-list-cell-fl"><img src="/src/assets/images/icon-png/icon-n-1.png"></div>
	                    <div class="aui-list-cell-cn">我的钱包</div>
	                    <div class="aui-list-cell-fr"></div>
	                </a>
	                <a href="javascript:;" class="aui-list-cell">
	                    <div class="aui-list-cell-fl"><img src="/src/assets/images/icon-png/icon-n-2.png"></div>
	                    <div class="aui-list-cell-cn">申请认证</div>
	                    <div class="aui-list-cell-fr">未认证</div>
	                </a>
	                <a href="javascript:;" class="aui-list-cell">
	                    <div class="aui-list-cell-fl"><img src="/src/assets/images/icon-png/icon-n-3.png"></div>
	                    <div class="aui-list-cell-cn">我的订单</div>
	                    <div class="aui-list-cell-fr"></div>
	                </a>
	                <a href="javascript:;" class="aui-list-cell">
	                    <div class="aui-list-cell-fl"><img src="/src/assets/images/icon-png/icon-n-4.png"></div>
	                    <div class="aui-list-cell-cn">每日任务</div>
	                    <div class="aui-list-cell-fr"></div>
	                </a>
	                <div class="devider b-line"></div>
	                <a href="javascript:;" class="aui-list-cell">
	                    <div class="aui-list-cell-fl"><img src="/src/assets/images/icon-png/icon-n-5.png"></div>
	                    <div class="aui-list-cell-cn">意见反馈</div>
	                    <div class="aui-list-cell-fr"></div>
	                </a>
	                <a href="javascript:;" class="aui-list-cell">
	                    <div class="aui-list-cell-fl"><img src="/src/assets/images/icon-png/icon-n-6.png"></div>
	                    <div class="aui-list-cell-cn">点击好评</div>
	                    <div class="aui-list-cell-fr"></div>
	                </a>
	                <div class="devider b-line"></div>
	                <a href="javascript:;" class="aui-list-cell">
	                    <div class="aui-list-cell-fl"><img src="/src/assets/images/icon-png/icon-n-7.png"></div>
	                    <div class="aui-list-cell-cn">我的收藏</div>
	                    <div class="aui-list-cell-fr"></div>
	                </a>
	                <a href="javascript:;" class="aui-list-cell">
	                    <div class="aui-list-cell-fl"><img src="/src/assets/images/icon-png/icon-n-8.png"></div>
	                    <div class="aui-list-cell-cn">浏览历史</div>
	                    <div class="aui-list-cell-fr"></div>
	                </a>
	                <div class="devider b-line"></div>
	            </div>
	        </div>
	
			
	    </div>
	</div>
</template>

<script>
import Vue from 'vue'
import axios from "axios";
	
	Vue.prototype.$http = axios;
	export default{
		data(){
			return{
				name:'1',
				pass:'1'
			}
		},
		mounted(){
			this.$http.get('http://localhost:8001/user').then((res)=>{
				console.log(res.data);
				for(var i = 0;i < res.data.length;i ++){
					if(res.data[i].username == this.name){}
				}
				
			}).catch((res)=>{
				console.log('error');
			})
			
		},
		methods:{
			exit(){
				localStorage.removeItem("userName");
				location.reload();
			}
		}
	}
</script>

<style scoped="scoped">
	.header{background:none;}
</style>