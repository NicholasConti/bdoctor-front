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
            search: ''
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
        }
    },
    created() {
        this.getDoctors();
    }
}
</script>

<template>
    <div class="background_color">
        <div class="container">
            <h2 class="text-center text-white py-4">"Find Your Perfect Doctor: Search and Connect with them"</h2>
            <div class="input-group mb-3 w-50 m-auto">
                <!--searchbar per cercare dottore con nome e cognome  -->
                <input type="text" class="form-control" aria-describedby="basic-addon1" v-model="search"
                    @keyup.enter="gotoSearch()">
                <span class="input-group-text cursor-pointer" id="basic-addon1" @click="gotoSearch()">Search</span>
            </div>
            <div class="row mt-4" v-if="doctors.length > 0">
                <div class="col-lg-3 col-sm-6 col-md-4" v-for="doctor in doctors ">
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
    background-color: #005a97;
    border: none;
}

.cursor-pointer {
    cursor: pointer;
}
</style>