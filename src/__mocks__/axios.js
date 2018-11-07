export default {
  get: () => Promise.resolve({ data: { records: [{ objectid:1}], primaryimageurl: 'dank' } }),
  defaults: { baseURL: 'https://api.harvardartmuseums.org' }
}