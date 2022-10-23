import createClient from "$lib/vendors/prismicClient.js";

export async function load({ fetch, request }) {
  const client = createClient({ fetch, request })
  const documents = await client.getAllByType('docs')



    if (documents) {
        return { 
          documents
        }
    }

    return {
        status: 404,
    }
}

let arr = [ 20, 30, 40, 50, 100 ]

let newArr = arr.filter((element) => {
    return true
})

console.log(newArr)
Array(5) [ 20, 30, 40, 50, 100 ]