const peoPle = 'https://randomuser.me/api/?results=100';

fetch(peoPle)
.then(response => response.json())
.then(data => appendData(data))
.catch(err => {console.log("error " + err)})


function appendData(data) {
    let myFetch = document.querySelector('#mydata')
    for (var i = 0; i < data.results.length; i++) {
        table = document.createElement('table')
        table.innerHTML = `
        
        <tr>

        <td> 
            <img src=" ${data.results[i].picture.medium}">
        </td>
        
        <td> 
        First-Name : ${data.results[i].name.first} 
        <br>
        Last-Name : ${data.results[i].name.last} 
        </td>
        </tr>
        `;

        myFetch.appendChild(table)

    }
   
};