// TODO: protect tokens from the front end
export const getTableData = () =>
  fetch(
    `https://api.airtable.com/v0/appKCIlT1qpIxI73k/Zoo%20Hackathon%20Data?api_key=${AIRTABLE_API_KEY}`
  )
    .then(data => data.json())
    .catch(err => ({ err }));

// Data consists of an array of objects
// key: fields, object with keys
// field keys: user, url, animalName, animalPrice
export const addTableRow = data =>
  fetch({
    method: "POST",
    data: {
      typecast: true, // try to convert types if possible
      records: data
    },
    url: `https://api.airtable.com/v0/appKCIlT1qpIxI73k/Zoo%20Hackathon%20Data`,
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      "Content-Type": "application/json"
    }
  })
    .then(data => data.json())
    .catch(err => ({ err }));
