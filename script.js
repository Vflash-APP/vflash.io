$("#menu").click(function(){
  $("#mainmenu").toggleClass("showmenu");
  $("#mainscreen").toggleClass("movemaincontainer");
});

fetch('https://vflashapp.000webhostapp.com/vflash.php')
  .then(response => response.text())
  .then(data => {
    console.log(data); // Display the retrieved data
    // Do whatever you want with the data here
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });
