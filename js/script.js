

//GET CITY WITH THIS
// https://api.openweathermap.org/data/2.5/weather?q=[CITY-NAME]&appid=f738070ba746c43b56c8ce529808d062
//SELECT LAT/LONG VALUES AND SET TO :
//https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}

const $input = $('input')
const $button = $('button')
const $dayInput = $('#days').val()
console.log($dayInput)


$button.on("click", () => {
    const cityName = $input.val();

$.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f738070ba746c43b56c8ce529808d062`).then((data) => {
  console.log(data);
  const cityLat = data.coord.lat;
  const cityLong = data.coord.lon;
  const cityName = data.name;
  console.log(cityLat);
  console.log(cityLong);
  $.ajax(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLong}&exclude=hourly&units=imperial&appid=f738070ba746c43b56c8ce529808d062`
  ).then((data) => {
    console.log(data);
    $("#city").html(`
          ${cityName}`);
    $(`#temp`).html(`${data.current.temp}F`);
    $("#feels").html(`
      ${data.current.feels_like}F`);
    $("#weather").html(`
      ${data.current.weather[0].main}`);
  });
  console.log($dayInput);

  // console.log($dayInput.val());
  //       console.log(data.daily[0].temp)

  // use this to call on multiple days (changed "daily" in url to "minutely")
  // $.ajax(`
  // https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLong}&exclude=hourly,minutely&units=imperial&appid=f738070ba746c43b56c8ce529808d062`).then((data) => {
  //   console.log(data);
  //   if ($($dayInput.val()) === "one") {
  //     $("#temp-two").html(`
  //       ${data.current.temp}`)
  //       console.log(data.daily[0].temp)
  //   }
  // })
})
})


