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

    <q-separator class="sep" color="blue-grey-1" size="1rem"></q-separator>

    <q-list separator>


      <q-item 
      class="q-py-lg" 
      
       v-for="message in tweitter"
       :key="message.date"
       >
        <q-item-section avatar :top="true" >
          <q-avatar >
            <img  src="../assets/myImage.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label >
            <strong class="text-weight-bold q-ma-sm">Amirhossein Khanmohammadi</strong>
            <span class="text-grey-7">@amirhossein</span>
          </q-item-label>
          <q-item-label class="q-pa-md twitter--space"> 
           {{ message.content }}
          </q-item-label>
          <div class='row justify-between q-mt-md'>
            <q-btn flat color="blue-grey-4" size='sm' round  icon="comment" />
            <q-btn flat color="blue-grey-4" size='sm' round  icon="fas fa-retweet" />
            <q-btn flat color="blue-grey-4" size='sm' round  icon="fas fa-heart" />
            <q-btn flat color="blue-grey-4" size='sm' round  icon="fas fa-trash" />
          </div>
        </q-item-section>

        <q-item-section side top>
          {{Date.now()}}
        </q-item-section>
      </q-item>

      <q-separator  />

    </q-list>
  </q-page>
</template>


<script>


export default {
  name: 'PageHome',
  data() {
    return {
      logic: true,
      text: '',
      tweitter: [
        {
          date:1234567890,
          content:
          `Lorem ipsum dolor sit
           amet consectetur adipisicing 
           elit. Est, earum sit amet
            consectetur adipisicing elit.
             Est, earum
          `
        },
        {
          date:1234567891,
          content:'Lorem ipsum dolor sit amet consecteturamet consectetur adipisicing elit. Est, earum.'
        },
        {
          date:1234567892,
          content:'  dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, earum.'
        },
        {
          date:1234567893,
          content:'amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, earum.'
        },
        {
          date:1234567894,
          content:'elit. Est, earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, earum.'
        },
      ],



    }
  },

  methods: {


  },
  watch: {

  }

};
</script>
<style lang="scss" >
.sep{
  border-top: 0.1rem solid $blue-grey-1;
  border-bottom: 0.1rem solid $blue-grey-1;
}

.twitter--space{
  white-space: pre-line
}
</style>