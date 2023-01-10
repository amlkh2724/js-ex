const countryToLiven = (language, islsland, population, country) => {

    return (country && language === "English" && population < 50000000 && !islsland ? `You should live in ${country}` : `${country} does not meet your criteria`)
}
console.log(countryToLiven('English', false, 20000, 'Finland'));
