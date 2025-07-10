const parameters = new URLSearchParams(location.search);
const endpoint = `https://api.pexels.com/v1/search?query=`;
const eventId = parameters.get(`eventId`);

console.log(location.search);
console.log(eventId);
