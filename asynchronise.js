function fetchDataFromAPI() {
    return new Promise(resolve => {
      setTimeout(() => {
        const data = { message: 'Data fetched successfully!' };
        resolve(data);
      }, 2000); 
    });
  }
  
  // Asynchronous function using the async/await syntax
  async function fetchDataAndDisplay() {
    try {
      console.log('Fetching data...');
      const result = await fetchDataFromAPI();
      console.log('Data:', result.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Call the asynchronous function
  fetchDataAndDisplay();
  console.log('Program continues to execute...');
  