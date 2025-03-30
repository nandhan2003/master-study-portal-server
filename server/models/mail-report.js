const config = require('../config/config');
const express = require('express');

var arryEmpty = [];
var ObjectID = require("mongodb").ObjectID;
module.exports = {



        //This function listing details from projects by id form.
        funGetCustomerBYEmial: GetcustomerByIdDetails=(obj,db)=> {
            return new Promise((resolve, reject) => {
                try{
                    var arrayAllObjData =[];
                    var query= {email:obj.email,strStatus: "N"}
                   
                    
                    var intSkipCount =0;
                    var intPageLimit =0;
                    if(obj.intSkipCount)
                        intSkipCount = parseInt(obj.intSkipCount);
                    if(obj.intPageLimit)
                        intPageLimit = parseInt(obj.intPageLimit);
    
                    var Project = { $project : {
                        _id:"$_id",
                        name: "$name",
                        mobile: "$mobile",
                        messege: "$messege",
                        email: "$email",
                        subject: "$subject",
                    }};  
        
                    db.collection(config.CUSTOMER_USER_COLLECTION).find(query).count()
                        .then((totalPageCount) => {
                            if(totalPageCount){
                                if(!intPageLimit)
                                    intPageLimit =parseInt(totalPageCount);
                                db.collection(config.CUSTOMER_USER_COLLECTION).aggregate([{$match:query},
                                    { "$skip": intSkipCount }, { "$limit": intPageLimit }, {$sort:{projectName:1}},
                                    Project
                                ]).toArray( (err,doc) => {
                                    if (err) throw err;
                                    if(doc){
                                        var objTotal ={intTotalCount :totalPageCount};
                                        arrayAllObjData.push(doc);
                                        arrayAllObjData.push(objTotal);
                                        resolve({success: true,message: 'Successfully.', data: arrayAllObjData});
                                    }
            
                                });
                            } else {
                                resolve({success: false, message: ' No Data Found', data: arryEmpty});
                            }
                        })
            
                } catch (e) {
                    throw resolve( { success: false, message: 'System '+e, data: arryEmpty });
                }
            });
        
        },

    }