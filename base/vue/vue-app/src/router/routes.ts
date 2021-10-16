const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home.vue')
	},{
		path: '/test',
		name: 'Test',
		component: () => import('@/views/test/Index.vue')
	},
	{
		path: '/pc',
		name: 'PC',
		component: () => import('@/views/pc/Index.vue')
	}
]

export default routes