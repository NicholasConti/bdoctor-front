<script>
export default {
    name: "NotFoundPage"
}
</script>

<template>
    <div class="d-flex flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 text-center">
                    <span class="display-1 d-block">404</span>
                    <div class="mb-4 lead">The page you are looking for was not found.</div>
                    <router-link class="btn btn-primary" :to="{name: home}">Back to Home</router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
body {
    background: #dedede;
}

.page-wrap {
    min-height: 100vh;
}
</style>