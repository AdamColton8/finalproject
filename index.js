let http = require('http'),
    fs = require('fs'),
    express = require('express'),
    path = require('path'),
    app = express();


const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/dist/", express.static(__dirname + '/dist'));
app.use("/js/", express.static(__dirname + '/js'));
app.use("/img/", express.static(__dirname + '/img'));




console.log(path.join(__dirname + '/dist'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.post('/send-email', function(req, res) {


    let taskData = req.body;


    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "2bfebfdc2ad624",
            pass: "b414a70c5b0a00"
        }
    });

    let mailOptions = {
        from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
        to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        // plain text body
        html: `
            Имя задачи - ${taskData.taskName}
            Описание задачи - ${taskData.taskDescr}
            Статус задачи - ${taskData.taskStatus}
        ` // html body
    };

    // send mail with defined transport object
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });


    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        'response' : true
    }, null, 3));

});



app.listen(8080, function () {
    console.log('Example app listening on port 3000!');
});

/*


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8080);
});
*/
