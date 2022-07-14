<template>
    <div>
        <h1>Connexion</h1>
        <form @submit.prevent="login" >
            <div class="formGroup">
                <label> email <input type="text" name="email" id="user_email" class="bar" v-model="user.email"></label>
            </div>
            <div class="formGroup">
                <label> mot de passe <input type="text" name="mot_de_passe" id="user_password" class="bar" v-model="user.password"></label>
            </div>
            <div class="formGroup">
                <button type="submit" class="button">Connexion</button>
            </div>
        </form>
    </div>
</template>

<script>
import {accountService} from '@/_service'
export default {
    name:'Login',
    data(){
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {

        login(){
            accountService.login(this.user)
            .then(res => {
                console.log(res.data)
                accountService.saveToken(res.data.saveToken)
                this.$router.push('/admin/dashboard')
            })
            .catch(err => console.log(err))

            // fetch('http://localhost:8080/auth/login', {
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     method: 'POST',
            //     body: JSON.stringify(this.user)
            // })
            //     .then(blob => blob.json())
            //     .then(data => {
            //         console.log(data)
            //         localStorage.setItem('token', data.access_token)
            //         this.$router.push('/admin/dashboard')
            //     })
            //     .catch(err => console.log(err))
        }
    },
}
</script>

<style>
    form{
        width: 300px;
        margin: 0 auto;
    }
    .formGroup{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 8px;
    }


</style>