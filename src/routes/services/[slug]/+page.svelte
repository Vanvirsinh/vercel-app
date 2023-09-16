<script>
    import { onMount } from "svelte";
    import BackToTop from "$lib/BackToTop.svelte";
    import ContactIcons from "$lib/ContactIcons.svelte";
    import { load } from "./+page.js";
    import Error from "$lib/Error.svelte";

    let currentUrl;
    let currentServiceName;
    let ScrollReveal;
    let currentService = {};

    onMount(async () => {
        currentUrl = window.location.pathname;
        currentServiceName = currentUrl.split("/").pop();

        currentService = load(currentServiceName);

        if (window.screen.availWidth > 890) {
            const module = import("scrollreveal");
            module.then((m) => {
                ScrollReveal = m.default;
                window.sr = ScrollReveal({
                    distance: "60px",
                    duration: 1000,
                    reset: false,
                });

                sr.reveal(`.animate_top`, {
                    origin: "top",
                    interval: 100,
                });

                sr.reveal(`.animate_left`, {
                    origin: "left",
                    interval: 100,
                });

                sr.reveal(`.animate_right`, {
                    origin: "right",
                    interval: 100,
                });

                sr.reveal(`.animate_bottom`, {
                    origin: "bottom",
                    interval: 100,
                });
            });
        }
    });
</script>

<svelte:head>
    <title>
        {currentService.subTitle ? currentService.subTitle : "Page not found!"}
    </title>
</svelte:head>

<!-- Individual Services -->
{#if Object.keys(currentService).length !== 0}
    <section
        id="indServices"
        style="background-image: linear-gradient(
    rgba(19, 40, 76, 0.575),
    rgba(19, 40, 76, 0.522)
),
url({currentService.serviceBg});"
        class="py-20 md:py-32"
    >
        <div class="font-mukta flex flex-col items-center animate_bottom">
            <h3 class="text-logoIcon font-bold w-fit">FIXONN</h3>
            <h1
                class="mt-4 text-3xl text-center md:text-5xl font-semibold text-white"
            >
                {currentService.subTitle}
            </h1>
        </div>
    </section>

    <section id="services">
        <div
            class="mx-auto max-w-c-1390 px-4 md:px-6 py-10 md:py-20 border-b border-[#e0e0e0]"
        >
            <div class="grid md:grid-cols-2 gap-4 font-mukta">
                <div class="animate_left">
                    <div
                        class="h-full flex md:px-20 justify-center items-center"
                    >
                        <img
                            src={currentService.serviceImg}
                            alt={currentService.title}
                        />
                    </div>
                </div>
                <div class="animate_right flex flex-col gap-y-3 md:gap-y-5">
                    <h1
                        class="font-bold text-3xl md:text-5xl text-black uppercase"
                    >
                        {currentService.title}
                    </h1>
                    <p class="text-md">
                        {currentService.servicePara}
                    </p>
                    <div>
                        <h3 class="text-xl font-semibold mb-2">
                            {currentService.title} Service Includes:
                        </h3>
                        <ul class="text-md">
                            {#each currentService.subServices as subService}
                                <li>
                                    <i
                                        class="fa-solid fa-check mr-2 text-logoIcon"
                                    />
                                    {subService}
                                </li>
                            {/each}
                        </ul>
                    </div>
                    <button
                        class="w-fit text-white bg-logoIcon py-3 px-4 rounded-md"
                        >Book {currentService.title} Service
                        <i class="fa-solid fa-bookmark ml-2" /></button
                    >
                </div>
            </div>
            <div class="mt-20">
                <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {#each currentService.subServiceImages as img}
                        <div
                            class="p-5 md:p-10 bg-black/[0.05] rounded-md animate_bottom"
                        >
                            <img class="h-full" src={img.img} alt={img.title} />
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </section>
{:else}
    <Error />
{/if}

<!-- Other Absolute Components -->
<BackToTop pathName={currentUrl} />
<ContactIcons />

<style>
    #indServices {
        background-position: center;
        background-size: cover;
    }
</style>
