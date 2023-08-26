import {showContactList} from "../scripts/services/contacts-services.js";

async function fetchContacts() {
   const response = await showContactList() 
   return response 

}

export const STORE = {
    fetchContacts,  
    user: null,


  };
