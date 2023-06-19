<script>
export default {
    name: 'HeaderApp'
}
</script>

<template>
    <section> <!-- LOGO -->
        <div class="container-sm d-flex justify-content-between align-items-center p-3">
            <router-link class="d-flex align-items-center" :to="{ name: 'home' }">
                <div class="logo">
                    <img class="img-fluid" src="/image/logo-2.png" alt="bdoctors">
                </div>
                <div class="logo">
                    <img class="img-fluid" src="/image/logo_fb2.jpg" alt="bdoctors">
                </div>
            </router-link>
            
            <!-- @-MD-LINK -->
            <div class="d-flex gap-2 align-items-center">
                <div class="hov d-none d-md-block px-3 py-2 border border border-primary-subtle rounded">
                    <a class="fw-bold" href="http://127.0.0.1:8000/register">Sign-up</a>
                </div>
                
                <div class="hov d-none d-md-block px-3 py-2 border border border-primary-subtle rounded">
                        <a class="d-flex gap-2 fw-bold" href="http://127.0.0.1:8000/"><font-awesome-icon icon="fa-solid fa-user-doctor" class="fs-5" />Login</a>
                </div>
            </div>
            <!-- @-SM-DROPDOWN-ICON -->
            <div class="btn-group d-sm-block d-md-none">
                <button type="button"
                    class="btn dropdown-toggle ham d-flex align-items-center justify-content-end border-0 mt-3"
                    data-bs-toggle="dropdown">
                    <font-awesome-icon icon="fa-solid fa-bars" class="fs-3 " />
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item" type="button"><a href="http://127.0.0.1:8000/register">Register</a></button></li>
                    <li><button class="dropdown-item" type="button"><a href="http://127.0.0.1:8000/">Login</a></button></li>
                </ul>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
section{
    box-shadow: rgba(37, 127, 236, 0.8) -1px 0px 20px -1px inset
}
.logo {
    width: 200px;
}
.hov {
    &:hover {
        background-color: rgba(0, 50, 200, 0.1);
    }
}
a {
    text-decoration: none;
}

.ham {
    color: #005a97;
}</style>