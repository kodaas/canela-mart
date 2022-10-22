<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <main class="bg-white relative w-full h-full">
        <span class="inline-block w-[350px] h-[350px] bg-pry absolute opacity-10 blur-lg rounded-full -top-24 -left-10"></span>
        <span class="inline-block w-[300px] h-[300px] bg-pry absolute opacity-10 blur-lg rounded-full -right-5 top-24"></span>
        
        
        <img class="absolute right-8 -top-10 opacity-50" src="@/assets/images/icons/Leaf.svg" alt="Leaf">
        
        <img class="absolute -right-4 bottom-0 blur-sm opacity-80" src="@/assets/images/icons/Leaf.svg" alt="Leaf">
        
        <img class="absolute rotate-90 left-10 w-10 h-10 -bottom-24 z-10 opacity-50" src="@/assets/images/icons/Leaf.svg" alt="Leaf">
        
        
        
        <article class="text-center mt-[15%] w-[80%] mx-auto">
            <img class="mb-[32px] mx-auto" src="@/assets/images/icons/logo - Circle.svg" alt="Logo">

            <h1 class="text-3xl leading-10 font-bold text-dark mb-4">Get your groceries delivered to your home</h1>

            <p class="text-lg text-grey w-[85%] mx-auto mb-8">The best delivery app in town for delivering your daily fresh groceries</p>

            <button class="bg-pry text-base text-white font-bold w-1/2 mx-auto px-5 py-3 rounded-full cursor-pointer" @click="$router.push('/home')"> 
                Shop now
            </button>
        </article>

        <div class="bg-sec w-full h-[45%] fixed bottom-0">
            <img class="w-full h-full object-cover"  src="@/assets/images/onbording img.jpg" alt="Foods">
        </div>
    </main>
</template>