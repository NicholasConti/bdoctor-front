<script>
export default {
    name: 'JumboHome'
}
</script>

<template>
    <div class="jumbo d-none d-lg-block">
        <div class="container h-100 text-center pt-2">
            <img class="h-100" src="../../public/image/doctors.png" alt="doctors">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    div.jumbo {
        background-image: url(../../public/image/jumbotron.jpg);
        background-size: cover;
        height: 500px;
    }
</style>