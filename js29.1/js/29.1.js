// // We are faking an API request to a food recipe database.
// // We get an array of Ids once consumed.

// // Lets change the code below to use async await instead of .then
// // and .catch
const getIDs = () =>
new Promise((resolve, reject) => {
setTimeout(() => {
resolve([532, 543, 753, 1, 5]);
}, 1500);
});


async function getID() {
    try {
      const IDs = await getIDs();
      console.log(IDs);
    } catch (error) {
      console.error(error);
    }
  }
  getID()