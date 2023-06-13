<script>
import JumboHome from '../components/JumboHome.vue';
import DoctorList from '../components/DoctorList.vue';
import AboutUs from '../components/AboutUs.vue';

export default {
    name: 'AppHome',
    components: {
        JumboHome,
        DoctorList,
        AboutUs
    }
}
</script>

<template>
    <JumboHome />
    <DoctorList />
    <AboutUs />
</template>

<style lang="scss" scoped>
h1 {
    color: blue
}
</style>