<template>
  <div class="common">
		<div class="header">
				
				<router-link tag="div" to="/my" class="icon-back"></router-link>
			</div>
			<div class="con">
				<h2>注册</h2>
				<div class="deng"><router-link to="/login">登录 | </router-link><router-link to="/reg">注册</router-link></div>
				<label for="name">用户名：</label><input type="text" id="name" v-model="name"/><br/>
				<label for="pass">密码：</label><input type="text" id="pass" v-model="pass"/><br/>
				<button @click="getdata">注册</button>
			</div>
	</div>
</template>
<style scoped>
.header{height: 8vw;}
.con{position: absolute;top: 30%;left: 50%;transform: translate(-50%,-50%);}
h2{text-align: center;}
input{border: 1px solid #ccc;height: 8vw;}
button{width: 35vw;height: 8vw;margin: 6vw auto;display: block;}
.deng{text-align: center;}

</style>
<script>
	import Vue from 'vue'
	import axios from "axios";
	Vue.prototype.$http = axios;
	export default{
		data(){
			return{
				name:'',
				pass:''
			}
		},
		methods:{
			getdata(){
				this.$http.get('http://localhost:8001/reg',{
					params:{username:this.name,password:this.pass}
				}).then((res)=>{
					console.log(res);
					if(res.data.status==0){
						alert('用户名已存在，请重新输入');
					}else{
						alert('注册成功');
						this.$router.push({path:'/login'});			
					}
				}).catch((res)=>{
					console.log('error');
				})
			}
		}
	}
</script>