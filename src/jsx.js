import React from 'react';

const jsx = () => {
    const element = <div id ="root">hello word</div>;
    const elementR = React.createElement("div",{id:"root"},"hello word");
    const element2 = (<div>
      <span>hello</span> <span>word</span>  
    </div>);
    const element2R = React.createElement("div",{
        children: [
            React.createElement("span",null, "hello"),
            "",
            React.createElement("span",null,"word"),
        ],
    });
    return (
        <div>
            <div className="heading" id ="heading">
         this is heading 
        </div>
        <div className="heading2" id = "heading2">
            this is heading2
        </div>
        </div>
    ); 
    
};

export default jsx;