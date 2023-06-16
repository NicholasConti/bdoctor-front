<script>

export default {
    name: 'CardDoctor',
    props: {
        doc: Object
    }
}
</script>

<template>
    <div class="py-2">
        <div class="card col-sm-12 col-md-12 " style="max-width: 560px; height: 450px;">
            <img :src="doc.image" class="card-img-top img_size" :alt="doc.user.name">
            <div class="card-body">
                <h5 class="card-title">Dr. {{ doc.user.name }} {{ doc.user.surname }}</h5>
                <p class="card-text">{{ doc.description }}</p>
                <h1>{{ doc.id }}</h1>
                <router-link :to="{ name: 'InfoDoctor' }">Seleziona</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.img_size {
    height: 15.625rem;
}
</style>