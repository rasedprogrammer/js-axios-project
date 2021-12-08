const getDadJoks = async () => {
  const config = { header: { Accept: "application.json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  console.log(res);
};
