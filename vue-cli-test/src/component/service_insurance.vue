<template>
	<div class="content">
		<div class="view-container top-tab">
			<!-- 内容 begin -->
				<div class="header">
					<div class="icon-back" @click="$router.go(-1)"></div>
				</div>
			<div class="Top-location">
				<div class="nav-tabbar nav-tabbar-tab">
					<router-link to="/service_insurance/service_insurance1" class="tab-button" active-class="active">产品介绍</router-link>
					<router-link to="/service_insurance/service_insurance2" class="tab-button" active-class="active">保险计算器</router-link>
					<router-link to="/service_insurance/service_insurance3" class="tab-button" active-class="active">优惠活动</router-link>
				</div>
			</div>
			<!-- 内容 End -->
			<div class="scroll-content dwz-scroll" style="overflow:auto">
				
				<div class="scroll">
					<!-- 内容 begin-->
					<router-view></router-view>
					<!-- 内容 End-->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.scroll{margin-top: 14vh;}
	.Top-location{margin-top: 2vh;}
	.header{background: #fff;}
</style>