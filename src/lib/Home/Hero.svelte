<script>
    import { onMount } from "svelte";
    import Swiper from "swiper/bundle";
    import "swiper/swiper-bundle.min.css";

    let swiper;

    onMount(() => {
        swiper = new Swiper(".swiper-container", {
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    });
</script>

<div class="swiper-container">
    <div class="swiper-wrapper">
        <!-- Item 1 -->
        <div class="swiper-slide item-1">
            <div class="h-full w-full bg-[#000]/[0.25]">
                <div
                    class="h-[90%] mx-auto max-w-c-1390 px-6 flex gap-y-4 justify-center flex-col font-mukta"
                >
                    <h1
                        class="text-5xl md:text-6xl font-bold text-white lg:w-1/2 leading-tight"
                    >
                        Welcome to FIXONN<span class="text-logoIcon">.</span>
                    </h1>
                    <p class="text-lg tracking-normal lg:w-1/2 text-white">
                        Fixonn makes maintenance services at your Door step
                        hassle free Introducing the best home repair solutions
                        by our Superheroes.
                    </p>
                    <a
                        href="#enquiryForm"
                        class="bg-logoIcon text-white flex px-4 py-3 rounded w-fit"
                        >Send Enquiry</a
                    >
                </div>
            </div>
        </div>

        <!-- Item 2 -->
        <div class="swiper-slide item-2">
            <div class="h-full w-full bg-[#000]/[0.25]">
                <div
                    class="h-[90%] mx-auto max-w-c-1390 px-6 flex gap-y-4 justify-center flex-col font-mukta"
                >
                    <h1
                        class="text-5xl md:text-6xl font-bold text-white lg:w-1/2 leading-tight"
                    >
                        We have Superheroes<span class="text-logoIcon">.</span>
                    </h1>
                    <p class="text-lg tracking-normal lg:w-1/2 text-white">
                        Who takes care of the end to end process and get you a
                        resolution.
                    </p>
                    <a
                        href="/about"
                        class="bg-logoIcon text-white flex px-4 py-3 rounded w-fit"
                        >Read More About Fixonn</a
                    >
                </div>
            </div>
        </div>

        <!-- Item 3 -->
        <div class="swiper-slide item-3">
            <div class="h-full w-full bg-[#000]/[0.25]">
                <div
                    class="h-[90%] mx-auto max-w-c-1390 px-6 flex gap-y-4 justify-center flex-col font-mukta"
                >
                    <h1
                        class="text-5xl md:text-6xl font-bold text-white lg:w-1/2 leading-tight"
                    >
                        We deliver 100% Excellence<span class="text-logoIcon"
                            >.</span
                        >
                    </h1>
                    <p class="text-lg tracking-normal lg:w-1/2 text-white">
                        We always keep our consumers delighted and proactively
                        work on their requests.
                    </p>
                    <a
                        href="#services"
                        class="bg-logoIcon text-white flex px-4 py-3 rounded w-fit"
                        >Checkout our Services</a
                    >
                </div>
            </div>
        </div>
    </div>
    <div style="bottom: 70px;" class="swiper-pagination" />
</div>

<style>
    :root {
        --swiper-theme-color: #181c31;
        --swiper-pagination-bullet-inactive-opacity: 0.3;
    }

    .swiper-container {
        overflow: hidden;
        max-width: 100vw;
        height: 550px;
        position: relative;
        cursor: w-resize;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
    }
    .item-1 {
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.386),
                rgba(0, 0, 0, 0.326)
            ),
            url("https://fixonn.netlify.app/images/bg-slid-1.jpeg");
    }
    .item-2 {
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.386),
                rgba(0, 0, 0, 0.326)
            ),
            url("https://fixonn.netlify.app/images/bg-slid-3.jpeg");
    }
    .item-3 {
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.386),
                rgba(0, 0, 0, 0.326)
            ),
            url("https://fixonn.netlify.app/images/bg-slide-customer-satisfaction.png");
    }
    @media only screen and (max-width: 700px) {
        .swiper-pagination {
            bottom: 30px !important;
        }
    }
</style>
