import './styles.css';
import { useState } from "react";
import getRepos from "../../services/getRepos";
//IMPORTING IMAGES
import githubIco from '../../img/github.svg';
import linkIco from '../../img/link.svg';

export default function RepositoriesList(){
    const [reposComp, setReposComp] = useState('');

    ( async ()=>{
        const repos = await getRepos();
        const divRepos = repos.map((repo, i) =>
        (
            <div className="listElementRepo" key={i}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                {
                    repo.language
                    ? <sub>Created with <span>{repo.language}</span></sub>
                    : <></>
                }
                <div>
                    <a href={repo.repoUrl}><img src={githubIco} alt='github-icon'/></a>
                    {
                        repo.homepage
                        ? <a href={repo.homepage}><img src={linkIco} alt='link-icon'/></a>
                        : <></>
                    }
                </div>
            </div>
        ));
        setReposComp(divRepos);
    })();
    return(
        <div className="repositoriesList">
            {reposComp}
        </div>
    );
}