import axios from '../config/axios';

export default {
  getArt (term) {
    return axios.get('/object', {params: {
      apikey: "f8411350-e114-11e8-9234-6f5a1db33697",
      title: `${term}`,
      hasimage: 1,
      color: 'any',
      fields: "objectid",
    }})
    .then(res => { 
      const magic = res.data.records.map(r => {
        return axios.get('/object/'+r.objectid, {params: {
            apikey: "f8411350-e114-11e8-9234-6f5a1db33697",
          }
        })
        .then(res => {
          // console.log(res.data)
          if(res.data.primaryimageurl) return res.data;
        })
      })
      return Promise.all(magic);
    })
  }
}


