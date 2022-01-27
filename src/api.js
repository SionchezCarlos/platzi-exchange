const url = "https://api.coincap.io/v2";

function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data);
}

function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then(res => res.json())
    .then(res => res.data);
}

function getAssetHistory(coin) {
  const now = new Date(); //Fecha Actual.
  const end = now.getTime(); //Valor NUmerico de la Fecha Correspondiente.
  now.setDate(now.getDate() - 1); //Restamos 1 a el valor numerico de la fecha Actual.
  const start = now.getTime(); //Fecha Actual Menos un Dia.

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then(res => res.json())
    .then(res => res.data);
}

function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then(res => res.json())
    .then(res => res.data);
}

function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`)
    .then(res => res.json())
    .then(res => res.data);
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
};
