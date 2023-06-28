<script>

export default {
    name: 'CardDoctor',
    props: {
        doc: Object
    },
    computed:{
        getSpec(){
            let tmp='';
            this.doc.specializations.forEach(element => {
                tmp+=element.name+', ';
            });
            return tmp.slice(0, tmp.length - 2);
        }
    }
}
</script>

<template>
    <!--  componente card per visualizzazione dati dottore    -->
    <div class="card background_color_img" style="height: 100%;">
        <img :src="doc.image" class="card-img-top img_size px-1" :alt="doc.user.name">
        <div class="card-body text-white">
            <h6 class="card-title">Dr. {{ doc.user.name }} {{ doc.user.surname }}</h6>
            <span v-if="doc.sponsorships.length" class="badge text-bg-warning" style="height: 20px;">Sponsored</span>
            <ul class="list-unstyled d-flex flex-column gap-2 mt-4">
                <li class="mb-2">
                    <font-awesome-icon icon="fa-solid fa-suitcase-medical" class="me-3"/>
                    <span>{{ getSpec }}</span>
                </li>
                <li class="d-flex justify-content-between align-items-center">
                    <div>
                        <font-awesome-icon icon="fa-solid fa-star" class="text-warning" v-for="n in Math.ceil(doc.votes_avg_vote)"/>
                        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - Math.ceil(doc.votes_avg_vote)"/>
                    </div>
                    <div><font-awesome-icon icon="fa-solid fa-comment" /> {{ doc.reviews_count }}</div>
                </li>
            </ul>
            <router-link class="text-white" :to="{ name: 'InfoDoctor', params: { id: doc.id } }">
                <h5 id="hover-color" class="text-center">Visit profile</h5>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.background_color_img {
    background-color: #2b97ac;
}

.background_color_img:hover {
    transform: scale(1.1);
    transition: 0.5s ease;
}

.img_size {
    height: 15.625rem;
    border-radius: 10px;
    object-fit: contain;
}

#hover-color:hover {
    color: #005a97;
}
</style>