<script lang="ts" setup>
import { TBox, TText } from '@temir/core'
import { useError } from '../composables/log/useError'
const { errorText } = useError()
</script>

<template>
  <TBox v-show="errorText.trim() !== ''" :width="100" :margin-y="1" flex-direction="column">
    <TText color="red" inverse>
      Error:
    </TText>
    <TText color="red">
      {{ errorText }}
    </TText>
  </TBox>
</template>
