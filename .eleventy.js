const moment = require('moment');
 
moment.locale('nl');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addFilter('dateIso', date => {
    return moment(date).toISOString();
  });
 
  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).utc().format('LL');
  });
}