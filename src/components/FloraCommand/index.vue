<script lang="ts" setup>
import { ref } from "@vue/runtime-core";
import { TBox, TText, useInput } from "@temir/core";
import commands from "./commands";

const inputKey = ref("");
useInput(onKeyBoard, { isActive: true });
function onKeyBoard(input: string) {
	inputKey.value = input;
	const index = parseInt(input);
	if (!Number.isNaN(index)) {
		console.log(index);
	}
	// switch (input) {
	// 	case "q": {
	// 		setTimeout(() => {
	// 			process.exit(0);
	// 		}, 0);
	// 	}
	// }
}
</script>

<template>
	<TBox flex-direction="column" :width="60" border-style="double">
		<TBox>
			<TBox width="10%">
				<TText>序号</TText>
			</TBox>
			<TBox width="40%">
				<TText>命令</TText>
			</TBox>
			<TBox width="50%">
				<TText>介绍</TText>
			</TBox>
		</TBox>

		<TBox v-for="(cmd, index) in commands" :key="index">
			<TBox width="10%">
				<TText>{{ index }}</TText>
			</TBox>
			<TBox width="40%">
				<TText>{{ cmd.cmd }}</TText>
			</TBox>
			<TBox width="50%">
				<TText>{{ cmd.desc }}</TText>
			</TBox>
		</TBox>
	</TBox>
	<TBox :width="60">
		<TText>{{ inputKey }}</TText>
	</TBox>
</template>
