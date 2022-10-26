<script>
  // import * as prismicH from "@prismicio/helpers"
  export let data
  const uid = data.documents[0].uid
  console.log(data.documents)

  // 1.0 Beoogde leerresultaten
  const arrHumanity = 5 //1.1
  const arrCompetenties = 11 //1.2
  const arrWerkveld = 2 //1.3
  const arrOntwikkelingen = 4 //1.4
</script>

<main>
  <div class="container">
    <h1>CMD Minor</h1>
    <pre>{JSON.stringify(data.documents[9].data, null, 2)}</pre>
  </div>
</main>

<style>
  main {
    font-family: sans-serif;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px;
  }

  .container > * {
    width: 100%;
    max-width: 700px;
  }
</style>
