import React            from 'react';
import { Route }        from 'react-router';
import { IndexRoute }   from 'react-router';
  
import App              from './components/app';
import HomePage         from './components/home/HomePage';
import AboutPage        from './components/about/AboutPage';
import CoursesPage      from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';    //eslint-disable-line import/no-named-as-default

export default (
                   <Route     path="/"           component={ App } >
                       <Route path="courses"     component={ CoursesPage } />
                       <Route path="course"      component={ ManageCoursePage } />
                       <Route path="course/:id"  component={ ManageCoursePage } />
                       <Route path="about"       component={ AboutPage } />
                       <IndexRoute               component={ HomePage } />
                   </Route>    
               );