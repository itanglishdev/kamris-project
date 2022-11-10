// importing the clientListData Base

function Login() {

    // const clientList = clientDataBase
    

    return ( 
       <div className="login">
        <h3>Log in</h3>
         <form action="">
            <label htmlFor="userName"/>
            <input type="text" placeholder="insert your username"/>
            <label htmlFor="password"/>
            <input type="text" placeholder="insert your password"/>
        </form>
        <p className="login__newclient">
            <Link>New Client?</Link></p>
       </div>
     );
}

export default Login;