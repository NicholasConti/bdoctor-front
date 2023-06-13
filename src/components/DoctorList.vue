<script>
export default {
    name: 'DoctorList'
}
</script>

<template>
    <div class="container">
        <h1 class="text-center">h1 con bella scritta</h1>
        <form action="" method="get">
            <div class="input-group mb-3 w-50 m-auto">
                <input type="text" class="form-control" aria-describedby="basic-addon1">
                <span class="input-group-text" id="basic-addon1">Search</span>
            </div>
        </form>
        <div>

        </div>
        <router-link :to="{ name: 'InfoDoctor' }">vai in pace</router-link>
    </div>
</template>

<style lang="scss" scoped>
h1 {
    color: blue
}
</style>