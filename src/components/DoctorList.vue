<script>
import axios from 'axios';
import CardDoctor from './CardDoctor.vue';
export default {
    name: 'DoctorList',
    components: {
        CardDoctor
    },

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
            <h1 class="text-center text-white py-4">Seek your doctor, for within their care lies healing and hope.</h1>
            <form action="" method="get">
                <div class="input-group mb-3 w-50 m-auto">
                    <input type="text" class="form-control" aria-describedby="basic-addon1">
                    <span class="input-group-text" id="basic-addon1">Search</span>
                </div>
            </form>
            <div class="d-flex justify-content-center p-2 gap-3">
                <div class="container" style="max-width: 960px;">
                    <div class="row ">
                        <div class="col">
                            <button class="btn btn_color btn-primary m-1" v-for="spec in specs">{{ spec.name }}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6 col-md-4" v-for="doctor in doctors ">
                    <CardDoctor :doc="doctor" />
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

.btn_color{
    background-color: #005a97;
}

</style>