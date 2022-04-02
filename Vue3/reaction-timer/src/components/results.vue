<template>
  <p>Reaction time: {{score}} ms</p>
  <p>{{rank}}</p>
</template>

<script>
export default {
    props:['score'],
    data(){
        return{
            rank:""
        }
    },
    mounted(){
        if(this.score < 251) 
            this.rank = "أسطورة ";
        else if(this.score < 350) 
            this.rank = "بطل";
        else if(this.score < 500) 
            this.rank = "كويس";
        else  
            this.rank ="متلعبش تانى";
    }
}
</script>

<style>

</style>