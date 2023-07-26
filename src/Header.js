import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const sections = [
    { title: 'About', subsections: ['Our Team', 'Our Programs'] },
    { title: 'Preparation Module', subsections: ['Mentorship Course', 'Classroom Course', 'Online Course','Short Term Course','Test Series'] },
    { title: 'Exam', subsections: ['IPMAT', 'About IPMAT Exam','Colleges'] },
    { title: 'Resources', subsections: ['Exam Analysis', 'Exam News', 'IPM-AT Exams Calender'] },
    { title: 'Contact Us', subsections: ['Address', 'Mail', 'Map', 'Contact Us'] },
    { title: 'Student Zone', subsections: ['Subsection W'] },
  ];
  const navigate=useNavigate()
  return (
    <nav>
    <div id="logo"><img src="https://i.imgur.com/yqawPSs.png"
    style={{width:"200px"}}/></div>

    <label for="drop" class="toggle">Menu</label>
    <input type="checkbox" id="drop" />
        <ul class="menu">
            <li><a href="#">Home</a></li>
            <li>
                <label for="drop-1" class="toggle">About</label>
                <a href="#">About</a>
                <input type="checkbox" id="drop-1"/>
                <ul style={{background :"white"}}>
               <li>  <a href="#"><Link to="team" preventScrollReset={true} />Our Team</a></li>
                    <li><a href="#"><Link to="about" preventScrollReset={true} />Our Programs</a></li>  
                </ul> 
            </li>
            <li>

            <label for="drop-2" class="toggle">Preparation Module</label>
            <a href="#">Preparation Module</a>
            <input type="checkbox" id="drop-2"/>
            <ul style={{background :"white"}}>
                <li><a href="#">Mentorship Course</a></li>
                <li><a href="#">Classroom Course</a></li>
                <li><a href="#">Online Course</a></li>
                <li><a href="#">Short Term Course</a></li>
                <li><a href="#">Test Series</a></li>
                <li>
                   
                   
                   
            
                </li>
            </ul>
            </li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Student Zone</a></li>
           
        </ul>
    </nav>
  );
};

export default Header;