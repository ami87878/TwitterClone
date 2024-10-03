<template>
  <q-layout view="lHr lpR fFf">

    <q-header elevated class="bg-primary text-blue-grey-8 ">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">

          <span class="gt-xs">{{$route.name}}</span>
          
            <q-icon class=" icon-position  q-py-md q-px-lg  lt-sm absolute-center" 
             color="blue-8"
             name="fa-brands fa-twitter" 
             size="3rem" />
      
        </q-toolbar-title>


      </q-toolbar>
    </q-header>

    <q-drawer elevated width="350" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <q-icon class="q-py-md q-px-lg" color="blue-8" name="fa-brands fa-twitter" size="3rem" />


      <q-list>
        <q-item :exact="true" clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon color="secondary" name="home" size="2rem" />
          </q-item-section>
          <q-item-section color="dark" class="text-h5">Home</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/about">
          <q-item-section avatar>
            <q-icon color="secondary" name="info" size="2rem" />
          </q-item-section>
          <q-item-section color="dark" class="text-h5">About</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/notification">
          <q-item-section avatar>
            <q-icon color="secondary" name="notifications" size="2rem" />
          </q-item-section>
          <q-item-section color="dark" class="text-h5">Notification</q-item-section>
        </q-item>



      </q-list>

    </q-drawer>


    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>

      <q-input dense placeholder="Search Twitter" :rounded="true" :outlined="true" color="positive" class="q-ma-md">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list :separator="true" padding>
        <q-item class="q-pa-lg">
          <q-item-section>
            <q-item-label overline class="text-h3 text-teal-9 text-bold">learning</q-item-label>
            <q-item-label>Full course will be start</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit
              elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-lg">
          <q-item-section>
            <q-item-label overline class="text-h3 text-teal-9 text-bold">Sport</q-item-label>
            <q-item-label>Match will be begin</q-item-label>
            <q-item-label caption>Barcelona and Real Madrid will play soon</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>10 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-lg">
          <q-item-section>
            <q-item-label overline class="text-h3 text-teal-9 text-bold">News</q-item-label>
            <q-item-label>Euro increase value agains Dollar</q-item-label>
            <q-item-label caption>in stock market the value of Euro increase</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>25 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />

      </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)


const toggleLeftDrawer = function () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
<style lang="scss" scoped>


</style>