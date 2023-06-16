<script>
export default {
    name: 'HeaderApp'
}
</script>

<template>
    <section> <!-- LOGO -->
        <div class="container-sm d-flex justify-content-between">
            <router-link :to="{ name: 'home' }">
                <div class="logo">
                    <img class="img-fluid"
                        src="https://findvectorlogo.com/wp-content/uploads/2018/11/best-doctors-vector-logo.png"
                        alt="bdoctors">
                </div>
            </router-link>
            <!-- @-MD-LINK -->
            <div class="d-flex gap-4 align-items-center">
                <div class="hov d-none d-md-block px-3 py-2"><router-link :to="{ name: 'InfoDoctor' }">
                        <a class="fw-bold">Sign-up</a>
                    </router-link></div>
                <div class="hov d-none d-md-block px-3 py-2"><router-link :to="{ name: 'InfoDoctor' }">
                        <a class="d-flex gap-2 fw-bold"><font-awesome-icon icon="fa-solid fa-user-doctor" class="fs-5" />Login</a>
                    </router-link></div>
            </div>
            <!-- @-SM-DROPDOWN-ICON -->
            <div class="btn-group d-inline d-sm-block d-md-none">
                <button type="button"
                    class="btn dropdown-toggle ham d-flex align-items-center justify-content-end border-0 mt-5"
                    data-bs-toggle="dropdown">
                    <font-awesome-icon icon="fa-solid fa-bars" class="fs-3 " />
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item" type="button"><router-link
                                :to="{ name: 'InfoDoctor' }"><span>Register</span></router-link></button></li>
                    <li><button class="dropdown-item" type="button"><router-link
                                :to="{ name: 'InfoDoctor' }"><span>Login</span></router-link></button></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.logo {
    width: 13.5rem;
}
.hov {
    &:hover {
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.1);
    }
}
a {
    text-decoration: none;
}

.ham {
    color: #005a97;
}</style>