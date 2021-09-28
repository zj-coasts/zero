<template>
	<div style="font-size: 12px; font-weight: bold">
		首页
	
	</div>
</template>

<script setup lang="ts">
import Button from 'vant/es/button';
// 引入组件对应的样式，若组件没有样式文件，则无须引入
import 'vant/es/button/style';
import { ref, computed } from "vue";
import { useStore } from 'vuex'
import { getUser } from '../api'

const store = useStore()

const name = computed(() => store.state.system.name)

const count: number = ref(0)

const { data } = getUser()

function clickHandler(): void {
	count.value++;
	store.commit('system/setName', '张三')
	console.log('数据', data.value.data.datas)
}
</script>

<style scoped>

</style>