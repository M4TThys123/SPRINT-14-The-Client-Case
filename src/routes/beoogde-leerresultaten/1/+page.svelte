<script>
  // import * as prismicH from "@prismicio/helpers";
  export let data;
  // console.log(data);

  const humanity = 5; //1.1
  const arrHumanity = data.documents[humanity].data;
  console.log(arrHumanity.hoofdstuk);
</script>

<!-- <section class="hero__section">
  <h1>1.0 Beoogde leerresultaten</h1>
</section>

<section>
  <span>{arrHumanity.hoofdstuk}</span>
  <h2>{arrHumanity.hoofdstuk}</h2>
</section> -->



<style>
  :global(:root){
    --yellow: #F4E500;
    --cream-white: #F0EBF0;
    --cream-red: #DB504C;
    --dark-grey: #2F3135;
    --nav-accent-color: #50545B;
    --nav-text-grey: #8E9296;
  }
  :global(*) {
    font-family: Open sans;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    color: black;
  }
  :global(button){
    border: none;
    background: none;
    cursor: pointer;
  }
  :global(a){
    text-decoration: none;
    list-style: none;
  }  
  :global(li){
    list-style: none;
  }


</style>
