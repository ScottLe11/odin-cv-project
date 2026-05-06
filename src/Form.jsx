import { useState } from 'react'
import './Form.css'


const pageDict = {
    0:GeneralInfo,
    1:EducationInfo,
    2:WorkExperience
}



function CurrentForm(){
    const [page, setPage] = useState(0);
    const ActivePage = pageDict[page]

    function BackPage(){
    if (page === 0){
        return;
    } 
    else{
        setPage(page - 1);
    }

    
    }

    function FrontPage(){
    if (page === 2){
        return;
    } 
    else{
        setPage(page + 1);
    }

    
    }

    return(
        <>
        <div className= "content">
        {ActivePage ? <ActivePage /> : <p>Unknown page</p>}
        </div>

        <div className= "switchButtons">
            <button onClick = {BackPage} className="changeForm">Prev</button>

            <button onClick = {FrontPage} className="changeForm">Next</button>
        </div>
        
        </>
    );
}

function GeneralInfo(){
    return(
        <>
        <h1>GeneralInfo</h1>
        </>
    )
}

function EducationInfo(){
    return(
        <>
        <h1>EducationInfo</h1>
        </>
    )
}

function WorkExperience(){
    return(
        <>
        <h1>WorkExperience</h1>
        </>
    )
}

export {CurrentForm}