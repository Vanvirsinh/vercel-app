<script>
    import BackToTop from "$lib/BackToTop.svelte";
    import ContactIcons from "$lib/ContactIcons.svelte";
    import Flash from "$lib/Flash.svelte";
    import { onMount } from "svelte";
    import { invalidateAll } from "$app/navigation";
    import { applyAction, deserialize } from "$app/forms";
    import { sendEmail } from "$lib/SendEmail.js";

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

    /** @type {import('./$types').ActionData} */
    export let form;

    let name = "";
    let email = "";
    let subject = "";
    let phone = "";
    let message = "";
    let isSubmitting = false;

    function resetForm() {
        name = "";
        email = "";
        subject = "";
        phone = "";
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

        let mailSubject = "Fixonn-Important: You have received an Contact!";

        sendEmail(mailSubject, body);

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
    <title>Contact Us - Fixonn</title>
</svelte:head>

{#if form?.success}
    <Flash flashMessage={form?.message} status={form?.success} />
{/if}

<section id="contactUsIntro" class="py-20 md:py-32">
    <div class="font-mukta flex flex-col items-center animate_bottom">
        <h3 class="text-logoIcon font-bold w-fit">CONTACT US</h3>
        <h1 class="mt-4 text-3xl md:text-5xl font-semibold text-white">
            Reach out to Fixonn
        </h1>
    </div>
</section>

<section id="contactUs">
    <div
        class="font-mukta mx-auto max-w-c-1390 px-4 md:px-6 py-10 md:py-20 border-b border-[#E0E0E0]"
    >
        <div class="font-mukta flex flex-col items-center animate_bottom">
            <h3 class="text-logoIcon font-bold w-fit">CONTACT US</h3>
            <h1
                class="my-4 text-3xl text-center md:text-5xl font-semibold text-black"
            >
                Let us Know how we can help you?
            </h1>
            <p class="md:w-1/2 text-center text-[#757693]">
                We value your feedback and inquiries. Reach out to Fixonn's
                dedicated support team. We're here to assist you promptly and
                ensure your home service experience is exceptional.
            </p>
        </div>
        <!-- Contact Details -->
        <div class="mt-10 md:mt-20">
            <div class="grid gap-2 md:grid-cols-3 md:gap-8">
                <div
                    class="animate_bottom mb-2 p-3 md:p-4 flex justify-center items-center border border-[#E0E0E0] rounded-md text-lg text-[#757693]"
                >
                    <i class="fa-solid fa-envelope text-sm mr-2" /> your@example.com
                </div>
                <div
                    class="animate_bottom mb-2 p-3 md:p-4 flex justify-center items-center border border-[#E0E0E0] rounded-md text-lg text-[#757693]"
                >
                    <i class="fa-solid fa-phone text-sm mr-2" /> (123) 456-7890
                </div>
                <div
                    class="animate_bottom mb-2 p-3 md:p-4 flex justify-center items-center border border-[#E0E0E0] rounded-md text-lg text-[#757693]"
                >
                    <i class="fa-solid fa-location-dot text-sm mr-2" /> 123 Street
                    Name, City
                </div>
            </div>
            <div class="mt-0 md:mt-20 grid md:grid-cols-2">
                <div class="animate_left">
                    <div class="md:px-20">
                        <img
                            class="h-full"
                            src="../images/3969587.jpg"
                            alt="Contact Us"
                        />
                    </div>
                </div>
                <div class="animate_right">
                    <div class="mb-4 md:mb-10">
                        <h1
                            class="text-semibold text-2xl md:text-3xl text-black"
                        >
                            Let us know if you have anything to share with us.
                        </h1>
                    </div>
                    <form
                        class="flex flex-col gap-y-4"
                        on:submit|preventDefault={handleSubmit}
                        method="POST"
                        action="?/createContact"
                    >
                        <div class="flex flex-col sm:flex-row gap-4">
                            <input
                                bind:value={name}
                                name="name"
                                placeholder="Enter your name"
                                type="text"
                                class="sm:w-1/2 rounded-md p-3 border border-[#E0E0E0]"
                                required
                            />
                            <input
                                bind:value={email}
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                                class="sm:w-1/2 rounded-md p-3 border border-[#E0E0E0]"
                                required
                            />
                        </div>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <input
                                bind:value={subject}
                                name="subject"
                                placeholder="Enter your subject (optional)"
                                type="text"
                                class="sm:w-1/2 rounded-md p-3 border border-[#E0E0E0]"
                            />
                            <input
                                bind:value={phone}
                                name="phone"
                                placeholder="Enter your phone (optional)"
                                type="text"
                                class="sm:w-1/2 rounded-md p-3 border border-[#E0E0E0]"
                            />
                        </div>
                        <div>
                            <textarea
                                bind:value={message}
                                name="message"
                                placeholder="Enter your message..."
                                class="w-full rounded-md p-3 border border-[#E0E0E0]"
                                rows="6"
                                required
                            />
                        </div>
                        <div>
                            <button
                                class="bg-logoIcon text-white rounded-md py-3 px-4"
                                type="submit"
                                >Send Message
                                {#if isSubmitting}
                                    <div class="spinner inline-block" />
                                {:else}
                                    <i class="ml-2 fa fa-arrow-right" />
                                {/if}
                            </button>
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
            url("https://fixonn.netlify.app/images/businessman-big-office.jpg");
        background-position: center;
        background-size: cover;
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
