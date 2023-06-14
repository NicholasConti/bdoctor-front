<script>
export default {
    name: 'JumboHome'
}
</script>

<template>
    <div class="jumbo d-none d-lg-block">
        <div class="container h-100 text-center pt-2">
            <img class="h-100" src="/image/doctors.png" alt="doctors" style="width: 600px;">
        </div>
    </div>

</template>

<style lang="scss" scoped>
    div.jumbo {
        background-image: url(/image/jumbo1.jpg);
        background-size: cover;
        background-position: center;
        height: 300px;
        border-bottom: 10px solid #2b97ac ;
    }
</style>