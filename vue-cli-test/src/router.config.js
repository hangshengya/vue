import home from './component/home';
import forum from './component/forum';
import my_favorite from './component/my_favorite';
import service_list from './component/service_list';
import my from './component/my';
import news_list from './component/news_list';
import error from './component/error';
import car_page from './component/car_page';
import luntan from './component/luntan';
import service_violation from './component/service_violation';
import service_insurance from './component/service_insurance';
import service_insurance1 from './component/service_insurance1';
import service_insurance2 from './component/service_insurance2';
import service_insurance3 from './component/service_insurance3';
import car_exhibition from './component/car_exhibition';
import my_reserve from './component/my_reserve';
import my_coupon from './component/my_coupon';
import my_coupon_content1 from './component/my_coupon_content1';
import my_coupon_content2 from './component/my_coupon_content2';
import my_coupon_content3 from './component/my_coupon_content3';
import my_order from './component/my_order';
import goods_list from './component/goods_list';
import shop_cart from './component/shop_cart';
import login from './component/login';
import reg from './component/reg';

let routes = [
	{path:'/home',component:home},
	{path:'/forum',component:forum},
	{path:'/my_favorite',component:my_favorite},
	{path:'/service_list',component:service_list},
	{path:'/my',component:my},
	{path:'/news_list',component:news_list},
	{path:'/',redirect:'/home'},
	{path:'*',component:error},
	{path:'/car_page/:sid/:id',component:car_page},
	{path:'/luntan/:id',component:luntan},
	{path:'/service_violation',component:service_violation},
	{path:'/car_exhibition/:sid/:id/:uid',component:car_exhibition},
	{path:'/my_reserve',component:my_reserve},
	{path:'/my_order',component:my_order},
	{path:'/goods_list/:sid/:id/:uid',component:goods_list},
	{path:'/shop_cart',component:shop_cart},
	{path:'/login',component:login},
	{path:'/reg',component:reg},
	{
		path:'/my_coupon',
		redirect:'/my_coupon/my_coupon_content1',
		component:my_coupon,
		children:[
			{path:'/my_coupon_content1',component:my_coupon_content1},
			{path:'/my_coupon_content2',component:my_coupon_content2},
			{path:'/my_coupon_content3',component:my_coupon_content3}
		]
	},
	{
		path:'/service_insurance',
		redirect:'/service_insurance/service_insurance1',
		component:service_insurance,
		children:[
			{path:'service_insurance1',component:service_insurance1},
			{path:'service_insurance2',component:service_insurance2},
			{path:'service_insurance3',component:service_insurance3}
		]
	}	
];

export default{
	routes:routes,
	mode:'hash'
}
