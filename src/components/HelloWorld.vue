<script setup lang="ts">

import { onMounted, ref } from 'vue'
import { getLoginInfo } from '@/api/common'
import { ILoginInfo } from '@/api/types/common'

defineProps<{ msg: string }>()

const loginInfo = ref<ILoginInfo>()

onMounted(() => {
  getLoginInfo().then(data => {
    loginInfo.value = data

    console.log(loginInfo.value)
  })
})

</script>

<template>
  <h1>{{ msg }}</h1>
  <el-button type="warning">
    dd
  </el-button>
  <el-button type="primary">
    aa
  </el-button>
</template>

<style scoped>

</style>
