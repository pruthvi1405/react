import axios from 'axios'
const SearchImage = async(term) => {
 const response= await axios.get('https://api.unsplash.com/search/photos?',{
     headers:{
        Authorization: 'Client-ID mvMQEVUKQUSQUpBOInWwN00MhrbBbkCiuQ3A1y3Tuek',
        },
     params:{
        query:term
     }
 } )

return response;
}

export default SearchImage;