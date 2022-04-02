/* Binding 

   //Property
   <p>{{var}}</p>
   
   //Attribute
   <img :src="image">    put ":"  before attribute  
                ^variable 
   :disabled="isStock"
                ^variable 
   //class 
   :class="{ disabledButton: !inStock }" 
                   ^class        ^expression to give this class or not 
   :class="[ inStock ? '' : 'out-of-stock-img']"  // ternary operator

   //Style binding
   :style="{ backgroundColor: variant.color }"
   backgroundColor => camel case     ||       'background-color'    kebab case

   :style="styles"      stryles is an object in js  styles:{color:'red';}
*/
/* Directive

   //Conditional Rendering
   <p v-if="inStock">In Stock</p>
   <p v-else>Out of Stock</p>

   <p v-show="inStock">In Stock</p>    // give element display:none;

   //loop
    <ul>  <li v-for="detail in details">{{ detail }}</li>  </ul>
   
   //event
    <button class="button" v-on:click="function()">Add to Cart</button>   //shorthand   @click=""
    @mouseover="function()"   
     
    
*/ 
