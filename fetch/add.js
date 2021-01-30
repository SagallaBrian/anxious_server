function addusers() {
    let usernamevar = document.getElementById("username").value;

    const add_url = 'http://127.0.0.1/myngovo/apis/postreq.php';
    fetch(add_url, {
        method: "POST",
        body: `fmusername=${usernamevar}`,
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },

    })
        .then((data_retr) => {
            return data_retr.json();
        })
        .then((pros_data) => {
            console.log("Resolved");
            console.log(pros_data);
            document.getElementById("dispok").style.display = "block"
            document.getElementById("username").value = "";
            let usastring1 = '';
            for (const arrelem of pros_data) {
                usastring1 += `<h6 class="font-weight-normal text-success">${arrelem.usder_name} added at ${arrelem.timeadded} </h6>`; 
            }
            document.getElementById("dsp").innerHTML = usastring1;
            


        })
        .catch((errorss) => {
            console.log("Rejected");
            console.log(errorss);
        });

}

document.getElementById("subtn").addEventListener("click", addusers);
