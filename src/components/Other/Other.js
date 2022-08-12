import  React, { useState, useEffect } from "react";
import "./Other.css"

const query = `
{
  jobsCollection {
    items {
      title
    }
  }
}
`;

const Other = () => {
    const [jobs, setJobs] = useState(null);
    let token = `${process.env.GATSBY_YOUR_ACCESS_TOKEN}`
    let space = `${process.env.GATSBY_YOUR_SPACE_ID}`

    useEffect(() => {
    window
        .fetch(`https://graphql.contentful.com/content/v1/spaces/` + space.toString() , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token.toString(),
        },
        body: JSON.stringify({ query }),
        })
        .then((response) => response.json())
        .then(({ data, errors }) => {
        if (errors) {
            console.error(errors);
        }

        setJobs(data.jobsCollection.items[0]);
        });
    }, []);

    if (!jobs) {
        return "Loading...";
    }

    return (
        <div className="other">
            <p>{jobs.title}</p>
        </div>
      );
}

export default Other;
