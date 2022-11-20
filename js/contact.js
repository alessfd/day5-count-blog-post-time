const emailReceiver = "fmortaccio@gmail.com"

function submitData(){

    let fullname = document.getElementById("contactName").value
    let email = document.getElementById("contactEmail").value
    let phone = document.getElementById("contactPhone").value
    let subject = document.getElementById("contactSubject").value
    let message = document.getElementById("contactMessage").value

    if (fullname == '') {
        return alert('Name input field must be not empty');
      } else if (email == '') {
        return alert('Email input field must be not empty');
      } else if (phone == '') {
        return alert('Phone input field must be not empty');
      } else if (subject == '') {
        return alert('Subject input field must be not empty');
      } else if (message == '') {
        return alert('Message input field must be not empty');
      }

    let link = document.createElement('a')
    link.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${fullname}.\n ${message}.`
    link.target + '_blank';
    link.click();

    let form = {
        name: fullname,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    }

    console.log(form)
}