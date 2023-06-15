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
    <div class="background_color py-4">
        <div class="container col-12 col-md-10 py-4">
            <h1 class="text-center">ABOUT US</h1>

            <div class="d-flex flex-column flex-md-row justify-content-center">
                <div class="d-flex px-3 m-2 p-2 container_card">
                    <div class="d-flex align-items-center px-2 ">
                        <h4><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eaque omnis p?</em></h4>
                    </div>
                    <div class="">
                        <img src="https://www.idoctors.it/images/frontend/medico-vertical.svg" class="img_size"
                            alt="Illustrazione dottore e dottoressa" loading="lazy">
                    </div>
                </div>

                <div class="d-flex px-3 m-2 p-2 container_card">
                    <div class="d-flex align-items-center px-2 ">
                        <h4><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eaque omnis p?</em></h4>
                    </div>
                    <div class="">
                        <img src="https://www.idoctors.it/images/illu_slide_home.svg?v=2" width="210" height="234"
                            class="img_size" alt="illustrazione visita a distanza" loading="lazy">
                    </div>
                </div>
            </div>

            <div class="d-flex flex-column flex-md-row px-3 m-2 p-2 py-4 container_card_big justify-content-center">
                <div class="col-md-10 col-lg-6 d-flex align-items-center">
                    <div class="py-5 px-2">
                            <h1 class="text-center">Ciao Provo</h1>
                            <div class="">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos amet rerum quam, quia quisquam
                                aliquid
                                aspernatur ratione nesciunt corporis consectetur laboriosam perferendis labore magnam non,
                                voluptates totam alias illo architecto.
                                </p>
                            </div>
                    </div>
                </div>
                <div class="col-md-10 col-lg-8 col-xl-6 box_img px-2">
                    <img src="https://www.idoctors.it/images/frontend/commenti_diconodinoi.svg?v=2"
                        alt="Illustrazione feedback pazienti" loading="lazy">
                </div>
            </div>

            <div class="d-flex flex-column flex-md-row px-3 m-2 p-2 py-4 container_card_big justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-6 box_img px-2 ">
                    <img src="//platform.docplanner.com/img/it/homepage/homepage-pro-banner@2x.webp" loading="lazy"
                        class="w-100">
                </div>
                <div class="col-md-10 col-lg-6 d-flex align-items-center">
                    <div class="px-5">
                        <h1 class="text-center">Ciao Provo</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos amet rerum quam, quia quisquam
                            aliquid
                            aspernatur ratione nesciunt corporis consectetur laboriosam perferendis labore magnam non,
                            voluptates totam alias illo architecto.
                        </p>
                        <div class="box_btn">
                            <button @click="scrollToTop" class="scroll-top-button">Torna in cima</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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

/* .container_card_big::before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent, rgba(188, 215, 188, 0.5));
    opacity: 0;
    transition: opacity 0.5s ease;
} */

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
</style>