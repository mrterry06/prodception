const nodemailer	= require('nodemailer');
const transporter = nodemailer.createTransport({ 
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'mrterry06@gmail.com',
		pass: 'Elfin123'
	}
});

function sendMail(message, callback){
	 const element = `<p>${message.message}<br>${message.email} ${message.phone}</p>`;
	 const sender = `"${message.firstname + message.lastname}" <${message.email}>`;
 	 const mailOption = {
	 	from: sender,
	 	to: 'prodception@gmail.com',
	 	subject: message.subject ,
	 	text: message.email,
	 	html: element
 	};

 	transporter.sendMail(mailOption, function(err, info){
 		let isSentSuccessfully = true;
 		let messageToLog = `Message sent: ${info.response}`;
 		if (err) {
 			isSentSuccessfully = false;
 			messageToLog = err;
 		}

 		console.log(messageToLog);
 		callback(isSentSuccessfully);
 	});

}

module.exports =  sendMail;
