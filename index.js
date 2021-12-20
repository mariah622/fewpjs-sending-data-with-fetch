

function submitData(name, email){
    const formData = {
        name: name,
        email: email
      };
      
      const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
      
      return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          document.body.innerHTML = object.id
        })

        .catch(function(error) {
            let h3 = document.createElement('h3');
            h3.innerHTML = error.message;
            document.body.appendChild(h3);
            console.log(error.message);
        });
}