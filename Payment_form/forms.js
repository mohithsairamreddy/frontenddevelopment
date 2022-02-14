function validateForm()
{
    var Name,Pincode,Cardnumber,CVV;
    Name=document.Paymentform.name.value;
    Pincode=document.Paymentform.pincode.value;
    Cardnumber=document.Paymentform.cardnumber.value;
    CVV=document.Paymentform.cvv.value;
    if (Name!=""||Pincode!=""||Cardnumber!="") {
        if (!Cardnumber.match(/^\d{16}$/)){
            alert("Please enter your 16 digit credit card numbers")
        }
        else if (!CVV.match(/^\d{3}$/)){
            alert("Please enter valid CVV")
        }
        else if (!Name.match(/^[a-z A-Z]+$/)){
            alert("Please enter valid Name field");
        }
        else if (!Pincode.match(/^\d{6}$/)) {
            alert("Please enter valid Pincode field");
        }
        else{
            alert("Submited Succesfully......");
        }
    }
    else{
        alert("Invalid fields");
    }
}