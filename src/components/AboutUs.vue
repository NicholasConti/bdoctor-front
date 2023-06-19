<script>
export default {
    name: 'AboutUs',
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 15,
                behavior: 'smooth'
            });
        }
    }
}

</script>

<template>
    <!-- Main container -->
    <div class="background_color py-4">
        <div class="container col-12 col-md-10 py-4">
            <!-- title -->
            <h1 class="text-center">ABOUT US</h1>
            <!-- title -->
            <div class="d-flex flex-column flex-md-row justify-content-center">
                <!-- first_container -->
                <div class="d-flex px-3 m-2 p-2 container_card">
                    <div class="d-flex align-items-center px-2 ">
                        <div>
                            <h4><em>Are you a Doctor?</em></h4>
                            <h6><em>Join and reach new patients.</em></h6>
                            <h6><em>More than 10 million patients search for their Doctor every month on BestDoctors, the
                                    leading website Worldwide for visitors and number of bookings.</em></h6>
                        </div>
                    </div>
                    <div class="">
                        <img src="https://www.idoctors.it/images/frontend/medico-vertical.svg" class="img_size"
                            alt="Illustrazione dottore e dottoressa" loading="lazy">
                    </div>
                </div>
                <!-- first_container -->
                <!-- second_container -->
                <div class="d-flex px-3 m-2 p-2 container_card">
                    <div class="d-flex align-items-center px-2 ">
                        <div>
                            <h4><em>Meet a Doctor wherever you are</em></h4>
                            <h6><em>A solution to request a medical consultation, directly from your own home, using your
                                    smartphone or PC.</em>
                            </h6>
                        </div>

                    </div>
                    <div class="">
                        <img src="https://www.idoctors.it/images/illu_slide_home.svg?v=2" width="210" height="234"
                            class="img_size" alt="illustrazione visita a distanza" loading="lazy">
                    </div>
                </div>
                <!-- second_container -->
            </div>
            <!-- third_container -->
            <div class="d-flex flex-column flex-md-row px-3 m-2 p-2 py-4 container_card_big justify-content-center">

                <div class="col-md-10 col-lg-6 d-flex align-items-center">
                    <div class="py-5 px-2">
                        <h1 class="text-center">They say about us</h1>
                        <div>
                            <h4><em>Over 99% of satisfied patients</em></h4>
                            <h6><em>BestDoctors is the leading website in the world for booking medical appointments and
                                    diagnostic tests, online.</em></h6>
                            <h6><em>We believe in the importance of information and transparency to help patients choose the
                                    right doctor among the over 50,000 available on BestDoctors.</em></h6>
                        </div>
                    </div>
                </div>

                <div class="col-md-10 col-lg-8 col-xl-6 box_img px-2">
                    <img src="https://www.idoctors.it/images/frontend/commenti_diconodinoi.svg?v=2"
                        alt="Illustrazione feedback pazienti" loading="lazy">
                </div>
            </div>
            <!-- third_container -->
            <!-- fourth_container -->
            <div class="d-flex flex-column flex-md-row px-3 m-2 p-2 py-5 container_card_big justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-6 box_img px-2 ">
                    <img src="https://www.heti.nsw.gov.au/__data/assets/image/0006/751434/medical_student_feature_tile_592x320px.jpg"
                        loading="lazy" class="w-100" style="border-radius: 10px;">
                </div>
                <div class="col-md-10 col-lg-6 d-flex align-items-center">
                    <div class="px-5 py-2">
                        <p>We connect you with dedicated doctors ready to assist you at any time.Our platform is designed to help you find the right doctor to
                            meet your needs.
                            With our user-friendly search functionality, you can easily find doctors specializing in various
                            fields and read reviews from satisfied patients. Rest assured that all the doctors in our
                            network are trusted professionals committed to providing quality care.
                            Take control of your health and explore our website today to connect with compassionate doctors
                            who are dedicated to helping you live a healthier life.
                        </p>
                        <div class="box_btn">
                            <button @click="scrollToTop" class="scroll-top-button">Torna in cima</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- fourth_container -->
            <!-- experiment -->
            <div class="boxes">
                <div class="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <!-- experiment -->
        </div>
    </div>
    <!-- Main container -->
</template>

<style lang="scss" scoped>
/* Container_card */

.container_card {
    border-radius: 10px;
    color: white;
    position: relative;
    transition: transform 0.6s ease;
    overflow: hidden;
}

.container_card:hover {
    cursor: pointer;
    transform: scale(1.1);
}

.container_card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent, rgba(188, 215, 188, 0.5));
    opacity: 0;
    transition: opacity 0.5s ease;
}

.container_card:hover::before {
    opacity: 0.3;
}

/* Container_card */

/* Container_card_big */

.container_card_big {
    border-radius: 10px;
    color: white;
    transition: transform 0.6s ease;
    overflow: hidden;
}

.container_card_big:hover {
    cursor: pointer;
    transform: scale(1.1);
}

.container_card_big:hover::before {
    opacity: 0.3;
}

/* Container_card_big */

.img_size {
    width: 200px;
    height: 200px;
    border-radius: 10px;
}

h1 {
    color: white;
}

h4 {
    font-size: 26px;
}

.background_color {
    background: rgb(0, 90, 151);
    background: linear-gradient(180deg, rgba(0, 90, 151, 1) 0%, rgba(43, 151, 172, 1) 100%);
}

.box_btn {
    position: absolute;
}

.scroll-top-button {
    position: relative;
    padding: 10px 20px;
    background-color: #005a97;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

.scroll-top-button:hover {
    transform: scale(1.1);
    transition: 0.5s ease;
}

/* <!-- experiment --> */

.boxes {
    --size: 32px;
    --duration: 800ms;
    height: calc(var(--size) * 2);
    width: calc(var(--size) * 3);
    position: relative;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    margin-top: calc(var(--size) * 1.5 * -1);
    transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
}

.boxes .box {
    width: var(--size);
    height: var(--size);
    top: 0;
    left: 0;
    position: absolute;
    transform-style: preserve-3d;
}

.boxes .box:nth-child(1) {
    transform: translate(100%, 0);
    -webkit-animation: box1 var(--duration) linear infinite;
    animation: box1 var(--duration) linear infinite;
}

.boxes .box:nth-child(2) {
    transform: translate(0, 100%);
    -webkit-animation: box2 var(--duration) linear infinite;
    animation: box2 var(--duration) linear infinite;
}

.boxes .box:nth-child(3) {
    transform: translate(100%, 100%);
    -webkit-animation: box3 var(--duration) linear infinite;
    animation: box3 var(--duration) linear infinite;
}

.boxes .box:nth-child(4) {
    transform: translate(200%, 0);
    -webkit-animation: box4 var(--duration) linear infinite;
    animation: box4 var(--duration) linear infinite;
}

.boxes .box>div {
    --background: #5C8DF6;
    --top: auto;
    --right: auto;
    --bottom: auto;
    --left: auto;
    --translateZ: calc(var(--size) / 2);
    --rotateY: 0deg;
    --rotateX: 0deg;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--background);
    top: var(--top);
    right: var(--right);
    bottom: var(--bottom);
    left: var(--left);
    transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ));
}

.boxes .box>div:nth-child(1) {
    --top: 0;
    --left: 0;
}

.boxes .box>div:nth-child(2) {
    --background: #145af2;
    --right: 0;
    --rotateY: 90deg;
}

.boxes .box>div:nth-child(3) {
    --background: #447cf5;
    --rotateX: -90deg;
}

.boxes .box>div:nth-child(4) {
    --background: #DBE3F4;
    --top: 0;
    --left: 0;
    --translateZ: calc(var(--size) * 3 * -1);
}

@-webkit-keyframes box1 {

    0%,
    50% {
        transform: translate(100%, 0);
    }

    100% {
        transform: translate(200%, 0);
    }
}

@keyframes box1 {

    0%,
    50% {
        transform: translate(100%, 0);
    }

    100% {
        transform: translate(200%, 0);
    }
}

@-webkit-keyframes box2 {
    0% {
        transform: translate(0, 100%);
    }

    50% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(100%, 0);
    }
}

@keyframes box2 {
    0% {
        transform: translate(0, 100%);
    }

    50% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(100%, 0);
    }
}

@-webkit-keyframes box3 {

    0%,
    50% {
        transform: translate(100%, 100%);
    }

    100% {
        transform: translate(0, 100%);
    }
}

@keyframes box3 {

    0%,
    50% {
        transform: translate(100%, 100%);
    }

    100% {
        transform: translate(0, 100%);
    }
}

@-webkit-keyframes box4 {
    0% {
        transform: translate(200%, 0);
    }

    50% {
        transform: translate(200%, 100%);
    }

    100% {
        transform: translate(100%, 100%);
    }
}

@keyframes box4 {
    0% {
        transform: translate(200%, 0);
    }

    50% {
        transform: translate(200%, 100%);
    }

    100% {
        transform: translate(100%, 100%);
    }

    /* <!-- experiment --> */

}</style>