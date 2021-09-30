
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]
let i = 0

btnMember.onclick = function(){
  let memberNew = inptMember.value
  if (members.includes(memberNew))
    lblmember.value = memberNew + ", you are already on the list."
  else {
    members.push(memberNew)
    lblMember.value = memberNew + ", you have been added to the member list."
  }
  }

