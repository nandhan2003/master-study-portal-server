module.exports = (app, db) => {
  const express = require('express');
  var ObjectID = require("mongodb").ObjectID;
  const router = express.Router();
  /* const csv = require('fast-csv');
  const fs = require('fs');*/
  const config = require('../config/config');
  const common = require('../globel/common');
  const MODELS = require('../models/mail-model');
  const REPORT  = require('../models/mail-report');
  const arryEmpty =[];





  /*
  TODO:This api used to send email in  Data Base
  @Function: send email in Data
  */
 
  app.post('/api/email/sendDocumentEmail', (req,res) =>{
      try{
          var obj = req.body;
          var strActionType ="SAVE";
          if(!obj) { 
              res.status(200).json({success: false, message: 'Params missing', data:arryEmpty});
          } else {
              MODELS.funSendDocumentEmail(obj,db).then(( result )=>{
                  if(result && result.success === true) {
                      res.status(200).json(result)
                  } else {
                      res.status(200).json(result)
                  }
              });
          }
      } catch (e) {
          console.log("Error",e);
          res.status(200).json({success: false, message: "Error:"+e, data:arryEmpty});
      }

  });


  app.post('/api/email/GetCustomerByEmail',(req,res) => {
    console.log("show her -----",req.body)
    try{
        var obj = req.body
        if(!obj){
            res.json({success: false, message: 'Params missing',data:arryEmpty});
        } else {
            REPORT.funGetCustomerBYEmial(obj,db).then(( result )=>{
                if(result && result.success === true) {
                    res.status(200).json(result)
                }else {
                    res.status(200).json(result)
                }
            });
        }
    }catch (e) {
        console.log("Error",e);
        res.status(500).json({success: false, message: "Error:"+e, data:arryEmpty});
    }
});

}