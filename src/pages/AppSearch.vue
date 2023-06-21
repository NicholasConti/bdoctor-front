<script>
import CardDoctor from '../components/CardDoctor.vue';
import axios from 'axios';

export default {
    name: 'AppSearch',
    components:{
        CardDoctor
    },
    data(){
        return {
            doctors: [],
            specs: [],
            search: ''
        }
    },
    methods:{
        getSpec() {
            axios.get('http://127.0.0.1:8000/api/specializations').then((response) => {
                this.specs = response.data.results;
            })
        },
        getDoctorBySpec(idSpec){
            axios.get('http://127.0.0.1:8000/api/doctors/specialization/'+ idSpec).then((response) => {
                this.doctors = response.data.results;
            })
        },
        getDoctors() {
            axios.get('http://127.0.0.1:8000/api/doctors').then((response) => {
                this.doctors = response.data.results;
            })
        },
        searchByText(){
            axios.get('http://127.0.0.1:8000/api/doctors/search/'+this.search).then((response) => {
                this.doctors = response.data.results;
            })
        }
    },
    created() {
        this.getSpec();
        if (!this.$route.params.text) this.getDoctors();
        else {
            this.search=this.$route.params.text;
            this.searchByText();
        }
    }
}
</script>

<template>
    <div class="background_color py-5">
        <div class="container">
            <div class="input-group mb-3 w-50 m-auto">
                <input type="text" class="form-control" aria-describedby="basic-addon1" v-model="search" @keyup.enter="searchByText()">
                <span class="input-group-text cursor-pointer" id="basic-addon1" @click="searchByText()">Search</span>
            </div>
            <div class="d-flex justify-content-center p-2 gap-3">
                <div class="container" style="max-width: 960px;">
                    <div class="row ">
                        <div class="col">
                            <button class="act btn btn_color btn-primary m-1" v-for="spec in specs" @click="getDoctorBySpec(spec.id)">{{ spec.name }}</button>

                            <button class="btn btn-success m-1" @click="getDoctors">ALL</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" v-if="doctors.length > 0">
                <div class="col-lg-3 col-sm-6 col-md-4" v-for="doctor in doctors">
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
.act:focus{
    background-color: rgba(0, 0, 250, 0.5 );
}
.cursor-pointer {
    cursor: pointer;
}

</style>