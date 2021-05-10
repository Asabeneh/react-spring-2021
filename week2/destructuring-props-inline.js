<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Getting Started React | Props</title>
</head>
<body>
<div id = 'root'></div>
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const rootElement = document.getElementById('root')
    const Book = (props) => {

const {
data:{
    author:{firstName, lastName}, 
    course:{title, subtitle, year}
}
} = props
        return (
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>Author: {firstName} {props.data.author.lastName}</p>
                <small>Year:{year}</small>
            </div>
        )
    }
const data =
    ReactDOM.render(<div>
     <Book 
     data =  {
        { author:{
            firstName:'Asabeneh',
            lastName:'Yetayeh',
        },
        course:{
            title:'Getting Started React',
            subtitle:'A popular JavaScript library',
            skills: ['HTML', 'CSS','JavaScript'],
            year:new Date().getFullYear()
        }}
     }

     />

     <Book 
     data =  {
        { author:{
            firstName:'Asabeneh',
            lastName:'Yetayeh',
        },
        course:{
            title:'30 Days Of React',
            subtitle:'A popular JavaScript library',
            skills: ['HTML', 'CSS','JavaScript'],
            year:new Date().getFullYear()
        }}
     }

     />

     <Book 
     data =  {
        { author:{
            firstName:'Asabeneh',
            lastName:'Yetayeh',
        },
        course:{
            title:'30 Days Of JavaSript',
            subtitle:'A popular JavaScript library',
            skills: ['HTML', 'CSS','JavaScript'],
            year:new Date().getFullYear()
        }}
     }

     />

  

    </div>
    , rootElement)
</script>
</body>
</html>