import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Jobs = (props) => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allMdx {
          nodes {
            frontmatter {
              title
              date
            }
          }
        }
      }      
    `)
    console.log(props.data + "is here")
    return (
        <div>
            {data.allMdx.nodes[props.data].frontmatter.title}
        </div>
    );
}



export default Jobs;
