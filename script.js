//Question 1
let clickCount = 0;
document.getElementById("b1").addEventListener("click", text1);
document.getElementById("b2").addEventListener("click", text2);

function text1()
{
    document.getElementById("top").innerText = imRight();
}

function text2()
{
    document.getElementById("bottom").innerText = imRight();
}


function imRight(){
    
   if(clickCount === 0)
    {
        clickCount++;
        return("I'm Right!");
    }
  else if(clickCount === 1)
  {
    clickCount++;
    return("No I'm Right!");
  }
  else
  return("");
}


//Question 2
document.getElementById("tsundere").addEventListener("mousemove", function hover(){alert("I told you not to hover over me! Baka!")})

//Question 3
//done in html

//Question 4
document.getElementById("submit").addEventListener("click", correct);
function correct () 
{
  
  if(document.getElementById("password").value === "12345678") 
  {
  document.getElementById("h1").innerText = "Hello "+
  document.getElementById("name").value;
  }
  else
  {
    alert("Password is incorrect!");
  }
}


//Question 5
//done in css

//Question Bonus
document.getElementById("submit2").addEventListener("click", calculate);
function calculate()
{
  let rad = document.getElementById("rad").value;
  let answer = (4/3)*(Math.PI*(rad*rad*rad))
  alert("The Volume of the sphere is: "+ answer);
}


