const config = require('../config/config');
const express = require('express');

var arryEmpty = [];
var ObjectID = require("mongodb").ObjectID;
module.exports = {
  //questionlist
  funGetQuestionList: QuestionList = (obj, db) => {
    console.log("getlist ====", obj)
    return new Promise((resolve, reject) => {
      try {
        var arrayAllObjData = [];
        var query = { strStatus: "N" };
        
        if (obj.semester)
         query.semester = obj.semester

        if (obj.pdf)
        query.pdf = obj.pdf

        var intSkipCount = 0;
        var intPageLimit = 0;
        if (obj.intSkipCount)
        intSkipCount = parseInt(obj.intSkipCount);
        if (obj.intPageLimit)
        intPageLimit = parseInt(obj.intPageLimit);
        var Project = {
          $project: {
            // id:"$_id",
            subCategory: "$subCategory",
            fkIntsubCategoryId: "$fkIntsubCategoryId",
            subject: "$subject",
            fkIntsubSubjectId:"$fkIntsubSubjectId",
            year:"$year",
            pdf:"$pdf",
            // year2:"$year2",
            // year3:"$year3",
            // pdf2:"$pdf2",
            // pdf3:"$pdf3",
            
          }
        };
        db.collection(config.QUESTION_COLLECTION).find(query).count()
                .then((totalPageCount) => {
                    if (totalPageCount) {
                        if (!intPageLimit)
                            intPageLimit = parseInt(totalPageCount);
                        db.collection(config.QUESTION_COLLECTION).aggregate([{ $match: query },
                        { $sort: { datCreateDateAndTime: -1 } },
                        { "$skip": intSkipCount }, { "$limit": intPageLimit },
                            Project
                        ]).toArray((err, doc) => {
                            if (err) throw err;
                            if (doc) {
                              var objTotal = { intTotalCount: totalPageCount };
                              arrayAllObjData.push(doc);
                              arrayAllObjData.push(objTotal);
                                resolve({ success: true, message: 'Successfully.', data: arrayAllObjData});
                            }

                        });
                    } else {
                        resolve({ success: false, message: ' No Data Found', data: arryEmpty });
                    }
                })

        } catch (e) {
            throw resolve({ success: false, message: 'System ' + e, data: arryEmpty });
        }
    });
  },

  funGetQuestionGroupList: QuestionGroupList = (obj, db) => {
    return new Promise((resolve, reject) => {
      try {
        var arrayAllObjData = [];
        var query = { strStatus: "N" };

        var intSkipCount = 0;
        var intPageLimit = 0;
        if (obj.intSkipCount)
        intSkipCount = parseInt(obj.intSkipCount);
        if (obj.intPageLimit)
        intPageLimit = parseInt(obj.intPageLimit);

        var Project = {
          $project: {
            // id:"$_id",
            subCategory: "$subCategory",
            fkIntsubCategoryId: "$fkIntsubCategoryId",
            subject: "$subject",
            fkIntsubSubjectId:"$fkIntsubSubjectId",
            year:"$year",
            pdf:"$pdf",
            
          }
        };

        db.collection(config.QUESTION_COLLECTION).find(query).count()
          .then((totalPageCount) => {
            if (totalPageCount) {
              if (!intPageLimit)
                intPageLimit = parseInt(totalPageCount);
              db.collection(config.QUESTION_COLLECTION).aggregate([
                {$match:query},
                {
                  $group : { _id : "$subCategory.category.fieldName",
                  books: { $push:{subject:"$subject",year:"$year",pdf:"$pdf" } } }
                },
              ]).toArray((err, doc) => {
                if (err) throw err;
                if (doc) {
                  var objTotal = { intTotalCount: totalPageCount };
                  arrayAllObjData.push(doc);
                  arrayAllObjData.push(objTotal);
                    resolve({ success: true, message: 'Successfully.', data: arrayAllObjData});
                }
              });
            } else {
                resolve({ success: false, message: ' No Data Found', data: arryEmpty });
            }
          })

        } catch (e) {
            throw resolve({ success: false, message: 'System ' + e, data: arryEmpty });
        }
    });
  },

//courselist
  funGetCourseList: CourseList = (obj, db) => {
    console.log("getlist ====", obj)
    return new Promise((resolve, reject) => {
      try {
        var arrayAllObjData = [];
        var query = { strStatus: "N" };

        // if (obj.category)
        // query.category = obj.category
        
        if (obj.semester)
        query.semester = obj.semester

        if (obj.description)
        query.description = obj.description
        

        var intSkipCount = 0;
        var intPageLimit = 0;
        if (obj.intSkipCount)
        intSkipCount = parseInt(obj.intSkipCount);
        if (obj.intPageLimit)
        intPageLimit = parseInt(obj.intPageLimit);
        var Project = {
          $project: {
            _id:"$_id",
            semester: "$semester",
            description: "$description",
            category:"$category"
           
          }
        };
        db.collection(config.COURSE_COLLECTION).find(query).count()
          .then((totalPageCount) => {
            if (totalPageCount) {
              if (!intPageLimit)
                intPageLimit = parseInt(totalPageCount);
              db.collection(config.COURSE_COLLECTION).aggregate([{ $match: query },
              { $sort: { datCreateDateAndTime: -1 } },
              { "$skip": intSkipCount }, { "$limit": intPageLimit },
                Project
              ]).toArray((err, doc) => {
                console.log("doc ====", doc)
                if (err) throw err;
                if (doc) {
                  var objTotal = { intTotalCount: totalPageCount };
                              arrayAllObjData.push(doc);
                              arrayAllObjData.push(objTotal);
                  resolve({ success: true, message: 'Successfully.', data: arrayAllObjData });
                }

              });
            } else {
              resolve({ success: false, message: ' No Data Found', data: arryEmpty });
            }
          })

      } catch (e) {
        throw resolve({ success: false, message: 'System ' + e, data: arryEmpty });
      }
    });

  },
//subcategory
funGetsubcategoryList: subcategoryList = (obj, db) => {
  console.log("getlist ====", obj)
  return new Promise((resolve, reject) => {
    try {
      var arrayAllObjData = [];
      var query = {};
      
      if (obj.semester)
      query.semester = obj.semester

      if (obj.description)
      query.description = obj.description

      var intSkipCount = 0;
      var intPageLimit = 0;
      if (obj.intSkipCount)
      intSkipCount = parseInt(obj.intSkipCount);
      if (obj.intPageLimit)
      intPageLimit = parseInt(obj.intPageLimit);
      var Project = {
        $project: {
          id:"$_id",
          semester: "$semester",
          description: "$description",
        }
      };
      db.collection(config.COURSE_COLLECTION).find(query).count()
        .then((totalPageCount) => {
          if (totalPageCount) {
            if (!intPageLimit)
              intPageLimit = parseInt(totalPageCount);
            db.collection(config.COURSE_COLLECTION).aggregate([{ $match: query },
            { $sort: { datCreateDateAndTime: -1 } },
            { "$skip": intSkipCount }, { "$limit": intPageLimit },
              Project
            ]).toArray((err, doc) => {
              console.log("doc ====", doc)
              if (err) throw err;
              if (doc) {
                var objTotal = { intTotalCount: totalPageCount };
                            arrayAllObjData.push(doc);
                            arrayAllObjData.push(objTotal);
                resolve({ success: true, message: 'Successfully.', data: doc });
              }

            });
          } else {
            resolve({ success: false, message: ' No Data Found', data: arryEmpty });
          }
        })

    } catch (e) {
      throw resolve({ success: false, message: 'System ' + e, data: arryEmpty });
    }
  });

},
//materiallist
funGetMaterialList: GetMaterialList = (obj, db) => {
  console.log("getlist ====", obj)
  return new Promise((resolve, reject) => {
    try {
      var arrayAllObjData = [];
      var query = { strStatus: "N" };
      
      

      if (obj.semester)
      query.semester = obj.semester

      if (obj.subject)
      query.subject = obj.subject
      
      var intSkipCount = 0;
      var intPageLimit = 0;
      if (obj.intSkipCount)
      intSkipCount = parseInt(obj.intSkipCount);
      if (obj.intPageLimit)
      intPageLimit = parseInt(obj.intPageLimit);
      var Project = {
        $project: {
          id:"$_id",
          semester:"$semester",
          subject:"$subject",
          category:"$category"
        }
      };
      db.collection(config.MATERIAL_COLLECTION).find(query).count()
        .then((totalPageCount) => {
          if (totalPageCount) {
            if (!intPageLimit)
              intPageLimit = parseInt(totalPageCount);
            db.collection(config.MATERIAL_COLLECTION).aggregate([{ $match: query },
            { $sort: { datCreateDateAndTime: -1 } },
            { "$skip": intSkipCount }, { "$limit": intPageLimit },
              Project
            ]).toArray((err, doc) => {
              console.log("doc ====", doc)
              if (err) throw err;
              if (doc) {
                var objTotal = { intTotalCount: totalPageCount };
                            arrayAllObjData.push(doc);
                            arrayAllObjData.push(objTotal);
                resolve({ success: true, message: 'Successfully.', data: arrayAllObjData });
              }

            });
          } else {
            resolve({ success: false, message: ' No Data Found', data: arryEmpty });
          }
        })

    } catch (e) {
      throw resolve({ success: false, message: 'System ' + e, data: arryEmpty });
    }
  });

},

//NETlist
funGetNetList: GetNetList = (obj, db) => {
  console.log("getlist ====", obj)
  return new Promise((resolve, reject) => {
    try {
      var arrayAllObjData = [];
      var query = { strStatus: "N" };
      
      if (obj.material)
      query.material = obj.material

      if (obj.questionPaper)
      query.questionPaper = obj.questionPaper
      
      if (obj.videoLink)
      query.videoLink = obj.videoLink

      var intSkipCount = 0;
      var intPageLimit = 0;
      if (obj.intSkipCount)
      intSkipCount = parseInt(obj.intSkipCount);
      if (obj.intPageLimit)
      intPageLimit = parseInt(obj.intPageLimit);
      var Project = {
        $project: {
          id:"$_id",
          material: "$material",
          questionPaper: "$questionPaper",
          videoLink: "$videoLink",
        }
      };
      db.collection(config.NET_COLLECTION).find(query).count()
        .then((totalPageCount) => {
          if (totalPageCount) {
            if (!intPageLimit)
              intPageLimit = parseInt(totalPageCount);
            db.collection(config.NET_COLLECTION).aggregate([{ $match: query },
            { $sort: { datCreateDateAndTime: -1 } },
            { "$skip": intSkipCount }, { "$limit": intPageLimit },
              Project
            ]).toArray((err, doc) => {
              console.log("doc ====", doc)
              if (err) throw err;
              if (doc) {
                var objTotal = { intTotalCount: totalPageCount };
                            arrayAllObjData.push(doc);
                            arrayAllObjData.push(objTotal);
                resolve({ success: true, message: 'Successfully.', data: arrayAllObjData });
              }

            });
          } else {
            resolve({ success: false, message: ' No Data Found', data: arryEmpty });
          }
        })

    } catch (e) {
      throw resolve({ success: false, message: 'System ' + e, data: arryEmpty });
    }
  });

},
//itemlist

funGetItemList: GetItemList = (obj, db) => {
    console.log("dfisnc ====", obj)
    return new Promise((resolve, reject) => {
        try {
            var arrayAllObjData = [];
            var query = { strStatus: "N" };
            
            if (obj.fieldName)
            query.fieldName = obj.fieldName

            // if (obj. description)
            // query. description = obj. description

            var intSkipCount = 0;
            var intPageLimit = 0;
            if (obj.intSkipCount)
            intSkipCount = parseInt(obj.intSkipCount);
            if (obj.intPageLimit)
            intPageLimit = parseInt(obj.intPageLimit);
            var Project = {
                $project: {
                    id:"$_id",
                    fieldName:"$fieldName",
                    description:"$description" 
                }
            };
            db.collection(config.ITEM_COLLECTION).find(query).count()
                .then((totalPageCount) => {
                    if (totalPageCount) {
                        if (!intPageLimit)
                            intPageLimit = parseInt(totalPageCount);
                        db.collection(config.ITEM_COLLECTION).aggregate([{ $match: query },
                        { $sort: { datCreateDateAndTime: -1 } },
                        { "$skip": intSkipCount }, { "$limit": intPageLimit },
                            Project
                        ]).toArray((err, doc) => {
                            if (err) throw err;
                            if (doc) {
                              var objTotal = { intTotalCount: totalPageCount };
                              arrayAllObjData.push(doc);
                              arrayAllObjData.push(objTotal);
                                resolve({ success: true, message: 'Successfully.', data: arrayAllObjData});
                            }

                        });
                    } else {
                        resolve({ success: false, message: ' No Data Found', data: arryEmpty });
                    }
                })

        } catch (e) {
            throw resolve({ success: false, message: 'System ' + e, data: arryEmpty });
        }
    });

},  
//get list by id-subcategory
GetListById: ListById = (obj, db) => {
  console.log("getlist ====", obj)
  return new Promise((resolve, reject) => {
    try {
      var arrayAllObjData = [];
      var query = {  _id : ObjectID(obj.id), strStatus: "N" };
      

      var intSkipCount = 0;
      var intPageLimit = 0;
      if (obj.intSkipCount)
      intSkipCount = parseInt(obj.intSkipCount);
      if (obj.intPageLimit)
      intPageLimit = parseInt(obj.intPageLimit);
      var Project = {
        $project: {
          id:"$_id",
          semester: "$semester",
          description: "$description",
          category:"$category",
          fkIntCategoryId:"$fkIntCategoryId"
        }
      };
      db.collection(config.COURSE_COLLECTION).find(query).count()
        .then((totalPageCount) => {
          if (totalPageCount) {
            if (!intPageLimit)
              intPageLimit = parseInt(totalPageCount);
            db.collection(config.COURSE_COLLECTION).aggregate([{ $match: query },
            { $sort: { datCreateDateAndTime: -1 } },
            { "$skip": intSkipCount }, { "$limit": intPageLimit },
              Project
            ]).toArray((err, doc) => {
              console.log("doc ====", doc)
              if (err) throw err;
              if (doc) {
                var objTotal = { intTotalCount: totalPageCount };
                            arrayAllObjData.push(doc);
                            arrayAllObjData.push(objTotal);
                resolve({ success: true, message: 'Successfully.', data: doc });
              }

            });
          } else {
            resolve({ success: false, message: ' No Data Found', data: arryEmpty });
          }
        })

    } catch (e) {
      throw resolve({ success: false, message: 'System ' + e, data: arryEmpty });
    }
  });

},
//get list material
GetListMaterial: ListById = (obj, db) => {
  console.log("getlist ====", obj)
  return new Promise((resolve, reject) => {
    try {
      var arrayAllObjData = [];
      var query = {   _id : ObjectID(obj.id), strStatus: "N" };
      
      // if (obj.semester)
      // query.semester = obj.semester

      // if (obj.subject)
      // query.subject = obj.subject


      var intSkipCount = 0;
      var intPageLimit = 0;
      if (obj.intSkipCount)
      intSkipCount = parseInt(obj.intSkipCount);
      if (obj.intPageLimit)
      intPageLimit = parseInt(obj.intPageLimit);
      var Project = {
        $project: {
          id:"$_id",
          semester: "$semester",
          fkIntSemesterId:"$fkIntSemesterId",
          subject: "$subject",
          category : "$category",
          fkIntCategoryId: "$fkIntCategoryId",
          description:"$description",
          logoUrl:"$logoUrl",
        }
      };
      db.collection(config.MATERIAL_COLLECTION).find(query).count()
        .then((totalPageCount) => {
          if (totalPageCount) {
            if (!intPageLimit)
              intPageLimit = parseInt(totalPageCount);
            db.collection(config.MATERIAL_COLLECTION).aggregate([{ $match: query },
            { $sort: { datCreateDateAndTime: -1 } },
            { "$skip": intSkipCount }, { "$limit": intPageLimit },
              Project
            ]).toArray((err, doc) => {
              console.log("doc ====", doc)
              if (err) throw err;
              if (doc) {
                var objTotal = { intTotalCount: totalPageCount };
                            arrayAllObjData.push(doc);
                            arrayAllObjData.push(objTotal);
                resolve({ success: true, message: 'Successfully.', data: doc });
              }

            });
          } else {
            resolve({ success: false, message: ' No Data Found', data: arryEmpty });
          }
        })

    } catch (e) {
      throw resolve({ success: false, message: 'System ' + e, data: arryEmpty });
    }
  });

},
//get list id question papers
GetLisIdquestionPapers: ListById = (obj, db) => {
  console.log("getlist ====", obj)
  return new Promise((resolve, reject) => {
    try {
      var arrayAllObjData = [];
      var query = {  _id : ObjectID(obj.id), strStatus: "N"};
      // if (obj.subject)
      //   query.subject = obj.subject

      //   if (obj.year)
      //   query.year = obj.year

      //   if (obj.pdf)
      //   query.pdf = obj.pdf


      var intSkipCount = 0;
      var intPageLimit = 0;
      if (obj.intSkipCount)
      intSkipCount = parseInt(obj.intSkipCount);
      if (obj.intPageLimit)
      intPageLimit = parseInt(obj.intPageLimit);
      var Project = {
        $project: {
          id:"$_id",
          subCategory: "$subCategory",
          fkIntsubCategoryId: "$fkIntsubCategoryId",
          subject: "$subject",
          fkIntsubSubjectId:"$fkIntsubSubjectId",
          year:"$year",
          pdf:"$pdf",
          // year2:"$year2",
          // year3:"$year3",
          // pdf2:"$pdf2",
          // pdf3:"$pdf3",
        }
      };
      db.collection(config.QUESTION_COLLECTION).find(query).count()
        .then((totalPageCount) => {
          if (totalPageCount) {
            if (!intPageLimit)
              intPageLimit = parseInt(totalPageCount);
            db.collection(config.QUESTION_COLLECTION).aggregate([{ $match: query },
            { $sort: { datCreateDateAndTime: -1 } },
            { "$skip": intSkipCount }, { "$limit": intPageLimit },
              Project
            ]).toArray((err, doc) => {
              console.log("doc ====", doc)
              if (err) throw err;
              if (doc) {
                var objTotal = { intTotalCount: totalPageCount };
                            arrayAllObjData.push(doc);
                            arrayAllObjData.push(objTotal);
                resolve({ success: true, message: 'Successfully.', data: doc });
              }

            });
          } else {
            resolve({ success: false, message: ' No Data Found', data: arryEmpty });
          }
        })

    } catch (e) {
      throw resolve({ success: false, message: 'System ' + e, data: arryEmpty });
    }
  });

},
//get by id net
funGetListIdNet: ListById = (obj, db) => {
  console.log("getlist ====", obj)
  return new Promise((resolve, reject) => {
    try {
      var arrayAllObjData = [];
      var query = {  _id : ObjectID(obj.id), strStatus: "N"};
      // if (obj.material)
      // query.material = obj.material

      // if (obj.questionPaper)
      // query.questionPaper = obj.questionPaper


      var intSkipCount = 0;
      var intPageLimit = 0;
      if (obj.intSkipCount)
      intSkipCount = parseInt(obj.intSkipCount);
      if (obj.intPageLimit)
      intPageLimit = parseInt(obj.intPageLimit);
      var Project = {
        $project: {
          id:"$_id",
          material: "$material",
          questionPaper: "$questionPaper",
          videoLink:"$videoLink"
        }
      };
      db.collection(config.NET_COLLECTION).find(query).count()
        .then((totalPageCount) => {
          if (totalPageCount) {
            if (!intPageLimit)
              intPageLimit = parseInt(totalPageCount);
            db.collection(config.NET_COLLECTION).aggregate([{ $match: query },
            { $sort: { datCreateDateAndTime: -1 } },
            { "$skip": intSkipCount }, { "$limit": intPageLimit },
              Project
            ]).toArray((err, doc) => {
              console.log("doc ====", doc)
              if (err) throw err;
              if (doc) {
                var objTotal = { intTotalCount: totalPageCount };
                            arrayAllObjData.push(doc);
                            arrayAllObjData.push(objTotal);
                resolve({ success: true, message: 'Successfully.', data: doc });
              }

            });
          } else {
            resolve({ success: false, message: ' No Data Found', data: arryEmpty });
          }
        })

    } catch (e) {
      throw resolve({ success: false, message: 'System ' + e, data: arryEmpty });
    }
  });

},
//get by id net
funGetListIdItem: ListById = (obj, db) => {
  console.log("getlist ====", obj)
  return new Promise((resolve, reject) => {
    try {
      var arrayAllObjData = [];
      var query = {  _id : ObjectID(obj.id), strStatus: "N"};
      // if (obj.fieldName)
      // query.fieldName = obj.fieldName

      // if (obj.description)
      // query.description = obj.description

      var intSkipCount = 0;
      var intPageLimit = 0;
      if (obj.intSkipCount)
      intSkipCount = parseInt(obj.intSkipCount);
      if (obj.intPageLimit)
      intPageLimit = parseInt(obj.intPageLimit);
      var Project = {
        $project: {
          id:"$_id",
          fieldName: "$fieldName",
          description: "$description",
        }
      };
      db.collection(config.ITEM_COLLECTION).find(query).count()
        .then((totalPageCount) => {
          if (totalPageCount) {
            if (!intPageLimit)
              intPageLimit = parseInt(totalPageCount);
            db.collection(config.ITEM_COLLECTION).aggregate([{ $match: query },
            { $sort: { datCreateDateAndTime: -1 } },
            { "$skip": intSkipCount }, { "$limit": intPageLimit },
              Project
            ]).toArray((err, doc) => {
              console.log("doc ====", doc)
              if (err) throw err;
              if (doc) {
                var objTotal = { intTotalCount: totalPageCount };
                            arrayAllObjData.push(doc);
                            arrayAllObjData.push(objTotal);
                resolve({ success: true, message: 'Successfully.', data: doc });
              }

            });
          } else {
            resolve({ success: false, message: ' No Data Found', data: arryEmpty });
          }
        })

    } catch (e) {
      throw resolve({ success: false, message: 'System ' + e, data: arryEmpty });
    }
  });

},


funGetBySemesterId: GetBySemesterId=(obj,db)=> {
  console.log("222222222222222 ---",obj)
  return new Promise((resolve, reject) => {
      try{
          var arrayAllObjData =[];
          var query= { fkIntCategoryId: ObjectID(obj.category) , strStatus: "N" }
          var intSkipCount =0;
          var intPageLimit =0;
          if(obj.intSkipCount)
              intSkipCount = parseInt(obj.intSkipCount);
          if(obj.intPageLimit)
              intPageLimit = parseInt(obj.intPageLimit);
          var Project = { $project : {
            id:"$_id",
            semester: "$semester",
            description: "$description",
            category:"$category",
            fkIntCategoryId:"$fkIntCategoryId"
          }};
          db.collection(config.COURSE_COLLECTION).find(query).count()
              .then((totalPageCount) => {
                  if(totalPageCount){
                      if(!intPageLimit)
                          intPageLimit =parseInt(totalPageCount);
                      db.collection(config.COURSE_COLLECTION).aggregate([{$match:query},
                          {$sort:{datCreateDateAndTime:-1}},
                          { "$skip": intSkipCount }, { "$limit": intPageLimit },
                          // lookupService,unwindarrayOfService,lookupUser,unwindarrayOfUser,
                          Project
                      ]).toArray( (err,doc) => { console.log("doc ---",doc)
                          if (err) throw err;
                          if(doc){
                              var objTotal ={intTotalCount :totalPageCount};
                              arrayAllObjData.push(doc);
                              arrayAllObjData.push(objTotal);
                              resolve({success: true,message: 'Successfully.', data: doc});
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

GetListSubject: ListByIdSubject = (obj, db) => {
  console.log("getlist ====", obj)
  return new Promise((resolve, reject) => {
    try {
      var arrayAllObjData = [];
      var query = {fkIntSemesterId: ObjectID(obj.semester) , strStatus: "N" };
      
      // if (obj.semester)
      // query.semester = obj.semester

      // if (obj.subject)
      // query.subject = obj.subject


      var intSkipCount = 0;
      var intPageLimit = 0;
      if (obj.intSkipCount)
      intSkipCount = parseInt(obj.intSkipCount);
      if (obj.intPageLimit)
      intPageLimit = parseInt(obj.intPageLimit);
      var Project = {
        $project: {
          id:"$_id",
          semester: "$semester",
          fkIntSemesterId:"$fkIntSemesterId",
          subject: "$subject",
          category : "$category",
          fkIntCategoryId: "$fkIntCategoryId",
          description:"$description",
          logoUrl:"$logoUrl",
        }
      };
      db.collection(config.MATERIAL_COLLECTION).find(query).count()
        .then((totalPageCount) => {
          if (totalPageCount) {
            if (!intPageLimit)
              intPageLimit = parseInt(totalPageCount);
            db.collection(config.MATERIAL_COLLECTION).aggregate([{ $match: query },
            { $sort: { datCreateDateAndTime: -1 } },
            { "$skip": intSkipCount }, { "$limit": intPageLimit },
              Project
            ]).toArray((err, doc) => {
              console.log("doc ====", doc)
              if (err) throw err;
              if (doc) {
                var objTotal = { intTotalCount: totalPageCount };
                            arrayAllObjData.push(doc);
                            arrayAllObjData.push(objTotal);
                resolve({ success: true, message: 'Successfully.', data: doc });
              }

            });
          } else {
            resolve({ success: false, message: ' No Data Found', data: arryEmpty });
          }
        })

    } catch (e) {
      throw resolve({ success: false, message: 'System ' + e, data: arryEmpty });
    }
  });

},
}

