<script setup>



</script>

<template>
<nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-1g">
<img src="../assets/logo.jpeg" alt="logo" class="h-10">


<ul class="flex gap-8 text-sm font-medium w-full justify-end">
<li> <a href="#" class="hover:text-yellow-300"></a></li>

<li> <router-link to="/" class="hover:text-yellow-300"> Home </router-link></li>
<li> <router-link to="about" class="hover:text-yellow-300">About Us </router-link></li>
<li ><router-link to="/services" class="hover:text-yellow-300">Service </router-link></li>

<!--Gallery drop down-->
<li class="relative group">
   <a href="#" class="hover:text-yellow-300 flex gap-1">Gallery <span>v</span></a>
<ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0  z-50 ">
        <li><Router-link to="/photos" class="block px-4 py-2 hover:bg-green-200 text-green-900">Photos</Router-link></li>
        <li><Router-link to="/videos" class="block px-4 py-2 hover:bg-green-200 text-green-900">Videos</Router-link></li>
    </ul>
</li>

<!--Destination droopdown-->
<li class="relative group">
   <a href="#" class="hover:text-yellow-300 flex gap-1">Destination<span>v</span></a>
<ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0  z-50 ">
        <li><Router-link to="/north" class="block px-4 py-2 hover:bg-green-200 text-green-900">Northern</Router-link></li>
        <li><Router-link to="/south" class="block px-4 py-2 hover:bg-green-200 text-green-900">Southern</Router-link></li>
        <li><Router-link to="/east" class="block px-4 py-2 hover:bg-green-200 text-green-900">Eastern</Router-link></li>
        <li><Router-link to="/west" class="block px-4 py-2 hover:bg-green-200 text-green-900">Western</Router-link></li>
        <li><Router-link to="/kigali" class="block px-4 py-2 hover:bg-green-200 text-green-900">Kigali</Router-link></li>
</ul>
</li>


<li ><router-link to="/contact" class="hover:text-yellow-300">Contact </router-link></li>

</ul>

</nav>
</template>

block px-4 py-2 hover:bg-green-200 text-green-900