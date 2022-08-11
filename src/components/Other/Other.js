import {React, useState, useEffect} from 'react';
import './Other.css'

const Other = () => {
    
    const [page, setPage] = useState(null);

    const query = `{
        jobsCollection {
          items {
            jobs {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
          }
        }
      }
    `

    console.log('space id is:' + `${process.env.YOUR_SPACE_ID}`)
    
    useEffect(() => {
      window
        .fetch(`https://graphql.contentful.com/content/v1/spaces/` + `${process.env.YOUR_SPACE_ID}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: "Bearer " + `${process.env.YOUR_ACCESS_TOKEN}`,
          },
          // send the GraphQL query
          body: JSON.stringify({ query }),
        })
        .then((response) => response.json())
        .then(({ data, errors }) => {
          if (errors) {
            console.error(errors);
          }
    
          // rerender the entire component with new data
          setPage(data.jobsCollection.items.[0]);
        });
    }, []);
    
    if (!page) {
      return "Loading...";
    }
    
    return (
        <div className='other'>
            <p>Other</p>
        </div>
    )
}

export default Other;