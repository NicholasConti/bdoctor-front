
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
            }
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
            // console.log(data);
            axios.post("http://127.0.0.1:8000/api/doctors/message", data).then((response) => {
                console.log(response);
            })
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
                <div class="pe-5 me-5 mt-4 pt-2 d-flex flex-column gap-1">
                    <span class="badge text-bg-success">Premium</span>
                    <h3 class="mb-2">Dr. {{ doctor.user.name }} {{ doctor.user.surname }} </h3>
                    <ul class="list-unstyled d-flex flex-column gap-2">
                        <li><font-awesome-icon icon="fa-solid fa-envelope" /> {{ doctor.user.email }}</li>
                        <li><font-awesome-icon icon="fa-solid fa-location-dot" /> {{ doctor.user.address }} </li>
                        <li><font-awesome-icon icon="fa-solid fa-phone-flip" /> {{ doctor.telephone }} </li>
                        <li><font-awesome-icon icon="fa-solid fa-suitcase-medical" /> <span
                                v-for="item in doctor.specializations"> {{ item.name }}, </span></li>
                    </ul>
                </div>
                <div class="px-5 mx-5 pt-2 col-md box_description">
                    <h4 class="text-center">About me</h4>
                    <p>{{ doctor.description }}</p>
                </div>
                <!-- /INFO-DOCTOR -->
            </div>

            <div class="m-4 cv">
                <object :data="doctor.cv" type="application/pdf" width="100%" height="500px"></object>
            </div>
            <div class="d-flex justify-content-center border-top pt-5 mt-3">
                <div class="px-4">
                    <button @click="selectedForm = 'message'" class="btn act">Book your visit</button>
                </div>
                <div>
                    <button @click="selectedForm = 'review'" class="btn act">Leave a review </button>
                </div>
            </div>

            <!-- DOCTOR -->
            <div class="container">
                <!-- MESSAGE -->
                <div class="container" v-if="selectedForm === 'message'">
                    <div class="text-white py-2">
                        <h2 class="py-3">Contact Doctor </h2>
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
                                <input class="btn bg-success" type="submit" value="Send">
                            </div>
                        </form>
                    </div>
                </div>
                <!-- /MESSAGE -->

                <!-- REVIEW -->
                <div class="container" v-else>
                    <div class="text-white py-2">
                        <h2 class="py-3">Review Doctor</h2>
                        <form action="invia_recensione.php" method="POST">
                            <div class="py-1">
                                <input class="row_size" type="text" name="nome" placeholder="Name" required>
                            </div>
                            <div class="py-1">
                                <input class="row_size" type="text" name="cognome" placeholder="Surname" required>
                            </div>
                            <div class="py-1">
                                <input class="row_size" type="email" name="email" placeholder="Email" required>
                            </div>
                            <div class="py-1">
                                <textarea class="row_size" name="recensione" rows="5" cols="40"
                                    placeholder="Write something here" required></textarea>
                            </div>
                            <div class="d-flex justify-content-center align-items-center py-2 px-3">
                                <div class="py-3">
                                    <div class="rating">
                                        <input type="radio" name="rating" id="star5" value="5">
                                        <label for="star5"></label>
                                        <input type="radio" name="rating" id="star4" value="4">
                                        <label for="star4"></label>
                                        <input type="radio" name="rating" id="star3" value="3">
                                        <label for="star3"></label>
                                        <input type="radio" name="rating" id="star2" value="2">
                                        <label for="star2"></label>
                                        <input type="radio" name="rating" id="star1" value="1">
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
            <!-- LINKHOME -->
            <div class="text-center fs-3 py-4">
                <router-link class="text-primary " :to="{ name: 'home' }">Homepage</router-link>
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

.cv {
    background-color: rgb(237, 227, 227);
    border-radius: 5px;
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

.act:focus {
    background-color: rgba(0, 0, 250, 0.5);
}
</style>