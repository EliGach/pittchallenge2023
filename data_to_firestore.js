import firestore from './firebase';
import React,{Component} from 'react';

/*
Health Data Client
Maps correspond to dropdowns

Fields
  Name:string 
  ID: generated server side and used in place of name to preserve privacy
  DOB:Date
  Age:derived from DOB

  Gender:string

  Locations:map to address (geopoint)
    Workplace:address 
    Home:address
  Transportation:array of strings
  Occupation process this to get the occupation like from dep of labor database, searchable testentry field
  Insurance Provider: Array of string
  Healthcare providers: Map of name to address

  Time frame indicates a start field and end field appear in the map
  Medications
    Time frame
    Medication name
    Dosage
    Frequency
  Health History
    Time frame
    Condition process this maybe from external site:https://www.mayoclinic.org/diseases-conditions
    Family History Map of Related Area to Description
    Treatment
*/

/*
Permissions for each field and if the field has subfields then individual permissions for each field by nesting (UI should set to false by going down the tree)
*/
defaultPermissions = new Map([
    ["name",false],
    ["DOB",true],
    ["Gender",true],
    ["Occupation",true],
    ["Insurance Provider",true],
    ["Locations",new Map([
        ["Home",false],
        ["Workplace",true]
    ])],
    ["Insurance Providers",true],
    ["Healthcare Providers",true],
    ["Transportation",true],
    ["Medications",true],
    ["Conditions",true],
    ["Health History",true],//warn not to use names
])
var permissions=defaultPermissions;

function filter_submission(fields,permissions){
    ret=Map();
    for([field,value] of fields){
        p=permissions[field];
        if (typeof p==='boolean'){
            if (p===true){
                ret[field]=value;
            }
        }
        else if (typeof p==='Map'){
            ret[field]=filter_submission(value,p);
        }
    }
    return ret;
}

const submit_to_db = async (fields) => {await firestore.collection("users").doc(id).update(filter_submission(fields,defaultPermissions))};

id="larry"
submit_to_db(new Map([
 ["name","larry"],
 ["DOB",new Data(2054,3,42)],   
]))

export default submit_to_db;