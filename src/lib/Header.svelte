<script>
    import { slide } from "svelte/transition";
    import { onMount } from "svelte";
    let shouldVisible = false;

    onMount(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                shouldVisible = true;
            } else {
                shouldVisible = false;
            }
        });
    });
</script>

<section
    transition:slide
    class={`${
        shouldVisible ? "sticky navbar-animation" : "relative"
    } top-0 bg-white z-50 shadow-sm`}
>
    <div class="flex justify-between px-6 py-3 items-center font-mukta">
        <div class="logo">
            <a href="/">
                <!-- <img
                    class="h-14 w-auto"
                    src="../../images/logo-transparent.png"
                    alt=""
                /> -->
                <h1 class="text-3xl font-bold font-mukta">
                    Fixonn<span class="text-logoIcon">.</span>
                </h1>
            </a>
        </div>
        <div class="menus flex">
            <div class="flex items-center mr-8">
                <ul class="flex gap-x-8 font-regular">
                    <li>
                        <a
                            href="/"
                            class="font-normal hover:text-logoIcon ease-in duration-150"
                            >Home</a
                        >
                    </li>
                    <li>
                        <a
                            href="/about"
                            class="font-normal hover:text-logoIcon ease-in duration-150"
                            >About Us</a
                        >
                    </li>
                    <li>
                        <a
                            href="/#services"
                            class="font-normal hover:text-logoIcon ease-in duration-150"
                            >Services</a
                        >
                    </li>
                    <li>
                        <a
                            href="/careers"
                            class="font-normal hover:text-logoIcon ease-in duration-150"
                            >Careers</a
                        >
                    </li>
                    <li>
                        <a
                            href="/contact"
                            class="font-normal hover:text-logoIcon ease-in duration-150"
                            >Contact Us</a
                        >
                    </li>
                </ul>
            </div>
            <div>
                <a
                    class="bg-logoIcon text-white flex px-4 py-3 rounded"
                    href="tel:9998705371"
                    ><span class="material-icons mr-2"> call </span> Call Us Now</a
                >
            </div>
        </div>
    </div>
</section>

<style>
    .navbar-animation {
        animation: navbar 0.5s alternate;
        background-color: #1a1a1a;
        color: #fff;
    }

    @keyframes navbar {
        from {
            top: -50px;
        }
        to {
            top: 0px;
        }
    }
</style>
