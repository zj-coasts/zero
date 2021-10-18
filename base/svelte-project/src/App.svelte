<script>
	let list = [
		{ id: 1, title: '学习React', status: '进行中' },
		{ id: 2, title: '学习Vue', status: '已完成' },
	]
	
	function getChecked() {
		console.log(document.querySelectorAll('xy-checkbox[checked]'))
	}
</script>
<header>
	<xy-checkbox></xy-checkbox>
	<xy-button-group>
		<xy-button>新增</xy-button>
		<xy-button type="danger">删除选中</xy-button>
		<xy-button type="primary">完成选中</xy-button>
		<xy-button type="danger">删除完成</xy-button>
		<xy-button type="primary" on:click="{getChecked}">获取选中</xy-button>
	</xy-button-group>
	
</header>
<main>
	<ul>
		{ #each list as item }
				<li>
					<xy-checkbox></xy-checkbox>
					<xy-input label="待办事项" value={item.title} disabled={item.status === '已完成'}></xy-input>
				</li>
		{/each}
	</ul>
</main>
<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>