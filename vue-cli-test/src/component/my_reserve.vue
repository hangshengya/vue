<template>
	<div class="content">
		<div class="header">
			<div class="icon-back" @click="$router.go(-1)"></div>
		</div>
	    <div class="item-make-table item-chat-table">
	        <table class="">
	        <tr>
	            <th class="r-line">车系</th>
	            <th class="r-line">车型</th>
	            <th class="r-line">论坛</th>
	            <th>保养</th>
	        </tr>
	    </table>
	    </div>
	    <div>
	    </div>
	    <div class="panel-content t-line">
	        <a class="panel-cont-finance item-ware-list" data-href="event-detail.html" target="navView" rel="service-level2">
	            <div class="panel-cont-left"><img src="/src/assets/img/che-xiu-1.jpg" alt=""></div>
	            <div class="panel-cont-right" style="padding-top:20px">
	                <h2 style="height:20px; font-size:16px">宝马320li</h2>
	                <h3 style="color:#ff5858; font-size:14px">22.99-42.99</h3>
	            </div>
	        </a>
	        <a class="panel-cont-finance item-ware-list" data-href="event-detail.html" target="navView" rel="service-level2">
	            <div class="panel-cont-left"><img src="/src/assets/img/che-xiu-2.jpg" alt=""></div>
	            <div class="panel-cont-right" style="padding-top:20px">
	                <h2 style="height:20px; font-size:16px">新款迈锐宝XL</h2>
	                <h3 style="color:#ff5858; font-size:14px">22.99-42.99</h3>
	            </div>
	        </a>
	        <a class="panel-cont-finance item-ware-list" data-href="event-detail.html" target="navView" rel="service-level2">
	            <div class="panel-cont-left"><img src="/src/assets/img/che-xiu-3.jpg" alt=""></div>
	            <div class="panel-cont-right" style="padding-top:20px">
	                <h2 style="height:20px; font-size:16px">17款汉兰达</h2>
	                <h3 style="color:#ff5858; font-size:14px">22.99-42.99</h3>
	            </div>
	        </a>
	        <a class="panel-cont-finance item-ware-list" data-href="event-detail.html" target="navView" rel="service-level2">
	            <div class="panel-cont-left"><img src="/src/assets/img/che-xiu-4.jpg" alt=""></div>
	            <div class="panel-cont-right" style="padding-top:20px">
	                <h2 style="height:20px; font-size:16px">道奇酷威</h2>
	                <h3 style="color:#ff5858; font-size:14px">22.99-42.99</h3>
	            </div>
	        </a>
	    </div>
	</div>

</template>

<script>
</script>

<style scoped>
	.r-line{height: 39px;}
	.item-make-table{margin-top: 32px;}
</style>