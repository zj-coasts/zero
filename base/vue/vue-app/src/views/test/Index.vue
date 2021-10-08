<template>
	<HField v-model="value" label="姓名" @input="inputHandler"></HField>
	<HPicker v-model="pick" label="选择城市" @input="changeHandler"></HPicker>
</template>

<script lang="ts" setup>
import HField from "@/components/HForm/HField.vue"
import HPicker from "@/components/HForm/HPicker.vue"
import {ref, watch} from "vue";



const value = ref('')
const pick = ref('')

watch(value, (value) => {
	console.log('值被改变了', value)
})

watch(pick, (value) => {
	console.log('值被改变了', value)
})

function inputHandler(value: string) {
	console.log('输入框内容发生变化', pick)
}

function changeHandler(value: string) {
	pick.value = value
	console.log(pick)
}
</script>

<style scoped lang="scss">
</style>