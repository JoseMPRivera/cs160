import React, { Component } from 'react';
import '../css/Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFlag } from '@fortawesome/free-solid-svg-icons'
import HomeBar from './HomeBar'
// import ItemsContainer from './ItemsContainer'
import SellsContainer from './SellsContainer'

export default class Profile extends Component {

  render() {
    return (
      <div>
        <HomeBar />
        <div class="container">
          <div class="row profile">
            <div class="col-md-3">
              <div class="profile-sidebar">

                <div class="profile-userpic">
                  <img src="https://image.flaticon.com/icons/png/512/21/21294.png" class={""/*"img-responsive"*/} alt="" />
                </div>

                <div class="profile-usertitle">
                  <div class="profile-usertitle-name">
                  {sessionStorage.getItem("first_name") + " "} 
                  {sessionStorage.getItem("last_name")}
                  </div>
                  <div class="profile-usertitle-job">
                    First Year
                  </div>
                </div>

                <div class="profile-userbuttons">
                  <button type="button" class="btn btn-danger btn-sm">Message</button>
                </div>

                <div class="profile-usermenu">
                  <ul class="profile-nav">
                    <li class="active">
                      <a href="#">
                      <FontAwesomeIcon icon={faHome}/>
                      {' '} Overview </a>
                    </li>
                    <li>
                      <a href="#">
                      <FontAwesomeIcon icon={faUser}/>
                      {' '} Account Settings </a>
                    </li>
                    <li>
                      <a href="#">
                      <FontAwesomeIcon icon={faFlag}/>
                      {' '} Help </a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            <div class="col-12">
              <div class="profile-content">
                <SellsContainer />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
