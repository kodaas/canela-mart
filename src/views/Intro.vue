<script setup>
</script>

<template>
    <main class="hide-scrollbar relative w-[100vw] h-full">
        <span class="inline-block w-[350px] h-[350px] bg-pry absolute opacity-10 blur-lg rounded-full -top-24 -left-10"></span>
        <span class="inline-block w-[320px] h-[320px] bg-pry absolute opacity-10 blur-lg rounded-full -right-0  top-20"></span>
        
        
        <img class="absolute right-8 -top-10 opacity-50" src="@/assets/images/icons/Leaf.svg" alt="Leaf">
        
        <img class="absolute right-0 bottom-0 blur-sm opacity-80" src="@/assets/images/icons/Leaf.svg" alt="Leaf">
        
        <img class="absolute rotate-90 left-10 w-10 h-10 -bottom-20 z-10 opacity-50" src="@/assets/images/icons/Leaf.svg" alt="Leaf">
        
        
        
        <article class="text-center mt-[15%] w-[80%] mx-auto">
            <img class="mb-[32px] mx-auto" src="@/assets/images/icons/logo - Circle.svg" alt="Logo">

            <h1 class="text-3xl leading-10 font-bold text-dark mb-4">Get your groceries delivered to your home</h1>

            <p class="text-lg text-grey w-[85%] font-medium mx-auto mb-8">The best delivery app in town for delivering your daily fresh groceries</p>

            <button class="bg-pry text-base text-white font-bold w-1/2 mx-auto px-5 py-3 rounded-full cursor-pointer" @click="$router.push('/kyc')"> 
                Shop now
            </button>
        </article>

        <div class="bg-sec w-full h-[43%] fixed bottom-0">
            <img class="w-full h-full object-cover"  src="@/assets/images/onbording img.jpg" alt="Foods">
        </div>
    </main>
</template>