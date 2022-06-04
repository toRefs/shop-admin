<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

const store = useStore()

const count = ref(1)

const add = () => {
  store.commit('increment', 3)
}

</script>

<template>
  <hello-world msg="hhhh" />
  index
  <h1>{{ count }}</h1>
  {{ store.state.count }}
  <button @click="add">
    增加
  </button>
</template>

<style scoped lang="scss">
h1 {
  color: $red;
}
</style>
