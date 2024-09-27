<template>
  <q-layout view="lHr lpR fFf">

    <q-header elevated class="bg-primary text-blue-grey-8 ">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">

          Twitter
        </q-toolbar-title>


      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <q-icon class="q-py-md q-px-lg" color="blue-8" name="fa-brands fa-twitter" size="3rem" />


      <q-list >
        <q-item clickable v-ripple to="/">
          <q-item-section avatar >
            <q-icon color="secondary" name="home" size="2rem" />
          </q-item-section>
          <q-item-section color="dark" class="text-h5">Home</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/">
          <q-item-section avatar >
            <q-icon color="secondary" name="home" size="2rem" />
          </q-item-section>
          <q-item-section color="dark" class="text-h5">Home</q-item-section>
        </q-item>
        
        <q-item clickable v-ripple to="/">
          <q-item-section avatar >
            <q-icon color="secondary" name="home" size="2rem" />
          </q-item-section>
          <q-item-section color="dark" class="text-h5">Home</q-item-section>
        </q-item>

        

      </q-list>

    </q-drawer>


    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,

    }
  }
}
</script>