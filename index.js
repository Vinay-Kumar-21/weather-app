const apiURL="http://api.weatherapi.com/v1/current.json?key=9beb69517932462d8db31900231612&q=Tirupati&aqi=no";

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });