import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

const FooterMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(filter: { name: { eq: "Footer" } }) {
          edges {
            node {
              name
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `}
    render={props => (
      <ul>
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
          item => (
            <li key={item.title}>
              <Link to={item.object_slug}>{item.title}</Link>
            </li>
          )
        )}
      </ul>
    )}
  />
);

export default FooterMenu;
