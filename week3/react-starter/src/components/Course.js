const Course = (props) => {
    const {
        title, subtitle, name, stars, forks, published
    } = props.course
    
       return (<div className='course'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{name}</p>
        <p>Created on {published}</p>
        <small>stars:{stars}</small>
    </div>)
    }

export default Course