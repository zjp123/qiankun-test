let res;
async function getData() {
  res = await new Promise((resolve, reject) => {
    resolve({ zjp: 'NB' });
  });
  console.log(res);
}
getData();
console.log(res, 'resresres');

export default res;
