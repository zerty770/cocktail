<template>
    <div>        
       
        <h1>Ajouter un cocktail</h1>
        {{ roger }}
        <div v-if="roger">Edition</div>
        <form @submit.prevent="ajout">   
        
            <!--<input type="text" id="user_id" v-model="cocktail.user_id" hidden/>-->

            <div class="formGroup">
                <label for="cocktail_nom">Nom</label>
                <input type="text" id="cocktail_nom" v-model="cocktail.nom"/>
            </div>
            <div class="formGroup">
                <label for="cocktail_description">Description</label>
                <input type="text" id="cocktail_description" v-model="cocktail.description"/>
            </div>
            <div class="formGroup">
                <label for="cocktail.recette">Recette</label>
                <input type="text" id="cocktail.recette" v-model="cocktail.recette"/>
            </div>
            <div class="formGroup">
                <button type="submit" class="button">Ajouter le Cocktail</button>
            </div>
        </form>
    </div>
</template>

<script>
import { cocktailService } from '@/_service'
export default {
    name: ' CocktailEdit',
    props: ['id'],
    data(){
        return {
            cocktail: {
                user_id:4,
                nom: '',
                description:'',
                recette:''
            }
        }
    },
    methods: {
        ajout(){
            cocktailService.createCocktail(this.cocktail)
                .then(res => this.$router.push({name: 'cList'}))
                .catch(err => console.log(err))
        }
    },
}
</script>

<style>

</style>