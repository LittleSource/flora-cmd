<script lang="ts" setup>
import { TBox, TText } from "@temir/core";
import { onMounted } from "vue";
import FloraCommandMenu from "./components/FloraCommandMenu/index.vue";
import { hasArg } from "./composables/argv";
import { exit } from "./composables/exec";
import { useLogInfo } from "./composables/log/useInfo";
const { logInfoText } = useLogInfo();
const argFlag = hasArg();
onMounted(() => {
	if (!argFlag) {
		exit();
	}
});
</script>

<template>
	<TBox :width="100" :height="2">
		<TText color="#42b883"> 🌈 Hi, Flora command helper! </TText>
	</TBox>
	<FloraCommandMenu v-if="!argFlag" />
	<TBox :width="100" :height="2">
		<TText> {{ logInfoText }} </TText>
	</TBox>
</template>
