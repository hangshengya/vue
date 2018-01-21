<template>
	
	<div class="my_coupon">
		
		<div class="" style="height:90px"></div>
		<div class="content scroll-tab-top">
		    <div class="scroll-content dwz-scroll">
		        <div class="scroll">
		            <div class="nav-tab lzy-clear-p10">
		            	<div class="header">
							<div class="icon-back" @click="$router.go(-1)"></div>
						</div>
		                <div class="nav-tabbar nav-tabbar-tab">
		                	<router-link to="/my_coupon_content1" active-class="active" class="tab-button">未使用</router-link>
		                	<router-link to="/my_coupon_content2" active-class="active" class="tab-button">已使用</router-link>
		                	<router-link to="/my_coupon_content3" active-class="active" class="tab-button">已过期</router-link>
		                   
		                </div>
		                
		                <router-view></router-view>
		                
		            </div>
		        </div>
		    </div>
		</div>
	</div>

</template>

<script>

</script>

<style scoped>
	.lzy-clear-p10 .nav-tabbar-tab {
	    
	    top: 2vh;
	}
</style>