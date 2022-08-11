import  React, { useState, useEffect } from "react";

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

    useEffect(() => {
    window
        .fetch(`https://graphql.contentful.com/content/v1/spaces/` + `${process.env.YOUR_SPACE_ID}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + `${process.env.YOUR_ACCESS_TOKEN}`,
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
        <div className="App">
          <header className="App-header">
            <p>{jobs.title}</p>
          </header>
        </div>
      );
}

export default Other;
