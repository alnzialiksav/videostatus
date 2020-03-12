import React from "react"

 export const Loader = ({left}) => (
     <div style={{
         position: "fixed",
         top: "50%",
         left: left ? left : "0%",
         right: "0",
         bottom: "0",
         // height: "0%",
         // width: "100%",
         // backgroundColor: "#ffffff",
         opacity: 0.8,
         zIndex: 100
     }}>
         <div style={{position: "absolute", textAlign: "center", top: "47%", left: "47%", zIndex: 1001}}>
             <div className="spinner-border"/>
         </div>
     </div>
);
