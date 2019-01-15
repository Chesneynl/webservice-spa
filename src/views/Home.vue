<template>
  <div class="home">
    <div class="container">
        <Dealers />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Dealers from '@/components/Dealers.vue'

export default {
  name: 'home',
  components: {
    Dealers
  },
  methods: {

  }
}
</script>
