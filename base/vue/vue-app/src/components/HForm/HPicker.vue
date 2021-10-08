<template>
  <!-- 选择器 -->
	<van-field :label="label" :value="props.value" v-bind="$props" @click="showPicker = true"></van-field>
	<van-popup v-model:show="showPicker" round position="bottom">
		<van-picker
			:columns="columns"
			@cancel="showPicker = false"
			@confirm="onConfirm"
		/>
	</van-popup>
</template>

<script setup lang="ts">
import {ref, useAttrs, defineProps, withDefaults, defineEmits  } from "vue";

const props = withDefaults(defineProps<{
	label: string,
	value: string
}>(), {
	label: '选择器',
	value: ''
})

const emit = defineEmits(['change', 'input'])
const columns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华'];
const result = ref('');
let showPicker = ref(false)

const info = useAttrs()
console.log(info)
console.log('props', props)

const onConfirm = ( data:string ) => {
	result.value = data
	emit('change', data)
	emit('input', data)
  showPicker.value = false
}

const changeHandler = ( value:string ) => {
	console.log('发生改变', value)
}

</script>

<script>

</script>

<style scoped>

</style>