const config = require('../config/config');
var strQryCount = { $group: { _id: null, count: { $sum: 1 }}};

const express = require('express');
var ObjectID = require("mongodb").ObjectID;
const router = express.Router();

var arryEmpty = [];
// var upperCase = require('upper-case');
// const randomstring = require('randomstring');
const nodemailer = require('nodemailer');
module.exports = {


     funSendDocumentEmail: SendDocumentEmail = (obj, db) => {
        return new Promise((resolve, reject) => {
            try {


                    var email = obj.email
                    let title = `Contact Details `
                    let api_link = `https://EasyPM.com//Resetpassword/@DE`
                    let subject = "Client Enquiry"
                    let body =     `<head>
                    <title></title>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <style type="text/css">
                        body,
                        table,
                        td,
                        a {
                            -webkit-text-size-adjust: 100%;
                            -ms-text-size-adjust: 100%;
                        }
                
                        table,
                        td {
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                        }
                
                        img {
                            -ms-interpolation-mode: bicubic;
                        }
                
                        img {
                            border: 0;
                            height: auto;
                            line-height: 100%;
                            outline: none;
                            text-decoration: none;
                        }
                
                        .jstable {
                            border: 0;
                            width: 100%;
                            font-family: Open Sans, Helvetica, Arial, sans-serif;
                            font-size: 16px;
                            font-weight: 400;
                            line-height: 24px;
                            padding: 15px 10px 5px 10px;
                        }
                
                        table {
                            border-collapse: collapse !important;
                        }
                
                        body {
                            height: 100% !important;
                            margin: 0 !important;
                            padding: 0 !important;
                            width: 100% !important;
                        }
                
                        a[x-apple-data-detectors] {
                            color: inherit !important;
                            text-decoration: none !important;
                            font-size: inherit !important;
                            font-family: inherit !important;
                            font-weight: inherit !important;
                            line-height: inherit !important;
                        }
                
                        @media screen and (max-width: 480px) {
                            .mobile-hide {
                                display: none !important;
                            }
                
                            .mobile-center {
                                text-align: center !important;
                            }
                        }
                
                        div[style*="margin: 16px 0;"] {
                            margin: 0 !important;
                        }
                    </style>
                
                    
                
                </head>
                        
                <body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#eeeeee">
                    
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td align="center" style="background-color: #eeeeee;" bgcolor="#eeeeee">
                                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                                    <tr>
                                        <td align="left" valign="top" style="font-size:0; padding: 35px;" bgcolor="#605DBA">
                                            <div
                                                style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                                    style="max-width:300px;">
                                                    <tr>
                                                        <td align="left" valign="top"
                                                            style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 48px;"
                                                            class="mobile-center">
                                                            <h1 style="font-size: 36px; font-weight: 800; margin: 0; color: #ffffff;">
                                                                Master Study Portal</h1>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding: 35px 35px 20px 35px; background-color: #ffffff;"
                                            bgcolor="#ffffff">
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                                style="max-width:600px;">
                                                <tr>
                                                    <td align="center"
                                                        style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                                                        <img src="https://img.icons8.com/carbon-copy/100/000000/checked-checkbox.png"
                                                            width="125" height="120" style="display: block; border: 0px;" /><br>
                                                        <h2
                                                            style="font-size: 30px; font-weight: 800; line-height: 36px; color: #333333; margin: 0;">
                                `+ title + ` </h2>
                        </td>
                    </tr>
                    

                    <tr>
                        <td align="left" style="padding-top: 20px;">
                            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                             
                            </table>
                            
                            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                <thead>
                                    <tr>
                                        <th width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 15px 10px 5px 10px;">User Details</th>
                                        
                                    </tr>
                                </thead>
                                
                            </table>
                            

                            <table cellspacing="0" cellpadding="0" border="0" width="100%">

                            <tr style="border-top: 3px solid #eeeeee;">
                            <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px; "> Name </td>
                            <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;"> ` + obj.name+ `</td>
                            </tr>
                            <tr>
                            <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;"> mobile </td>
                            <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">` + obj.mobile + `</td>
                            </tr>
                            <tr>
                            <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;"> subject </td>
                            <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">` + obj.subject + `</td>
                            </tr>
                            <tr>
                            <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;"> Email </td>
                            <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">` + obj.email + `</td>
                            </tr>
                            <tr>
                            <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;"> Message </td>
                            <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">` + obj.messege + `</td>
                            </tr>
                          

                        
                            </table>
                            
                        
                    
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                     
                    
                    </body>`
        
                    send_email(email, subject, body)
                    saveCustomer(db,obj)
                    // // resolve(result);
                    resolve({success: true, message: 'Your record was noted.',data:"keep in touch"});
                // }
              
     
            } catch (e) {
                throw resolve({success: false, message: 'System ' + e, data: arryEmpty});
            }
        });

    },
}

function send_email(email, subject, html){
    console.log("send_email =---",email)
    return new Promise((resolve, reject) => {
        try{
            let transporter = nodemailer.createTransport({
                service : 'gmail',
                auth : {
                    user : 'masterstudyportal@gmail.com',
                    pass : 'mjbo mwdv jcpa ujqc'
                },
                tls: {
                    rejectUnauthorized: false, // Ignore certificate validation
                }
            });
            
         let mailOptions =({
            from: [{ name:"Master Study Portal" , address: "masterstudyportal@gmail.com" }], // sender address
            // to: email,
            to: "mohdadhil1998@gmail.com",
            subject: "Hey you, awesome!",
            subject : subject,
            html : html
          });
    
        
        transporter.sendMail(mailOptions, function(error, info){
                if (error) { console.log(error) } 
                else { console.log('Email sent: ' + info.response) }
        });


    } catch (e) {
        throw resolve({success: false, message: 'System ' + e, data: arryEmpty});
    }
    })
}

function saveCustomer(db , obj){
    return new Promise((resolve, reject) => {
            try {

                // var checkQuery = ({ $or: [{ email: obj.email }] });
                // db.collection(config.CUSTOMER_USER_COLLECTION).find(checkQuery).toArray((err, user) => {
                //     if (user && user.length) {
                //         resolve({ success: false, message: 'Email or User Name Already Exists', data: [] });
                //     } else {

                        const newObject = {
                            pkIntUserId: ObjectID(),
                            name: obj.name,
                            mobile: obj.mobile,
                            messege: obj.messege,
                            email: obj.email.toLowerCase(),
                            subject: obj.subject,
                            datCreateDateAndTime: new Date(),
                            datLastModifiedDateTime: null,
                            strStatus: 'N',
                        };
                        db.collection(config.CUSTOMER_USER_COLLECTION).insertOne(newObject, (err, doc) => {
                            if (err) resolve({ success: false, message: 'customer Creation Failed.', arryEmpty });
                            else if (doc && doc.ops && doc.ops.length === true) {
                            }
                            else {
                                resolve({ success: true, message: 'customer saved successfully', data: [doc.ops[0]] });
                            };
                        });


                //     }
                // });


            } catch (e) {
                throw resolve({ success: false, message: 'System ' + e, data: arryEmpty });
            }
        });
}
{/* <tr>
<td width="75%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;"> Site Scheduled # </td>
<td width="25%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">` + "ite Scheduled" + `</td>

</tr> */
}

