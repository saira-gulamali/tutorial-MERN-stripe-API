(()=>{var e=Stripe("pk_test_51PYVyaH3cjzT8gFpTufubx1usPA5Sqh2QiEhq2ydCIkyxKQ91tAbjhmBTXVbhFgvY5TCPryaGcy49ccrxgxGFqPh00QKP14x7U");document.querySelector("button").disabled=!0,fetch("/stripe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({purchase:[{id:"1",name:"t-shirt",price:1999},{id:"2",name:"shoes",price:4999}],total_amount:10998,shipping_fee:1099})}).then((function(e){return e.json()})).then((function(n){var r=e.elements().create("card",{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{fontFamily:"Arial, sans-serif",color:"#fa755a",iconColor:"#fa755a"}}});r.mount("#card-element"),r.on("change",(function(e){document.querySelector("button").disabled=e.empty,document.querySelector("#card-error").textContent=e.error?e.error.message:""})),document.getElementById("payment-form").addEventListener("submit",(function(o){o.preventDefault(),t(e,r,n.clientSecret)}))}));var t=function(e,t,c){o(!0),e.confirmCardPayment(c,{payment_method:{card:t}}).then((function(e){e.error?r(e.error.message):n(e.paymentIntent.id)}))},n=function(e){o(!1),document.querySelector(".result-message a").setAttribute("href","https://dashboard.stripe.com/test/payments/"+e),document.querySelector(".result-message").classList.remove("hidden"),document.querySelector("button").disabled=!0},r=function(e){o(!1);var t=document.querySelector("#card-error");t.textContent=e,setTimeout((function(){t.textContent=""}),4e3)},o=function(e){e?(document.querySelector("button").disabled=!0,document.querySelector("#spinner").classList.remove("hidden"),document.querySelector("#button-text").classList.add("hidden")):(document.querySelector("button").disabled=!1,document.querySelector("#spinner").classList.add("hidden"),document.querySelector("#button-text").classList.remove("hidden"))}})();