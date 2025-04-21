<template>
  
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
<q-badge>items-center</q-badge>
    <div class="row items-center bg-grey-4">
      <div class="col">
        <div class="q-pa-md q-gutter-sm">
    <q-btn round color="black" icon="home" />
    <span>/Sepetim</span>
    </div>
      </div>
      <div class="col">
        
      </div>
      <div class="col">
        
      </div>
    </div>

  
<div class="sk-cart-products-container empty">Alışveriş sepetiniz boş!</div>


<div class="q-pa-md example-row-column-width">

<div class="row">
  <div class="col">
    
  </div>
  <div class="col-6">
    
  </div>
  <div class="col">
    
  </div>
</div><div class="q-pa-md example-row-column-width">

<div class="row">
  <div class="col">
    
  </div>
  <div class="col-6">
    
  </div>
  <div class="col">
    
  </div>
</div><div class="q-pa-md example-row-column-width">

<div class="row">
  <div class="col">
  
  </div>
  <div class="col-6">
  
  </div>
  <div class="col">
    
  </div>
  
</div>
</div>
</div>
</div>
<div class="q-pa-md example-row-reverse bg-grey-4">

<div class="row reverse">
  <div class="col">
    
  </div>
  <div class="col">
    
  </div>
  <div class="col">
    
  </div>
</div>

</div>
<div class="q-pa-md example-row-reverse bg-grey-4">

<div class="row reverse">
  <div class="col">
    
  </div>
  <div class="col">
    
  </div>
  <div class="col">
    
  </div>
</div>

</div>

<div class="q-pa-md example-row-flex-order bg-grey-4">

<div class="row">
  <div class="col order-none">
    <div class="q-pa-md q-gutter-sm">
      <q-btn outline color="grey-7" disaled label="Öneriler" style="width: 250px; height: 60px; " ></q-btn>
    </div>
  </div>
  <div class="col order-last">

  </div>
  <div class="col order-first">
    
  </div>
</div>

  </div>

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://skcfiles.mncdn.com/mnresize/500/500/livephotos/S212504-001/01.jpg">

      <q-card-section>
        <div class="text-h6">Shoe Care U Athletic Cleaner Shoe Care</div>
        <div class="text-subtitle2">Unisex Siyah Ayakkabı Bakım Ürünü<br>129,00 TL<br><div class="q-pa-md q-gutter-sm">
          <q-btn outline style="color: rgb(35, 32, 218);" label="Sepete Ekle" /></div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>

    
    <q-card class="my-card">
      <img src="https://skcfiles.mncdn.com/mnresize/500/500/livephotos/8/S222497-001/01.jpg">

      <q-card-section>
        <div class="text-h6">U Sneaker Easy Clean Shoe Care S222497-001</div>
        <div class="text-subtitle2">Unisex Siyah Ayakkabı Bakım Ürünü<br>109,00 TL<br><div class="q-pa-md q-gutter-sm">
          <q-btn outline style="color: rgb(35, 32, 218);" label="Sepete Ekle" /></div></div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
    
    </div>





  
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  
})
</script>
