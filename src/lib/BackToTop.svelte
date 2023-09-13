<script>
    import { onMount } from "svelte";

    export let pathName;
    let shouldVisible = false;

    onMount(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                shouldVisible = true;
            } else {
                shouldVisible = false;
            }
        });
    });
</script>

<section
    class={`${
        shouldVisible ? "bottom-5 right-5" : "-bottom-20 -right-20"
    } ease-in duration-300 back-to-top fixed`}
>
    <div>
        <a
            href={pathName}
            class="hover:bg-logoIcon active:bg-logoText border border-[#E0E0E0] ease-in duration-200 hover:text-white flex justify-center items-center h-10 w-10 rounded bg-white text-[#757693]"
            ><i class="fa-solid fa-chevron-up" /></a
        >
    </div>
</section>
