import Project from './Project'
 
 const Projects = (props) => {
    const {repos, author} = props
    return (
     <div id="projects">
         <h1>Projects</h1>
         <div>
             <table>
                 <thead>
                     <tr>
                         <th>Challenge</th>
                         <th>Days</th>
                         <th>Time</th>
                         <th>Stars</th>
                         <th>Forks</th>
                         <th>URL</th>
                     </tr>
                 </thead>
                 <tbody>
                    {
                     repos.map((repo) => <Project key = {repo.name} project = {repo}/>)
                    }
                 </tbody>
             </table>
         </div>
     </div>
    )
 }

export default Projects