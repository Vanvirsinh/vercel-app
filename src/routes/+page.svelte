<script>
    import Hero from "$lib/Home/Hero.svelte";
    import BackToTop from "$lib/BackToTop.svelte";
    import ContactIcons from "$lib/ContactIcons.svelte";
    import Form from "$lib/Form.svelte";
    import Flash from "$lib/Flash.svelte";
    import Swiper, { Pagination, Autoplay } from "swiper";
    import "swiper/swiper-bundle.min.css";
    import { onMount } from "svelte";
    import { invalidateAll } from "$app/navigation";
    import { applyAction, deserialize } from "$app/forms";
    import { sendEmail } from "$lib/SendEmail.js";

    let testimonial01;
    let ScrollReveal;
    let isVisible = false;

    function showForm() {
        if (!isVisible) {
            isVisible = true;
        }
    }
    function hideForm() {
        if (isVisible) {
            isVisible = false;
        }
    }

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

        testimonial01 = new Swiper(".testimonial-01", {
            modules: [Pagination, Autoplay],
            loop: true,
            spaceBetween: 30,
            centeredSlides: false,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
            },
        });
    });

    let icons = [
        {
            id: 1,
            name: "Plumbing",
            img: "../../images/plumbing-icon-1.png",
            afterHoverImg: "../../images/plumbing-icon-2.png",
            isHovered: false,
            url: "/services/plumbing",
        },
        {
            id: 2,
            name: "Electrical",
            img: "../../images/electrical-icon-1.png",
            afterHoverImg: "../../images/electrical-icon-2.png",
            isHovered: false,
            url: "/services/electrical",
        },
        {
            id: 3,
            name: "Pest Control",
            img: "../../images/pestcontrol-icon-1.png",
            afterHoverImg: "../../images/pestcontrol-icon-2.png",
            isHovered: false,
            url: "/services/pest-control",
        },
        {
            id: 4,
            name: "Deep Cleaning",
            img: "../../images/cleaning-icon-1.png",
            afterHoverImg: "../../images/cleaning-icon-2.png",
            isHovered: false,
            url: "/services/deep-cleaning",
        },
        {
            id: 5,
            name: "Painting",
            img: "../../images/painting-icon-1.png",
            afterHoverImg: "../../images/painting-icon-2.png",
            isHovered: false,
            url: "/services/painting",
        },
        {
            id: 6,
            name: "Carpentry",
            img: "../../images/carpentry-icon-1.png",
            afterHoverImg: "../../images/carpentry-icon-2.png",
            isHovered: false,
            url: "/services/carpentry",
        },
    ];

    let features = [
        {
            id: 1,
            title: "Expert Craftsmanship",
            img: "../../images/multi-services.gif",
            description:
                "Our skilled professionals bring years of experience to every project, ensuring top-notch quality and precision in every service.",
        },
        {
            id: 2,
            title: "Customer-Centric Approach",
            img: "../../images/profession-service.gif",
            description:
                "Your satisfaction is our priority. We're committed to providing transparent, timely, and reliable services, tailored to your preferences.",
        },
        {
            id: 3,
            title: "Wide Range of Services",
            img: "../../images/quality-service.gif",
            description:
                "From plumbing emergencies to home renovations, we offer a comprehensive suite of services to meet all your household needs.",
        },
    ];

    let services = [
        {
            id: 1,
            title: "Plumbing Service",
            url: "/services/plumbing",
            img: "../images/services_plumber.jpg",
        },
        {
            id: 2,
            title: "Electrical Service",
            url: "/services/electrical",
            img: "../images/services_electrician.jpg",
        },
        {
            id: 3,
            title: "Pest Control Service",
            url: "/services/pest-control",
            img: "../images/services_pest_control.jpg",
        },
        {
            id: 4,
            title: "Deep Cleaning Service",
            url: "/services/deep-cleaning",
            img: "../images/services_deep_cleaning.jpg",
        },
        {
            id: 5,
            title: "Painting Service",
            url: "/services/painting",
            img: "../images/services_painting.jpeg",
        },
        {
            id: 6,
            title: "Carpentry Service",
            url: "/services/carpentry",
            img: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGx1bWJpbmclMjBzZXJ2aWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        },
    ];

    let reviews = [
        {
            userImage: "../images/user-vector.png",
            userName: "Rajesh Kumar",
            userDesignation: "IT Manager",
            review: "Impressed by Fixonn's prompt service. Their electrician fixed my issue swiftly. Highly recommended!",
            stars: [1, 2, 3, 4, 5],
        },
        {
            userImage: "../images/female-user-vector.png",
            userName: "Meena Patel",
            userDesignation: "Business Owner",
            review: "Fantastic plumbing service! Solved a major leak in no time. Thank you, Fixonn!",
            stars: [1, 2, 3],
        },
        {
            userImage: "../images/female-user-vector.png",
            userName: "Sneha Kumari",
            userDesignation: "Homemaker",
            review: "Pest control service by Fixonn worked wonders! No more creepy crawlies in our home. Very happy!",
            stars: [1, 2, 3, 4],
        },
        {
            userImage: "../images/user-vector.png",
            userName: "Amit Sharma",
            userDesignation: "Teacher",
            review: "Painters from Fixonn transformed my office space beautifully. Great attention to detail.",
            stars: [1, 2, 3, 4, 5],
        },
    ];

    /** @type {import('./$types').ActionData} */
    export let form;

    let name = "";
    let email = "";
    let phone = "";
    let message = "";
    let service = "plumbing";
    let isSubmitting = false;

    function resetForm() {
        name = "";
        email = "";
        phone = "";
        service = "plumbing";
        message = "";
    }

    /** @param {{ currentTarget: EventTarget & HTMLFormElement}} event */
    const handleSubmit = async (event) => {
        resetForm();
        isSubmitting = true;
        const data = new FormData(event.currentTarget);

        let body = "";

        for (const [name, value] of data.entries()) {
            body += `<div><b>${name}:</b> ${value}</div></br>`;
        }

        let subject = "Fixonn-Important: You have received an Enquiry!";

        sendEmail(subject, body);

        const response = await fetch(event.currentTarget.action, {
            method: "POST",
            body: data,
        });

        const result = deserialize(await response.text());

        if (result.type === "success") {
            await invalidateAll();
        }

        applyAction(result);
        isSubmitting = false;
    };
</script>

<svelte:head>
    <title>Fixonn - A multi-vendor service provider</title>
</svelte:head>

{#if form?.success}
    <Flash flashMessage={form?.message} status={form?.success} />
{/if}

<!-- Hero Section -->
<section id="hero">
    <Hero />
</section>

<!-- Services Intro -->
<div
    class="animate_bottom relative mx-auto lg:max-w-c-1390 px-4 md:px-6 my-4 sm:my-10 md:my-0 md:-translate-y-2/4 z-10 sm:-translate-y-3/4 -translate-y-1/4"
>
    <div
        class="bg-white justify-center gap-y-4 lg:gap-y-6 flex flex-wrap py-4 lg:py-6 lg:px-40 md:px-20 px-4 border border-[#e0e0e0] rounded-md"
    >
        {#each icons as icon}
            <div
                class="flex lg:px-12 md:px-6 sm:px-4 px-2 flex-col justify-center items-center gap-y-1"
            >
                <a href={icon.url}>
                    <img
                        on:mouseenter={() => (icon.isHovered = true)}
                        on:mouseleave={() => (icon.isHovered = false)}
                        class="h-6 w-6 md:h-10 md:w-10 sm:h-8 sm:h-6 cursor-pointer"
                        src={icon.isHovered ? icon.afterHoverImg : icon.img}
                        alt={icon.name}
                    />
                </a>
                <span class="text-sm text-[#757693]">{icon.name}</span>
            </div>
        {/each}
    </div>
</div>

<!-- About -->
<section id="about" class="pb-10">
    <div class="mx-auto max-w-c-1390 px-4 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div class="animate_left">
                <div class="p-2 flex justify-center items-center">
                    <img
                        class="w-full md:w-auto md:h-[450px]"
                        src="../../images/52057.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div class="font-mukta animate_right">
                <div class="flex flex-col gap-y-3 md:gap-y-5">
                    <h3 class="text-logoIcon font-bold w-fit">ABOUT</h3>
                    <h1 class="text-3xl md:text-5xl font-semibold text-black">
                        What is Fixonn?
                    </h1>
                    <p class="text-lg">
                        With the growing need for on-demand services, the home
                        services market segment is coming up with innovative
                        ways to keep up with the ongoing market trends. Fixonn
                        is a feasible online platform providing in-house home
                        improvement services for homeowners in India.
                    </p>
                    <div>
                        <ul class="text-lg flex flex-col gap-y-2">
                            <li>
                                <i
                                    class="fa-solid fa-check mr-2 text-logoIcon"
                                /> Door-to-door service
                            </li>
                            <li>
                                <i
                                    class="fa-solid fa-check mr-2 text-logoIcon"
                                /> The experienced professionals
                            </li>
                            <li>
                                <i
                                    class="fa-solid fa-check mr-2 text-logoIcon"
                                /> A complete range of support
                            </li>
                        </ul>
                    </div>
                    <div class="flex-col md:flex-row flex gap-3">
                        <a
                            href="/about"
                            class="active:bg-white active:text-logoIcon border border-logoIcon w-fit bg-logoIcon text-white flex px-4 py-3 rounded"
                            >Read More about Fixonn</a
                        >
                        <a
                            href="/how-fixonn-works"
                            class="active:bg-white active:text-logoIcon border border-logoIcon w-fit bg-logoIcon text-white flex px-4 py-3 rounded"
                            >How We Operate</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Services -->
<section id="services" class="py-10 md:py-20 bg-[#FAFAFA]">
    <div class="mx-auto max-w-c-1390 px-4 md:px-6">
        <div class="font-mukta flex flex-col items-center animate_bottom">
            <h3 class="text-logoIcon font-bold w-fit">SERVICES</h3>
            <h1
                class="mt-4 text-3xl md:text-5xl text-center font-semibold text-black"
            >
                How Fixonn helps you?
            </h1>
        </div>
        <div
            class="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 mt-10 md:mt-20"
        >
            {#each services as service}
                <div class="text-white font-mukta animate_bottom">
                    <div
                        class="relative ease-in duration-300 rounded-md overflow-hidden service-card cursor-pointer"
                    >
                        <img src={service.img} alt={service.title} />
                        <div
                            class="absolute ease-in duration-300 bottom-[-60px] flex flex-col gap-y-4 p-4 w-full bg-[#000000]/[0.3]"
                        >
                            <h3 class="text-xl font-bold">{service.title}</h3>
                            <a
                                href={service.url}
                                class="w-fit bg-logoIcon text-white flex px-4 py-2 rounded border-2 border-logoIcon active:bg-opacity-50"
                                >Know More</a
                            >
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- CTA -->
<section id="cta" class="bg-cover md:bg-contain">
    <div class="mx-auto max-w-c-1390 px-0 md:px-6 py-10 md:py-20">
        <div
            class="animate_left border-[15px] md:border-[20px] rounded-md border-white/[0.1] h-fit w-[50%] sm:w-[200px] md:w-[250px]"
        >
            <div
                class="flex flex-col gap-y-4 md:gap-y-8 w-[300px] sm:w-[450px] md:w-[600px] pt-2 pl-2 pb-2 md:pl-6 md:pb-6 text-white"
            >
                <h1 class="text-3xl md:text-6xl font-bold leading-tight">
                    Not able to figure out the issue<span class="text-logoIcon"
                        >?</span
                    >
                </h1>
                <p class="text-md md:text-lg">
                    Experience hassle-free home services with Fixonn! From
                    carpentry to plumbing, we've got you covered. Book now for
                    quality solutions.
                </p>
                <button
                    on:click={showForm}
                    class="w-fit border-2 outline-none border-logoIcon bg-logoIcon active:bg-black text-white flex px-3 py-2 md:px-4 md:py-3 rounded"
                    >Book a Fixomann</button
                >
            </div>
        </div>
    </div>
</section>

<!-- Features -->
<section id="features" class="bg-[#FAFAFA] relative py-10 md:py-20">
    <div class="mx-auto max-w-c-1390 px-4 md:px-6">
        <div class="font-mukta flex flex-col items-center animate_bottom">
            <h3 class="text-logoIcon font-bold w-fit">FEATURES</h3>
            <h1
                class="mt-4 text-3xl md:text-5xl text-center font-semibold text-black"
            >
                Why to Choose Fixonn?
            </h1>
        </div>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 sm:mt-10 md:mt-20 gap-5 md:gap-8"
        >
            {#each features as feature}
                <div
                    class="animate_bottom flex flex-col items-center gap-y-4 p-6 sm:p-8 bg-white border border-[#E0E0E0] rounded-md"
                >
                    <h2 class="text-2xl text-black font-semibold">
                        {feature.title}
                    </h2>
                    <img
                        class="h-16 w-16"
                        src={feature.img}
                        alt={feature.title}
                    />
                    <p class="text-center text-[#757693] text-md">
                        {feature.description}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Send Enquiry-->
<section id="enquiryForm" class="bg-white">
    <div class="mx-auto max-w-c-1390 px-4 md:px-6 py-10 md:py-20">
        <div>
            <div class="grid md:grid-cols-2 gap-6 font-mukta">
                <div class="animate_left">
                    <div
                        class="font-mukta flex flex-col items-center md:items-start"
                    >
                        <h3 class="text-logoIcon font-bold w-fit">ENQUIRY</h3>
                        <h1
                            class="text-center md:text-start mt-4 text-3xl md:text-5xl font-semibold text-black"
                        >
                            How you can reach out to Fixonn?
                        </h1>
                    </div>
                    <div class="mt-10 flex items-center justify-center">
                        <img
                            class="w-full h-auto md:w-auto md:h-[450px]"
                            src="../../images/5127314.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div class="animate_right">
                    <div class="md:px-8 rounded-md">
                        <form
                            class="flex flex-col gap-y-4"
                            on:submit|preventDefault={handleSubmit}
                            method="POST"
                            action="?/createEnquiry"
                        >
                            <div class="flex flex-col gap-y-1">
                                <label for="name" class="text-[#757693]"
                                    >Your Name (Required)</label
                                >
                                <input
                                    bind:value={name}
                                    type="text"
                                    id="name"
                                    name="name"
                                    class="border border-[#E0E0E0] rounded-md p-2"
                                    required
                                />
                            </div>
                            <div class="flex flex-col gap-y-1">
                                <label for="email" class="text-[#757693]"
                                    >Your Email (Optional)</label
                                >
                                <input
                                    bind:value={email}
                                    type="email"
                                    id="email"
                                    name="email"
                                    class="border border-[#E0E0E0] rounded-md p-2"
                                    required
                                />
                            </div>
                            <div class="flex flex-col gap-y-1">
                                <label for="phone" class="text-[#757693]"
                                    >Your Phone (Required)</label
                                >
                                <input
                                    bind:value={phone}
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    class="border border-[#E0E0E0] rounded-md p-2"
                                    required
                                />
                            </div>
                            <div class="flex flex-col gap-y-1">
                                <label for="service" class="text-[#757693]"
                                    >Select the Service you want (Required)</label
                                >
                                <select
                                    bind:value={service}
                                    id="service"
                                    name="service"
                                    class="border border-[#E0E0E0] rounded-md p-2"
                                >
                                    <option value="plumbing">Plumbing</option>
                                    <option value="plumbing">Electrical</option>
                                    <option value="pest control"
                                        >Pest Control</option
                                    >
                                    <option
                                        value="deep cleaning
                                "
                                        >Deep Cleaning
                                    </option>
                                    <option value="painting">Painting</option>
                                    <option value="carpentry">Carpentry</option>
                                </select>
                            </div>
                            <div class="flex flex-col gap-y-1">
                                <label for="message" class="text-[#757693]"
                                    >Your Message</label
                                >
                                <textarea
                                    bind:value={message}
                                    name="message"
                                    class="border border-[#E0E0E0] rounded-md p-2"
                                    id="message"
                                    rows="5"
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    class="bg-logoIcon px-6 py-3 text-white rounded-md"
                                    >Send Enquiry
                                    {#if isSubmitting}
                                        <div class="spinner inline-block" />
                                    {:else}
                                        <i
                                            class="ml-2 fa-solid fa-paper-plane"
                                        />
                                    {/if}
                                </button>
                            </div>
                            <p class="text-[#757693]">
                                <i
                                    class="fa-solid fa-hand-point-right mr-2 text-logoIcon"
                                /> Our Team will Reach out to you as soon you submit
                                this form!
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Customer Review -->
<section id="testimonials" class="bg-[#FAFAFA]">
    <div class="mx-auto max-w-c-1390 px-6 py-10 md:py-20 overflow-hidden">
        <div class="font-mukta flex flex-col items-center animate_bottom">
            <h3 class="text-logoIcon font-bold w-fit">TESTIMONIAL</h3>
            <h1
                class="mt-4 text-center text-3xl md:text-5xl font-semibold text-black"
            >
                What Users say about Fixonn?
            </h1>
        </div>
        <div class="testimonial-01 mt-10 md:mt-20">
            <div class="swiper-wrapper animate_bottom">
                {#each reviews as review}
                    <div
                        class="swiper-slide bg-white border border-[#E0E0E0] rounded-md"
                    >
                        <div class="flex flex-col gap-y-3 p-6">
                            <div class="flex gap-x-4">
                                <div class="rounded-full h-16 w-16">
                                    <img
                                        class="border border-[#E0E0E0] h-full w-full rounded-full"
                                        src={review.userImage}
                                        alt={review.userName}
                                    />
                                </div>
                                <div class="flex flex-col justify-center">
                                    <h3 class="font-semibold">
                                        {review.userName}
                                    </h3>
                                    <h5 class="text-sm text-[#757693]">
                                        {review.userDesignation}
                                    </h5>
                                </div>
                            </div>
                            <div>
                                <p class="text-[#757693]">{review.review}</p>
                            </div>
                            <div>
                                {#each review.stars as star}
                                    <i class="fa fa-star text-logoText" />
                                {/each}
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
            <div
                style="position: relative; top: 20px"
                class="swiper-pagination"
            />
        </div>
    </div>
</section>

<!-- Other Absolute Components -->
<BackToTop pathName="/" />
<ContactIcons />
<Form {isVisible} {hideForm} {handleSubmit} {isSubmitting} />

<style>
    .service-card:hover {
        transform: scale(105%, 105%);
    }
    .service-card:hover .absolute {
        bottom: 0;
    }
    #cta {
        background-image: linear-gradient(
                to right,
                rgb(26, 26, 26) 50%,
                rgba(0, 0, 0, 0)
            ),
            url("../images/working-renovation.jpg");
        background-position: 100% 100%;
        background-repeat: no-repeat;
    }
    :root {
        --swiper-theme-color: #181c31;
        --swiper-pagination-bullet-inactive-opacity: 0.3;
    }
    .spinner {
        position: relative;
        top: 5px;
        border: 4px solid rgba(255, 255, 255, 0.2);
        border-top: 4px solid #ffffff;
        height: 22px;
        width: 22px;
        border-radius: 50%;
        animation: spin 1.5s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
