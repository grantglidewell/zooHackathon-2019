/* eslint-disable no-console */
// TODO: protect tokens from the front end
export const getTableData = async () =>
  fetch(
    `https://api.airtable.com/v0/appKCIlT1qpIxI73k/Zoo%20Hackathon%20Data?api_key=keyJzTCwi1hTj3GPw`
  )
    .then(data => data.json())
    .catch(err => ({ err }));

// Data consists of an array of objects
// key: fields, object with keys
// field keys: user, url, animalName, animalPrice
export const addTableRow = async data => {
  return fetch(
    `https://api.airtable.com/v0/appKCIlT1qpIxI73k/Zoo%20Hackathon%20Data`,
    {
      method: 'POST',
      body: JSON.stringify({
        typecast: true,
        records: data
      }),
      headers: {
        Authorization: `Bearer keyJzTCwi1hTj3GPw`,
        'Content-Type': 'application/json'
      }
    }
  )
    .then(data => data.json())
    .catch(console.error);
};
