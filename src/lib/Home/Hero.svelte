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
                        Heading for the first slide<span class="text-logoIcon"
                            >.</span
                        >
                    </h1>
                    <p class="text-lg tracking-normal lg:w-1/2 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos rem, sint harum modi veniam labore.
                    </p>
                    <a
                        href="#about"
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
                        Heading for the first slide<span class="text-logoIcon"
                            >.</span
                        >
                    </h1>
                    <p class="text-lg tracking-normal lg:w-1/2 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos rem, sint harum modi veniam labore.
                    </p>
                    <a
                        href="#about"
                        class="bg-logoIcon text-white flex px-4 py-3 rounded w-fit"
                        >Send Enquiry</a
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
                        Heading for the first slide<span class="text-logoIcon"
                            >.</span
                        >
                    </h1>
                    <p class="text-lg tracking-normal lg:w-1/2 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos rem, sint harum modi veniam labore.
                    </p>
                    <a
                        href="#about"
                        class="bg-logoIcon text-white flex px-4 py-3 rounded w-fit"
                        >Send Enquiry</a
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
    }
    .item-1 {
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.386),
                rgba(0, 0, 0, 0.326)
            ),
            url("https://images.unsplash.com/photo-1535191595495-d3222b2eda44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80");
    }
    .item-2 {
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.386),
                rgba(0, 0, 0, 0.326)
            ),
            url("https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1934&q=80");
    }
    .item-3 {
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.386),
                rgba(0, 0, 0, 0.326)
            ),
            url("https://urbango.qodeinteractive.com/wp-content/uploads/2018/09/h1-slide-2.jpg");
    }
    @media only screen and (max-width: 700px) {
        .swiper-pagination {
            bottom: 30px !important;
        }
    }
</style>
