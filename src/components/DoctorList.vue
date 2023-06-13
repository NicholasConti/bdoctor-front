<script>
export default {
    name: 'DoctorList'
}
</script>

<template>
    <h1>Doctors</h1>
    <router-link :to="{name:'InfoDoctor'}">vai in pace</router-link>
</template>

<style lang="scss" scoped>
h1 {
    color: blue
}
</style>