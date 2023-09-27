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
                    <!-- <img src="../images/2663543.jpg" alt="" /> -->
                    <img
                        src="../images/bg_illustration.jpeg"
                        class="rounded-md"
                        alt=""
                    />
                </div>
            </div>
            <div class="animate_right flex flex-col gap-y-3 md:gap-y-4">
                <h1 class="text-3xl md:text-5xl font-bold text-black">
                    Fixonn<span class="text-logoIcon">.</span>
                </h1>
                <p class="text-[#757693]">
                    Finding qualified personnel is simplified and hassle-free
                    using Fixonn to help people connect and offer their services
                    to have a better chance of making money and growing their
                    businesses.
                </p>
                <h3 class="text-lg">Our Superheroes take Ownership</h3>
                <div class="text-[#757693]">
                    <p class="mb-2 flex">
                        <i
                            class="fa-solid fa-check mr-2 text-logoIcon relative top-1"
                        />
                        <span
                            >To understand clients requirements and avail
                            suitable options to select a service that best meets
                            their needs.</span
                        >
                    </p>
                    <p class="flex">
                        <i
                            class="fa-solid fa-check mr-2 text-logoIcon relative top-1"
                        />
                        <span
                            >To make Clients delighted with the services and
                            gather feedback to work on the same. For those who
                            are looking for a service and those who are prepared
                            to provide said service on demand.</span
                        >
                    </p>
                </div>
                <h3 class="text-lg">Founders message</h3>
                <p class="text-[#757693]">
                    We are always delighted to keep our bonding stronger
                    together. We always try to deliver the best services to our
                    clients by proactively acting on their concerns. We need to
                    pace on, and for that we need your support. Thank you and
                    expecting to make the bong stronger in future as well
                </p>
                <a
                    href="/#enquiryForm"
                    class="px-3 py-2 md:px-4 md:py-3 bg-logoIcon text-white rounded-md w-fit border-2 border-logoIcon active:bg-white active:text-logoIcon"
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
                            To channelize the employment for professionals who
                            do not get scopes to show their productivity.
                            Empowering the vendors by making them aware of the
                            processes to make the services more enhanced and
                            organized. To make the team aware of the AI tools in
                            future times in order to add more productivity to
                            the organization standards and business
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
                            To ensure the connectivity of skilled professionals
                            with service users. Providing authenticated and
                            affordable services to the clients. To make the
                            home-improvement services top notch and manage the
                            processes. To utilize the technology and smart
                            protocols to restructure the unorganized business
                            segment.
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
                    class="p-2 md:p-4 animate_right bg-white border border-[#E0E0E0] font-mukta rounded-md overflow-hidden"
                >
                    <div class="sm:h-80 w-fit overflow-hidden">
                        <img
                            class="h-full"
                            src="../images/avatar-3637425_640.png"
                            alt=""
                        />
                    </div>
                    <div class="flex flex-col gap-y-2 p-4">
                        <h2 class="text-2xl font-semibold">Ankur Adhikari</h2>
                        <h4 class="text-[#757693]">Co-Founder and CEO</h4>
                        <div class="space-x-4">
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/ankur-adhikari-b2a4331a0"
                                class="text-[#757693] hover:text-logoIcon ease-in duration-1500"
                            >
                                <i class="fab fa-linkedin" />
                            </a>
                            <a
                                target="_blank"
                                href="https://twitter.com/Adhikary7Ankur"
                                class="text-[#757693] hover:text-logoIcon ease-in duration-1500"
                            >
                                <i class="fab fa-twitter" />
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Member - 2 -->
                <div
                    class="p-2 md:p-4 animate_left bg-white border border-[#E0E0E0] font-mukta rounded-md overflow-hidden"
                >
                    <div class="sm:h-80 w-fit overflow-hidden">
                        <img
                            class="h-full"
                            src="../images/user-297566_640.png"
                            alt=""
                        />
                    </div>
                    <div class="flex flex-col gap-y-2 p-4">
                        <h2 class="text-2xl font-semibold">Anushka Sinha</h2>
                        <h4 class="text-[#757693]">
                            Co-Founder and Head - People Management
                        </h4>
                        <div class="space-x-4">
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/anushka-sinha-695350238"
                                class="text-[#757693] hover:text-logoIcon ease-in duration-1500"
                            >
                                <i class="fab fa-linkedin" />
                            </a>
                            <a
                                target="_blank"
                                href="https://x.com/Anushka06352517?t=fEQ7QszcRXNbXdMvCO0viA&s=08"
                                class="text-[#757693] hover:text-logoIcon ease-in duration-1500"
                            >
                                <i class="fab fa-twitter" />
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
            url("https://fixonn.netlify.app/images/business-people-casual-meeting.jpg");
        background-position: center;
        background-size: cover;
    }
</style>
