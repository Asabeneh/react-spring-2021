const Project = (props) => {
    const {name, stars, forks, days, published, link} = props.project
    return (
     <tr>
         <td>{name}</td>
         <td>{days}</td>
         <td>{published}</td>
         <td>{stars}</td>
         <td>{forks}</td>
         <td><a href= {link}>Link</a></td>
     </tr>
 
    )
 }

 export default Project