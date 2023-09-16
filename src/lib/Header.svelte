<script>
    import { slide } from "svelte/transition";
    import { onMount } from "svelte";
    let shouldVisible = false;
    let isSubMenuVisible = false;

    function showSubMenu() {
        if (isSubMenuVisible) {
            isSubMenuVisible = false;
        } else {
            isSubMenuVisible = true;
        }
    }

    function hideSubMenu() {
        if (isSubMenuVisible) {
            isSubMenuVisible = false;
        }
    }

    onMount(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                shouldVisible = true;
            } else {
                shouldVisible = false;
            }
        });

        window.addEventListener("click", (event) => {
            if (
                event.target !=
                    document.getElementById("subMenuToggleButton") &&
                window.screen.availWidth <= 890
            ) {
                hideSubMenu();
            }
        });

        window.addEventListener("resize", () => {
            if (window.screen.availWidth <= 890) {
                isSubMenuVisible = false;
            } else {
                isSubMenuVisible = true;
            }
        });

        if (window.screen.availWidth <= 890) {
            isSubMenuVisible = false;
        } else {
            isSubMenuVisible = true;
        }
    });
</script>

<section
    transition:slide
    class={`${
        shouldVisible ? "sticky navbar-animation" : "relative"
    } top-0 bg-white z-50 shadow-sm relative`}
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
        <button
            on:click={showSubMenu}
            id="menuButton"
            class="outline-none text-xl text-logoIcon active:text-black ease-in duration-150"
        >
            <i id="subMenuToggleButton" class="fas fa-bars" />
        </button>
        {#if isSubMenuVisible}
            <div transition:slide id="menus" class="menus flex">
                <div class="sub-menu flex items-center mr-8">
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
                                href="/"
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
                <div class="flex call-btn-div">
                    <a
                        class="active:bg-transperent active:text-logoIcon ease-in duration-50 border-2 border-logoIcon bg-logoIcon text-white flex px-4 py-2 rounded"
                        href="tel:9998705371"
                        ><span class="material-icons mr-2"> call </span> Call Us
                        Now</a
                    >
                </div>
            </div>
        {/if}
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

    #menuButton {
        display: none;
    }
    @media only screen and (max-width: 891px) {
        #menuButton {
            display: inline-block;
        }
        .menus {
            position: absolute;
            width: 100vw;
            top: 100%;
            left: 0;
            background-color: white;
            flex-direction: column;
            padding: 20px 0;
            box-shadow: 1px 1px 5px #dadada;
        }
        .menus > .sub-menu {
            flex-direction: column;
            margin: 0;
        }
        .menus .flex ul {
            flex-direction: column;
            width: 100%;
            align-items: center;
            margin-bottom: 10px;
        }
        .menus .flex ul li {
            width: 100%;
            text-align: center;
        }
        .menus .flex ul li a {
            color: #1a1a1a;
            width: 100%;
            display: inline-block;
            padding: 5px 0;
        }
        .menus .flex ul li a:hover {
            background-color: #ff3a54;
            color: #fff;
        }
        .menus .call-btn-div {
            padding-top: 10px;
            align-items: center;
            justify-content: center;
        }
    }
</style>
