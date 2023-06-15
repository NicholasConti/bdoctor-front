<script>
export default {
    name: 'FooterApp'
}
</script>

<template>
    <footer class="container-fluid">
        <div class="row text-center">
            <div class="col-12 col-md-6 col-lg-3 mx-auto d-lg-block d-none">
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
            <div class="col-12 col-md-6 col-lg-3 mx-auto d-lg-block d-none">
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
            <div class="col-12 col-md-6 col-lg-3 mx-auto d-md-block d-none">
                <h5>Per i professionisti sanitari</h5>
                <ul>
                    <li><a href="">Prezzi</a></li>
                    <li><a href="">Area professionisti sanitari</a></li>
                    <li><a href="">Risorse Gratuite</a></li>
                    <li><a href="">Centro Assistenza per Professionisti</a></li>
                </ul>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mx-auto d-md-block d-none">
                <div>
                    
                </div>
                <ul>
                    <li><h6>BestDoctors italy S.r.l</h6></li>
                    <li><h6>Piazzale delle belle figliole</h6></li>
                    <li><h6>00196 Roma (RM), Italia</h6></li>
                    <li><h6>Partita IVA e codice fiscale 092445564552</h6></li>
                </ul>
            </div>
        </div>
        <div class="social text-center d-flex justify-content-center gap-1">
            <div><a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a></div>
            <div><a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a></div>
            <div><a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a></div>
            <div><a href="#"><font-awesome-icon icon="fa-brands fa-youtube" /></a></div>
            <div><a href="#"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a></div>
            
        </div>
        <h6 class="text-center">www.bdoctors.it © 2023 - Prenota la tua visita online!</h6>
    </footer>
</template>

<style lang="scss" scoped>
.social div{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: rgba(0, 0, 50, 0.3);
    text-align: center;
    line-height: 40px;
    font-size: 20px;
}
ul{
    list-style: none;
    padding-left: 0;
}

</style>