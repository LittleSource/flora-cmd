<script lang="ts" setup>
import { ref } from "@vue/runtime-core";
import { TBox, TText, useInput } from "@temir/core";
import commands from "../../composables/commands";
import { execKey } from "../../composables/exec";
const inputKey = ref("");
useInput(onKeyBoard, { isActive: true });
function onKeyBoard(input: string) {
	inputKey.value = input;
	execKey(input);
}
</script>

<template>
	<TBox flex-direction="column" :width="70" border-style="double">
		<TBox>
			<TBox width="8%">
				<TText>key</TText>
			</TBox>
			<TBox width="42%">
				<TText>命令</TText>
			</TBox>
			<TBox width="50%">
				<TText>介绍</TText>
			</TBox>
		</TBox>

		<TBox v-for="cmd in commands" :key="cmd.key">
			<TBox width="8%">
				<TText>{{ cmd.key }}</TText>
			</TBox>
			<TBox width="42%">
				<TText>{{ cmd.cmd }}</TText>
			</TBox>
			<TBox width="50%">
				<TText>{{ cmd.desc }}</TText>
			</TBox>
		</TBox>
	</TBox>
	<TBox :width="60">
		<TText>请输入key:{{ inputKey }}</TText>
	</TBox>
</template>
