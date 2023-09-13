<script>
    import { onMount } from "svelte";

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
        shouldVisible ? "left-0" : "-left-20"
    } bg-white rounded-r-md overflow-hidden border border-[#E0E0E0] border-l-0 back-to-top fixed top-[50%] z-20 -translate-y-1/2 ease-in duration-300`}
>
    <div class="flex flex-col gap-y-2 h-fit">
        <div>
            <a
                href="https://api.whatsapp.com/send?phone=9998705371"
                class="h-full w-10 p-1 inline-block"
            >
                <img
                    class="h-full"
                    src="../images/whatsapp.gif"
                    alt="WhatsApp Chat"
                /></a
            >
        </div>
        <div>
            <a href="tel:9998705371" class="h-full w-10 p-1 inline-block">
                <img
                    class="h-full"
                    src="../images/ringer-2.gif"
                    alt="Call US"
                />
            </a>
        </div>
    </div>
</section>
