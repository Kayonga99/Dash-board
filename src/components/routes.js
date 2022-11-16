import React from 'react'  
class Routes extends React.Component {  
  render() {  
    return (  
        {
            Settings: { path: "/settings" },
Upgrade: { path: "/upgrade" },
Users: { path: "/users" }, // add it here
BootstrapTables: { path: "/tables/bootstrap-tables" },
Billing: { path: "/examples/billing" },
        } 
    )  
  }  
}  
export default Routes;  