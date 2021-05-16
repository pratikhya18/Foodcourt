import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
export default class Header extends React.Component{

   render()
   { 
       return (
        <div>
            <div className="Top">
                <h1>Food Recipe app
                </h1>
                <span>
                    <div>
                        <SearchIcon background-color = 'white'>
                            
                        </SearchIcon>
                    </div>
                    </span>

            </div>
            
            <div>
                header
            </div>
            
        </div>
    )
   }
}

//export default functionHandle;