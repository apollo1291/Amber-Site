

get_input = () => {
    const values = Array.from(document.querySelectorAll('.input'))
                    .map(input => input.value)
    product_info = {
        productTitle: values[0],
        productCost: parseInt(values[1]),
        productUrl: values.length > 2 ? values[2] : "",
        Category: ""
    }
    return product_info
}

get_emission = async () => {
    data = get_input()
    console.log(data)
response = await fetch("https://amber-deploy.onrender.com/get_emissions", {
        method: "POST",

        headers: {
        "Content-Type": "application/json",
        origin: "*",
        },
        body: JSON.stringify(data),
  });
  console.log(" finished request")
  emissionData = await response.json();
  console.log(emissionData)
  displayEmissions(emissionData["emissions"]["co2e"])

}

deleteMainChild = () => {
    var ele = document.querySelector("main");
    
    //e.firstElementChild can be used.
    var child = ele.lastElementChild; 
    while (child) {
        ele.removeChild(child);
        child = ele.lastElementChild;
    }
}

displayForm = () => {
    deleteMainChild()

    const main =  document.getElementsByTagName("main")[0];

    const h1 = document.createElement("h1");
    h1.innerHTML = "Amber";

    const input1 = document.createElement("input");
    input1.className = "input";
    input1.placeholder = "Product Name";

    const input2 = document.createElement("input");
    input2.className = "input";
    input2.placeholder = "Price";

    const input3 = document.createElement("input");
    input3.className = "input";
    input3.placeholder = "Url";

    const br = document.createElement("br");

    const button = document.createElement("button");
    button.className = "btn btn-lg btn-secondary fw-bold border-white bg-white";
    button.innerHTML = "Calculate";
    button.onclick = get_emission;

    main.appendChild(h1);
    main.appendChild(input1);
    main.appendChild(input2);
    main.appendChild(input3);
    main.appendChild(br);
    main.appendChild(button);

}

displayEmissions = (data) => {
    deleteMainChild()

let popup = document.createElement("div");
  popup.setAttribute("id", "result");
  popup.onclick = displayForm
  popup.innerHTML =
    '<div id = "header">AmberAI:</div><div id = "main">Buyers Impact is around ' +
    data +
    " Kilos of Carbon Dioxide</div>";
  const main = document.getElementsByTagName("main")[0];
  main.appendChild(popup);
}