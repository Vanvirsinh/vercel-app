<script>
    import BackToTop from "$lib/BackToTop.svelte";
    import ContactIcons from "$lib/ContactIcons.svelte";
    import { onMount } from "svelte";

    let ScrollReveal;

    onMount(() => {
        if (window.screen.availWidth > 890) {
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
        }
    });
</script>

<svelte:head>
    <title>About Us - Fixonn</title>
</svelte:head>

<section id="aboutUsIntro" class="py-20 md:py-32">
    <div class="font-mukta flex flex-col items-center animate_bottom">
        <h3 class="text-logoIcon font-bold w-fit">ABOUT US</h3>
        <h1 class="mt-4 text-3xl md:text-5xl font-semibold text-white">
            What is Fixonn?
        </h1>
    </div>
</section>

<section id="aboutUs">
    <div class="mx-auto max-w-c-1390 px-4 md:px-6 py-10 md:py-20">
        <div class="grid md:grid-cols-2 gap-4 md:gap-8 font-mukta">
            <div class="animate_left">
                <div>
                    <img src="../images/2663543.jpg" alt="" />
                </div>
            </div>
            <div class="animate_right flex flex-col gap-y-3 md:gap-y-5">
                <h1 class="text-3xl md:text-5xl font-bold text-black">
                    Fixonn<span class="text-logoIcon">.</span>
                </h1>
                <p class="text-md md:text-lg text-[#757693]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis vel eum quaerat repellat nihil praesentium
                    corrupti, facere ipsam quidem, explicabo doloribus nulla
                    modi. Nobis doloremque, reiciendis labore quidem libero
                    dolor soluta, molestiae beatae asperiores sunt expedita
                    facere perferendis fuga necessitatibus! Repudiandae, quo ut
                    delectus ad iste voluptas perspiciatis fugiat aliquam hic
                    illo distinctio amet quas.
                </p>
                <p class="text-md md:text-lg text-[#757693]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam sunt voluptas quod officiis doloremque beatae
                    suscipit, dignissimos asperiores? Assumenda, similique!
                </p>
                <a
                    href="/"
                    class="px-3 py-2 md:px-4 md:py-3 bg-logoIcon text-white rounded-md w-fit"
                    >Send Your Enquiry</a
                >
            </div>
        </div>
    </div>
</section>

<section id="vision-and-mission">
    <div class="mx-auto max-w-c-1390 px-4 md:px-6 py-10">
        <div class="flex flex-col gap-y-10 font-mukta lg:px-32">
            <div class="grid md:grid-cols-2 gap-2 md:gap-8">
                <div class="animate_right md:hidden block">
                    <div class="flex md:justify-start justify-center">
                        <img
                            class="md:h-96 md:w-auto"
                            src="../images/mission.jpg"
                            alt="Our Mission"
                        />
                    </div>
                </div>
                <div class="animate_left">
                    <div class="flex flex-col gap-y-3 md:gap-y-5">
                        <h1 class="text-3xl md:text-4xl font-bold md:text-end">
                            Our Mission
                        </h1>
                        <p
                            class="text-md md:text-lg text-[#757693] md:text-end"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias amet vitae necessitatibus consequatur
                            neque ipsam eveniet placeat enim corrupti, itaque
                            unde excepturi libero mollitia odit vel quia
                            quisquam? Iusto, adipisci vero. Adipisci ad nihil
                            tempore.
                        </p>
                        <p
                            class="text-md md:text-lg text-[#757693] md:text-end"
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Molestias explicabo, doloremque debitis
                            laborum qui eum quam aliquid, unde vero culpa
                            architecto nulla maxime porro quas nisi.
                        </p>
                    </div>
                </div>
                <div class="animate_right md:block hidden">
                    <div class="flex md:justify-start justify-center">
                        <img
                            class="md:h-96 md:w-auto"
                            src="../images/mission.jpg"
                            alt="Our Mission"
                        />
                    </div>
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-2 md:gap-8">
                <div class="animate_left">
                    <div class="flex justify-end">
                        <img
                            class="md:h-96 md:w-auto"
                            src="../images/vision.jpg"
                            alt="Our Vision"
                        />
                    </div>
                </div>
                <div class="animate_right">
                    <div class="flex flex-col gap-y-3 md:gap-y-5">
                        <h1 class="text-3xl md:text-4xl font-bold">
                            Our Vision
                        </h1>
                        <p class="text-md md:text-lg text-[#757693]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias amet vitae necessitatibus consequatur
                            neque ipsam eveniet placeat enim corrupti, itaque
                            unde excepturi libero mollitia odit vel quia
                            quisquam? Iusto, adipisci vero. Adipisci ad nihil
                            tempore.
                        </p>
                        <p class="text-md md:text-lg text-[#757693]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Molestias explicabo, doloremque debitis
                            laborum qui eum quam aliquid, unde vero culpa
                            architecto nulla maxime porro quas nisi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="ourTeam" class="bg-[#FAFAFA]">
    <div class="mx-auto max-w-c-1390 px-4 md:px-6 py-10 md:py-20">
        <div class="font-mukta flex flex-col items-center animate_bottom">
            <h3 class="text-logoIcon font-bold w-fit">TESTIMONIAL</h3>
            <h1
                class="mt-4 text-3xl md:text-5xl font-semibold text-black text-center"
            >
                Meet Fixonn Team
            </h1>
        </div>
        <div class="mt-10 sm:mt-20">
            <div
                class="grid grid-cols-1 gap-4 sm:flex sm:gap-x-8 sm:justify-center"
            >
                <!-- Member - 1 -->
                <div
                    class="animate_left bg-white border border-[#E0E0E0] font-mukta rounded-md overflow-hidden"
                >
                    <div class="sm:h-80 w-fit overflow-hidden">
                        <img
                            class="h-full"
                            src="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=900&t=st=1694606749~exp=1694607349~hmac=905499bd06e15476c3f14ed967c992ea2038007336cba1551ff29601b4c59eba"
                            alt=""
                        />
                    </div>
                    <div class="flex flex-col gap-y-2 p-4">
                        <h2 class="text-2xl font-semibold">Member Name</h2>
                        <h4 class="text-[#757693]">Designation</h4>
                        <div class="space-x-4">
                            <a
                                href="https://facebook.com/"
                                class="text-[#757693] hover:text-logoIcon ease-in duration-1500"
                            >
                                <i class="fab fa-facebook-f" />
                            </a>
                            <a
                                href="https://twitter.com/"
                                class="text-[#757693] hover:text-logoIcon ease-in duration-1500"
                            >
                                <i class="fab fa-twitter" />
                            </a>
                            <a
                                href="https://instagram.com/"
                                class="text-[#757693] hover:text-logoIcon ease-in duration-1500"
                            >
                                <i class="fab fa-instagram" />
                            </a>
                        </div>
                    </div>
                </div>
                <!-- Member - 2 -->
                <div
                    class="animate_right bg-white border border-[#E0E0E0] font-mukta rounded-md overflow-hidden"
                >
                    <div class="sm:h-80 w-fit overflow-hidden">
                        <img
                            class="h-full"
                            src="https://img.freepik.com/free-photo/cheerful-young-businessman-checking-email-tablet-looking-camera_1262-14164.jpg?w=1060&t=st=1694606801~exp=1694607401~hmac=fa4e68eabe77670c14a8b0795d4be69c70c48838fc4afde75ba4ea77b9d8fe9b"
                            alt=""
                        />
                    </div>
                    <div class="flex flex-col gap-y-2 p-4">
                        <h2 class="text-2xl font-semibold">Member Name</h2>
                        <h4 class="text-[#757693]">Designation</h4>
                        <div class="space-x-4">
                            <a
                                href="https://facebook.com/"
                                class="text-[#757693] hover:text-logoIcon ease-in duration-1500"
                            >
                                <i class="fab fa-facebook-f" />
                            </a>
                            <a
                                href="https://twitter.com/"
                                class="text-[#757693] hover:text-logoIcon ease-in duration-1500"
                            >
                                <i class="fab fa-twitter" />
                            </a>
                            <a
                                href="https://instagram.com/"
                                class="text-[#757693] hover:text-logoIcon ease-in duration-1500"
                            >
                                <i class="fab fa-instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Other Absolute Components -->
<BackToTop pathName="/about" />
<ContactIcons />

<style>
    #aboutUsIntro {
        background-image: linear-gradient(
                rgba(19, 40, 76, 0.575),
                rgba(19, 40, 76, 0.322)
            ),
            url("https://img.freepik.com/free-photo/business-people-casual-meeting_53876-101882.jpg?w=1380&t=st=1694603181~exp=1694603781~hmac=dff0a1237fcf394e1e20cdfcb85e98b8e7b582070e7207a925047006595e3ce7");
        background-position: center;
    }
</style>
