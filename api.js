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
    response = await fetch("http://localhost:5000/get_emissions", {
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

}