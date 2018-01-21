import * as types from './types';
export default{
	[types.show_foot]:(state)=>{state.bfoot=true;},
	[types.hide_foot]:(state)=>{state.bfoot=false;},
	[types.show_loading]:(state)=>{state.bloading=true;},
	[types.hide_loading]:(state)=>{state.bloading=false;},
	[types.add_item]:(state,payload)=>{state.shopcart=payload;},
	[types.change_item]:(state,payload)=>{state.shopcart=payload;},
	[types.remove_item]:(state,payload)=>{state.shopcart=payload;},
	[types.clear_cart]:(state,payload)=>{state.shopcart=[];}
}
