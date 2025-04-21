<template>
  <q-page class="q-pa-lg">
   <!---->  <h5 class="q-mt-none">
      <h2>
Favorilerim    </h2>

<div class="q-pa-md example-row-column-width bg-grey-4">

<div class="row">
  <div class="col">
    Ürün
  </div>
  <div class="col-6">
    
  </div>
  <div class="col text-center">
    Fiyat
  </div>
  </div>
</div>



  <div class="q-pa-md example-row-column-width " >

<div class="row">
  <div class="col">
    <img alt="Resim Summits" src="https://skcfiles.mncdn.com/mnresize/150/150/livephotos/232395TK BKCC/01.jpg" 
    title="Resim Summits">
  
  </div>
  
  <div class="col-6 float-left" >
    Summits<br/>232395TK BKCC<br/><div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 200px"><q-input outlined bottom-slots v-model="text" label="Beden Seçiniz"  :dense="dense">
        
        <template v-slot:append>
          <q-icon v-if="text !== ''" @click="text = ''" class="cursor-pointer" />
          <q-icon name="expand" />
        </template>

        
      </q-input>
      </div>
      </div><div class="q-pa-md q-gutter-sm">
        <q-btn outline style="color: black;" label="Sepete Ekle"></q-btn> <span>  Kaldır</span>
        
      </div>
      <div class="col">
  </div>
      <div class="col6">
  </div>
  </div>
  <div class="col">
  </div>
  <div class="col">
   <br/> <br/> <br/> 1849,00 TL
  </div>
</div>
</div>
<!--<div class="q-pa-md example-row-stacked-to-horizontal">
  <div class="row">
      <div class="col-12 col-md"><img alt="Resim Summits" src="https://skcfiles.mncdn.com/mnresize/150/150/livephotos/232395TK BKCC/01.jpg" title="Resim Summits"></div>
      <div class="col-12 col-md">Summits<br/>232395TK BKCC<br/> 
</div>
<div class="col-12 col-md"></div>
      <div class="col-12 col-md">1849,00 TL</div>
    </div>

  
</div>-->
<!--<div class="q-pa-md example-row-column-wrapping">

<div class="row">
  <div class="col-9">Ürün</div>
  <div class="col-4"><img alt="Resim Summits" src="https://skcfiles.mncdn.com/mnresize/150/150/livephotos/232395TK BKCC/01.jpg" title="Resim Summits">Summits
    <br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
  <div class="col-5"><br>1849,00 TL</div>
</div>
</div>-->
      
      <div class="q-ma-md">
    <q-scroll-area
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
      style="height: 200px; max-width: 300px;"
    >
    </q-scroll-area>
  </div>
  
  

  



    
 
  


  
<!-- <div class="q-pa-md q-gutter-sm text-center">
    <q-btn unelevated color="bg-grey-10 text-black" label="Cep Telefonu ile" />
    <q-btn unelevated color="bg-grey-14 text-black" label="E-Posta ile" />
  </div>-->
  
      </h5>
    <p></p>
    <p></p>
  </q-page>

  <div class="q-pa-md example-row-column-wrapping bg-indigo-10">
    <div class="row">
      <div class="col-6 col-sm-3"><div class="swiper-slide cl-footer-features-row-item swiper-slide-active" role="group" aria-label="1 / 4" style="width: 176px; margin-right: 20px;"><img src="https://skcfiles.mncdn.com/webfiles/banners/2022/ekim/plus.svg">
<p>Ayrıcalıklı Alışveriş Fırsatı</p>
</div></div>
      <div class="col-6 col-sm-3"><div class="swiper-slide cl-footer-features-row-item swiper-slide-next" role="group" aria-label="2 / 4" style="width: 176px; margin-right: 20px;"><img src="https://skcfiles.mncdn.com/webfiles/iade.svg">
<p>30 Gün Ücretsiz Kolay İade</p>
</div></div>



      <div class="col-6 col-sm-3"><div class="swiper-slide cl-footer-features-row-item" role="group" aria-label="3 / 4" style="width: 176px; margin-right: 20px;"><img src="https://skcfiles.mncdn.com/webfiles/clickandcollect-logo.png">
<p>Online Sipariş Mağazadan Teslim</p>
</div></div>
      <div class="col-6 col-sm-3"><div class="swiper-slide cl-footer-features-row-item" role="group" aria-label="4 / 4" style="width: 176px; margin-right: 20px;"><img src="https://skcfiles.mncdn.com/webfiles/icon-gift.svg" ><p>Hediye Paketi Seçeneği</p>

</div></div>
    </div>
  </div>

  <!--<div class="q-pa-md" style="max-width: 350px">
    <q-list >
      <q-item clickable v-ripple>
        <q-item-section>
          
        </q-item-section>
      </q-item>


      <q-item clickable v-ripple>
        <q-item-section>
          Mağaza Bul
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          Sipariş Takip
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          Skechers Blog
        </q-item-section>
      </q-item>
    </q-list>

    <q-item clickable v-ripple>
        <q-item-section>
          Skechers Plus
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          Sosyal
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          

        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          Item
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          Item
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          Item
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          Item
        </q-item-section>
      </q-item>

      <var></var>
  </div>-->
  
  <div class="q-pa-md example-row-all-breakpoints bg-grey-2">

<div class="row">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
<div class="row">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
<div class="row">
  <div class="col">Mağaza Bul</div>
  <div class="col">Yardım</div>
  <div class="col">Kurumsal</div>
  <div class="col">Özel Sayfalar</div>
  <div class="col"><span>Rahatlığın en teknolojik hali artık cebinde!!</span></div>
</div>
<div class="row">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
<div class="row">
  <div class="col">Sipariş Takip</div>
  <div class="col">Sıkça Sorulan Sorular</div>
  <div class="col">Hakkımızda</div>
  <div class="col">Anneler Günü</div>
  <div class="col"><img class="cl-footer-app-icon" data-src="https://skcfiles.mncdn.com/webfiles/android.svg" src="https://skcfiles.mncdn.com/webfiles/android.svg"></div>
</div>
<div class="row">
  <div class="col"></div>
  <div class="col">Gizlilik ve Güvenlik</div>
  <div class="col">İletişim/Müşteri Hizmetleri</div>
  <div class="col">Babalar Günü</div>
  <div class="col"><img class="cl-footer-app-icon" data-src="https://skcfiles.mncdn.com/webfiles/ios.svg" src="https://skcfiles.mncdn.com/webfiles/ios.svg"></div>
</div>
<div class="row">
  <div class="col">Skechers Blog</div>
  <div class="col">Kullanım Koşulları</div>
  <div class="col">Kariyer</div>
  <div class="col">Back to School</div>
  <div class="col"></div>
</div>
<div class="row">
  <div class="col"></div>
  <div class="col">İade Prosedürü</div>
  <div class="col"></div>
  <div class="col">Black Friday</div>
  <div class="col"></div>
</div>
<div class="row">
  <div class="col">Skechers Plus</div>
  <div class="col">Kişisel Verilerin Korunması</div>
  <div class="col"></div>
  <div class="col">Sevgililer Günü</div>
  <div class="col"></div>
</div>
<div class="row">
  <div class="col"></div>
  <div class="col">Aydınlatma Metni</div>
  <div class="col"></div>
  <div class="col">Yılbaşı</div>
  <div class="col"></div>
</div>
<div class="row">
  <div class="col"></div>
  <div class="col">Etik İlkeler Prosedürü</div>
  <div class="col"></div>
  <div class="col">Single's Day</div>
  <div class="col">
    <img style="width:100px; height:120px" src="data:image/jpeg;base64, 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"></div>
</div>
<div class="row">
  <div class="col">Sosyal</div>
  <div class="col">Çerez Politikası</div>
  <div class="col"></div>
  <div class="col">Doktor Hediyeleri</div>
  <div class="col"></div>
</div>
<div class="row">
  <div class="col"> 
    <img src= https://skc.mncdn.com/Themes/DefaultClean/Content/images/footer_facebook.svg >
    <img src="https://skc.mncdn.com/Themes/DefaultClean/Content/images/footer_instagram.svg">
  </div>
  <div class="col">Yıkama Talimatları</div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
<div class="row">
  <div class="col">
    <img src="https://skc.mncdn.com/Themes/DefaultClean/Content/images/footer_youtube.svg">
    <img src="https://skcfiles.mncdn.com/webfiles/kariyer-icon.png">
  </div>
  <div class="col">Skechers Plus Üyelik Sözleşmesi</div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
<div class="row">
  <div class="col">
    <img src="https://skcfiles.mncdn.com/webfiles/linkedin-icon.png">
  </div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
</div>-->
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  
})
</script>
