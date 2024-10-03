<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
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

        <transition-group appear enter-active-class="animated fadeIn slow" leave-active-class="animated fadeOut slow">
          <q-item class="q-py-lg  " v-for="message in tweitter" :key="message.id">
            <q-item-section avatar :top="true">
              <q-avatar>
                <img src="../assets/myImage.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <strong class="text-weight-bold q-ma-sm">Amirhossein Khanmohammadi</strong>
                <span class="text-grey-7">@amirhossein &bull; {{ targetDate(message.date) }}</span>
                <br class="lt-md">
              </q-item-label>
              <q-item-label class="q-pa-md twitter--space">
                {{ message.content }}
              </q-item-label>
              <div class='row justify-between q-mt-md'>
                <q-btn flat color="blue-grey-4" size='sm' round icon="comment" />
                <q-btn flat color="blue-grey-4" size='sm' round icon="fas fa-retweet" />
                <q-btn @click="toggleLike(message)"  :color="message.like ? 'red' : 'blue-grey-3'" flat  size='sm' round icon="fas fa-heart" />
                <!-- message.like=!message.like -->
                <q-btn @click="removeFunc(message)" flat color="blue-grey-4" size='sm' round icon="fas fa-trash" />
              </div>
            </q-item-section>

          
          </q-item>

        </transition-group>

        <q-separator />

      </q-list>
    </q-scroll-area>
  </q-page>
</template>


<script>

/*
"A cloud weighs
 around a million
  tonnes. A cloud typically
   has a volume of around 1km3 and 
   a density of around 1.003kg per m3 – that's 
   a density that's around 0.4 per cent lower than
    the air surrounding it (this how they are able to 
    float). "
(

in social media all people is kind"

many people think they can learn English without practice"

"Animals can experience time differently
 from humans. To smaller animals, the world 
 around them moves more slowly compared to humans.
  Salamanders and lizards, for example, experience 
  time more
 slowly than cats and dogs. This 
 is because
  the perception of time depends on how quickly the brain can proce"



*/ 
import { formatDistance } from "date-fns";
import { getFirestore,doc,updateDoc , deleteDoc, collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
export default {
  name: 'PageHome',
  data() {
    return {
      db: null,
      logic: true,
      text: '',
      addDisappre: false,
      tweitter:[
        //   {

        //     id:'123D1',
        //   date: 1727793453744 ,
        //    content: `The Sun makes a sound but we can't hear it.
        //    In the form of pressure waves, the Sun does make 
        //    a sound. The wavelength of the pressure waves from
        //     the Sun is measured in hundreds of miles, however,
        //     meaning they are far beyond the range of human hearing`,
        //     like:true,
            
        //   },
          
          
        //   {
        //     like:false,
        //     id:'123D2',
        //     date: 1728893453743 ,
        //     content:`Your brain is
        //      constantly eating itself.
        //       This process is called phagocytosis, 
        //       wherecells envelop and consume smaller 
        //       cells or molecules to removethem from the 
        //       system. Don't worry!Phagocytosis isn't harmful,
        //        but actually helps preserve your grey matter`
        //  },


      ],


      
      
    }
  },

  computed:{

    
  },
  mounted() {
  
    this.db = getFirestore();
  
    const newsCollection = query(collection(this.db, 'news'), orderBy('date', 'desc'));  // 
  //many people think they can  learn English without practice
    
    onSnapshot(newsCollection, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const tweetMessage=change.doc.data();
        tweetMessage.id=change.doc.id
        if (change.type === 'added') {
          this.tweitter.unshift(tweetMessage);  // 
        }
        if (change.type === 'modified') {
          let index=this.tweitter.findIndex((item)=>item.id===tweetMessage.id);
          Object.assign(this.tweitter[index],tweetMessage)
          console.log('modified', tweetMessage);
        }
        if (change.type === 'removed') {
          this.tweitter = this.tweitter.filter((item) => item.id !== tweetMessage.id )
          console.log('removed', tweetMessage);
        }
      });
    });
  },
  methods: { // like computed property
    targetDate(value) {

      return formatDistance((value), new Date)

    },
    addTwitter() {

      const twMsg = {
        like:false,
        date: Date.now(),
        content: this.text,
      };

      addDoc(collection(this.db, 'news'), twMsg)
        .then((docRef) => {
          console.log('doc with id', docRef.id);
        })
        .catch((error) => {
          console.log('error occur', error);
        });

      this.text = '';
    },
    removeFunc(msg) {

      const docRef = doc(this.db, 'news', msg.id); 

      deleteDoc(docRef)
        .then(() => console.log('deleted'))
        .catch(err => console.log(err));
      this.addDisappre = true

      // this.tweitter = this.tweitter.filter((item) => {

      //   return item.date !== msg.date
      // })
    },
    
    toggleLike(msg) {

      const docRef = doc(this.db, 'news', msg.id); 

      updateDoc(docRef, {
        like: !msg.like, 
      })
        .then(() => console.log('like updated'))
        .catch(err => console.log(err));

    }
  },


};
</script>
<style lang="scss">
.sep {
  border-top: 0.1rem solid $blue-grey-1;
  border-bottom: 0.1rem solid $blue-grey-1;
}

.twitter--space {
  white-space: pre-line
}

.appeare {
  animation: shown 0.3s ease-in;
}


@keyframes shown {

  0% {
    opacity: 0;
    transform: translateY(-1rem)
  }

  ;

  100% {
    opacity: 1;
    transform: translateY(0rem)
  }

  ;
}
</style>