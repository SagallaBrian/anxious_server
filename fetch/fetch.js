function mainfunction() {
    const pardon_url = 'http://127.0.0.1/myngovo/apis/cont';
    fetch(pardon_url)
        .then((data_retr) => {
            return data_retr.json();
        })
        .then((pros_data) => {
            console.log("Data Retrived Successfully");
            displayfu(pros_data);
            padnfu(pros_data);
            delfun(pros_data);

        })
        .catch((errorss) => {
            console.log("Rejected");
            console.log(errorss);
        });

}

mainfunction();
setInterval(mainfunction, 120000);

function displayfu(arrdata) {
    let mystring1 = '';
    // For of loop used because there is no need to get the index
    for (const arrelem of arrdata) {
        let timenowvar = new Date();
        let timemilivar = Date.parse(timenowvar);

        let updetime = Date.parse(arrelem.pardoned_at)
        let timediff = timemilivar - updetime;
        if (timediff <= 900000) {
            mystring1 += `
            <tr>
                <th scope="row">${arrelem.user_id}</th>
                <td>${arrelem.user_name}</td>
                <td>${arrelem.created_at}</td>
                <td>${arrelem.pardoned_at} </td>
                <th><div class="text-success" id="${arrelem.user_id}">Pardon</div></th>
                <td class="bg-success p-2 text-white"> Cool </td>
            </tr>`;
        }
        else if (timediff > 900000 && timediff <= 1500000) {
            mystring1 += `
            <tr>
                <th scope="row">${arrelem.user_id}</th>
                <td>${arrelem.user_name}</td>
                <td>${arrelem.created_at}</td>
                <td>${arrelem.pardoned_at} </td>
                <th><div class="text-success" id="${arrelem.user_id}">Pardon</div></th>
                <td class="bg-warning p-2 text-white"> Warning </td>
            </tr>`;
        }
        else {
            mystring1 += `
            <tr>
                <th scope="row">${arrelem.user_id}</th>
                <td>${arrelem.user_name}</td>
                <td>${arrelem.created_at}</td>
                <td>${arrelem.pardoned_at} </td>
                <th><div class="text-success" id="${arrelem.user_id}">Pardon</div></th>
                <td class="bg-danger p-2 text-white"> Danger </td>
            </tr>`;
        }
    }

    document.getElementById("rwtabl").innerHTML = mystring1;
    // End of for loop
}

function padnfu(arrdata) {
    let arrdata2 = arrdata.map((elem, indexx) => {
        return elem.user_id;
    })
    for (const arrelem of arrdata2) {
        document.getElementById(arrelem).addEventListener("click", () => {
            pdnactionfunction(arrelem);
        });
    }
    // document.getElementById("2001").addEventListener("click", displayDate);
}

function pdnactionfunction(userids) {
    // 
    const pdnaction_url = 'http://127.0.0.1/myngovo/apis/postcont';
    // const pdnaction_url = 'http://127.0.0.1/myngovo/apis/postcont';
    fetch(pdnaction_url, {
        method: "POST",
        body: `fmuser_id=${userids}`,
        // Adding headers to the request 

        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },

    })
        .then((data_retr) => {
            return data_retr.json();
        })
        .then((pros_data) => {
            console.log("Pardoned User");
            mainfunction();

        })
        .catch((errorss) => {
            console.log("Error Pardon User");
            console.log(errorss);
        });


    // 
}

function delfun(arrdata) {
    for (const arrlem of arrdata) {

        let timenowvar = new Date();
        let timemilivar = Date.parse(timenowvar);

        let updetime = Date.parse(arrlem.pardoned_at)
        let timediff = timemilivar - updetime;

        if (timediff >= 2400000) {
            delaction(arrlem.user_id);
        }
    }
}

function delaction(userids) {
    // 
    const pdnaction_url = 'http://127.0.0.1/myngovo/apis/delcont';
    fetch(pdnaction_url, {
        method: "POST",
        body: `fmuser_id=${userids}`,
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },

    })
        .then((data_retr) => {
            return data_retr.json();
        })
        .then((pros_data) => {
            console.log("Pardoned User");
            console.log(pros_data);
            mainfunction();

        })
        .catch((errorss) => {
            console.log("Error Pardon User");
            console.log(errorss);
        });


    // 
}