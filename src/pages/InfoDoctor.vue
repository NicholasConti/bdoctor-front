
<script>
import axios from 'axios';
export default {
    name: 'InfoDoctor',
    data() {
        return {
            selectedForm: 'message',
            doctor: null,
            dataMessage: {
                text_message: null,
                name: null,
                surname: null,
                email: null
            },
            dataReview: {
                text_review: null,
                name: null,
                surname: null,
                email: null,
                vote: null
            },
            errors: null,
            isError: false,
            isMessage: false,
            isReview: false
        };
    },
    methods: {
        getDoctor() {
            axios.get("http://127.0.0.1:8000/api/doctors/" + this.$route.params.id).then((response) => {
                this.doctor = response.data.results;
            })
        },
        sendMessage() {
            const data = {
                name: this.dataMessage.name,
                surname: this.dataMessage.surname,
                email: this.dataMessage.email,
                text_message: this.dataMessage.text_message,
                doctor_id: this.$route.params.id
            }
            //console.log(data);
            axios.post("http://127.0.0.1:8000/api/doctors/message", data).then((response) => {
                this.isMessage = true;
                this.isError = false;
                this.dataMessage = {
                    text_message: null,
                    name: null,
                    surname: null,
                    email: null
                };
            }).catch((error) => {
                this.isError = true;
                this.isMessage = false;
                this.errors = error.response.data.errors;
            });

        },
        sendReview() {
            const data = {
                name: this.dataReview.name,
                surname: this.dataReview.surname,
                email: this.dataReview.email,
                text_review: this.dataReview.text_review,
                doctor_id: this.$route.params.id,
                vote: this.dataReview.vote
            }
            //console.log(data);
            axios.post("http://127.0.0.1:8000/api/doctors/review", data).then((response) => {
                this.isReview = true;
                this.isError = false;
                const star = document.getElementById('star' + this.dataReview.vote);
                star.checked = false;
                this.doctor.reviews.push(data);
                this.dataReview = {
                    text_review: null,
                    name: null,
                    surname: null,
                    email: null,
                    vote: null
                };
            }).catch((error) => {
                this.isError = true;
                this.isReview = false;
                this.errors = error.response.data.errors;
            });

        }
    },
    computed: {
        getSpec() {
            let tmp = '';
            this.doctor.specializations.forEach(element => {
                tmp += element.name + ', ';
            });
            return tmp.slice(0, tmp.length - 2);
        }
    },
    created() {
        this.getDoctor();
    }
}

</script>

<template>
    <div class="background_color">
        <div class="container">
            <!-- DOCTOR -->
            <div class="d-flex flex-wrap text-white border_bottom">
                <div class="pt-4 pe-3">
                    <img :src="doctor.image" class="card-img-top img_doctor" alt="doc_img">
                </div>
                <!-- INFO-DOCTOR -->
                <div class="pe-5 me-5 mt-3 pt-2 d-flex flex-column gap-1">
                    <div class="d-flex">
                        <h3 class="mb-2">Dr. {{ doctor.user.name }} {{ doctor.user.surname }} </h3>
                        <span v-if="doctor.sponsorships.length" class="badge text-bg-warning ms-2 mt-2"
                            style="height: 20px;">Sponsored</span>
                    </div>

                    <ul class="list-unstyled d-flex flex-column gap-2">
                        <li>
                            <font-awesome-icon icon="fa-solid fa-star" class="me-2"/>
                            <font-awesome-icon icon="fa-solid fa-star" class="text-warning" v-for="n in Math.ceil(doctor.votes_avg_vote)"/>
                            <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - Math.ceil(doctor.votes_avg_vote)"/>
                        </li>
                        <li><font-awesome-icon icon="fa-solid fa-envelope" class="me-2" /> {{ doctor.user.email }}</li>
                        <li><font-awesome-icon icon="fa-solid fa-location-dot" class="me-2" /> {{ doctor.user.address }}</li>
                        <li><font-awesome-icon icon="fa-solid fa-phone-flip" class="me-2" /> {{ doctor.telephone }} </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-suitcase-medical" class="me-3" />
                            <span>{{ getSpec }}</span>
                        </li>
                    </ul>
                </div>
                <div class="px-5 mx-5 pt-3 col-md box_description text-center">
                    <h4 class="mb-3">About me</h4>
                    <p>{{ doctor.description }}</p>
                </div>
                <!-- /INFO-DOCTOR -->
            </div>

            <div class="m-4 cv d-flex justify-content-center">
                <!-- <object :data="doctor.cv" type="application/pdf" width="100%" height="500px"></object> -->
                <embed :src="doctor.cv" width="80%" height="500px" type="application/pdf">
            </div>

            <div class="d-flex flex-column border-top pt-5 mt-3">
                <div class="d-flex justify-content-between align-items-center">
                    <h2 class="py-3 text-light">Contact Doctor</h2>
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item me-3" role="presentation">
                            <button @click="selectedForm = 'message'" class="nav-link active text-white border"
                                id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button"
                                role="tab" aria-controls="pills-home" aria-selected="true">Contact doctor</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button @click="selectedForm = 'review'" class="nav-link text-white border"
                                id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button"
                                role="tab" aria-controls="pills-profile" aria-selected="false">Leave a review</button>
                        </li>
                    </ul>
                </div>

                <div class="tab-content" id="pills-tabContent">
                    <div class="container tab-pane fade show active" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab">
                        <!-- MESSAGE -->
                        <div class="py-2">
                            <!-- MESSAGE ERRORS -->
                            <div class="alert alert-danger mb-4 mt-4" v-if="isError">
                                <ul>
                                    <li v-for="error in errors">{{ error[0] }}</li>
                                </ul>
                            </div>
                            <!-- MESSAGE SUCCESS -->
                            <div class="alert alert-success" role="alert" v-if="isMessage">
                                Messaggio inviato con successo
                            </div>

                            <form @submit.prevent="sendMessage" method="POST">

                                <div class="py-1">
                                    <input class="row_size" type="text" v-model="dataMessage.name" name="nome"
                                        placeholder="Name" required>
                                </div>
                                <div class="py-1">
                                    <input class="row_size" type="text" v-model="dataMessage.surname" name="cognome"
                                        placeholder="Surname" required>
                                </div>
                                <div class="py-1">
                                    <input class="row_size" type="email" v-model="dataMessage.email" name="email"
                                        placeholder="Email" required>
                                </div>
                                <div class="py-1">
                                    <textarea class="row_size" name="messaggio" v-model="dataMessage.text_message" rows="5"
                                        cols="40" placeholder="Write something here" required></textarea>
                                </div>
                                <div class="d-flex justify-content-center py-3 px-3">
                                    <input class="btn bg-success" type="submit" value="Send Message">
                                </div>

                            </form>
                            <!-- /MESSAGE -->
                        </div>
                    </div>
                    <!-- REVIEW -->
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div class="py-2">
                            <!-- REVIEW ERRORS -->
                            <div class="alert alert-danger mb-4 mt-4" v-if="isError">
                                <ul>
                                    <li v-for="error in errors">{{ error[0] }}</li>
                                </ul>
                            </div>
                            <!-- REVIEW SUCCESS -->
                            <div class="alert alert-success" role="alert" v-if="isReview">
                                Recensione inviata con successo
                            </div>
                            <form @submit.prevent="sendReview" method="POST">
                                <div class="py-1">
                                    <input class="row_size" type="text" v-model="dataReview.name" name="nome"
                                        placeholder="Name" required>
                                </div>
                                <div class="py-1">
                                    <input class="row_size" type="text" v-model="dataReview.surname" name="cognome"
                                        placeholder="Surname" required>
                                </div>
                                <div class="py-1">
                                    <input class="row_size" type="email" v-model="dataReview.email" name="email"
                                        placeholder="Email" required>
                                </div>
                                <div class="py-1">
                                    <textarea class="row_size" v-model="dataReview.text_review" name="recensione" rows="5"
                                        cols="40" placeholder="Write something here" required></textarea>
                                </div>
                                <div class="d-flex justify-content-center align-items-center py-2 px-3">
                                    <div class="py-3">
                                        <div class="rating">
                                            <input type="radio" name="rating" id="star5" value="5"
                                                @click="dataReview.vote = 5">
                                            <label for="star5"></label>
                                            <input type="radio" name="rating" id="star4" value="4"
                                                @click="dataReview.vote = 4">
                                            <label for="star4"></label>
                                            <input type="radio" name="rating" id="star3" value="3"
                                                @click="dataReview.vote = 3">
                                            <label for="star3"></label>
                                            <input type="radio" name="rating" id="star2" value="2"
                                                @click="dataReview.vote = 2">
                                            <label for="star2"></label>
                                            <input type="radio" name="rating" id="star1" value="1"
                                                @click="dataReview.vote = 1">
                                            <label for="star1"></label>
                                        </div>
                                        <div class="py-3">
                                            <input class="btn bg-success" type="submit" value="Send Review">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- /REVIEW -->
                </div>
            </div>
            <div class="m-2 py-1 mt-5 border-top" v-if="doctor.reviews.length">
                <h2 class="my-4 text-light">Customer reviews</h2>
                <div class="row gy-3" id="reviews_box">
                    <div class="col-12 col-md-6 col-lg-4" v-for="review in doctor.reviews.slice().reverse()">
                        <div class="bg-light p-4 rounded text-break h-100">
                            <div class="m-1 mx-auto" style="max-width: 350px">
                                <h5 class="bg-info rounded text-center text-light">{{ review.name }} {{ review.surname }}
                                </h5>
                            </div>
                            <div class="py-2 m-1 text-center">
                                <h6>{{ review.text_review }}</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- LINKHOME -->
            <div class="text-center mt-5 fs-3 py-4 border-top">
                <router-link class="text-primary" :to="{ name: 'home' }">Homepage</router-link>
            </div>
            <!-- /LINKHOME -->
        </div>

    </div>
</template>

<style lang="scss" scoped>
.background_color {
    background: rgb(0, 90, 151);
    background: linear-gradient(180deg, rgba(0, 90, 151, 1) 0%, rgba(43, 151, 172, 1) 100%);
}

.border_bottom {
    border-bottom: 1px solid white;
    padding: 10px 20px;
}

.border_top {
    border-top: 1px solid white;
    padding: 10px 20px;
}

.img_doctor {
    border-radius: 10px;
    height: 200px;
    width: 200px;
    object-fit: cover;
}

.rating {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
}

.rating input {
    display: none;
}

.rating label {
    cursor: pointer;
}

.rating label:before {
    content: '\2605';
    font-size: 30px;
    color: #ccc;
}

.rating input:checked~label:before {
    color: #ffcc00;
}

.box_description {
    width: 34.375rem;
}

.row_size {
    width: 100%;
    border-radius: 5px;
}

.btn {
    padding: 10px 20px;
    background-color: #005a97;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

.btn:hover {
    transform: scale(1.1);
    transition: 0.5s ease;
}

.row_size {
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    transition: box-shadow 0.3s ease;
}

.row_size:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

::placeholder {
    color: #999;
}

input[type="text"],
input[type="email"],
textarea {
    color: #333;
    font-size: 16px;
}

#reviews_box {
    max-height: 30rem;
    overflow-y: scroll;
}
</style>