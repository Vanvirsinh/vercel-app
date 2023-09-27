<script>
    import { onMount } from "svelte";
    import BackToTop from "$lib/BackToTop.svelte";
    import ContactIcons from "$lib/ContactIcons.svelte";
    import { load } from "./+page.js";
    import Error from "$lib/Error.svelte";
    import Form from "$lib/Form.svelte";
    import Flash from "$lib/Flash.svelte";
    import { invalidateAll } from "$app/navigation";
    import { applyAction, deserialize } from "$app/forms";
    import { sendEmail } from "$lib/SendEmail.js";

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

    /** @type {import('./$types').ActionData} */
    export let form;

    let isSubmitting = false;

    /** @param {{ currentTarget: EventTarget & HTMLFormElement}} event */
    const handleSubmit = async (event) => {
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
    <title>
        {currentService.subTitle ? currentService.subTitle : "Page not found!"}
    </title>
</svelte:head>

{#if form?.success}
    <Flash flashMessage={form?.message} status={form?.success} />
{/if}

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
                        on:click={showForm}
                        type="submit"
                        class="outline-none w-fit text-white border-2 border-logoIcon bg-logoIcon py-3 px-4 rounded-md active:bg-white active:text-logoIcon"
                        >Book a Fixomann
                        <i class="fa-solid fa-bookmark ml-2" /></button
                    >
                    <p>
                        <span class="text-logoIcon">*</span>
                        {currentService.serviceTerms}
                    </p>
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
<Form {isVisible} {hideForm} {handleSubmit} {isSubmitting} />

<style>
    #indServices {
        background-position: center;
        background-size: cover;
    }
</style>
