import React from 'react';
import Project from '../Project';
import '../styles/Project.css';


//an array of objects for portfolio page with links to the actual projects 
const applications = [
    [
        { title: 'Social Network API', href: 'https://github.com/catpolk/Social-Network-API', stack: 'NoSQL', deployed: 'https://drive.google.com/file/d/1gddjAs22LzDAaH7jFJTLWF588mAjN5iv/view?usp=share_link-connect-social-network', img: 'cloud' },
        { title: 'Employee Tracking App', href: 'https://github.com/catpolk/employee-tracking-application', stack: 'SQL', deployed: 'https://drive.google.com/file/d/1OP9Vs2sW2AgBxfXC5VeITRmGJ1twCynf/view?usp=share_link', img: 'frost' }
    ],
    [
        { title: 'Note Taking App', href: 'https://github.com/catpolk/note-taking-application', stack: 'Express', deployed: 'https://catpolk.github.io/note-taking-application/', img: 'forest' },
        { title: 'My Team Profile Generator', href: 'https://github.com/catpolk/my-team-profile-generator', stack: 'OOP', deployed: 'https://catpolk.github.io/my-team-profile-generator/myTeam.html', img: 'winter' },
    ],
    [
        { title: 'README Generator', href: 'https://github.com/catpolk/README-generator', stack: 'Node.js', deployed: 'https://drive.google.com/file/d/1l7t-vNUWHCf1W0zRWAEy6D67ZvdlNqn3/view?usp=share_link', img: 'red' },
        { title: 'The Arrays', href: 'https://github.com/catpolk/project-2-The-Arrays', stack: 'MVC, Charts.js', deployed: 'https://evening-hollows-21055.herokuapp.com/', img: 'forestfall' },
    ]
    
    
]
//function that maps through the applications array and then maps again each of the object of the projectsList array 
function Portfolio () {
    const projects = applications.map((projectsRow) => { 
        const projectsList = projectsRow.map((project) => {
            return(
                <Project 
                    title={project.title} 
                    stack={project.stack} 
                    href={project.href}
                    deployed={project.deployed}
                    img={project.img}
                />
            )
        });
        //returning the first mapped result with each row of the array 
        return (<div className="row justify-content-md-center p-3">{projectsList}</div>);
    })
        //returning the second mapped result with each object the the array 
    return (
        <>{projects}</>
    )
}

export default Portfolio;