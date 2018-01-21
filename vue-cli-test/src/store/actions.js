import * as types from './types';
export default{
	showfoot:({commit,state})=>{commit(types.show_foot)},
	hidefoot:({commit,state})=>{commit(types.hide_foot)},
	showloading:({commit,state})=>{commit(types.show_loading)},
	hideloading:({commit,state})=>{commit(types.hide_loading)},
	additem:({commit,state},payload)=>{
		let btn = true;
		state.shopcart.forEach((item,index)=>{
			if(payload.pid == item.pid){
				item.num ++;
				btn = false;
			}
			
		})
		if(btn){
			payload.num = 1;
			state.shopcart.push(payload)
				
		}
		commit(types.add_item,[...state.shopcart])
	},
	changeitem:({commit,state},payload)=>{
		state.shopcart.forEach((item,index)=>{
			if(item.pid == payload.pid){
				item.num += payload.num
			}
		});
		commit(types.change_item,[...state.shopcart])
	},
	removeitem:({commit,state},payload)=>{
		state.shopcart.forEach((item,index)=>{
			if(item.pid == payload.pid){
				state.shopcart.splice(index,1);
			}
		});
		commit(types.remove_item,[...state.shopcart]);
	},
	clearshopcart:({commit,state})=>{
		commit(types.clear_cart);
	}
}
