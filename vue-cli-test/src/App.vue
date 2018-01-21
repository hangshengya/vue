<template>
  <div id="app" class="android">
  	<loading v-show="getloading"></loading>
		<router-view></router-view>
		<footbar v-show="getfoot"></footbar>
  </div>
</template>

<script>

	import {mapGetters} from 'vuex';
	import footbar from './component/footbar';
	
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  watch:{
  	
  	$route(route){

  		this.conState(route.path);
  		
  	}
  },
  methods:{
  	conState(path){
 		if(/(home|forum|my|my_favorite|service_list)$/.test(path)){
  			this.$store.dispatch('showfoot');
  		}else{
  			this.$store.dispatch('hidefoot');
  		}
  	}
  },
  mounted(){
  	this.conState(this.$route.path);
  },
  components:{
  	footbar
  },
  computed:mapGetters([
  	'getfoot','getloading'
  ])
}
</script>

<style>
	body,html{height: 100%;}
	.news-detail{top:32px}
	.btn-ss {margin-top: 32px}
	.header{background: #fff;}
</style>
