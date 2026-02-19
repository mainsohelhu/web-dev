        let remoElement = document.getElementById("remo")
            remoElement.innerHTML= "hallo javascript"
            remoElement.style.backgroundColor = "yellow";
        let exampleElement = document.getElementsByClassName("example")
       for (let i = 0; i < exampleElement.length; i++) {
        const element = exampleElement[i];
        element.style.backgroundColor = "green"
        
       }
        let pElement = document.getElementsByTagName("p")
        for (let i = 0; i < pElement.length; i++) {
            const element = pElement[i];
            element.style.fontSize = "24px"
        }
        let firstExampleElement = document.querySelector(".example")
        firstExampleElement.textContent = "first example changed";

        let allExampleElements = document.querySelectorAll(".example")
        allExampleElements.forEach(element =>{
            element.style.cssText = `
            color: white;
            background-color : green;
            padding : 24px;
            border : 2px solid red;
            
            `
            function myfunc() {
              element.style.cssText = `
              background-color: red;
              `
              
            }
            element.addEventListener("mouseover", myfunc)
          })
          let print = document.getElementById("num")
          for (let i = 0; i <= 100; i++) {
            print.innerHTML += [i] + "<br>";
            
            
          }