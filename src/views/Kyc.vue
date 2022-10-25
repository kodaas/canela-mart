<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <main>

        <nav class="grid grid-cols-5 px-3 py-5">
            <span class=" justify-self-start p-3 border-2 border-stroke-light rounded-full"> <img
                    src="@/assets/images/icons/left arrow.svg" alt="<"> </span>
            <div class="space-x-3 flex items-center justify-center col-span-3 w-full">
                <span class="inline-block w-1/3 h-1 bg-pry rounded-full"></span>
                <span class="inline-block w-1/3 h-1 bg-pry rounded-full"></span>
                <span class="inline-block w-1/3 h-1 bg-pry rounded-full"></span>
                <!-- <span class="inline-block w-1/3 h-1 bg-light-grey2 rounded-full"></span> -->
                <!-- <span class="inline-block w-1/3 h-1 bg-light-grey2 rounded-full"></span> -->
                
            </div>
        </nav>

        <section class="relative">

            <span class="-z-10 inline-block w-[350px] h-[350px] bg-pry absolute opacity-10 blur-lg rounded-full -top-24 -left-10"></span>
            <span class="-z-10 inline-block w-[300px] h-[300px] bg-pry absolute opacity-10 blur-lg rounded-full right-0 top-24"></span>

            <article class="hidden text-center mt-8 w-full mx-auto px-6">
                <img class="mb-[32px] mx-auto w-1/4 h-1/4" src="@/assets/images/icons/logo - Circle.svg" alt="Logo">

                <h1 class="text-4xl leading-10 font-bold text-dark mb-4">Enter your mobile number 📞</h1>

                <p class="text-lg text-grey w-[85%] font-medium mx-auto mb-8">We will send you a verification code 🔐</p>

                <div class="my-10 flex justify-center items-center gap-x-2 w-full font-bold text-3xl">

                    <span class="flex items-center gap-x-2 px-2 p-2 rounded-xl"><img
                            class="inline-block w-3 h-3" src="@/assets/images/icons/down arrow.svg" alt="all"> +234
                    </span>

                    <!-- Country List -->
                    <span></span>
                    <!-- Country List -->

                    <input class="inline-block w-[9em] bg-[transparent] placeholder:text-grey outline-none" type="tel" name="phone" id="phone" size="11" maxlength="12" placeholder="00 000-000-00">


                </div>

                <button
                    class="bg-pry text-lg text-white font-bold w-full mx-auto px-5 py-4 rounded-full cursor-pointer"
                    @click="$router.push('/kyc')">
                    next
                </button>
            </article>

            <article class="hidden text-center mt-8 w-full mx-auto px-6">
                <img class="mb-[32px] mx-auto w-1/4 h-1/4" src="@/assets/images/icons/logo - Circle.svg" alt="Logo">

                <h1 class="text-4xl leading-10 font-bold text-dark mb-4">Enter your OTP 🔑</h1>

                <p class="text-lg text-grey w-[85%] font-medium mx-auto mb-8">You will get an OTP via SMS 📩</p>

                <div class="my-10 flex justify-center items-center gap-x-2 w-full font-bold text-3xl">

                    <input class="inline-block bg-[transparent] placeholder:text-grey outline-none" type="text" name="otp" id="otp" size="6" maxlength="6" placeholder="******">

                </div>

                <button
                    class="bg-pry text-lg text-white font-bold w-full mx-auto px-5 py-4 rounded-full cursor-pointer"
                    @click="$router.push('/kyc')">
                    Next
                </button>
            </article>

            <article class="text-center mt-8 w-full mx-auto px-6">
                <img class="mb-[32px] mx-auto w-1/4 h-1/4" src="@/assets/images/icons/logo - Circle.svg" alt="Logo">

                <h1 class="text-4xl leading-10 font-bold text-dark mb-4">Where Should we deliver to 🤔</h1>

                <p class="text-lg text-grey w-[85%] font-medium mx-auto mb-8">You can always change this in the settings ⚙️</p>

                <div class="my-10 flex justify-center items-center gap-x-2 w-full font-bold text-xl">

                    <select class="w-full text-ellipsis text-center py-3 px-3 bg-[transparent] border-2 border-light-grey2 focus:border-pry rounded-2xl" name="Address" id="address">
                        <option value="aul">Anchor University Lagos 0 Anchor University Lagos 2 Anchor University Lagos 2</option>
                        <option value="aul">Anchor University Lagos 1</option>
                        <option value="aul">Anchor University Lagos 2</option>
                        <option value="aul">Anchor University Lagos 3</option>
                        <option value="aul">Anchor University Lagos 4</option>
                        <option value="aul">Anchor University Lagos 5</option>
                    </select>

                </div>

                <button
                    class="bg-pry text-lg text-white font-bold w-full mx-auto px-5 py-4 rounded-full cursor-pointer"
                    @click="$router.push('/kyc')">
                    Start Shopping 🥳
                </button>

            </article>

            <footer class="px-10 text-center font-bold text-grey mt-5 text-lg">
                <p>By clicking on “Continue” you are agreeing to our  <RouterLink to="/" class="text-[#5D5FEF] underline font-medium cursor-pointer">terms of use</RouterLink></p>
            </footer>

        </section>

    </main>
</template>