<script setup>
import AppLayout from '@/components/AppLayout.vue';
</script>

<template>
    <div>
        <AppLayout :imgUrl="'/src/assets/img/bg-1.png'">
            <div class="wrapper">
                <div class="info">
                    <div class="title">
                        Choose your drink
                        <div class="line"></div>
                    </div>
                </div>
            </div>
        </AppLayout>
    </div>
</template>



<style lang="sass" scoped>
@import '../assets/styles/main'

.wrapper
    display: flex
    justify-content:  center

.info
    padding: 80px 0
    text-align: center
    text-align: center

    
</style>