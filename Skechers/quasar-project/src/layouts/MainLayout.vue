
    
<template>
  <q-layout view="hHh lpR fff">

   <q-header elevated class="bg-primary text-black" height-hint="98">
      <q-toolbar>
       <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
      
        <q-toolbar-title>
       
       <!-- <q-avatar>
          <q-img>
            <img src="s.svg" >
        
            </q-img>
          </q-avatar>-->
          
         <!-- <input type="text" class="form-control search-box-text personaclick-instant-search personaclick-instant-search-rendered" id="small-searchterms" autocomplete="off" name="q" placeholder="Ara: Tayt">-->
        
        
  
        </q-toolbar-title>
       
       <!-- <q-btn align="between" class="q-ma-sm" no-caps color="grey-2" size="11px" text-color= "grey-5" icon="perm_identity" label="Giriş Yap" text-aligin="right"/>
    <q-btn align="between" class="q-ma-sm" no caps color="grey-2" size="11px" text-color= "grey-5" icon="favorite_border" label="Favorilerim " text-size="2px" text-aligin="right"/>
    <q-btn align="between" class="q-ma-sm" no caps color="grey-2" size="11px" text-color= "grey-5" icon="shopping_cart" label="Sepetim " text-size="6px" text-aligin="right"/>-->

  
  <!--<div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-input v-model="search" filled type="search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
  </div>-->
  
    <!-- <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
   <q-input standout v-model="text" label="Ara:Sneaker" /> 
    </div>
    </div>-->
     <!-- <q-toolbar-title>
        <q-avatar>
          <q-img>
            <img src="https://c-skc2-l.mncdn.com/images/skechers-rahat-ayakkabi.svg" >
        
            </q-img>
          </q-avatar>
        </q-toolbar-title>-->
      <!--</q-toolbar>
      <q-tabs align="left">
        <q-route-tab  label="KADIN" class="q-mx-xl"/>
        <q-route-tab  label="ERKEK" class="q-mx-xl"/>
        <q-route-tab  label="ÇOCUK" class="q-mx-xl"/>
        <q-route-tab  label="KOLEKSİYONLAR" class="q-mx-xl"/>
        <q-route-tab  label="SPOR GİYİM" class="q-mx-lg"/>
        <q-route-tab  label="HERKES İÇİN SKECHERS" class="q-mx-lg"/>
        <q-route-tab  label="İNDİRİM" class="q-mx-lg"/>
      </q-tabs>
    </q-header> 
    <q-toolbar>-->
     <!--   <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />-->
      </q-toolbar>
    </q-header>
      
  
    

    <q-drawer
      v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
    
        <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item 
              to="/"
              exact
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Ana Sayfa
              </q-item-section>
            </q-item>

            <q-item 
              to="/help"
              exact
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="login" />
              </q-item-section>

              <q-item-section>
                Giriş Yap
              </q-item-section>
            </q-item>
            <q-item 
              to="/filtreler"
              exact
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="style" />
              </q-item-section>

              <q-item-section>
                Filtreler
              </q-item-section>
            </q-item>
            <q-item 
              to="/sepetim"
              exact
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="shopping_cart" />
              </q-item-section>

              <q-item-section>
                Sepetim
              </q-item-section>
            </q-item>
            <q-item 
              to="/favoriler"
              exact
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="favorite" />
              </q-item-section>
        
              <q-item-section>
                Favorilerim
              </q-item-section>
              </q-item>
              <q-item 
              to="/ürün gösterme"
              exact
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name= inventory_2></q-icon>
              </q-item-section>

              <q-item-section>
                Ürün Gösterme
              </q-item-section>
            </q-item>
            <q-item 
              to="/header"
              exact
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="h_mobiledata"></q-icon>
              </q-item-section>

              <q-item-section>
                Header
              </q-item-section>
            </q-item>
            <q-item 
              to="/carousel"
              exact
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name= "view_carousel">

                </q-icon>
              </q-item-section>

              <q-item-section>
                Carousel
              </q-item-section>
          

            </q-item>
            
          </q-list>
        </q-scroll-area>
      

        <q-img class="absolute-top" src="manzara.jpg" style="height: 192px">
          <div class="absolute-bottom bg-grey">
            
            <div class="text-weight-bold">Sudenaz ARIKAN</div>
            <div>@sudenazarıkan</div>
          </div>
        </q-img>
      
      </q-drawer>
   


      
    

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
          </q-avatar>
          <div>
    <div class="row justify-evenly">
      <div class="col-4">
        © Copyright 2023 skechers Türkiye
      </div>
      <div class="col-4">
        Site Haritası
      </div>
    </div> </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>


  </q-layout>
</template>
 


    

<script>
import { date } from 'quasar'
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'




const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]


export default defineComponent({
  name: 'MainLayout',

  components: {
  },
  computed:{
    todaysDate() {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp,'')
    }
  },


  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
   }
  }
})
</script>
<style lang="scss">
.header-image {
height:100%;
z-index: -2;
opacity: 0.9;
filter: purplescale(95%)

}

</style>