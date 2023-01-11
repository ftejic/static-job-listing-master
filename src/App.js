import React from "react"
import "./style.css"
import Data from "./data"
import Card from "./components/Card"

export default function App(){

    const[data, setData] = React.useState(Data)
    const[filterList, setFilterList] = React.useState([])

    function tagClicked(event){
        if(!filterList.includes(event.target.innerText)){
            setFilterList(prevFilterList => [...prevFilterList, event.target.innerText])     
        }
    }

    const filters = filterList.map(item => {
        return(
            <div className="filter">
                <p>{item}</p>
                <button onClick={deleteFilter}><img src="./images/icon-remove.svg"/></button>
            </div>
        )
    })

    function deleteFilter(event){
        setFilterList(prevFilterList => prevFilterList = prevFilterList.filter(item => item !== event.target.parentElement.parentElement.firstChild.innerText))
    }   

    function Clear(){
        setFilterList([])
    }    

    const cards = data.map(item =>{
        var tagList = [item.role, item.level]
        var l = item.languages.map(item => item)
        var l2 = item.tools.map(item => item)
        tagList = tagList.concat(l)
        tagList = tagList.concat(l2)
        
        var a=0;
        if(filterList.length>0){         
            for(var i=0; i<filterList.length; i++){
                for(var j=0; j<tagList.length; j++){
                    if(filterList[i] == tagList[j]){
                        a++
                        break
                    }
                }
            }
            if(a==filterList.length)
                return(
                    <Card 
                        key = {item.id}
                        company = {item.company}
                        logo = {item.logo}
                        new = {item.new}
                        featured = {item.featured}
                        position = {item.position}
                        postedAt = {item.postedAt}
                        contract = {item.contract} 
                        location = {item.location}        
                        tagClicked = {tagClicked}
                        tagList = {tagList}
                    />                             
                )           
        }else{
            return(
                <Card 
                key = {item.id}
                company = {item.company}
                logo = {item.logo}
                new = {item.new}
                featured = {item.featured}
                position = {item.position}
                postedAt = {item.postedAt}
                contract = {item.contract} 
                location = {item.location}        
                tagClicked = {tagClicked}
                tagList = {tagList}
            />                             
        )
        }
        
    })

    return(
        <div className="main">
            <div className="header"></div>
            <div className="content">
                {
                    filterList.length>0 &&
                    <div className="filters">
                        <div>{filters}</div>
                        <button onClick={Clear} className="clear">Clear</button>
                    </div>
                }
                
                <div className="cards">
                    {cards}
                </div>
                
            </div>
        </div>
    )
}