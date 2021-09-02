import React from 'react'
import styled from 'styled-components'

function Background(){
        const background = styled.div`
            border:1px solid black;
            width:100%;
            height:100vh;
            background-color:gray;
            display:flex;
            align-items: center;
            justify-content: center;
            `
        
        const modal = `
            border:1px solid black;
            width:30%;
            height:60vh;
            backgroundColor:white;
            display:flex;
            `

        
        
        return(
            <background>
                <modal>

                </modal>
            </background>
        )
    
}

export default Background;