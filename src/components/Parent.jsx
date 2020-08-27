import React from 'react'
import { useState } from 'react'
import Child from './Child'
import { TitleContext } from '../contexts/TitleContext'

export default function Parent() {
    let [title, setTitle] = useState("En rubrik")
    return (
        <div>
            <TitleContext.Provider value={{title, setTitle}}>
                <p>Parent - <small>{title}</small></p>
                <Child />
            </TitleContext.Provider>
        </div>
    )
}
// const title = "hej"
// const description = "en beskrivning"
// const obj = {title, description}
// obj = {
//     title: title,
//     description: description
// }


// obj.title -> "hej"
