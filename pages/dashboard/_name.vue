<template lang="html">
  <b-container>
    <div class="card__content">
      <component :is="name"></component>
    </div>
  </b-container>
</template>

<script>
import LoremPicsum from '~/components/api/LoremPicsum.vue'
import Ghibli from '~/components/api/Ghibli.vue'
import MagicTheGathering from '~/components/api/MagicTheGathering.vue'
import TheReportOfTheWeek from '~/components/api/TheReportOfTheWeek.vue'
import Kanye from '~/components/api/Kanye.vue'

export default {
  components: {
    'lorem-picsum': LoremPicsum,
    'ghibli': Ghibli,
    'magic-the-gathering': MagicTheGathering,
    'the-report-of-the-week': TheReportOfTheWeek,
    'kanye': Kanye
  },
  data () {
    return {
      name: this.$nuxt.$route.params.name
    }
  },
  middleware: 'auth'
}
</script>

<style media="screen">
  .card__content {
    background: white;
    padding: 20px;
  }
</style>
