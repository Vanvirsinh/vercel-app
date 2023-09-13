<script>
    import BackToTop from "$lib/BackToTop.svelte";
    import ContactIcons from "$lib/ContactIcons.svelte";
    import { onMount } from "svelte";

    let ScrollReveal;

    onMount(() => {
        const module = import("scrollreveal");
        module.then((m) => {
            ScrollReveal = m.default;
            /*========== SCROLL REVEAL ANIMATION ==========*/
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
    });
</script>

<svelte:head>
    <title>Contact Us - Fixonn</title>
</svelte:head>

<section id="contactUsIntro" class="py-32">
    <div class="font-mukta flex flex-col items-center animate_bottom">
        <h3 class="text-logoIcon font-bold w-fit">CONTACT US</h3>
        <h1 class="mt-4 text-5xl font-semibold text-white">
            Reach out to Fixonn
        </h1>
    </div>
</section>

<section id="contactUs">
    <div
        class="font-mukta mx-auto max-w-c-1390 px-6 py-20 border-b border-[#E0E0E0]"
    >
        <div class="font-mukta flex flex-col items-center animate_bottom">
            <h3 class="text-logoIcon font-bold w-fit">CONTACT US</h3>
            <h1 class="my-4 text-5xl font-semibold text-black">
                Let us Know how we can help you?
            </h1>
            <p class="w-1/2 text-center text-[#757693]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                eligendi, velit, neque deserunt ipsam quod, voluptatum minima
                corrupti mollitia maiores ex unde magnam quis reiciendis?
            </p>
        </div>
        <!-- Contact Details -->
        <div class="mt-20">
            <div class="grid grid-cols-3 gap-8">
                <div
                    class="animate_bottom mb-2 p-4 flex justify-center items-center border border-[#E0E0E0] rounded-md text-lg text-[#757693]"
                >
                    <i class="fa-solid fa-envelope text-sm mr-2" /> your@example.com
                </div>
                <div
                    class="animate_bottom mb-2 p-4 flex justify-center items-center border border-[#E0E0E0] rounded-md text-lg text-[#757693]"
                >
                    <i class="fa-solid fa-phone text-sm mr-2" /> (123) 456-7890
                </div>
                <div
                    class="animate_bottom mb-2 p-4 flex justify-center items-center border border-[#E0E0E0] rounded-md text-lg text-[#757693]"
                >
                    <i class="fa-solid fa-location-dot text-sm mr-2" /> 123 Street
                    Name, City
                </div>
            </div>
            <div class="mt-20 flex">
                <div class="w-1/2 animate_left">
                    <div class="px-20">
                        <img
                            class="h-full"
                            src="../images/3969587.jpg"
                            alt="Contact Us"
                        />
                    </div>
                </div>
                <div class="w-1/2 animate_right">
                    <div class="mb-10">
                        <h1 class="text-3xl text-black mb-4">
                            Let us know if you have anything to share with us.
                        </h1>
                    </div>
                    <form class="flex flex-col gap-y-4">
                        <div class="flex gap-x-4">
                            <input
                                placeholder="Enter your name"
                                type="text"
                                class="w-1/2 rounded-md p-3 border border-[#E0E0E0]"
                            />
                            <input
                                placeholder="Enter your email"
                                type="email"
                                class="w-1/2 rounded-md p-3 border border-[#E0E0E0]"
                            />
                        </div>
                        <div class="flex gap-x-4">
                            <input
                                placeholder="Enter your subject (optional)"
                                type="text"
                                class="w-1/2 rounded-md p-3 border border-[#E0E0E0]"
                            />
                            <input
                                placeholder="Enter your phone (optional)"
                                type="text"
                                class="w-1/2 rounded-md p-3 border border-[#E0E0E0]"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Enter your message..."
                                class="w-full rounded-md p-3 border border-[#E0E0E0]"
                                rows="6"
                            />
                        </div>
                        <div>
                            <button
                                class="bg-logoIcon text-white rounded-md py-3 px-4"
                                type="submit"
                                >Send Message <i
                                    class="ml-2 fa fa-arrow-right"
                                /></button
                            >
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Other Absolute Components -->
<BackToTop pathName="/contact" />
<ContactIcons />

<style>
    #contactUsIntro {
        background-image: linear-gradient(
                rgba(19, 40, 76, 0.775),
                rgba(19, 40, 76, 0.322)
            ),
            url("../images/businessman-big-office.jpg");
        background-position: center;
        background-size: cover;
    }
</style>
