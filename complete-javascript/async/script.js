// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => console.log(res));
// console.log('Test end');

// /**
//  * Test start
//  * Test end
//  * Resolved promise 1
//  * Resolved promise 2
//  * 0 sec timer
//  */

//  const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('processing...');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) resolve('You have won!');
//     else reject('You have lost!');
//   }, 2000);
//  });

//  lotteryPromise.then(res => console.log(res), err => console.log(err));

// const whereAmI = async function (country) {
//   try {
//       const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
//       const data = await res.json();

//       if (data[0].name != 'Portugal') throw new Error('Data must be Portugal');
      
//       return data[0].name;
//   } catch (err) {
    
//     // reject promise returned from async function
//     throw err;
//   }
  
// };


// whereAmI('portugal')
// .then(city => console.log(city))
// .catch(err => console.log(err))
// .finally(() => console.log('done'));

// (async function () {
//   try {
//     const city = await whereAmI('portugal');
//     console.log(city);
//   } catch (err) {
//     console.log(err);
//   }
//   console.log('done')
// })();

const getJSON = function(url, errorMsg = 'Something went wrong') {
  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

      return response.json();
    })
};

// const getThreeCountries = async function (c1, c2, c3) {
//   try {
//     const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`);
//     const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);
//     const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`);

//     // if one of passed promises is rejected, then all of them will be rejected as well
//     const data = await Promise.all(
//      [ getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),]
//     );

//     // console.log([data1.capital, data2.capital, data3.capital]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// getThreeCountries('portugal', 'canada', 'croatia');

// (async function () {
//   // race returns result from the first fulfilled promise
//   const res = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/croatia`),
//     getJSON(`https://restcountries.eu/rest/v2/name/austria`),
//   ]);
//   console.log(res);
// })();

// const timeout = function (sec) {
//   return new Promise(function(_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long!'));
//     }, sec * 1000);
//   });
// };

// // if one is rejected, all promises will be rejected
// Promise.race([
//   getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//   timeout(0.001)
// ]).then(res => console.log(res)).catch(err => console.log(err))

// // returns all promises, rejected and fulfilled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Sucess again'),
// ]).then(res => console.log(res));

// returns first fulfiled but ignores rejected promises
Promise.any([
  Promise.reject('Error'),
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Sucess again'),
]).then(res => console.log(res));