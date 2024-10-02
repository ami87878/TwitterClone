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
          <q-btn @click="addTwitter" class="q-mt-xl" :disable="!text" color="primary" round dense flat icon="send" />
        </template>
      </q-input>
    </div>

    <q-separator class="sep" color="blue-grey-1" size="1rem"></q-separator>

    <q-list separator>

      <transition-group appear enter-active-class="animated fadeIn slow"
        leave-active-class="animated fadeOut slow">
        <q-item class="q-py-lg  " v-for="message in tweitter" :key="message.date">
          <q-item-section avatar :top="true">
            <q-avatar>
              <img src="../assets/myImage.jpg">
            </q-avatar>
          </q-item-section>
  
          <q-item-section>
            <q-item-label>
              <strong class="text-weight-bold q-ma-sm">Amirhossein Khanmohammadi</strong>
              <span class="text-grey-7">@amirhossein &bull; {{ targetDate(message.date) }}</span>
            </q-item-label>
            <q-item-label class="q-pa-md twitter--space">
              {{ message.content }}
            </q-item-label>
            <div class='row justify-between q-mt-md'>
              <q-btn flat color="blue-grey-4" size='sm' round icon="comment" />
              <q-btn flat color="blue-grey-4" size='sm' round icon="fas fa-retweet" />
              <q-btn flat color="blue-grey-4" size='sm' round icon="fas fa-heart" />
  
              <q-btn @click="removeFunc(message)" flat color="blue-grey-4" size='sm' round icon="fas fa-trash" />
            </div>
          </q-item-section>
  
          <!-- <q-item-section side top>
            {{}}
          </q-item-section> -->
        </q-item>

      </transition-group>

      <q-separator />

    </q-list>
  </q-page>
</template>


<script>
import { formatDistance } from "date-fns";

export default {
  name: 'PageHome',
  data() {
    return {
      logic: true,
      text: '',
      addDisappre:false,
      tweitter: [
        {
          date: 1727793453744 ,
          content:
          `Lorem ipsum dolor sit
           amet consectetur adipisicing 
           elit. Est, earum sit amet
            consectetur adipisicing elit.
             Est, earum
          `
        },
        {
          date: 1728893453743 ,
          content:'Lorem ipsum dolor sit amet consecteturamet consectetur adipisicing elit. Est, earum.'
        },
        
        
      ],

      


    }
  },

  methods:{ // like computed property
    targetDate(value){

      return formatDistance((value),new Date)
      
    },
    addTwitter(){
     
      const twMsg={
        date:Date.now(),
        content:this.text,
      }
      this.tweitter.unshift(twMsg)
      this.text=''
    },
    removeFunc(msg) {

      
      this.addDisappre=true
      this.tweitter=this.tweitter.filter((item)=>item.date!==msg.date)
      

    }
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
.appeare{
  animation: shown 0.3s ease-in ;
}


@keyframes shown {
  
  0%{
    opacity: 0;
    transform: translateY(-1rem)
  };
  100%{
    opacity: 1;
    transform: translateY(0rem)
  };
}

</style>