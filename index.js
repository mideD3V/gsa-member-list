// COLLECTING MEMBER DETAILS
//Form
const form = document.querySelector("#memberForm");
const fullName = document.querySelector("#fullname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phoneNumber");
const address = document.querySelector("#address");
const dob = document.querySelector("#dob");
const ul = document.querySelector("#memberList");

var year = new Date().getFullYear();

dob.setAttribute("min", year + "-01-01");
dob.setAttribute("max", year + "-12-31");

//CREATING MEMBER CARD

function addNewMember() {
    const li = document.createElement("li");
    

  //create name div
  const memberName = document.createElement("h3");
  memberName.classList.add("name");
  memberName.textContent = fullName.value;

  //email div
  const memberEmail = document.createElement("p");
  memberEmail.textContent = email.value;

  //phone number div
  const memberPhone = document.createElement("p");
  memberPhone.textContent = phone.value;

  //address
  const memberAddress = document.createElement("p");
  memberAddress.textContent = address.value;

  //date of birth
  const memberDob = document.createElement("p");
  memberDob.textContent = 'DOB: ' + dob.value;

  //create a parent div for modification buttons
  const modifyDiv = document.createElement("div");

  //edit button
  const editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");
  editBtn.textContent = "Edit";

  //delete button
  const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.setAttribute('onclick', 'deleteMember()')
    deleteBtn.textContent = "Delete";
    


  //append buttons to parent div
  modifyDiv.appendChild(editBtn);
  modifyDiv.appendChild(deleteBtn);

  //append input data to li
  li.appendChild(memberName);
  li.appendChild(memberEmail);
  li.appendChild(memberPhone);
  li.appendChild(memberAddress);
  li.appendChild(memberDob);
  li.appendChild(modifyDiv);

  return li;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

    const li = addNewMember();
    

  if (fullName.value === "") {
    alert("Fill in the required details");
  } else {
    ul.appendChild(li);
  }

form.reset();
});

//delete button
    
function deleteMember() {
    addEventListener('click', () => {
        document.querySelector('li').style.display = 'none'
    })
}
