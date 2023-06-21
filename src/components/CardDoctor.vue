<script>

export default {
    name: 'CardDoctor',
    props: {
        doc: Object
    }
}
</script>

<template>
<!--  componente card per visualizzazione dati dottore    -->
    <div class="py-2 px-2">
        <div class="card col-sm-12 col-md-12 background_color_img" style="max-width: 560px; height: 400px;">
            <img :src="doc.image" class="card-img-top img_size px-1 py-1" :alt="doc.user.name">
            <div class="card-body text-white">
                <h6 class="card-title">Dr. {{ doc.user.name }} {{ doc.user.surname }}</h6>
                <p class="card-text">{{ doc.description }}</p>
                    <router-link  class="text-white" :to="{ name: 'InfoDoctor', params:{id:doc.id} }"><h3 id="hover-color">Seleziona</h3></router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.background_color_img {
    background-color: #2b97ac;
}

.background_color_img:hover {
    transform: scale(1.1);
    transition: 0.5s ease;
}
.img_size {
    height: 15.625rem;
    border-radius: 10px;
}

#hover-color:hover {
  color: #005a97;
}

</style>