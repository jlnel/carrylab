// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  
  // Add a shortcode for item cards
  eleventyConfig.addShortcode("itemCard", function(name, image, description, link) {
    return `
      <div class="item-card">
        <img src="${image}" alt="${name}" class="item-image">
        <h3>${name}</h3>
        <p>${description}</p>
        <a href="${link}" class="view-details">View Details →</a>
      </div>
    `;
  });
};