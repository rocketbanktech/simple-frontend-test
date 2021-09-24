export function calcAge(dateString: Date) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / 31557600000);
}
