/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
require("./src/scss/index.scss");

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  if (location.hash) {
    return false;
  }

  return true;
};