<script setup>
import {useUserStore } from "~/store/userStore"
const s = useUserStore();
</script>

<template>
    <div>
        {{s.name}}
        <NuxtLink to="/about">wqdecwcwce</NuxtLink>
    </div>
</template>