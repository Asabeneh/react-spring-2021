import Course from './Course'
const Courses = ({author, repos}) => {
       return (
           <div id="courses-wrapper">
               <h1>Courses</h1>
               <div className="courses">
                {repos.map((repo) =>  <Course key = {repo.title} course = {repo}/>)}
               </div>
           </div>
       )
    }

export default Courses