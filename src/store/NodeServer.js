export const getActivities = async () => {
  let obj;

  await fetch(`https://node-server8.herokuapp.com/activities`)
    .then(res => res.json())
    .then(data => (obj = JSON.parse(data)));
  return obj;
};

export const addActivity = async activity => {
  console.log(JSON.stringify(activity));

  return fetch(`https://node-server8.herokuapp.com/add`, {
    crossDomain: true,
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(activity)
  })
    .then(response => {
      return response.text();
    })
    .then(text => {
      console.log(text);
    })
    .then(error => {
      console.error(error);
    });
};
