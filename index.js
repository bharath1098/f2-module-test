const details_container=document.getElementById("details-container");


async function data_retrive(){ 
const url=`https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json`;

const responce= await fetch(url);
let data=await responce.json();
    table_creation(data);

    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input",()=>{
      const searchQuery = searchInput.value.toLowerCase();

      const filteredData = data.filter((data) =>{
      return  (data.first_name.toLowerCase().includes(searchQuery) ||
        data.last_name.toLowerCase().includes(searchQuery) ||
        data.email.toLowerCase().includes(searchQuery));
     });

      table_creation(filteredData); // Update the table with filtered data
    });
    

    const sortA_Z=document.getElementById("sortA-Z");
    const sortZ_A=document.getElementById("sortZ-A");
    const sort_by_marks=document.getElementById("sortbymarks");
    const sort_by_passing=document.getElementById("sortbypassing");
    const sort_by_class=document.getElementById("sortbyclass");
    const sort_by_gender=document.getElementById("sortbygender");

    sortA_Z.addEventListener("click",()=>{sortTable("asc")});
    sortZ_A.addEventListener("click",()=>{sortTable("desc")});
    sort_by_marks.addEventListener("click",()=>{sortTable("marks")});
    sort_by_passing.addEventListener("click",()=>{sortTable("passing")});
    sort_by_class.addEventListener("click",()=>{sortTable("class")});
    sort_by_gender.addEventListener("click",()=>{sortTableByGender()});

    function sortTableByGender(){
        let male_data=data.filter((item)=>{return item.gender==="Male"});
        let female_data=data.filter((item)=>{return item.gender=="Female"});
        table_creation(male_data);
        female_table_creation(female_data);
    }

    function sortTable(sortType) {
        switch (sortType) {
          case 'asc':
            data.sort((a, b) => a.first_name.localeCompare(b.first_name));
            break;
          case 'desc':
            data.sort((a, b) => b.first_name.localeCompare(a.first_name));
            break;
          case 'marks':
            data.sort((a, b) => a.marks - b.marks);
            break;
          case 'passing':
            data = data.filter((item) => { return item.passing});
            break;
          case 'class':
            console.log(data);
            data.sort((a, b) => a.class-b.class);
            break;
          default:
            break;
        }
        table_creation(data); // Update the table with sorted data
      }
    
}


function table_creation(data){
    table1.remove();
    const table=document.getElementById("table");
    table.innerHTML="";
    
       const tr=document.createElement("tr");

       const th1=document.createElement("th");
             th1.className="id";
             th1.innerText="ID";
             tr.appendChild(th1);

       const th2=document.createElement("th");
             th2.innerText="Name";
             tr.appendChild(th2);

       const th3=document.createElement("th");
             th3.innerText="Gender";
             tr.appendChild(th3);
             
      const th4=document.createElement("th");
             th4.innerText="Class";
             tr.appendChild(th4);

      const th5=document.createElement("th");
             th5.innerText="Marks";
             tr.appendChild(th5);      

      const th6=document.createElement("th");
             th6.innerText="Passing";
             tr.appendChild(th6);

      const th7=document.createElement("th");
             th7.innerText="Email";
             tr.appendChild(th7);
   
       table.appendChild(tr);
             
    for(let i=0;i<data.length;i++){
        const student_info=data[i];

        const tr=document.createElement("tr");

        const td1=document.createElement("td");
              td1.className="id";
              td1.innerText=student_info.id;
              tr.appendChild(td1);

              const td2=document.createElement("td");
              td2.className="name";
              const img=document.createElement("img");
                    img.src=student_info.img_src;
                    td2.appendChild(img);

              const p=document.createElement("p");
                    p.innerText=student_info.first_name+" "+student_info.last_name;
                    td2.appendChild(p);

             tr.appendChild(td2); 

              const td3=document.createElement("td");
              td3.innerText=student_info.gender;
              tr.appendChild(td3);
              
              const td4=document.createElement("td");
              td4.innerText=student_info.class;
              tr.appendChild(td4);
              
              
              const td5=document.createElement("td");
              td5.innerText=student_info.marks;
              tr.appendChild(td5);

              const td6=document.createElement("td");
              if(student_info.passing){
                td6.innerText="Passing";
              }
              else{
                td6.innerText="Failed";
              }
              tr.appendChild(td6);

              const td7=document.createElement("td");
              td7.innerText=student_info.email;
              tr.appendChild(td7);

              table.appendChild(tr);
}

}

data_retrive();


const table1=document.createElement("table");
function female_table_creation(data){
        
           const tr=document.createElement("tr");
    
           const th1=document.createElement("th");
                 th1.className="id";
                 th1.innerText="ID";
                 tr.appendChild(th1);
    
           const th2=document.createElement("th");
                 th2.innerText="Name";
                 tr.appendChild(th2);
    
           const th3=document.createElement("th");
                 th3.innerText="Gender";
                 tr.appendChild(th3);
                 
          const th4=document.createElement("th");
                 th4.innerText="Class";
                 tr.appendChild(th4);
    
          const th5=document.createElement("th");
                 th5.innerText="Marks";
                 tr.appendChild(th5);      
    
          const th6=document.createElement("th");
                 th6.innerText="Passing";
                 tr.appendChild(th6);
    
          const th7=document.createElement("th");
                 th7.innerText="Email";
                 tr.appendChild(th7);
       
           table1.appendChild(tr);
                 
        for(let i=0;i<data.length;i++){
            const student_info=data[i];
    
            const tr=document.createElement("tr");
    
            const td1=document.createElement("td");
                  td1.className="id";
                  td1.innerText=student_info.id;
                  tr.appendChild(td1);
    
                  const td2=document.createElement("td");
                  td2.className="name";
                  const img=document.createElement("img");
                        img.src=student_info.img_src;
                        td2.appendChild(img);
    
                  const p=document.createElement("p");
                        p.innerText=student_info.first_name+" "+student_info.last_name;
                        td2.appendChild(p);
    
                 tr.appendChild(td2); 
    
                  const td3=document.createElement("td");
                  td3.innerText=student_info.gender;
                  tr.appendChild(td3);
                  
                  const td4=document.createElement("td");
                  td4.innerText=student_info.class;
                  tr.appendChild(td4);
                  
                  
                  const td5=document.createElement("td");
                  td5.innerText=student_info.marks;
                  tr.appendChild(td5);
    
                  const td6=document.createElement("td");
                  if(student_info.passing){
                    td6.innerText="Passing";
                  }
                  else{
                    td6.innerText="Failed";
                  }
                  tr.appendChild(td6);
    
                  const td7=document.createElement("td");
                  td7.innerText=student_info.email;
                  tr.appendChild(td7);
    
                  table1.appendChild(tr);
    }
    
    details_container.appendChild(table1);
    }
