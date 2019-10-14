<template lang="html">
  <b-container>
    <b-list-group class="mb-2">
      <b-list-group-item v-for="(user, index) in users" :key="index" @click="editId = user.id" button>
        <span v-if="editId !== user.id">{{ user.name }} {{ user.surname }} {{ user.middlename }}</span>
        <base-form  v-else :user="user"></base-form >
      </b-list-group-item>
    </b-list-group>

    <base-form :user="user"></base-form>

    <b-button @click="addUser()" class="mt-2">Добавить</b-button>
    <b-button v-if="editId >= 0" @click="editId = -1" class="mt-2">Сохранить</b-button>

  </b-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { mapMultiRowFields } from 'vuex-map-fields';
import BaseForm from '~/components/BaseForm.vue'

export default {
  components: {
    BaseForm
  },
  data () {
    return {
      user: {
        id: '',
        name: '',
        surname: '',
        middlename: '',
        dashboard: []
      },
      editId: -1
    }
  },
  computed: {
    ...mapGetters({
      id: 'userID'
    }),
    ...mapMultiRowFields(['users'])
  },
  middleware: 'auth',
  methods: {
    addUser () {
      this.user.id = this.id;

      this.$store.commit('ADD_USER', this.user);

      this.user = {
        id: '',
        name: '',
        surname: '',
        middlename: '',
        dashboard: []
      }
    }
  }
}
</script>
