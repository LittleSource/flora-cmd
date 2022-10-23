<script lang="ts" setup>
import { TBox, TText } from "@temir/core";
import commands from "../../composables/commands";
</script>

<template>
	<TBox :width="100" :height="2">
		<TText color="#42b883"> 🌈 Hi, Flora command helper! </TText>
	</TBox>
	<TBox flex-direction="column" :width="90" border-style="double">
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
				<TText>{{ cmd.cmd || "-" }}</TText>
			</TBox>
			<TBox width="50%">
				<TText>{{ cmd.desc }}</TText>
			</TBox>
		</TBox>
	</TBox>
	<TBox :width="60">
		<TText>请输入f key. 例如f g,会自动执行flora generate</TText>
	</TBox>
</template>
