<template>
  <div class="q-pa-md">
    <div style="width:100%; height:1013.74px;">
  <q-carousel 
      swipeable
      clickable
      animated
      v-model="slide"
      arrows
      :autoplay="5000"
      thumbnails
      infinite
  
    >
      <q-carousel-slide :name="1" img-src="https://f-cmsskc-l.mncdn.com/d57dbc42-a46a-4364-b6ea-17e9f3d9bb8d"  carousel-size="1920*730px"/>
      <q-carousel-slide :name="2" img-src="https://f-cmsskc-l.mncdn.com/05b4cbf5-20a9-4422-8aef-71767cd24145/a.gif"  carousel-size="full-width"/>
      <q-carousel-slide :name="3" img-src="https://f-cmsskc-l.mncdn.com/46823b05-ee36-4b25-89b7-71a700ef1db4"  carousel-size="full-width"/>
      <q-carousel-slide :name="4" img-src="https://f-cmsskc-l.mncdn.com/64786c2a-79b9-485d-a008-a05d7f64e529"  carousel-size="full-width"/>
    </q-carousel>
  </div>
</div>
    


  <template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        
      </q-toolbar>

      
    </q-header>
    

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>





</template>
  
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1)
    }
  }
}
</script>


<!--<script>
import { defineComponent } from 'vue'
export default defineComponent({
  
})
</script>-->
