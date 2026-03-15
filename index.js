
// const express = require('express');
// const sdk = require('api')('@render-api/v1.0#dnzkv1ulkw9q3j6');
// const app = express();

// renderApi.auth('rnd_6LsipuKq7SwwfyW0gxtz4k8bnapn');
// renderApi.listServices({includePreviews: 'true', limit: '20'})
//   .then(({ data }) => console.log(data))
//   .catch(err => console.error(err));

const express = require('express');
const sdk = require('api')('@render-api/v1.0#dnzkv1ulkw9q3j6');
const app = express();
const port = process.env.PORT || 3000;

// השתמשנו ב-sdk כי כך הגדרנו בשורה 2
sdk.auth('rnd_6LsipuKq7SwwfyW0gxtz4k8bnapn'); 

app.get('/services', (req, res) => {
  sdk.listServices({includePreviews: 'true', limit: '20'})
    .then(({ data }) => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});