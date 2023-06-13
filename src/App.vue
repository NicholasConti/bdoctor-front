<script>
import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';
export default {
    name: 'App',
    components: {
        HeaderApp,
        FooterApp
    }
}
</script>

<template>
    <HeaderApp />
    <RouterView></RouterView>
    <FooterApp />
</template>

<style lang="scss" scoped></style>