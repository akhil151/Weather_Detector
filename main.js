 window.addEventListener('DOMContentLoader', (event) =>{
      getVisitCount();
 })

const functionApi = 'https://getweathercounter.azurewebsites.net/api/AzureFunction?code=JCRvaFagTjoG5AGgm/8I5r7dgfmE5Qk2BqSM4nQ7T1zOQedBaIhUiw==';

const getVisitCount = () => {
    let count = 0;
     fetch(functionApi).then(response => {
         return response.jason()
     }).then(response =>{
          console.log("website called function API.");
          count = response.count;
          document.getElementsById("counter").innerText = count;
     }).catch(function(error){
         console.log(error);
     });

     return count;  
    }
