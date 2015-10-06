<?php
if(isset($_POST['name'], $_POST['email'], $_POST['message'])){
	
	$success = mail('james@midlandstechnicalsupport.co.uk', 'DC-Contact', $_POST['message']);
	
	echo($success);
}
?>