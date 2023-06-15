<script>
export default {
    name: 'DoctorList'
}
</script>

<template>
    <div class="background_color">
        <div class="container">
            <h1 class="text-center text-white py-4">Seek your doctor, for within their care lies healing and hope.</h1>
            <form action="" method="get">
                <div class="input-group mb-3 w-50 m-auto">
                    <input type="text" class="form-control" aria-describedby="basic-addon1">
                    <span class="input-group-text" id="basic-addon1">Search</span>
                </div>
            </form>
            <div class="d-flex justify-content-center p-2 gap-3">
                <button class="btn btn-primary">specializ1</button>
                <button class="btn btn-primary">specializ2</button>
                <button class="btn btn-primary">specializ3</button>
                <button class="btn btn-primary">specializ4</button>
                <button class="btn btn-primary">specializ5</button>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6 col-md-4">
                    <div class="card">
                        <img src="/image/doct1.jpg" class="card-img-top" alt="di">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the
                                card's content.</p>
                            <router-link :to="{ name: 'InfoDoctor' }">vai in pace</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h1 {
    color: blue
}

.background_color {
    background: rgb(0,90,151);
    background: linear-gradient(0deg, rgba(0,90,151,1) 0%, rgba(43,151,172,1) 100%);
}
</style>