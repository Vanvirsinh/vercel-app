<script>
    import { fade, slide } from "svelte/transition";
    export let isVisible = true;
    export let hideForm;
    export let handleSubmit;
    export let isSubmitting;

    let name = "";
    let email = "";
    let phone = "";
    let message = "";
    let service = "plumbing";

    function resetForm() {
        name = "";
        email = "";
        phone = "";
        service = "plumbing";
        message = "";
    }

    async function handleSubmitEnquiry(event) {
        handleSubmit(event);
        resetForm();
    }

    function handleKeyPress(event) {
        if (event.key === "Escape") {
            hideForm();
        }
    }
</script>

<svelte:window on:keydown={handleKeyPress} />

{#if isVisible}
    <main transition:fade>
        <section
            transition:fade
            class="fixed top-0 left-0 bg-black/[0.4] z-50 h-screen w-full"
        >
            <div
                class="md:w-4/6 p-3 md:p-0 flex justify-center items-center h-full mx-auto"
            >
                <div
                    transition:slide
                    class="bg-white w-full rounded-md p-4 md:p-6 pt-6 md:pt-10 relative"
                >
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <i
                        on:click={hideForm}
                        on:keyup={handleKeyPress}
                        class="fa fa-times"
                    />
                    <div>
                        <div class="flex flex-col md:flex-row gap-x-4">
                            <div
                                class="md:w-[45%] flex justify-start items-center"
                            >
                                <div class="hidden md:block h-5/6">
                                    <img
                                        class="h-full"
                                        src="../images/4318690.jpg"
                                        alt="Send your enquiry"
                                    />
                                </div>
                            </div>
                            <div class="md:w-[55%] font-mukta">
                                <div>
                                    <h1 class="text-3xl text-black mb-4">
                                        Send your Enquiry!
                                    </h1>
                                    <form
                                        class="flex flex-col gap-y-3 md:gap-y-4"
                                        on:submit|preventDefault={handleSubmitEnquiry}
                                        method="POST"
                                        action="/?/createEnquiry"
                                    >
                                        <div class="flex gap-x-3 md:gap-x-4">
                                            <input
                                                bind:value={name}
                                                name="name"
                                                placeholder="Enter your name"
                                                type="text"
                                                class="w-1/2 rounded-md p-2 md:p-3 border border-[#E0E0E0]"
                                                required
                                            />
                                            <input
                                                bind:value={email}
                                                name="email"
                                                placeholder="Enter your email(optional)"
                                                type="email"
                                                class="w-1/2 rounded-md p-2 md:p-3 border border-[#E0E0E0]"
                                                required
                                            />
                                        </div>
                                        <div class="flex gap-x-3 md:gap-x-4">
                                            <input
                                                bind:value={phone}
                                                name="phone"
                                                placeholder="Enter your phone"
                                                type="text"
                                                class="w-1/2 rounded-md p-2 md:p-3 border border-[#E0E0E0]"
                                                required
                                            />
                                            <select
                                                bind:value={service}
                                                name="service"
                                                id="service"
                                                class="w-1/2 border border-[#E0E0E0] rounded-md p-2 md:p-3"
                                            >
                                                <option value="plumbing"
                                                    >Plumbing</option
                                                >
                                                <option value="electrical"
                                                    >Electrical</option
                                                >
                                                <option value="pest control"
                                                    >Pest Control</option
                                                >
                                                <option
                                                    value="deep cleaning
                                "
                                                    >Deep Cleaning
                                                </option>
                                                <option value="painting"
                                                    >Painting</option
                                                >
                                                <option value="carpentry"
                                                    >Carpentry</option
                                                >
                                            </select>
                                        </div>
                                        <div>
                                            <textarea
                                                bind:value={message}
                                                name="message"
                                                placeholder="Enter your message..."
                                                class="w-full rounded-md p-2 md:p-3 border border-[#E0E0E0]"
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
                                                    <div
                                                        class="spinner inline-block"
                                                    />
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
                                            /> Our Team will Reach out to you as
                                            soon you submit this form!
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
{/if}

<style>
    section .fa-times {
        position: absolute;
        right: 5px;
        top: 5px;
        cursor: pointer;
        padding: 5px 7px;
        border: 2px solid #f5f5f5;
        border-radius: 5px;
        color: rgb(118, 118, 118);
    }
    section .fa-times:active {
        border-color: black;
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
