function validation()
{

        let user=document.getElementById("username").value;
	let pass=document.getElementById("pass").value;
        if(user.trim()==""||pass.trim()=="")
	{
                alert("username and password needed");
        }


}
