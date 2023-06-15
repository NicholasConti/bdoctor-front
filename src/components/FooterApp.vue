<script>
export default {
    name: 'FooterApp'
}
</script>

<template>
    <!-- Main Container -->
    <footer class="container-fluid">
        <div class="row text-center">
            <!-- info -->
            <div class="col-4 col-md-6 col-lg-2 col-xl-3 mx-auto d-md-block d-none  py-5">
                <h5>Servizi</h5>
                <ul>
                    <li><a href="">Privacy e cookies</a></li>
                    <li><a href="">Chi siamo</a></li>
                    <li><a href="">Contatti</a></li>
                    <li><a href="">Lavoro ASSUMIAMO!</a></li>
                    <li><a href="">Condizioni di Servizio</a></li>
                    <li><a href="">Ufficio stampa</a></li>
                    <li><a href="">In che modo ordiniamo i risultati</a></li>
                </ul>
            </div>
            <!-- info -->
            <div class="col-4 col-md-6 col-lg-2 col-xl-3 mx-auto d-lg-block d-none py-5">
                <h5>Per i Pazienti</h5>
                <ul>
                    <li><a href="">Dottori</a></li>
                    <li><a href="">Medici di base</a></li>
                    <li><a href="">Strutture</a></li>
                    <li><a href="">Chiedi al dottore</a></li>
                    <li><a href="">Prestazioni</a></li>
                    <li><a href="">Patologie</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">App Mobile</a></li>
                </ul>
            </div>
            <!-- info -->
            <div class="col-4 col-md-6 col-lg-2 col-xl-3 mx-auto d-lg-block d-none  py-5">
                <h5>Per i professionisti sanitari</h5>
                <ul>
                    <li><a href="">Prezzi</a></li>
                    <li><a href="">Area professionisti sanitari</a></li>
                    <li><a href="">Risorse Gratuite</a></li>
                    <li><a href="">Centro Assistenza per Professionisti</a></li>
                </ul>
            </div>
            <!-- Logo+Info -->
            <div class="col-4 col-md-6 col-lg-2 col-xl-3 mx-auto ">
                <div>
                    <img class=" logo img-fluid"
                        src="https://findvectorlogo.com/wp-content/uploads/2018/11/best-doctors-vector-logo.png"
                        alt="bdoctors">
                </div>
                <div class="d-flex justify-content-center">
                    <ul>
                        <li>
                            <h6>BestDoctors italy S.r.l</h6>
                        </li>
                        <li>
                            <h6>Piazzale delle belle figliole</h6>
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
        </div>
        <!-- Icons -->
        <div class="social text-center d-flex justify-content-center gap-1">
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
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #005a97;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
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
}
a:hover{
    color:  #005a97;
}

.logo {
    height: 100px;
    width: 15.625rem;
}

.icons{
    color: white;
}
</style>