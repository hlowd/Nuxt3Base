<script setup>
import {useUserStore } from "~/store/userStore"
const s = useUserStore();
s.name = "haha"
</script>

<template>
    <div>
        {{s.name}}
    </div>
</template>