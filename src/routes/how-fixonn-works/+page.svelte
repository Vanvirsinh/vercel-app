<script>
    import BackToTop from "$lib/BackToTop.svelte";
    import ContactIcons from "$lib/ContactIcons.svelte";
</script>

<svelte:head>
    <title>How Fixonn Works?</title>
</svelte:head>

<section class="bg-[#13284c] pt-20">
    <div class="font-mukta flex flex-col items-center animate_bottom">
        <h3 class="text-logoIcon font-bold w-fit">PROCESS</h3>
        <h1
            class="mt-4 text-3xl md:text-5xl text-center font-semibold text-white"
        >
            How Fixonn Works?
        </h1>
    </div>
    <div
        class="md:mt-20 mt-10 flex items-center justify-center mx-auto max-w-c-1390 px-4 md:px-6"
    >
        <img src="../images/how-fixonn-works.png" alt="" />
    </div>
</section>

<!-- Other Absolute Components -->
<BackToTop pathName="/how-fixonn-works" />
<ContactIcons />
