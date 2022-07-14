<template>
    <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li> <router-link to="/admin/users/Edit/12">User12</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name : 'AdminNav'
    }
</script>

<style>
    ul{
        list-style: none;
        padding-left:0px;
        margin-right:10px;
    }
    ul li{
        text-align:left;
    }
</style>