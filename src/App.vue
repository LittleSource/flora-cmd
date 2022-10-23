<script lang="ts" setup>
import { ref } from "vue";
import { TBox, TText } from "@temir/core";
import { onMounted } from "vue";
import FloraCommandMenu from "./components/FloraCommandMenu/index.vue";
import { execArg } from "./composables/argv";
import { useError } from "./composables/log/useError";
const { errorText } = useError();
const hasArg = ref(true);
onMounted(() => (hasArg.value = execArg()));
</script>

<template>
	<TBox :width="100" flex-direction="column">
		<FloraCommandMenu v-if="!hasArg" />
		<TText> {{ errorText }} </TText>
	</TBox>
</template>
