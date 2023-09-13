<script>
    import Hero from "$lib/Home/Hero.svelte";
    import BackToTop from "$lib/BackToTop.svelte";
    import ContactIcons from "$lib/ContactIcons.svelte";
    import Swiper, { Pagination, Autoplay } from "swiper";
    import "swiper/swiper-bundle.min.css";
    import { onMount } from "svelte";

    let testimonial01;
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
        },
        {
            id: 2,
            name: "Electrical",
            img: "../../images/electrical-icon-1.png",
            afterHoverImg: "../../images/electrical-icon-2.png",
            isHovered: false,
        },
        {
            id: 3,
            name: "Pest Control",
            img: "../../images/pestcontrol-icon-1.png",
            afterHoverImg: "../../images/pestcontrol-icon-2.png",
            isHovered: false,
        },
        {
            id: 4,
            name: "Deep Cleaning",
            img: "../../images/cleaning-icon-1.png",
            afterHoverImg: "../../images/cleaning-icon-2.png",
            isHovered: false,
        },
        {
            id: 5,
            name: "Painting",
            img: "../../images/painting-icon-1.png",
            afterHoverImg: "../../images/painting-icon-2.png",
            isHovered: false,
        },
        {
            id: 6,
            name: "Carpentry",
            img: "../../images/carpentry-icon-1.png",
            afterHoverImg: "../../images/carpentry-icon-2.png",
            isHovered: false,
        },
    ];

    let features = [
        {
            id: 1,
            title: "Multi-Vendor Services",
            img: "../../images/multi-services.gif",
            description:
                " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis nostrum laborum necessitatibus aspernatur quam iure.",
        },
        {
            id: 2,
            title: "Quality Services",
            img: "../../images/quality-service.gif",
            description:
                " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis nostrum laborum necessitatibus aspernatur quam iure.",
        },
        {
            id: 3,
            title: "Profession Service",
            img: "../../images/profession-service.gif",
            description:
                " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis nostrum laborum necessitatibus aspernatur quam iure.",
        },
    ];

    let services = [
        {
            id: 1,
            title: "Plumbing Service",
            url: "/",
            img: "https://plus.unsplash.com/premium_photo-1664301135901-383935f2104f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
            id: 2,
            title: "Electrical Service",
            url: "/",
            img: "https://plus.unsplash.com/premium_photo-1664475006548-1baa3b7a1f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
            id: 3,
            title: " Pest Control Service",
            url: "/",
            img: "https://plus.unsplash.com/premium_photo-1661306473412-23ca865974dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
            id: 4,
            title: "Cleaning Service",
            url: "/",
            img: "https://images.unsplash.com/photo-1482449609509-eae2a7ea42b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
            id: 5,
            title: "Painting Service",
            url: "/",
            img: "https://plus.unsplash.com/premium_photo-1679090841820-8e9b8480beb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
            id: 6,
            title: "Carpentry Service",
            url: "/",
            img: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGx1bWJpbmclMjBzZXJ2aWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        },
    ];

    let reviews = [
        {
            userImage:
                "https://classsolution.netlify.app/images/tst-image1.jpg",
            userName: "John Doe",
            userDesignation: "Developer",
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            stars: [1, 2, 3, 4, 5],
        },
        {
            userImage:
                "https://classsolution.netlify.app/images/tst-image2.jpg",
            userName: "Selena Gomez",
            userDesignation: "Manager",
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            stars: [1, 2, 3],
        },
        {
            userImage:
                "https://classsolution.netlify.app/images/tst-image3.jpg",
            userName: "Taylor Swift",
            userDesignation: "Director",
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            stars: [1, 2, 3, 4],
        },
        {
            userImage:
                "https://classsolution.netlify.app/images/tst-image4.jpg",
            userName: "Justin Bieber",
            userDesignation: "Advisor",
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            stars: [1, 2, 3, 4, 5],
        },
    ];
</script>

<svelte:head>
    <title>Fixonn - A multi-vendor service provider</title>
</svelte:head>

<!-- Hero Section -->
<section id="hero">
    <Hero />
</section>

<!-- Services Intro -->
<div
    class="animate_bottom relative mx-auto max-w-c-1390 px-6 -translate-y-2/4 z-10"
>
    <div class="bg-white flex py-6 px-40 border border-[#e0e0e0] rounded-md">
        {#each icons as icon}
            <div
                class="w-1/6 flex flex-col justify-center items-center gap-y-1"
            >
                <img
                    on:mouseenter={() => (icon.isHovered = true)}
                    on:mouseleave={() => (icon.isHovered = false)}
                    class="h-10 w-10 cursor-pointer"
                    src={icon.isHovered ? icon.afterHoverImg : icon.img}
                    alt={icon.name}
                />
                <span class="text-sm text-[#757693]">{icon.name}</span>
            </div>
        {/each}
    </div>
</div>

<!-- About -->
<section id="about" class="pb-10">
    <div class="mx-auto max-w-c-1390 px-6">
        <div class="grid grid-cols-2 gap-8 mt-4">
            <div class="animate_left">
                <div class="p-2 flex justify-center items-center">
                    <img
                        class="h-[450px]"
                        src="../../images/52057.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div class="font-mukta animate_right">
                <div class="flex flex-col gap-y-5">
                    <h3 class="text-logoIcon font-bold w-fit">ABOUT</h3>
                    <h1 class="text-5xl font-semibold text-black">
                        What is Fixonn?
                    </h1>
                    <p class="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos repudiandae modi, iste voluptatibus similique
                        doloremque ullam, ad amet est numquam exercitationem!
                        Laudantium qui repellat tempora deleniti nam, molestias
                        nostrum perferendis.
                    </p>
                    <div>
                        <ul class="text-lg flex flex-col gap-y-2">
                            <li>
                                <i
                                    class="fa-solid fa-check mr-2 text-logoIcon"
                                /> Tempor erat elitr rebum at clita
                            </li>
                            <li>
                                <i
                                    class="fa-solid fa-check mr-2 text-logoIcon"
                                /> Aliqu diam amet diam et eos
                            </li>
                            <li>
                                <i
                                    class="fa-solid fa-check mr-2 text-logoIcon"
                                /> Clita duo justo magna dolore erat amet
                            </li>
                        </ul>
                    </div>
                    <a
                        href="/"
                        class="w-fit bg-logoIcon text-white flex px-4 py-3 rounded"
                        >Read More about Fixonn</a
                    >
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Services -->
<section id="services" class="py-20 bg-[#FAFAFA]">
    <div class="mx-auto max-w-c-1390 px-6">
        <div class="font-mukta flex flex-col items-center animate_bottom">
            <h3 class="text-logoIcon font-bold w-fit">SERVICES</h3>
            <h1 class="mt-4 text-5xl font-semibold text-black">
                How Fixonn helps you?
            </h1>
        </div>
        <div class="grid grid-cols-3 gap-8 mt-20">
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
                                class="w-fit bg-logoIcon text-white flex px-4 py-2 rounded"
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
<section id="cta">
    <div class="mx-auto max-w-c-1390 px-6 py-20">
        <div
            class="animate_left border-[20px] rounded-md border-white/[0.1] h-fit w-[250px]"
        >
            <div
                class="flex flex-col gap-y-8 w-[600px] pt-2 pl-6 pb-6 text-white"
            >
                <h1 class="text-6xl font-bold leading-tight">
                    Title for CTA of Fixonn<span class="text-logoIcon">.</span>
                </h1>
                <p class="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis possimus consequuntur asperiores ullam, quisquam
                    omnis?
                </p>
                <a
                    href="/"
                    class="w-fit border-2 border-logoIcon bg-logoIcon text-white flex px-4 py-3 rounded"
                    >Send Us an Enquiry</a
                >
            </div>
        </div>
    </div>
</section>

<!-- Features -->
<section id="features" class="bg-[#FAFAFA] relative">
    <div class="mx-auto max-w-c-1390 px-6 py-20">
        <div class="font-mukta flex flex-col items-center animate_bottom">
            <h3 class="text-logoIcon font-bold w-fit">FEATURES</h3>
            <h1 class="mt-4 text-5xl font-semibold text-black">
                Why to Choose Fixonn?
            </h1>
        </div>
        <div class="flex mt-20 gap-x-8">
            {#each features as feature}
                <div
                    class="animate_bottom w-1/3 flex flex-col items-center gap-y-4 p-8 bg-white border border-[#E0E0E0] rounded-md"
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
    <div class="mx-auto max-w-c-1390 px-6 py-20">
        <div>
            <div class="flex gap-x-8 font-mukta">
                <div class="w-1/2 animate_left">
                    <div class="font-mukta flex flex-col">
                        <h3 class="text-logoIcon font-bold w-fit">ENQUIRY</h3>
                        <h1 class="mt-4 text-5xl font-semibold text-black">
                            How you can reach out to Fixonn?
                        </h1>
                    </div>
                    <div class="mt-10 px-6 flex items-center">
                        <img
                            class="h-[450px]"
                            src="../../images/5127314.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div class="w-1/2 animate_right">
                    <div class="border-0 border-[#E0E0E0] px-8 rounded-md">
                        <form class="flex flex-col gap-y-4">
                            <div class="flex flex-col gap-y-1">
                                <label for="name" class="text-[#757693]"
                                    >Your Name (Required)</label
                                >
                                <input
                                    type="text"
                                    id="name"
                                    class="border border-[#E0E0E0] rounded-md p-2"
                                />
                            </div>
                            <div class="flex flex-col gap-y-1">
                                <label for="email" class="text-[#757693]"
                                    >Your Email (Optional)</label
                                >
                                <input
                                    type="email"
                                    id="email"
                                    class="border border-[#E0E0E0] rounded-md p-2"
                                />
                            </div>
                            <div class="flex flex-col gap-y-1">
                                <label for="phone" class="text-[#757693]"
                                    >Your Phone (Required)</label
                                >
                                <input
                                    type="text"
                                    id="phone"
                                    class="border border-[#E0E0E0] rounded-md p-2"
                                />
                            </div>
                            <div class="flex flex-col gap-y-1">
                                <label for="service" class="text-[#757693]"
                                    >Select the Service you want (Required)</label
                                >
                                <select
                                    id="service"
                                    class="border border-[#E0E0E0] rounded-md p-2"
                                >
                                    <option value="plumbing">Plumbing</option>
                                    <option value="plumbing">Electrical</option>
                                    <option value="pest control"
                                        >Pest control</option
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
                                    class="border border-[#E0E0E0] rounded-md p-2"
                                    id="message"
                                    rows="5"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    class="bg-logoIcon px-6 py-3 text-white rounded-md"
                                    >Send Enquiry <i
                                        class="ml-2 fa-solid fa-paper-plane"
                                    /></button
                                >
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
    <div class="mx-auto max-w-c-1390 px-6 py-20 overflow-hidden">
        <div class="font-mukta flex flex-col items-center animate_bottom">
            <h3 class="text-logoIcon font-bold w-fit">TESTIMONIAL</h3>
            <h1 class="mt-4 text-5xl font-semibold text-black">
                What Users say about Fixonn?
            </h1>
        </div>
        <div class="testimonial-01 mt-20">
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
            url("https://img.freepik.com/free-photo/tiler-working-renovation-apartment_23-2149278561.jpg?w=1060&t=st=1694526270~exp=1694526870~hmac=2884e96890326b2451f0d2efa59f6383eba869d87a05fde94e2b7144c9bb6c48");
        background-position: 100% 100%;
        background-repeat: no-repeat;
        background-size: contain;
    }
    :root {
        --swiper-theme-color: #181c31;
        --swiper-pagination-bullet-inactive-opacity: 0.3;
    }
</style>
