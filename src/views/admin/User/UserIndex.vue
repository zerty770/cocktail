<template>
    <div>
        User index Works!
    </div>
</template>

<script>
import {userService } from '@/_service'
export default {
    name:'UserIndex',
    mounted() {   
    userService.getAllUsers()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },
}
</script>

<style>

</style>