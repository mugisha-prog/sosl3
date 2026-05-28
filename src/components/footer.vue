<template>
    <footer class="bg-green-800 text-white px-8 py-10 mt-10">
        
      
        <!--this is footer-->
        <div class=" flex flex-wrap justify-between gap-8">
        <div >
            <h3 class="text-yellow-300 font-bold text-ig mt-3">TEMBERA U RWANDA</h3>
            <P  class="text-sm text-green-200">discover the beauty of the land of a thousand hills</P>
       
        </div>
<!--quick link-->
<div>
    <h4 class="text-yellow-300 font-bold text-lg mb-3">Pages</h4>
    <ul class="text-sm text-green-200">
        <li><Router-link to="/" class="hover:text-yellow-300">Home</Router-link></li>
        <li><Router-link to="/about" class="hover:text-yellow-300">About Us</Router-link></li>
        <li><Router-link to="/services" class="hover:text-yellow-300">services</Router-link></li>
        <li><Router-link to="/contact" class="hover:text-yellow-300">Contact</Router-link></li>
        <li><Router-link to="/gallery" class="hover:text-yellow-300">Gallery</Router-link></li>
    </ul>
</div>

<!--contact info-->
<div>
    <h3 class="text-yellow-300 font-bold text-lg mb-3">Destination</h3>
    <ul class="text-sm text-green-200">
        <li><Router-link to="/north" class="hover:text-yellow-300">Northern</Router-link></li>
        <li><Router-link to="/south" class="hover:text-yellow-300">Southern</Router-link></li>
        <li><Router-link to="/east" class="hover:text-yellow-300">Eastern</Router-link></li>
        <li><Router-link to="/west" class="hover:text-yellow-300">Western</Router-link></li>
        <li><Router-link to="/kigali" class="hover:text-yellow-300">Kigali</Router-link></li>
    </ul>
</div>

<!--contact info-->
<div>
    <h3 class="text-yellow-300 font-bold text-lg mb-3">contact info</h3>
    <ul class="space-y-2">
        <li>ahantunyaburanga@gmail.com</li>
        <li>0784645372</li>
        <li>kagugu kigali Rwanda</li>
    </ul>
</div>
</div>

<!--copyright-->
<div class="border-t TEXT-SM PX-2 PY-2">
   <p class="text-center">&copy;2026 MUGISHA Elly, VISIT RWANDA  </p>
</div>
 
    </footer>
</template>