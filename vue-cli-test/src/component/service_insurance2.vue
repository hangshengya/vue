<template>
	<!-- 内容 begin-->
	<div class="baoxian">
		<div class="select">
			<select id="select_first" dwz-event-on-change="change" class="">
				<option value="">车型：</option><option value="30">大众汽车</option><option value="5">大众汽车</option><option value="6">大众汽车</option><option value="7">大众汽车</option><option value="8">大众汽车</option><option value="9">大众汽车</option><option value="10">大众汽车</option><option value="11">大众汽车</option><option value="12">大众汽车</option>

			</select>
			<select id="select_second" dwz-event-on-change="change" style="margin-bottom:0">
				<option value="">型号：</option>
				<option value="">帕萨特</option>
				<option value="">宝来</option>
				<option value="">捷达</option>
				<option value="">新宝来</option>
				<option value="">帕萨特</option>
			</select>
		</div>
		<p class="xh b-line"><span>您选择的车型报价为：</span><em>¥ <i id="baojia">39.38 </i> 万</em></p>
		<h4 class="b-line">强制保险</h4>
		<div class="list b-line" id="jiaotongshigu">
			<div class="list-left r-line">
				<p class="list-blame b-line"><span class=""></span>交通事故责任强制保险</p>
				<ul class="single_choose">
					<li data-value="1050" dwz-event-on-click="click"><span class="back5"></span>家用6座以下</li>
					<li data-value="1100" dwz-event-on-click="click"><span></span>家用6座及以上</li>
				</ul>
			</div>
			<strong class="posi-r border-left"><em class="val">2300</em></strong>
		</div>
		<h4 class="b-line">商业保险</h4>
		<div class="list " id="shangyedisan">
			<div class="list-left ">
				<p class="list-blame b-line"><span class=""></span>商业第三者责任险</p>
				<ul id="third_wrap" class="" data-id="0">
					<li><span class="back5" data-value="673"></span>10万</li>
					<li><span data-value="972"></span>30万</li>
					<li><span data-value="1204"></span>50万</li>
					<li><span data-value="1359"></span>60万</li>
					<li><span data-value="1631"></span>80万</li>
					<li><span data-value="2124"></span>200万</li>
				</ul>
			</div>
			<strong class="posi-r l-line"><em id="T" class="val">8000</em></strong>
		</div>
		<div class="list" id="cheliangsunshi">
			<div class="list-left">
				<p class="insurance_type count" data-value="566" data-rate="0.0135" dwz-event-on-click="click"><span class="back2"></span>车辆损失险</p>
			</div>
			<strong class="posi-r l-line"><em id="L" class="val">800</em></strong>
		</div>
		<div class="list " id="quanchedaoqiang">
			<div class="list-left">
				<p class="insurance_type count" data-value="120" data-rate="0.0041" dwz-event-on-click="click"><span class=""></span>全车盗抢险</p>
			</div>
			<strong class="posi-r l-line"><em class="val">600</em></strong>
		</div>
		<div class="list " id="bolidandu">
			<div class="list-left">
				<p id="glass_D" class=" insurance_type count b-line" data-value="0" data-rate="0.0036" dwz-event-on-click="click"><span class="back2"></span>玻璃单独破碎险</p>
				<ul id="glass" class="single_choose">
					<li data-rate="0.0036" dwz-event-on-click="click"><span class="back5"></span>进口</li>
					<li data-rate="0.0021" dwz-event-on-click="click"><span></span>国产</li>
				</ul>
			</div>
			<strong class="posi-r l-line"><em class="val">1000</em></strong>
		</div>
		<div class="list" id="ziransunshi">
			<div class="list-left">
				<p class="insurance_type count" data-value="0" data-rate="0.0015" dwz-event-on-click="click"><span class="back2"></span>自燃损失险</p>
			</div>
			<strong class="posi-r l-line"><em class="val">400</em></strong>
		</div>
		<div class="list-checkbox b-line" id="bujimianpei">
			<div class="list-left b-line">
				<p id="abatement_D" class=" insurance_type b-line" dwz-event-on-click="click"><span class=""></span>不计免赔特约条款</p>
				<ul  id="" class="single_choose list-width">
					<li><span class="back5"></span>车辆损失险</li>
					<li><span></span>商业第三者责任险</li>
					<li><span></span>全车盗抢险</li>
					<li><span></span>车上人员责任险</li>
					<li><span></span>其它险别</li>
				</ul>
			</div>
			<strong class="posi-r l-line"><em class="val">1000</em></strong>
		</div>
		<div class="list " id="cheshangrenyuan">
			<div class="list-left">
				<p id="driver" class=" insurance_type count b-line" data-value="0" data-rate="0.0041,0.0026" dwz-event-on-click="click"><span class="back2"></span>车上人员责任险</p>
				<ul>
					<li>
						<div class="add-"><i></i><strong>5</strong><i></i></div>
					</li>
				</ul>
			</div>
			<strong class="posi-r l-line"><em class="val">200</em></strong>
		</div>
		<div class="list " id="cheshenhuahen">
			<div class="list-left">
				<p id="scratch" class=" insurance_type count b-line" data-value="850" data-rate="0" dwz-event-on-click="click"><span class="back2"></span>车身划痕损失险</p>
				<ul id="scratch_D" class="" data-id="1">
					<li><span class="back5" data-value="850"></span>2千</li>
					<li><span data-value="1100"></span>5千</li>
					<li><span data-value="1500"></span>1万</li>
					<li><span data-value="2250"></span>2万</li>
				</ul>
			</div>
			<strong class="posi-r l-line"><em id="S" class="val">900</em></strong>
		</div>
		<div class="list b-line" id="zhidingzhuanxiuchang">
			<div class="list-left">
				<p class="insurance_type count" data-value="0" data-rate="0.0015" dwz-event-on-click="click"><span class=""></span>指定专修厂特约条款</p>
			</div>
			<strong class="posi-r l-line"><em class="val">200</em></strong>
		</div>
		<div class="jiage jiage-bj b-line">

			<div class="">新车保险参考价：<span>¥<em id="cankaojia">12325</em>元</span></div>
		</div>

	</div>

	<!-- 内容 End-->

</template>

<script>
</script>

<style>
</style>