const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home.vue')
	},{
		path: '/test',
		name: 'Test',
		component: () => import('@/views/test/Index.vue')
	}
]

export default routes