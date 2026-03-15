import renderApi from '@api/render-api';

renderApi.auth('rnd_6LsipuKq7SwwfyW0gxtz4k8bnapn');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));