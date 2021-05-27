try {
  throw new Error("hekllo");
} catch (error) {
  console.log(error.message);
}
