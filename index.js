
const express = require('express');
const sdk = require('api')('@render-api/v1.0#dnzkv1ulkw9q3j6');
const app = express();

renderApi.auth('rnd_6LsipuKq7SwwfyW0gxtz4k8bnapn');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));