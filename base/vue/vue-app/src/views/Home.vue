<template>
	<div class="test">
		首页

	</div>
</template>

<script setup lang="ts">
// 引入组件对应的样式，若组件没有样式文件，则无须引入
import { ref, computed } from "vue";
import { useStore } from 'vuex'
import { getUser } from '../api'

const store = useStore()

const name = computed(() => store.state.system.name)

const count = ref(0)

const { data: any } = getUser()

function clickHandler(): void {
	count.value++;
	store.commit('system/setName', '张三')
	console.log('数据', data.value.data.datas)
}
</script>

<style scoped>
  .test{
    width: 320px;
    font-size: 16px;
    display: flex;
  }
</style>
