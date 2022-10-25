<script setup>
</script>

<template>
  <main class="bg-white full h-full w-full space-y-[24px]">
    <section class="flex justify-between items-center w-[90%] mx-auto mt-[24px]">
      <div class="flex gap-x-4 items-center">
        <img src="@/assets/images/icons/avartar 2.svg" alt="Profile">
        <article>
          <p class="text-sm text-grey font-medium">Good Morning</p>
          <h2 class="font-medium text-lg">Amelia Barlow</h2>
        </article>
      </div>
      <span class="flex gap-x-2 py-2 px-3 rounded-full">
        <img src="@/assets/images/icons/map marker.svg" alt="Map Pointer">
        <p class="text-md">My Flat</p>
        <img src="@/assets/images/icons/down arrow.svg" alt="">
      </span>
    </section>

    <section class="relative w-[90%] mx-auto font-medium">
      <input class="w-full py-3 px-7 pl-14 text-lg rounded-full outline-none focus:ring-2 ring-pry" type="text" placeholder="Search category">
      <img class="absolute left-5 top-3 w-6 h-6" src="@/assets/images/icons/search.svg" alt="Search">
    </section>

    <section class="overflow-auto whitespace-nowrap space-x-4 px-5 snap-x snap-proximity hide-scrollbar">

      <div class="relative snap-center inline-block w-[85vw] h-[40vw] rounded-3xl overflow-hidden">
        <img class="object-cover w-full h-full object-left-top" src="@/assets/images/ads img.jpg" alt="Ads">
        <div style="clip-path: circle(100.2% at 100% 50%)" class="absolute top-0 right-0 bg-[#FF8181] w-[70%] h-full text-white flex flex-col items-start pl-16 gap-y-3 justify-center">
          <span class="text-sm">Christmas Offers</span>
          <h3 class="text-3xl font-medium">Get 25%</h3>
          <button class="text-pry bg-white px-4 py-1 flex items-center gap-x-2 font-medium rounded-full">Grab Offer <img class="inline" src="@/assets/images/icons/angle-right.svg" alt=">"></button>
        </div>
      </div>

      <div class="relative snap-center inline-block w-[85vw] h-[40vw] rounded-3xl overflow-hidden">
        <img class="object-cover w-full h-full object-left-top" src="@/assets/images/ads img.jpg" alt="Ads">
        <div style="clip-path: circle(100.2% at 100% 50%)" class="absolute top-0 right-0 bg-pry w-[70%] h-full text-white flex flex-col items-start pl-16 gap-y-3 justify-center">
          <span class="text-sm">Christmas Offers</span>
          <h3 class="text-3xl font-medium">Get 25%</h3>
          <button class="text-pry bg-white px-4 py-1 flex items-center gap-x-2 font-medium rounded-full">Grab Offer <img class="inline" src="@/assets/images/icons/angle-right.svg" alt=">"></button>
        </div>
      </div>

      <div class="relative snap-center inline-block w-[85vw] h-[40vw] rounded-3xl overflow-hidden">
        <img class="object-cover w-full h-full object-left-top" src="@/assets/images/ads img.jpg" alt="Ads">
        <div style="clip-path: circle(100.2% at 100% 50%)" class="absolute top-0 right-0 bg-pry w-[70%] h-full text-white flex flex-col items-start pl-16 gap-y-3 justify-center">
          <span class="text-sm">Christmas Offers</span>
          <h3 class="text-3xl font-medium">Get 25%</h3>
          <button class="text-pry bg-white px-4 py-1 flex items-center gap-x-2 font-medium rounded-full">Grab Offer <img class="inline" src="@/assets/images/icons/angle-right.svg" alt=">"></button>
        </div>
      </div>

    </section>
    
    <section class="w-[90%] mx-auto ">
      <nav class="flex justify-between">
        <h4 class="text-xl font-bold">Categories 😉</h4>
        <p class="text-pry font-medium hover:underline cursor-pointer" @click="$router.push('/category')">See all</p>
      </nav>

      <div class="flex justify-between mt-5">

        <div class="text-center">
          <span class="inline-block p-6 rounded-full bg-light-bg"> <img src="@/assets/images/icons/apple.svg" alt="Apple"> </span>
          <p class="font-medium">Fruits</p>
        </div> 

        <div class="text-center">
          <span class="inline-block p-6 rounded-full bg-light-bg"> <img src="@/assets/images/icons/broccoli.svg" alt="broccoli"> </span>
          <p class="font-medium">Vegetables</p>
        </div> 

        <div class="text-center">
          <span class="inline-block p-6 rounded-full bg-light-bg"> <img src="@/assets/images/icons/cheese.svg" alt="cheese"> </span>
          <p class="font-medium">Diary</p>
        </div> 

        <div class="text-center">
          <span class="inline-block p-6 rounded-full bg-light-bg"> <img src="@/assets/images/icons/meat.svg" alt="meat"> </span>
          <p class="font-medium">Meat</p>
        </div>

      </div>
    </section>
    
    
    <section class="w-[90%] mx-auto ">
      <nav class="flex justify-between">
        <h4 class="text-xl font-bold">Best selling 🔥</h4>
        <p class="text-pry font-medium hover:underline cursor-pointer" @click="$router.push('/bestselling')">See all</p>
      </nav>

      <div class="mt-5 w-full flex flex-wrap gap-x-3 gap-y-4"> 

        <div class="relative pb-5 space-y-5 w-[] min-h-fit object-cover object-center bg-light-bg rounded-2xl p-4">
          <img class="w-full" src="@/assets/images/Product Image/pepper.jpg" alt="pepper">

          <article class=""> 
            <h5 class="text-dark font-bold text-lg">Bell Pepper Red</h5>
            
            <p class="font-medium text-lg text-sec">1kg, 4$</p>
          </article>
 
          <span class="absolute bottom-3 right-3 inline-block p-3 rounded-full bg-pry"> <img src="@/assets/images/icons/plus 1.svg" alt="+"></span>
        </div>

        <div class="relative pb-5 space-y-5 w-1/2 min-h-fit object-cover object-center bg-light-bg rounded-2xl p-4">
          <img class="w-full" src="@/assets/images/Product Image/pepper.jpg" alt="pepper">

          <article class=""> 
            <h5 class="text-dark font-bold text-lg">Bell Pepper Red</h5>
            <p class="font-medium text-lg text-sec">1kg, 4$</p>
          </article>
 
          <span class="absolute bottom-3 right-3 inline-block p-3 rounded-full bg-pry"> <img src="@/assets/images/icons/plus 1.svg" alt="+"></span>
        </div>

        <div class="relative pb-5 space-y-5 w-1/2 min-h-fit object-cover object-center bg-light-bg rounded-2xl p-4">
          <img class="w-full" src="@/assets/images/Product Image/pepper.jpg" alt="pepper">

          <article class=""> 
            <h5 class="text-dark font-bold text-lg">Bell Pepper Red</h5>
            <p class="font-medium text-lg text-sec">1kg, 4$</p>
          </article>
 
          <span class="absolute bottom-3 right-3 inline-block p-3 rounded-full bg-pry"> <img src="@/assets/images/icons/plus 1.svg" alt="+"></span>
        </div>

      </div>
    </section>

    <nav class="fixed bottom-0 flex justify-between w-full px-10 py-8 bg-white">
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
    </nav>

  </main>
</template>

