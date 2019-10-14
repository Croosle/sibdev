<template lang="html">
  <b-row>
    <b-col lg="4" v-for="(shiba, index) in cards" :key="index" class="mb-4">
      <img :src="shiba" width="100%">
    </b-col>
    <base-loading :loading="loading"></base-loading>
    <base-error :error="error"></base-error>
  </b-row>
</template>

<script>
import BaseLoading from '~/components/BaseLoading.vue'
import BaseError from '~/components/BaseError.vue'

export default {
  components: {
    BaseLoading,
    BaseError
  },
  data () {
    return {
      cards: [],
      loading: true,
      error: ''
    }
  },
  mounted () {
    const config = {
      headers: {"Access-Control-Allow-Origin": "*"}
    }

    this.$axios.get('https://shibe.online/api/shibes?count=6', config)
      .then(res => {this.cards = res.data, this.loading = false})
      .catch((e) => {this.error = e, this.loading = false})
  }
}
</script>
