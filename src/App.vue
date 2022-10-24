<script lang="ts" setup>
import { ref } from "vue";
import { TBox } from "@temir/core";
import { onMounted } from "vue";
import FloraCommandMenu from "./components/FloraCommandMenu.vue";
import LogInfo from "./components/LogInfo.vue";
import { initArg } from "./composables/argv";

const hasArg = ref(true);
onMounted(() => (hasArg.value = initArg()));
</script>

<template>
	<TBox :width="100" flex-direction="column">
		<FloraCommandMenu v-if="!hasArg" />
		<LogInfo />
	</TBox>
</template>
