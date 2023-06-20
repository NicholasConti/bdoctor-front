<script>
export default {
    name: 'FooterApp'
}
</script>

<template>
    <!-- Main Container -->
    <footer class="container">
        <div class="row text-center">
            <!-- info -->
            <div class="col-4 col-md-6 col-lg-2 col-xl-3 mx-auto d-md-block d-none  py-5">
                <h5>About Us</h5>
                <ul>
                    <li><a href="https://www.topdoctors.it/en/chi-siamo/">About BDoctors</a></li>
                    <li><a href="https://www.topdoctors.it/en/occupiamo-della-tua-salute/">Why choose us</a></li>
                    <li><a href="https://www.topdoctors.it/en/informativa-sulla-privacy/">Privacy Policy</a></li>
                    <li><a href="https://www.topdoctors.it/en/informazioni-legali/">Terms of Use</a></li>
                    <li><a href="https://www.topdoctors.it/en/informativa-sulla-privacy/">Cookies policy</a></li>
                </ul>
            </div>
            <!-- info -->
            <div class="col-4 col-md-6 col-lg-2 col-xl-3 mx-auto d-lg-block d-none py-5">
                <h5>Collaborate with us</h5>
                <ul>
                    <li><a href="https://www.topdoctors.it/en/collaborazione-con-medici/">Doctors</a></li>
                    <li><a href="https://www.topdoctors.it/en/raccomanda-medici/">Nominate doctors</a></li>
                    <li><a href="https://www.topdoctors.it/en/aziende-e-servizi/">Strategic alliances</a></li>
                    <li><a href="https://www.topdoctors.it/en/perche-topdoctors/">Selection process</a></li>
                    <li><a href="https://www.topdoctors.it/en/lavora-a-top-doctors/">Work with us</a></li>
                </ul>
            </div>
            <!-- info -->
            <div class="col-4 col-md-6 col-lg-2 col-xl-3 mx-auto d-lg-block d-none  py-5">
                <h5>Customer Care</h5>
                <ul>
                    <li><a href="https://www.topdoctors.it/en/suggerimenti-e-domande/">Contact us</a></li>
                    <li><a href="https://www.topdoctors.it/en/garanzia-di-qualita/">Quality commitment</a></li>
                    <li><a href="https://www.topdoctors.it/en/dizionario-medico/">All medical procedures</a></li>
                    <li><a href="https://www.topdoctors.it/en/domande-frequenti/">FAQs</a></li>
                </ul>
            </div>
            <!-- Logo+Info -->
            <div class="col-4 col-md-6 col-lg-2 col-xl-3 mx-auto pt-4">
                <div>
                    <img class="logo pb-2" src="/image/logo_fb2.jpg" alt="bdoctors">
                </div>
                <div class="d-flex justify-content-center">
                    <ul>
                        <li>
                            <h6>BestDoctors italy S.r.l</h6>
                        </li>
                        <li>
                            <h6>Square of the beautiful girls</h6>
                        </li>
                        <li>
                            <h6>00196 Roma (RM), Italia</h6>
                        </li>
                        <li>
                            <h6>Partita IVA e codice fiscale 092445564552</h6>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Logo+Info -->
        </div><hr>
        <!-- Icons -->
        <div class="social text-center d-flex justify-content-center gap-1 pt-3">
            <div><a class="icons" href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a></div>
            <div><a class="icons" href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a></div>
            <div><a class="icons" href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a></div>
            <div><a class="icons" href="#"><font-awesome-icon icon="fa-brands fa-youtube" /></a></div>
            <div><a class="icons" href="#"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a></div>
        </div>
        <!-- Icons -->
        <h5 class="text-center py-3">www.bdoctors.it © 2023 - Prenota la tua visita online!</h5>
    </footer>
    <!-- Main Container -->
</template>


<style lang="scss" scoped>
.social div {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background-color: #005a97;
    line-height: 2.5rem;
}

ul {
    list-style: none;
    padding-left: 0;
}
h5 {
    cursor: pointer;
    color: #005a97; 
}
h6{
    color: #98a1ab;
}
a {
    text-decoration: none;
    font-size: 12px;
    color: #98a1ab;
    padding: 5px 10px;
    border-radius: 10px;
    &:hover{
        background-color: rgba(0, 50, 200, 0.1);
    }
}

.logo {
    width: 15.625rem;
}

.icons{
    color: #fff;
    font-size: 1.25rem;
    &:hover{
        color: #fff;
    }
}
</style>