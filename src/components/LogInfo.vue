<script lang="ts" setup>
import { TBox, TText } from "@temir/core";
import { useError } from "../composables/log/useError";
const { errorText } = useError();
</script>

<template>
	<TBox :width="100" :marginY="1" flexDirection="column">
		<TText v-if="!!errorText.trim()" color="red" inverse> Error: </TText>
		<TText color="red">
			{{ errorText }}
		</TText>
	</TBox>
</template>
