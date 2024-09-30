<template>
  <q-page>
    <div class="q-pa-lg">
      <q-input :autogrow="true" bottom-slots v-model="text" label="message" counter maxlength="300" :dense="dense">
        <template #before>
          <q-avatar size='xl'>
            <img src="../assets/myImage.jpg">
          </q-avatar>
        </template>

        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />

        </template>
        <template #hint>
          Your Idea
        </template>

        <template #after>
          <q-btn class="q-mt-xl" :disable="!text" color="primary" round dense flat icon="send" />
        </template>
      </q-input>
    </div>

    <div v-for="message in content">
      {{ message }}
    </div>
  </q-page>
</template>

<script>


export default {
  name: 'PageHome',
  data() {
    return {
      logic: true,
      text: '',
      content: [],



    }
  },

  methods: {


  },
  watch: {

  }

};
</script>
