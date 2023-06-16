<script>

export default {
    name: 'CardDoctor',
    props: {
        doc: Object
    }
}
</script>

<template>
    <div class="card">
        <img :src="doc.image" class="card-img-top" :alt="doc.user.name">
        <div class="card-body">doc
            <h5 class="card-title">Dr. {{ doc.user.name }} {{ doc.user.surname }}</h5>
            <p class="card-text">{{ doc.description }}</p>
            <h1>{{ doc.id }}</h1>
            <router-link :to="{ name: 'InfoDoctor' }">Seleziona</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>