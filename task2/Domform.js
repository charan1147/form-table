document.addEventListener(`DOMContentLoaded`,()=>{
    let page=document.getElementById(`dataForm`)
    let table=document.getElementById(`tabledata`)

    page.addEventListener(`submit`,(event)=>{
        event.preventDefault();

        let firstname=page.elements[0].value
        let lastname=page.elements[1].value
        let email=page.elements[2].value
        let address=page.elements[3].value
        let pincode=page.elements[4].value
        let gender=page.elements[`gender`].value
        let state=page.elements[12].value
        let country=page.elements[13].value
        let foodchoice=[...page.elements[`food`]].filter(checkbox=>checkbox.checked).map(checkbox=>checkbox.value)


        if(foodchoice.length<2){

        alert(`please select atleast two items to continue`)
        return
        }

        let newrow=`
        <tr>
        <td>${firstname}</td>
        <td>${lastname}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${foodchoice}</td>
        <td>${state}</td>
        <td>${country}</td>
        </tr>
        `
        table.innerHTML+=newrow

        page.reset();
    })
})