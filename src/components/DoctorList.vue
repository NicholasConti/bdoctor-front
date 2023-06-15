<script>
import axios from 'axios';
export default {
    name: 'DoctorList',
    data() {
        return {
            doctors: [],
            specs: [],
        }
    },
    methods: {
        getDoctors() {
            axios.get('http://127.0.0.1:8000/api/doctors').then((response) => {
                this.doctors = response.data.results;
                console.log(this.doctors);
            })
        },
        getSpec() {
            axios.get('http://127.0.0.1:8000/api/specializations').then((response) => {
                this.specs = response.data.results;
            })
        }
    },
    created() {
        this.getSpec();
        this.getDoctors();
    }
}
</script>

<template>
    <div class="background_color">
        <div class="container">
            <h1 class="text-center">h1 con bella scritta</h1>
            <form action="" method="get">
                <div class="input-group mb-3 w-50 m-auto">
                    <input type="text" class="form-control" aria-describedby="basic-addon1">
                    <span class="input-group-text" id="basic-addon1">Search</span>
                </div>
            </form>
            <div class="d-flex justify-content-center p-2 gap-3">
                <button class="btn btn-primary" v-for="spec in specs">{{ spec.name }}</button>
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
    background: rgb(0, 90, 151);
    background: linear-gradient(0deg, rgba(0, 90, 151, 1) 0%, rgba(43, 151, 172, 1) 100%);
}
</style>