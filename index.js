> show dbs
Human_Resource  0.000GB
admin           0.000GB
config          0.000GB
local           0.000GB
> set Human_Resource
set Human_Resource to true
> show collections
emp
> db.emp.find().pretty()
{
        "_id" : ObjectId("62e1445a6cbac12b436a7deb"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e1445a6cbac12b436a7ded"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e1445a6cbac12b436a7def"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e1445a6cbac12b436a7df1"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e1445a6cbac12b436a7df3"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e1445a6cbac12b436a7df5"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e1445a6cbac12b436a7df7"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
db.emp.find({salary:{$gt:"30000"}}).pretty()
{
        "_id" : ObjectId("62e1445a6cbac12b436a7ded"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e1445a6cbac12b436a7def"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e1445a6cbac12b436a7df1"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e1445a6cbac12b436a7df3"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e1445a6cbac12b436a7df5"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e1445a6cbac12b436a7df7"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
> db.emp.find({overallExp:{$gt:"2"}})
> db.emp.find({yearGrad:{$gt:"2015"},overallExp:{$gt:1}}).pretty()
> db.emp.find({yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}}).pretty()
{
        "_id" : ObjectId("62e1445a6cbac12b436a7deb"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e1445a6cbac12b436a7def"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e1445a6cbac12b436a7df3"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e1445a6cbac12b436a7df7"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
> db.emp.updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}})
{ "acknowledged" : true, "matchedCount" : 0, "modifiedCount" : 0 }
> db.emp.deleteMany({lastCompany:"Y"})
{ "acknowledged" : true, "deletedCount" : 6 }