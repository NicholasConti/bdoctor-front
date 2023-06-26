<script>
import CardDoctor from '../components/CardDoctor.vue';
import axios from 'axios';

export default {
    name: 'AppSearch',
    components: {
        CardDoctor
    },
    data() {
        return {
            filter: null,
            doctors: [],
            specs: [],
            search: '',
            mediaVote: 0
        }
    },
    methods: {
        //metodo per ricevere le specializzazioni con API
        getSpec() {
            axios.get('http://127.0.0.1:8000/api/specializations').then((response) => {
                this.specs = response.data.results;
            })
        },
        getDoctorBySpec(idSpec) {
            axios.get('http://127.0.0.1:8000/api/doctors/specialization/' + idSpec).then((response) => {
                this.doctors = response.data.results;
            })
        },
        //metodo per ricevere i dottori con API 
        getDoctors() {
            axios.get('http://127.0.0.1:8000/api/doctors').then((response) => {
                this.doctors = response.data.results;
            })
        },
        //metodo per filtrare dottori per nome e cognome 
        searchByText() {
            if (this.search.trim() != '') {
                axios.get('http://127.0.0.1:8000/api/doctors/search/' + this.search).then((response) => {
                    this.doctors = response.data.results;
                });
            }
            else this.getDoctors();
        },
        setMediaVote() {
            if (this.mediaVote == 0) this.getDoctors();
            else {
                axios.get('http://127.0.0.1:8000/api/doctors/vote/' + this.mediaVote).then((response) => {
                    this.doctors = response.data.results;
                })
            }
        },


        checkForNums(input) {
            let result = /^\d+$/.test(input);
            return result;
        }
    },
    created() {
        this.getSpec();
        if (!this.$route.params.text) this.getDoctors();
        else {
            this.search = this.$route.params.text;
            if (!this.checkForNums(this.search)) this.searchByText();
            else {
                this.search = "";
                this.getDoctors();
            }
        }
        if (this.$route.params.spec) this.getDoctorBySpec(this.$route.params.spec);
    },
    computed: {
        //computed property per filtrare i dottori per voto medio
        filterResults() {
            if (this.filter == 1) {
                const copyDoctors = [...this.doctors];
                return copyDoctors.sort((a, b) => {
                    if (a.votes_avg_vote > b.votes_avg_vote) {
                        return -1;
                    }
                    if (a.votes_avg_vote < b.votes_avg_vote) {
                        return 1;
                    }
                    return 0;
                });
            } else if (this.filter == 2) {
                const copyDoctors = [...this.doctors];
                return copyDoctors.sort((a, b) => {
                    if (a.reviews_count > b.reviews_count) {
                        return -1;
                    }
                    if (a.reviews_count < b.reviews_count) {
                        return 1;
                    }
                    return 0;
                });
            }
            return this.doctors;
        }
    }
}
</script>

<template>
    <div class="background_color py-5">

        <div class="container">
            <h1 class="py-4 text_color">Search Results</h1>
            <div class="row">
                <div class="col-8">
                    <h6 class="text_color">Search Name/Surname:</h6>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" aria-describedby="basic-addon1" v-model="search"
                            @keyup.enter="searchByText()" placeholder="Search your doctor">
                        <span class="input-group-text cursor-pointer" id="basic-addon1"
                            @click="searchByText()">Search</span>
                    </div>
                </div>
                <!-- select per ricerca media voti -->
                <div class="col-2">
                    <h6 class="text_color">Search By:</h6>
                    <select class="form-select" aria-label="Default select example" v-model="mediaVote"
                        @change="setMediaVote">
                        <option selected value="0">---</option>
                        <option value="1">1 &#11088;</option>
                        <option value="2">2 &#11088;</option>
                        <option value="3">3 &#11088;</option>
                        <option value="4">4 &#11088;</option>
                        <option value="5">5 &#11088;</option>
                    </select>
                </div>

                <!-- select per filtro media voti e recensioni -->

                <div class="col-2">
                    <h6 class="text_color">Filters:</h6>
                    <select class="form-select" aria-label="Default select example" v-model="filter"
                        @change="filterResults">
                        <option selected value="0">---</option>
                        <option value="1">Order by Vote</option>
                        <option value="2">Order by Reviews</option>
                    </select>
                </div>
            </div>

            <!-- sezione per filtrare i dottori per specializzazioni -->
            <div class="d-flex justify-content-center p-2 gap-3 py-4">
                <div class="container">
                    <div class="row ">
                        <div class="col text-center">
                            <button class="btn btn-success m-1" @click="getDoctors">ALL</button>
                            <button class="act btn btn_color btn-primary m-1" v-for="spec in specs"
                                @click="getDoctorBySpec(spec.id)">{{ spec.name }}</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- mostra i dottori trovati -->
            <div class="row gy-2" v-if="doctors.length > 0">
                <div class="col-lg-3 col-sm-12 col-md-6" v-for="doctor in filterResults">
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
.background_color {
    background: rgb(0, 90, 151);
    background: linear-gradient(0deg, rgba(0, 90, 151, 1) 0%, rgba(43, 151, 172, 1) 100%);
}

.act:focus {
    background-color: rgba(0, 0, 250, 0.5);
}

.cursor-pointer {
    cursor: pointer;
}

.text_color {
    color: white;
}
</style>