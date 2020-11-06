import React, { useEffect, useState } from 'react';
import WithLoading from './withLoader';

export const List = (props) => {
    const { repos } = props;
    if (!repos) return null;
    if (!repos.length) return <p>No repos, sorry</p>;
    return (
        <ul>
            {repos.map((repo) => {
                return <li key={repo.id}>{repo.full_name}</li>;
            })}
        </ul>
    );
};
const WithLoadingComponent = WithLoading(List);

const DemoHOC = (props: any) => {
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/users/naimishverma17/repos`)
            .then((json) => json.json())
            .then((repos) => {
                setRepos(repos);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            <WithLoadingComponent isLoading={loading} repos={repos}/>
        </div>
    );
};

export default DemoHOC;
