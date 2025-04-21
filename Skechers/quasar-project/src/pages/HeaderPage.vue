<template>
  <q-layout view="hHh lpR fff">


  <q-toolbar>
  
    <q-toolbar-title>
    <q-avatar>
      <q-img>
        <img src="s.svg" >
    
        </q-img>
      </q-avatar>
      
      <input type="text" class="form-control search-box-text personaclick-instant-search personaclick-instant-search-rendered" id="small-searchterms" autocomplete="off" name="q" placeholder="Ara: Tayt">



    </q-toolbar-title>
    <q-btn align="between" class="q-ma-sm" no-caps color="grey-2" size="11px" text-color= "grey-5" icon="perm_identity" label="Giriş Yap" text-aligin="right"/>
<q-btn align="between" class="q-ma-sm" no caps color="grey-2" size="11px" text-color= "grey-5" icon="favorite_border" label="Favorilerim " text-size="2px" text-aligin="right"/>
<q-btn align="between" class="q-ma-sm" no caps color="grey-2" size="11px" text-color= "grey-5" icon="shopping_cart" label="Sepetim " text-size="6px" text-aligin="right"/>


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
  </q-toolbar>
  <q-tabs align="left">
    <q-route-tab  label="KADIN" class="q-mx-xl"/>
    <q-route-tab  label="ERKEK" class="q-mx-xl"/>
    <q-route-tab  label="ÇOCUK" class="q-mx-xl"/>
    <q-route-tab  label="KOLEKSİYONLAR" class="q-mx-xl"/>
    <q-route-tab  label="SPOR GİYİM" class="q-mx-lg"/>
    <q-route-tab  label="HERKES İÇİN SKECHERS" class="q-mx-lg"/>
    <q-route-tab  label="İNDİRİM" class="q-mx-lg"/>
  </q-tabs>
<q-toolbar>
    
  </q-toolbar>
</q-layout>
  <div class="q-px-lg q-pt-xl q-mb-md"> 
   
  </div>



</template>
  