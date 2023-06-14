<script>
export default {
    name: 'HeaderApp'
}
</script>

<template>
    <section>   <!-- LOGO -->
        <div class="container-sm d-flex justify-content-between">
            <div class="logo"><img class="img-fluid" src="https://findvectorlogo.com/wp-content/uploads/2018/11/best-doctors-vector-logo.png" alt="bdoctors"></div>
                <!-- @-MD-LINK -->
            <div class="d-flex gap-5 align-items-center">
                <div class="hov d-none d-md-block"><router-link :to="{name:'InfoDoctor'}"><h5>Sign-up</h5></router-link></div>
                <div class="hov d-none d-md-block gap-5"><router-link :to="{name:'InfoDoctor'}"><h5 class="d-flex gap-2"><font-awesome-icon icon="fa-solid fa-user-doctor" class="fs-4"/>Login</h5></router-link></div>
            </div>
                <!-- @-SM-DROPDOWN-ICON -->
            <div class="btn-group d-inline">
                <button type="button" class="btn dropdown-toggle ham d-flex align-items-center justify-content-end d-sm-block d-md-none border-0 mt-5" data-bs-toggle="dropdown">
                    <font-awesome-icon icon="fa-solid fa-bars" class="fs-3 "/>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item" type="button"><router-link :to="{name:'InfoDoctor'}"><span>Register</span></router-link></button></li>
                    <li><button class="dropdown-item" type="button"><router-link :to="{name:'InfoDoctor'}"><span>Login</span></router-link></button></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .logo{
        width: 13.5rem;
    }
    .hov{
        &:hover{
            border-bottom: 1px solid #2b97ac;
        }
    }
    a{
        text-decoration: none;
    }
    .ham{
        color: #005a97;
    }
</style>