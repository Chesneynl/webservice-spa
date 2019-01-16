<template>
  <div class="home">
    <div class="container">
        <Dealer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Dealer from '@/components/Dealer.vue'

export default {
  name: 'DealerDetail',
  components: {
    Dealer
  },
  methods: {

  }
}
</script>

