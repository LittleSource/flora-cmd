<script lang="ts" setup>
import { TBox, TText } from "@temir/core";
import FloraCommandMenu from "./components/FloraCommandMenu/index.vue";
import { hasArg, execArg } from "./composables/argv";
execArg();
</script>

<template>
	<TBox :width="100" :height="2">
		<TText color="#42b883"> 🌈 Hi, Flora command helper! </TText>
	</TBox>
	<FloraCommandMenu v-if="!hasArg()" />
</template>
