function drawResults() {
  const results = users.results.map((currentUser) => {
    return {
      text: currentUser.email,
      value: currentUser.email,
    };
  });
  const select = getSelect(results, handleSelect);
  document.querySelector("#selectLocation").append(select);
}

drawResults();

function drawFlag(linkSrc) {
  const img = getImg(linkSrc);
  document.querySelector("#flag").innerHTML = "";
  document.querySelector("#flag").append(img);
}

function drawImage(linkSrc) {
  const img = getImg(linkSrc);
  document.querySelector("#userImage").innerHTML = "";
  document.querySelector("#userImage").append(img);
}

function handleSelect(userEmail) {
  const user = getUserByEmail(userEmail);

  const country = getCountryByName(user.location.country);
  const borders = getBordersByCountry(country);
  drawImage();
  drawImage(user.picture.large);
  drawFlag(country.flags.png);
}

function getUserByEmail(userEmail) {
  return users.results.find((currentUser) => {
    return currentUser.email === userEmail;
  });
}

function getCountryByName(countryName) {
  return countries.find((currentCountry) => {
    return (
      currentCountry?.name.common?.toLowerCase() === countryName.toLowerCase()
    );
  });
}
