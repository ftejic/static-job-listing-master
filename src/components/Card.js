import React from "react"

export default function Card(props){

    const styles = {
        borderColor: props.new && props.featured ? "var(--Desaturated-Dark-Cyan)" : "transparent"
    }
    
    const tags = props.tagList.map(item => {
        return(
            <div className="tag" onClick={props.tagClicked}>
                <p>{item}</p>
            </div>
        )
    })

    return(
        <div className="card" style={styles}>
            <div className="cardDiv1">
                <div className="logo">
                    <img src={props.logo}/>
                </div>
                <div>
                    <div className="head">
                        <p>{props.company}</p>
                        <div>
                            {props.new && <div className="new">NEW!</div>}
                            {props.featured && <div className="featured">FEATURED</div>}
                        </div>                      
                    </div>                 
                    <p className="position">{props.position}</p>
                    <p className="info">{props.postedAt} · {props.contract} · {props.location}</p>
                </div>     
            </div>
            <div className="cardDiv2">
                <div className="tags">
                    {tags}
                </div>
            </div>
        </div>
    )
}