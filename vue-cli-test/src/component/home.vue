<template>
	<div class="view-container" style="overflow:auto">
		
            <slider></slider>
            
            <grids_contant3></grids_contant3>
            
            <div class="devider b-line"></div>
            
            <item_phone></item_phone>
            
            <item_lodge></item_lodge>
            
    </div>
</template>

<script>
	import slider from './slider';
	import grids_contant3 from './grids_contant3';
	import item_phone from './item_phone';
	import item_lodge from './item_lodge';
	export default{
		components:{
			slider,grids_contant3,item_phone,item_lodge
		}
	}
</script>

<style>
</style>