<template>
	<div onload="loaded()">
		
	
		<div class="view-container">
			
		    <div class="content">
		        <div class="scroll-content">
		        	<div class="header">
						<div class="icon-back" @click="$router.go(-1)"></div>
					</div>
		            <div class="scroll">
			            
		                <div class="list">
		                    <div class="item">
		                        <div class="item-content">
		                            <label class="name">车牌号码:</label>
		                            <span class="form-city">京<i class="icon icon-select-down"></i></span>
		                            <input class="input" pattern="[0-9]*" placeholder="请输入您车牌号" type="number">
		                        </div>
		                    </div>
		                    <div class="item">
		                        <div class="item-content">
		                            <label class="name">发动机号:</label>
		                            <input class="input" pattern="[0-9]*" placeholder="请输入发动机号" type="number">
		                        </div>
		                    </div>
		                    <div class="item">
		                        <div class="item-content">
		                            <label class="name">查询城市:</label>
		                            <input class="input" pattern="[0-9]*"  type="number" placeholder="请输入车架号">
		                        </div>
		                    </div>
		                    <div class="item">
		                        <div class="item-content">
		                            <label class="name">备注名称:</label>
		                            <input class="input" pattern="[0-9]*"  type="number" placeholder="请输入车架号">
		                        </div>
		                    </div>
		                </div>
		                <div class="item-inquiry b-line"><button class="item-inquiry-btn btn-orange">保存并查询</button></div>
		                <div class="devider b-line"></div>
		                <div class="list list-in">
		                    <h1>违法信息</h1>
		                    <!-- 暂无违章记录 -->
		                    <div class="item" style="display:none">
		                        <p>暂无违章记录</p>
		                    </div>
		                    <!-- 暂无违章记录 -->
		                    <div class="item">
		                        <span>2016-12-24 18:00:12</span>
		                        <h2>北京市朝阳区机场高速路出京三元桥入口龙门架处 南向北</h2>
		                        <p>非紧急情况在高速公路应急车道上面行驶</p>
		                        <div class="item-figure">
		                            <span>罚款:<em>200</em></span>
		                            <span>积分:<em>12</em></span>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
		

</div>
</template>

<script>
</script>

<style scoped>
.scroll {
    margin-top: 6vh;
}
</style>