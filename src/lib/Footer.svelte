<footer class="bg-white text-black">
    <div class="container mx-auto max-w-c-1390 font-mukta pt-12">
        <div class="flex flex-wrap lg:flex-nowrap lg:gap-x-16 mx-4">
            <div class="w-full md:w-1/2 lg:w-1/4 mb-6">
                <div class="mb-4">
                    <img
                        src="../images/logo.jpeg"
                        alt="Logo"
                        class="w-20 h-20 rounded-full"
                    />
                </div>
                <p class="text-lightText text-md">
                    At Fixonn, we are dedicated to enhancing the quality of your
                    home life. With a team of skilled professionals, we provide
                    top-notch services, ensuring your comfort and peace of mind.
                </p>
            </div>

            <!-- Second Section: Services -->
            <div class="w-full md:w-1/2 lg:w-1/4 mb-6">
                <h3 class="text-xl font-semibold mb-4">Services</h3>
                <ul class="text-lightText">
                    <li class="mb-2">
                        <a
                            class="hover:text-black hover:pl-2 ease-in duration-300"
                            href="/services/plumbing"
                            on:click={() =>
                                location.assign("/services/plumbing")}
                            ><i
                                class="fa-solid fa-chevron-right text-xs mr-2"
                            /> Plumbing</a
                        >
                    </li>
                    <li class="mb-2">
                        <a
                            class="hover:text-black hover:pl-2 ease-in duration-300"
                            href="/services/electrical"
                            on:click={() =>
                                location.assign("/services/electrical")}
                            ><i
                                class="fa-solid fa-chevron-right text-xs mr-2"
                            /> Electrical</a
                        >
                    </li>
                    <li class="mb-2">
                        <a
                            class="hover:text-black hover:pl-2 ease-in duration-300"
                            href="/services/pest-control"
                            on:click={() =>
                                location.assign("/services/pest-control")}
                            ><i
                                class="fa-solid fa-chevron-right text-xs mr-2"
                            /> Pest Control</a
                        >
                    </li>
                    <li class="mb-2">
                        <a
                            class="hover:text-black hover:pl-2 ease-in duration-300"
                            href="/services/deep-cleaning"
                            on:click={() =>
                                location.assign("/services/deep-cleaning")}
                            ><i
                                class="fa-solid fa-chevron-right text-xs mr-2"
                            /> Deep Cleaning</a
                        >
                    </li>
                    <li class="mb-2">
                        <a
                            class="hover:text-black hover:pl-2 ease-in duration-300"
                            href="/services/painting"
                            on:click={() =>
                                location.assign("/services/painting")}
                            ><i
                                class="fa-solid fa-chevron-right text-xs mr-2"
                            /> Painting</a
                        >
                    </li>
                    <li class="mb-2">
                        <a
                            class="hover:text-black hover:pl-2 ease-in duration-300"
                            href="/services/carpentry"
                            on:click={() =>
                                location.assign("/services/carpentry")}
                            ><i
                                class="fa-solid fa-chevron-right text-xs mr-2"
                            /> Carpentry</a
                        >
                    </li>
                </ul>
            </div>

            <!-- Third Section: Contact -->
            <div class="w-full md:w-1/2 lg:w-1/4 mb-6">
                <h3 class="text-xl font-semibold mb-4">Contact</h3>
                <ul class="text-lightText">
                    <li class="mb-2">
                        <a
                            class="hover:text-black ease-in duration-300"
                            href="mailto:info@fixonn.com"
                            ><i class="fa-solid fa-envelope text-sm mr-2" /> info@fixonn.com</a
                        >
                    </li>
                    <li class="mb-2">
                        <a
                            class="hover:text-black ease-in duration-300"
                            href="tel:+918296603137"
                            ><i class="fa-solid fa-phone text-sm mr-2" /> +91 82966
                            03137</a
                        >
                    </li>
                    <li class="mb-2 flex">
                        <i class="fa-solid fa-location-dot text-sm mr-2" />
                        <p>
                            #55, Arcade, 1st D Cross, Mahaveer Road
                            Akshayanagar, Akshaya Gardens Bangalore, Karnataka
                        </p>
                    </li>
                </ul>
            </div>

            <!-- Fourth Section: Links -->
            <div class="w-full md:w-1/2 lg:w-1/4 mb-6">
                <h3 class="text-xl font-semibold mb-4">Links</h3>
                <ul class="text-lightText">
                    <li class="mb-2">
                        <a
                            href="/"
                            class="hover:text-black hover:pl-2 ease-in duration-300"
                            ><i
                                class="fa-solid fa-chevron-right text-xs mr-2"
                            /> Home</a
                        >
                    </li>
                    <li class="mb-2">
                        <a
                            href="/about"
                            class="hover:text-black hover:pl-2 ease-in duration-300"
                            ><i
                                class="fa-solid fa-chevron-right text-xs mr-2"
                            /> About</a
                        >
                    </li>
                    <li class="mb-2">
                        <a
                            href="/#services"
                            class="hover:text-black hover:pl-2 ease-in duration-300"
                            ><i
                                class="fa-solid fa-chevron-right text-xs mr-2"
                            /> Services</a
                        >
                    </li>
                    <li class="mb-2">
                        <a
                            href="/careers"
                            class="hover:text-black hover:pl-2 ease-in duration-300"
                            ><i
                                class="fa-solid fa-chevron-right text-xs mr-2"
                            /> Careers</a
                        >
                    </li>
                    <li class="mb-2">
                        <a
                            href="/contact"
                            class="hover:text-black hover:pl-2 ease-in duration-300"
                            ><i
                                class="fa-solid fa-chevron-right text-xs mr-2"
                            /> Contact Us</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div
        class="w-full mx-auto max-w-c-1390 font-mukta border-t border-[#e0e0e0] p-4 text-lightText"
    >
        <div class="flex justify-between items-center">
            <p class="text-opacity-75">
                &copy; Fixonn 2023, All Rights Reserved
            </p>
            <div class="space-x-4">
                <a
                    target="_blank"
                    href="https://www.linkedin.com/company/fixonn/"
                    class="text-opacity-75 hover:text-logoIcon ease-in duration-150"
                >
                    <i class="fab fa-linkedin" />
                </a>
                <a
                    target="_blank"
                    href="https://twitter.com/Adhikary7Ankur"
                    class="text-opacity-75 hover:text-logoIcon ease-in duration-150"
                >
                    <i class="fab fa-twitter" />
                </a>
            </div>
        </div>
    </div>
</footer>
