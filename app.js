const getDadJoks = async () => {
  const res = await axios.get("https://icanhazdadjoke.com/");
  console.log(res);
};
