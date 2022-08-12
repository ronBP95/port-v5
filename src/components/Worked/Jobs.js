import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import './Jobs.css'

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
    // console.log(props.data + "is here")
    return (
      <div className='jobPage'>
        <div>
          <p>{node.frontmatter.position} <span className='companyTitle'>@ {node.frontmatter.title}</span> </p>
        </div>
        <div className='jobDate'>
          {node.frontmatter.date}
        </div>
        <div className='jobDesc'>
          <MDXRenderer>{node.body}</MDXRenderer>
        </div>
      </div>  
    );
}



export default Jobs;
