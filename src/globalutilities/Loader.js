import React from "react"

 export const Loader = () => (
     <div style={{
         position: "fixed",
         top: "50%",
         left: "0",
         right: "0",
         bottom: "0",
         // height: "0%",
         width: "100%",
         backgroundColor: "#ffffff",
         opacity: 0.2,
         // zIndex: 50
     }}>
         <div style={{position: "absolute", textAlign: "center", top: "47%", left: "47%", zIndex: 1001}}>
             <div className="spinner-border"/>
         </div>
     </div>
);
