
      function sendMail(){
        
        var params = {
          sendername: document.querySelector("#name").value,
          email: document.querySelector("#email").value,
          message: document.querySelector("#message").value,
        };
        var serviceID = "service_juag0it"
        var templateID = "template_6mpkbmr"
        emailJS.send(serviceID, templateID, params)
        .then(res =>{
          alert("Email Send Sucessful!");

        })
        .catch();
      }