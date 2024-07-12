<script setup>
const props = defineProps({
    imgUrl: {
        type: String,
        requiored: true
    }

})
</script>

<template>
    <div class="root">
        <div class="img" :style="`background-image: url(${props.imgUrl})`">
        </div>
        <div class="main">
            <button class="btn">Get Random Cocktail</button>
        </div>
    </div>
</template>



<style lang="sass" scoped>
@import '../assets/styles/main'

.root
    display: flex
    background-color: $background  
    min-height: 100vh  

.img
  width: 50%
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: cover

.main
    position: relative
    width:50% 
    padding: 32px 40px
.btn-random
    position: absolute
    top: 32px
    right: 40px
    background-color: $accent
    border-color: $accent
    font-size: 16px
    font-family: 'Rail', 'Arial', 'sans-serif'
    padding: 8px 14px
    border-radius: 25px
    cursor: pointer
    color: $text

     &:hover,
     &:active
      background-color:darken($accent,10% )
      border-color: darken($accent,10% )
</style>