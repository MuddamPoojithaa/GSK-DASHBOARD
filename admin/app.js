
var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    userName = document.getElementById("name"),
    // age = document.getElementById("age"),
    city = document.getElementById("city"),
    // email = document.getElementById("email"),
    // phone = document.getElementById("phone"),
    // post = document.getElementById("post"),
    // sDate = document.getElementById("sDate"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newUserBtn = document.querySelector(".newUser")
    

let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []

let isEdit = false, editId
showInfo()

newUserBtn.addEventListener('click', ()=> {
    submitBtn.innerText = 'Submit',
    modalTitle.innerText = "GSK INFRA DEVELOPERS"
    isEdit = false
    imgInput.src = "./image/add-image.png"
    form.reset()
})


// file.onchange = function(){
//     if(file.files[0].size < 1000000){  // 1MB = 1000000
//         var fileReader = new FileReader();

//         fileReader.onload = function(e){
//             imgUrl = e.target.result
//             imgInput.src = imgUrl
//         }

//         fileReader.readAsDataURL(file.files[0])
//     }
//     else{
//         alert("This file is too large!")
//     }
// }


// function showInfo(){
//     document.querySelectorAll('.employeeDetails').forEach(info => info.remove())
//     getData.forEach((element, index) => {
//         let createElement = `<tr class="employeeDetails">
//             <td>${index+1}</td>
//             <td><img src="${element.picture}" alt="" width="50" height="50"></td>
//             <td>${element.employeeName}</td>
          
            
//             <td>${element.employeeCity}</td>
//             <td>
//                 <button class="btn btn-success" onclick="readInfo('${element.picture}', '${element.employeeName}', '${element.employeeCity}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>

//                 <button class="btn btn-primary" onclick="editInfo(${index}, '${element.picture}', '${element.employeeName}', '${element.employeeCity}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>

//                 <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>
                            
//             </td>
//         </tr>`

//         userInfo.innerHTML += createElement
//     })
// }
// showInfo()


// function readInfo(pic, name ,city){
//     document.querySelector('.showImg').src = pic,
//     document.querySelector('#showName').value = name,
  
//     document.querySelector("#showCity").value = city
  
  
    
// }


// function editInfo(index, pic, name , City){
//     isEdit = true
//     editId = index
//     imgInput.src = pic
//     userName.value = name
   
//     city.value =City
    

//     submitBtn.innerText = "Update"
//     modalTitle.innerText = "Update The Image"
// }


// function deleteInfo(index){
//     if(confirm("Are you sure want to delete?")){
//         getData.splice(index, 1)
//         localStorage.setItem("userProfile", JSON.stringify(getData))
//         showInfo()
//     }
// }


// // form.addEventListener('submit', (e) => {
// //     e.preventDefault();

// //     const information = {
// //         picture: imgInput.src == undefined ? "./image/add-image.png" : imgInput.src,
// //         employeeName: userName.value,
// //         employeeCity: city.value
// //     };

// //     // If not editing, push new data
// //     if (!isEdit) {
// //         getData.push(information);
// //     } else {
// //         // If editing, update the existing data
// //         isEdit = false;
// //         getData[editId] = information;
// //     }

// //     // Store updated user profile data
// //     localStorage.setItem('userProfile', JSON.stringify(getData));

// //     // Also store the last uploaded image separately for use in index.html
// //     localStorage.setItem('uploadedImage', information.picture);

// //     submitBtn.innerText = "Submit";
// //     modalTitle.innerHTML = "Fill The Form";

// //     // Refresh the displayed info and reset form
// //     showInfo();
// //     form.reset();
// //     imgInput.src = "./image/add-image.png";

// //     // Optionally close the modal
// //     $('#userForm').modal('hide');
// // });

// function deleteInfo(index) {
//     if (confirm("Are you sure you want to delete?")) {
//         const deletedImage = getData[index].picture; 
//         getData.splice(index, 1);
//         localStorage.setItem('userProfile', JSON.stringify(getData));
//         showInfo();
//         removeImageFromPrepareContainer(deletedImage);
//     }
// }


// function removeImageFromPrepareContainer(deletedImage) {
//     for (let i = 1; i <= 4; i++) {
//         const storedImage = localStorage.getItem(`prepareImage${i}`);
//         if (storedImage === deletedImage) {
//             localStorage.removeItem(`prepareImage${i}`);
//             break;
//         }
//     }
//     updatePrepareContainerImages();  
// }

// function updatePrepareContainerImages() {
    
//     for (let i = 0; i < 4; i++) {
//         if (getData[i]) {
//             localStorage.setItem(`prepareImage${i + 1}`, getData[i].picture);
//         } else {
//             localStorage.removeItem(`prepareImage${i + 1}`);
//         }
//     }
// }
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const information = {
//         picture: imgInput.src === undefined ? "./image/add-image.png" : imgInput.src,
//         employeeName: userName.value,
//         employeeCity: city.value
//     };
//     if (!isEdit) {
//         getData.push(information);
//     } else {
//         isEdit = false;
//         getData[editId] = information;
//     }
//     localStorage.setItem('userProfile', JSON.stringify(getData));

//     // Update preparecontainer images for index.html
//     updatePrepareContainerImages();

//     submitBtn.innerText = "Submit";
//     modalTitle.innerHTML = "Fill The Form";

//     // Refresh the displayed info and reset form
//     showInfo();
//     form.reset();
//     imgInput.src = "./image/add-image.png";

//     // Close modal
//     $('#userForm').modal('hide');
// });
