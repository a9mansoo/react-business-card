import Button from 'react-bootstrap/Button';


function Info({logo}){

    return(
        <main className="info">
            <img src={logo} ></img>
            <p style={{"color": "#F1F2F4"}}>Test Automation Specialist</p>
            <p style={{"font-size": "10px", "color": "#F1F2F4"}}>
                Computational Mathemtics, Minor in Chemistry and Computing.
            </p>
            <p style={{"font-size": "10px", "color": "#F1F2F4"}}>
                Graduated with Distinction
            </p>
            <Button variant="light" style={{"margin-right": "2%"}}>Email</Button>
            <Button variant="primary">LinkedIn</Button>
       </main>
    );
}

export default Info;