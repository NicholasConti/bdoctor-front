
<script>

export default {
    name: 'InfoDoctor',
}

</script>

<template>
    <div class="background_color">
        <!-- doctor -->
        <div class="d-flex">
            <div class="container_img px-4 py-4">
                <img src="/image/doct1.jpg" class="card-img-top img_prova" alt="di" style="width: 200px;">
            </div>
            <!-- Info-doctor -->
            <div class="px-4 py-4">
                <div>
                    <h4>sponsor</h4>
                </div>
                <div>
                    <h4>info doctor</h4>
                </div>
            </div>
            <!-- Info-doctor -->
        </div>
        <!-- doctor -->
        <div class="container-fluid d-flex justify-content-center px-4 py-4">
            <div class="row">
                <!-- Message -->
                <div class="col-md-6">
                    <div class="box_message">
                        <h3>Prenota una visita </h3>
                        <form action="invia_messaggio.php" method="POST">
                            <textarea name="messaggio" rows="5" cols="40"
                                placeholder="Scrivi il tuo messaggio qui"></textarea>
                            <div class="py-2 px-3">
                                <input type="submit" value="Invia">
                            </div>
                        </form>
                    </div>
                </div>
                <!-- Message -->
                <!-- Review -->
                <div class="col-md-6">
                    <div class="box_review">
                        <h3>Recensisci Il dottore</h3>
                        <form action="invia_recensione.php" method="POST">
                            <textarea name="recensione" rows="5" cols="40"
                                placeholder="Scrivi la tua recensione qui"></textarea>
                            <div class="d-flex align-items-center">
                                <div class="rating px-3">
                                    <input type="radio" name="rating" id="star5" value="5">
                                    <label for="star5"></label>
                                    <input type="radio" name="rating" id="star4" value="4">
                                    <label for="star4"></label>
                                    <input type="radio" name="rating" id="star3" value="3">
                                    <label for="star3"></label>
                                    <input type="radio" name="rating" id="star2" value="2">
                                    <label for="star2"></label>
                                    <input type="radio" name="rating" id="star1" value="1">
                                    <label for="star1"></label>
                                </div>
                                <div class="">
                                    <input type="submit" value="Invia recensione">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- Review -->
            </div>
        </div>
        <!-- LinkHome -->
        <div class="text-center py-4">
            <router-link :to="{ name: 'home' }">Torna alla Home</router-link>
        </div>
        <!-- LinkHome -->
    </div>
</template>

<style lang="scss" scoped>
.background_color {
    background: rgb(0, 90, 151);
    background: linear-gradient(180deg, rgba(0, 90, 151, 1) 0%, rgba(43, 151, 172, 1) 100%);
    /* height: calc(100vh - 320px) */
}

.container_cv {
    width: 600px;
    height: 400px;
    border-radius: 10px;
    background-color: #ffcc00;
}

.img_prova {
    border-radius: 10px;
    height: 200px;
}

.rating {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
}

.rating input {
    display: none;
}

.rating label {
    cursor: pointer;
}

.rating label:before {
    content: '\2605';
    font-size: 30px;
    color: #ccc;
}

.rating input:checked~label:before {
    color: #ffcc00;
}
</style>