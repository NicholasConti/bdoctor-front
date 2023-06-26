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
            search: '',
            specs: [],
        }
    },
    methods: {
        getDoctors() {
            axios.get('http://127.0.0.1:8000/api/doctors/sponsor').then((response) => {
                this.doctors = response.data.results;
            })
        },
        gotoSearch() {
            this.$router.push({ name: 'search', params: { text: this.search.trim() } });
        },
        getSpec() {
            axios.get('http://127.0.0.1:8000/api/specializations').then((response) => {
                this.specs = response.data.results;
            })
        },
        gotoSpec(id) {
            this.$router.push({ name: 'search', params: { spec: id } });
        }
    },
    created() {
        this.getDoctors();
        this.getSpec();
    }
}
</script>

<template>
    <div class="background_color">
        <div class="container">
            <h2 class="text-center text-white py-4">"Find Your Perfect Doctor: Search and Connect with them"</h2>
            <div class="input-group mb-3 w-50 m-auto">
                <!--searchbar per cercare dottore con nome e cognome  -->
                <input type="text" class="form-control" placeholder="Search your favourite doctor"
                    aria-describedby="basic-addon1" v-model="search" @keyup.enter="gotoSearch()">
                <span class="input-group-text cursor-pointer fw-bold" id="basic-addon1" @click="gotoSearch()">Advanced
                    search</span>
            </div>
            <div class="d-flex justify-content-center p-2 gap-3 py-4">
                <div class="container">
                    <div class="row ">
                        <div class="col text-center">
                            <button class="act btn btn_color btn-primary m-1" v-for="spec in specs"
                                @click="gotoSpec(spec.id)">{{ spec.name }}</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 class="text-center" >Featured doctors</h2>
            <div class="row gy-2 mt-4" v-if="doctors.length > 0">
                <div class="col-lg-3 col-sm-12 col-md-6" v-for="doctor in doctors">
                    <CardDoctor :doc="doctor" />
                </div>
            </div>
            <div class="row text-center mt-4" v-else>
                <h2>No Doctors available</h2>
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

.btn_color {
    border: none;
}

.cursor-pointer {
    cursor: pointer;
}
</style>