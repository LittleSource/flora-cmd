<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { TBox } from '@temir/core'
import FloraCommandMenu from './components/FloraCommandMenu.vue'
import LogInfo from './components/LogInfo.vue'

import { hasArg } from './composables/argv'
const _hasArg = ref(true)
onMounted(() => (_hasArg.value = hasArg()))
</script>

<template>
  <TBox :width="100" flex-direction="column">
    <FloraCommandMenu v-if="!_hasArg" />
    <LogInfo />
  </TBox>
</template>
