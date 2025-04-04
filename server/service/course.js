const { request } = require('express');
const { USER_COLLECTION } = require('../config/config');


module.exports = (app, db) => {

  const express = require('express');
  var ObjectID = require("mongodb").ObjectID;
  const router = express.Router();
  /* const csv = require('fast-csv');
  const fs = require('fs');*/
  const config = require('../config/config');
  const common = require('../globel/common');
  const COURSEMODELS = require('../models/course-model');
  const COURSEREPORT = require('../models/course_report');
//   const MODELS = require('');

  const arryEmpty = [];
//course save
app.post('/api/course/Course', (req, res) => {
  console.log("sdgas ==---", req.body)
  try {
      var obj = req.body;
      if (common.isEmptyObject(obj)) {
          res.json({ success: false, message: 'Parameter missing', data: arryEmpty });
      } else {

          COURSEMODELS.funAddCourse(obj, db).then((result) => {
              if (result && result.success === true) {
                  res.status(200).json(result)
              }
              else {
                  res.status(200).json(result)
              }
          });
      }
  } catch (e) {
      console.log("Error", e);
      res.status(500).json({ success: false, message: "Error:" + e, data: arryEmpty });
  }

});
//courselistget
app.post('/api/course/getCourseList',  (req, res) => {
    console.log("werr------",res)
    try {
        var obj = req.body
        if (!obj) {
            res.json({ success: false, message: 'Params missing', data: arryEmpty });
        } else {
          COURSEREPORT.funGetCourseList(obj, db).then((result) => {
                if (result && result.success === true) {
                    res.status(200).json(result)
                }
                else {
                    res.status(200).json(result)
                }
            });
        }
    } catch (e) {
        console.log("Error", e);
        res.status(500).json({ success: false, message: "Error:" + e, data: arryEmpty });
    }
  
  
  });
  //save studymaterial
  app.post('/api/material/studymaterial',(req,res) => {
    console.log("show her -----",req.body)
    try{
        var obj = req.body
        if(!obj){
            res.json({success: false, message: 'Params missing',data:arryEmpty});
        } else {
            COURSEMODELS.funSaveMaterial(obj,db).then(( result )=>{
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
//studymateriallist
app.post('/api/material/getMaterialList',  (req, res) => {
    try {
        var obj = req.body
        if (!obj) {
            res.json({ success: false, message: 'Params missing', data: arryEmpty });
        } else {
          COURSEREPORT.funGetMaterialList(obj, db).then((result) => {
                if (result && result.success === true) {
                    res.status(200).json(result)
                }
                else {
                    res.status(200).json(result)
                }
            });
        }
    } catch (e) {
        console.log("Error", e);
        res.status(500).json({ success: false, message: "Error:" + e, data: arryEmpty });
    }
  
  
  });
//studymaterialupdate
app.post('/api/course/Updatestudymaterial', (req,res) => {
    try{
        var obj = req.body;
        var strActionType ="UPDATE";
        if(!obj) {
            res.json({success: false, message: 'Parameter missing',data:arryEmpty});
        } else {
                    COURSEMODELS.funUpdatestudymaterial(obj,db).then(( result )=>{
                        if(result && result.success === true) {
                            res.status(200).json(result)
                        } else {
                            res.status(200).json(result)
                        }
                    });
        }
    }catch (e) {
        console.log("Error",e);
        res.status(500).json({success: false, message: "Error:"+e, data:arryEmpty});
    }

});
//item save
app.post('/api/course/Item', (req, res) => {
  console.log("added ==---", req.body)
  try {
      var obj = req.body;
      if (common.isEmptyObject(obj)) {
          res.json({ success: false, message: 'Parameter missing', data: arryEmpty });
      } else {

          COURSEMODELS.funAddItem(obj, db).then((result) => {
              if (result && result.success === true) {
                  res.status(200).json(result)
              }
              else {
                  res.status(200).json(result)
              }
          });
      }
  } catch (e) {
      console.log("Error", e);
      res.status(500).json({ success: false, message: "Error:" + e, data: arryEmpty });
  }

});
//itemlist
app.post('/api/course/ItemList',(req,res) => {
    console.log("show her -----",req.body)
    try{
        var obj = req.body
        if(!obj){
            res.json({success: false, message: 'Params missing',data:arryEmpty});
        } else {
            COURSEMODELS.funGetItemList(obj,db).then(( result )=>{
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
//Itemlist
app.post('/api/course/GetItemList',(req,res) => {
    console.log("show her -----",req.body)
    try{
        var obj = req.body
        if(!obj){
            res.json({success: false, message: 'Params missing',data:arryEmpty});
        } else {
            COURSEREPORT.funGetItemList(obj,db).then(( result )=>{
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
//question save
app.post('/api/course/Question', (req, res) => {
  console.log("added ==---", req.body)
  try {
      var obj = req.body;
      if (common.isEmptyObject(obj)) {
          res.json({ success: false, message: 'Parameter missing', data: arryEmpty });
      } else {

          COURSEMODELS.funAddQuestion(obj, db).then((result) => {
              if (result && result.success === true) {
                  res.status(200).json(result)
              }
              else {
                  res.status(200).json(result)
              }
          });
      }
  } catch (e) {
      console.log("Error", e);
      res.status(500).json({ success: false, message: "Error:" + e, data: arryEmpty });
  }

});

//questionlist
app.post('/api/course/getQuestionList',(req, res) => {
  try {
     
      var obj = req.body
      if (!obj) {
          res.json({ success: false, message: 'Params missing', data: arryEmpty });
      } else {
        COURSEREPORT.funGetQuestionList(obj, db).then((result) => {
              if (result && result.success === true) {
                  res.status(200).json(result)
              }
              else {
                  res.status(200).json(result)
              }
          });
      }
  } catch (e) {
      console.log("Error", e);
      res.status(500).json({ success: false, message: "Error:" + e, data: arryEmpty });
  }

});


//questionlist
app.post('/api/course/getQuestionGroupList',(req, res) => {
    try {
       
        var obj = req.body
        if (!obj) {
            res.json({ success: false, message: 'Params missing', data: arryEmpty });
        } else {
          COURSEREPORT.funGetQuestionGroupList(obj, db).then((result) => {
                if (result && result.success === true) {
                    res.status(200).json(result)
                }
                else {
                    res.status(200).json(result)
                }
            });
        }
    } catch (e) {
        console.log("Error", e);
        res.status(500).json({ success: false, message: "Error:" + e, data: arryEmpty });
    }
  
  });

//sucategory update
app.post('/api/course/subcategoryUpdate', (req,res) => {
    try{
        var obj = req.body;
        console.log("tttttttttt--",obj)
        var strActionType ="UPDATE";
        if(!obj) {
            res.json({success: false, message: 'Parameter missing',data:arryEmpty});
        } else {
                    COURSEMODELS.funUpdateCourse(obj,db).then(( result )=>{
                        if(result && result.success === true) {
                            res.status(200).json(result)
                        } else {
                            res.status(200).json(result)
                        }
                    });
        }
    }catch (e) {
        console.log("Error",e);
        res.status(500).json({success: false, message: "Error:"+e, data:arryEmpty});
    }

});
//NETsave
app.post('/api/course/net', (req, res) => {
    console.log("sdgas ==---", req.body)
    try {
        var obj = req.body;
        if (common.isEmptyObject(obj)) {
            res.json({ success: false, message: 'Parameter missing', data: arryEmpty });
        } else {
  
            COURSEMODELS.funAddNet(obj, db).then((result) => {
                if (result && result.success === true) {
                    res.status(200).json(result)
                }
                else {
                    res.status(200).json(result)
                }
            });
        }
    } catch (e) {
        console.log("Error", e);
        res.status(500).json({ success: false, message: "Error:" + e, data: arryEmpty });
    }
  
  });
//NETlist
app.post('/api/course/netList',(req, res) => {
    try {
       
        var obj = req.body
        if (!obj) {
            res.json({ success: false, message: 'Params missing', data: arryEmpty });
        } else {
          COURSEREPORT.funGetNetList(obj, db).then((result) => {
                if (result && result.success === true) {
                    res.status(200).json(result)
                }
                else {
                    res.status(200).json(result)
                }
            });
        }
    } catch (e) {
        console.log("Error", e);
        res.status(500).json({ success: false, message: "Error:" + e, data: arryEmpty });
    }
  
  });
//subcategory
app.post('/api/course/subcategoryList',(req, res) => {
    try {
       
        var obj = req.body
        if (!obj) {
            res.json({ success: false, message: 'Params missing', data: arryEmpty });
        } else {
          COURSEREPORT.funGetsubcategoryList(obj, db).then((result) => {
                if (result && result.success === true) {
                    res.status(200).json(result)
                }
                else {
                    res.status(200).json(result)
                }
            });
        }
    } catch (e) {
        console.log("Error", e);
        res.status(500).json({ success: false, message: "Error:" + e, data: arryEmpty });
    }
  
  });
//update item
app.post('/api/course/UpdateItem', (req,res) => {
    try{
        var obj = req.body;
        console.log("UpdateItem ---",obj)
        var strActionType ="UPDATE";
        if(!obj) {
            res.json({success: false, message: 'Parameter missing',data:arryEmpty});
        } else {
                    COURSEMODELS.funUpdateItem(obj,db).then(( result )=>{
                        if(result && result.success === true) {
                            res.status(200).json(result)
                        } else {
                            res.status(200).json(result)
                        }
                    });
        }
    }catch (e) {
        console.log("Error",e);
        res.status(500).json({success: false, message: "Error:"+e, data:arryEmpty});
    }

});
//update question
app.post('/api/course/updateQuestion', (req,res) => {
    try{
        var obj = req.body;
        var strActionType ="UPDATE";
        if(!obj) {
            res.json({success: false, message: 'Parameter missing',data:arryEmpty});
        } else {
                    COURSEMODELS.funupdateQuestion(obj,db).then(( result )=>{
                        if(result && result.success === true) {
                            res.status(200).json(result)
                        } else {
                            res.status(200).json(result)
                        }
                    });
        }
    }catch (e) {
        console.log("Error",e);
        res.status(500).json({success: false, message: "Error:"+e, data:arryEmpty});
    }

});
//update net
app.post('/api/course/UpdateNet', (req,res) => {
    try{
        var obj = req.body;
        var strActionType ="UPDATE";
        if(!obj) {
            res.json({success: false, message: 'Parameter missing',data:arryEmpty});
        } else {
                    COURSEMODELS.funUpdateNet(obj,db).then(( result )=>{
                        if(result && result.success === true) {
                            res.status(200).json(result)
                        } else {
                            res.status(200).json(result)
                        }
                    });
        }
    }catch (e) {
        console.log("Error",e);
        res.status(500).json({success: false, message: "Error:"+e, data:arryEmpty});
    }

});
//delete course
app.post('/api/course/DeleteCourseDetails',(req,res) => {
    try{
        var obj = req.body;
        var strActionType ="UPDATE";
        if(!obj) {
            res.json({success: false, message: 'Parameter missing',data:arryEmpty});
        } else {
            // COURSEMODELS.funBookingValidateDeleteDetails(strActionType,req,db).then(( result )=>{
            //     if(result && result.success === true) {
                    COURSEMODELS.funDeleteCourseDetails(obj,db).then(( result )=>{
                        if(result && result.success === true) {
                            res.status(200).json(result)
                        }
                        else {
                            res.status(200).json(result)
                        }
                    });
            //   } else {
            //         res.status(200).json(result)
            //     }
            // });
        }
    }catch (e) {
        console.log("Error",e);
        res.status(500).json({success: false, message: "Error:"+e, data:arryEmpty});
    }

});
//delete item
app.post('/api/course/DeleteItemDetails',(req,res) => {
    try{
        var obj = req.body;
        var strActionType ="UPDATE";
        if(!obj) {
            res.json({success: false, message: 'Parameter missing',data:arryEmpty});
        } else {
            // COURSEMODELS.funBookingValidateDeleteDetails(strActionType,req,db).then(( result )=>{
            //     if(result && result.success === true) {
                    COURSEMODELS.funDeleteItemDetails(obj,db).then(( result )=>{
                        if(result && result.success === true) {
                            res.status(200).json(result)
                        }
                        else {
                            res.status(200).json(result)
                        }
                    });
            //   } else {
            //         res.status(200).json(result)
            //     }
            // });
        }
    }catch (e) {
        console.log("Error",e);
        res.status(500).json({success: false, message: "Error:"+e, data:arryEmpty});
    }

}); 
//delete material
app.post('/api/course/DeletematerialDetails',(req,res) => {
    try{
        var obj = req.body;
        var strActionType ="UPDATE";
        if(!obj) {
            res.json({success: false, message: 'Parameter missing',data:arryEmpty});
        } else {
            // COURSEMODELS.funBookingValidateDeleteDetails(strActionType,req,db).then(( result )=>{
            //     if(result && result.success === true) {
                    COURSEMODELS.funDeletematerialDetails(obj,db).then(( result )=>{
                        if(result && result.success === true) {
                            res.status(200).json(result)
                        }
                        else {
                            res.status(200).json(result)
                        }
                    });
            //   } else {
            //         res.status(200).json(result)
            //     }
            // });
        }
    }catch (e) {
        console.log("Error",e);
        res.status(500).json({success: false, message: "Error:"+e, data:arryEmpty});
    }

}); 
//delete question
app.post('/api/course/DeletequestionDetails',(req,res) => {
    try{
        var obj = req.body;
        var strActionType ="UPDATE";
        if(!obj) {
            res.json({success: false, message: 'Parameter missing',data:arryEmpty});
        } else {
            // COURSEMODELS.funBookingValidateDeleteDetails(strActionType,req,db).then(( result )=>{
            //     if(result && result.success === true) {
                    COURSEMODELS.funDeletequestionDetails(obj,db).then(( result )=>{
                        if(result && result.success === true) {
                            res.status(200).json(result)
                        }
                        else {
                            res.status(200).json(result)
                        }
                    });
            //   } else {
            //         res.status(200).json(result)
            //     }
            // });
        }
    }catch (e) {
        console.log("Error",e);
        res.status(500).json({success: false, message: "Error:"+e, data:arryEmpty});
    }

}); 
//delete net
app.post('/api/course/DeleteNetDetails',(req,res) => {
    try{
        var obj = req.body;
        var strActionType ="UPDATE";
        if(!obj) {
            res.json({success: false, message: 'Parameter missing',data:arryEmpty});
        } else {
            // COURSEMODELS.funBookingValidateDeleteDetails(strActionType,req,db).then(( result )=>{
            //     if(result && result.success === true) {
                    COURSEMODELS.funDeleteNetDetails(obj,db).then(( result )=>{
                        if(result && result.success === true) {
                            res.status(200).json(result)
                        }
                        else {
                            res.status(200).json(result)
                        }
                    });
            //   } else {
            //         res.status(200).json(result)
            //     }
            // });
        }
    }catch (e) {
        console.log("Error",e);
        res.status(500).json({success: false, message: "Error:"+e, data:arryEmpty});
    }

}); 
//get list by Id-subcategory
app.post('/api/course/GetListById',(req,res) => {
    console.log("show her -----",req.body)
    try{
        var obj = req.body
        if(!obj){
            res.json({success: false, message: 'Params missing',data:arryEmpty});
        } else {
            COURSEREPORT.GetListById(obj,db).then(( result )=>{
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
//get by Id -material
app.post('/api/course/GetListMaterial',(req,res) => {
    console.log("show her -----",req.body)
    try{
        var obj = req.body
        if(!obj){
            res.json({success: false, message: 'Params missing',data:arryEmpty});
        } else {
            COURSEREPORT.GetListMaterial(obj,db).then(( result )=>{
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
//get by Id questionpapers
app.post('/api/course/GetListIdquestionPapers',(req,res) => {
    console.log("show her -----",req.body)
    try{
        var obj = req.body
        if(!obj){
            res.json({success: false, message: 'Params missing',data:arryEmpty});
        } else {
            COURSEREPORT.GetLisIdquestionPapers(obj,db).then(( result )=>{
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
//get by id net
app.post('/api/course/GetListIdNet',(req,res) => {
    console.log("show her -----",req.body)
    try{
        var obj = req.body
        if(!obj){
            res.json({success: false, message: 'Params missing',data:arryEmpty});
        } else {
            COURSEREPORT.funGetListIdNet(obj,db).then(( result )=>{
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
//get by id item
app.post('/api/course/GetListIdItem',(req,res) => {
    console.log("show her -----",req.body)
    try{
        var obj = req.body
        if(!obj){
            res.json({success: false, message: 'Params missing',data:arryEmpty});
        } else {
            COURSEREPORT.funGetListIdItem(obj,db).then(( result )=>{
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


//get list by Id-semester
app.post('/api/course/GetSemesterListById',(req,res) => {
    console.log("show her -----",req.body)
    try{
        var obj = req.body
        if(!obj){
            res.json({success: false, message: 'Params missing',data:arryEmpty});
        } else {
            COURSEREPORT.funGetBySemesterId(obj,db).then(( result )=>{
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


//get list by Id-subcategory
app.post('/api/course/GetListIdSubject',(req,res) => {
    console.log("show her -----",req.body)
    try{
        var obj = req.body
        if(!obj){
            res.json({success: false, message: 'Params missing',data:arryEmpty});
        } else {
            COURSEREPORT.GetListSubject(obj,db).then(( result )=>{
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