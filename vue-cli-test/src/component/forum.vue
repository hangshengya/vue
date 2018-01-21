<template>
	<div class="scroll-content" style="overflow: scroll;">
		<div class="scroll">
			<!-- 内容 begin-->
			<aui_cell_input></aui_cell_input>
			
			<aui_cell_s></aui_cell_s>
			
			<aui_cell_ci></aui_cell_ci>
			
			<div class="devider b-line"></div>
			
			<panel_content></panel_content>
			
			<!-- 内容 End-->
		</div>
	</div>
</template>

<script>
import aui_cell_input from './aui_cell_input';
import aui_cell_s from './aui_cell_s';
import aui_cell_ci from './aui_cell_ci';
import panel_content from './panel_content';
export default{
	components:{
		aui_cell_input,aui_cell_s,aui_cell_ci,panel_content
	}
}
</script>

<style>
</style>