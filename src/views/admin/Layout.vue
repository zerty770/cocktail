<template>
    <div class="admin">
        <AdminHeader/>
        <div class="add_contain">
            <div id="add_side">
                <AdminNav/>
            </div>        
            <div id="add_display">
                <router-view/>
            </div>
        </div>

        
        
    </div>
   
</template>

<script>
    import AdminHeader from '@/components/AdminHeader.vue'
    import AdminNav from '@/components/AdminNav.vue'

    export default {
        name:'AdminLayout',
        components: {
            AdminHeader,
            AdminNav
        }
    }
</script>

<style>
    .add_contain{
        display: flex;
    }

    #add_side{
        width: 20%;
        border-right: solid 1px black;
        
    }

    #add_display{
        width: 100%;
        padding: 10px;
        text-align: left;
    }



</style>