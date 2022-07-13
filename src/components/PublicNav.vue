<template>
    <img alt="Vue logo" src="../assets/logo.png" class="logo">
    <nav>
        <router-link to="/" >Acceuil</router-link> |
        <router-link to="/Cocktails">Cocktails</router-link> |
        <router-link to="/Contact">Contact</router-link>
    </nav>

</template>

<script>
    export default {
        name: 'PublicNav'
    }
</script>

<style>
    .logo{
        position:absolute;
        right: 30px;
        height: 50px;
    }
</style>