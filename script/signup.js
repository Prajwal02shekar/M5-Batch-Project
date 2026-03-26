let myForm=document.querySelector('form')
console.log(myForm)
myForm.onsubmit=(e)=>{
    e.preventDefault()
    let inputBox=document.querySelectorAll('input')
    console.log(inputBox)
    let formData={}

    inputBox.forEach((input)=>{
        // console.log(input)
        formData[input.name]=input.value
    })
    console.log(formData)

    let jsonData=JSON.stringify(formData)
    console.log(jsonData)

    localStorage.setItem('userData',jsonData)
    alert("User Register Successfully")
    window.location.href='../Login.html'
}