// create a useSTate that will then bring the details into the clients database
import { useState } from "react";

function SignUp() {

    const [newClient, setNewClient] = useState({
        name:'',
        surName:'',
        address:'',
        city:'',
        postCode:'',
        creditCard:''
    })

    return (
        <form action="submit">

        </form>
      );
}

export default SignUp;