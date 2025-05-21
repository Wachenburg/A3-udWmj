const axios = require('axios').default


; (async () => {
url = "https://viacep.com.br/ws/91380130/json/"
try{
    let response = await axios.get(url, {adapter:'fetch'})
    console.log(response.data)
}catch (e){
    console.log(e)
}

})(); 