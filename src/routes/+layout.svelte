<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import "../index.css";
</script>

<main>
    <Header />
    <slot />
    <Footer />
</main>
