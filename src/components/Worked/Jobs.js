import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Jobs = (props) => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allMdx(sort: {fields: frontmatter___order, order: ASC}) {
          nodes {
            frontmatter {
              title
              position
              date
            }
            id
            body
          }
        }
      }     
    `)
    let node = data.allMdx.nodes[props.data]
    console.log(props.data + "is here")
    return (
      <div>
        <div>
          <p>{node.frontmatter.position} @ {node.frontmatter.title} </p>
        </div>
        <div>
          {node.frontmatter.date}
        </div>
        <div>
          <MDXRenderer>{node.body}</MDXRenderer>
        </div>
      </div>  
    );
}



export default Jobs;
