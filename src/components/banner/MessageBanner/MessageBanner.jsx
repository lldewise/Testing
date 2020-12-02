import React, { Component } from "react";
import {PrimaryButton } from 'office-ui-fabric-react';
import mask_group_4 from "../../../assets/images/Mask_Group_4.png";
import classes from "./MessageBanner.module.scss";

export class MessageBanner extends Component{
  constructor(){
    super();
    this.state = {
       showMessageBar: true  
    }
  }

  closeMessageBar = () => {
      this.setState({showMessageBar: false})    
  }

  state = { showing: true };

  render(){      
    const { showing } = this.state;
    const disp = showing ? classes.hideBanner : classes.showBanner;
    return(
     

     <div className={disp}>
         <div className={"ms-Grid-row " + classes.customBgColor}> 
         <div className={"ms-Grid-col ms-lg12 " + classes.customBgImage}>
         <div className="ms-Grid-col ms-lg3">
          <img className={classes.imgStyle} alt="" src={mask_group_4}/>
         </div>
         
         <div className="ms-Grid-col ms-lg7">
            <h3 className={classes.customFontColor} >Hej Mona!{"\n"}</h3>
            <p className={classes.customFontColor} >Welcome to Atedu! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. massa id
              neque aliquam vestibulum morbi bladit cursus risus at.
            </p>

         </div>

         <div className="ms-Grid-col ms-lg2">
         <div className="ms-Grid-row">
            <i className={"ms-Icon ms-Icon--ChromeClose "+ classes.iconStyle} aria-hidden="true" onClick={() => this.setState({ showing: !showing })} />
          </div>
          <div className="ms-Grid-row">
            <PrimaryButton text="Get Started" className={classes.customBtn + " " + classes.customBtnBG}/>
          </div>
         </div>

         </div>
         </div> 
       
    </div>

    )
}
}