<script lang="ts" setup>
import { TBox, TText } from "@temir/core";
import FloraCommand from "./components/FloraCommand/index.vue";
</script>

<template>
	<TBox :width="100" :height="2">
		<TText color="#42b883"> 🌈 Hi, Flora command helper! </TText>
	</TBox>
	<FloraCommand />
</template>
