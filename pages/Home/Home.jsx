import React from 'react';
import { Link } from 'react-router-dom';
import CardPosts from '../components/Card/CardPosts';
import People from '../components/People/People';
import './style.css';

export default function Home() {
  // const Posts = [
  //   {id: 1, name: 'dima', message: 'dawdwadwadwa', firstname: 'ryzhev', subtopic: 'la la la', topic: 'post'},
  //   {id: 2, name: 'alex', message: 'dawdwadwadwa', firstname: 'awde', subtopic: 'net net net', topic: 'post'},
  //   {id: 3, name: 'gosha', message: 'dawdwadwadwa', firstname: 'rdawd', subtopic: 'da da da', topic: 'post'},
  // ]

  return (
    <div className='container'>
      <div className='item1'>
        <div className='blockReader'>
          <Link
            className='linkGen'
            to={'/'}>
            <h1
              className='headerReader'>
              READER
            </h1>
          </Link>
          <Link 
            className='linkCreate'
            to={'/create'}>
              Create
          </Link>
        </div>
        <hr className='lineReader' />
      </div>
      <div className='item2'>
        <div className='containerContent'>
          <div className='blockContentOne'>
            <input
              className='searchInp'
              placeholder='Search'
            />
            <h2 className='headerPosts'>
              Browse Posts:
            </h2>
          </div>
          <div className='blockContentTwo'>
            <CardPosts />
          </div>
        </div>
      </div>
      <div className='item3'>
        <div className='blockPostTopC'>
          <div className="linePostTopC" />
          <div>
            <div className='additionalContentBlock'>
              <div>
                <h2 className='textGetPlanC'>
                  Get access to all <br />
                  posts without limits
                </h2>
                <p className='textGetPlanOneDollar'>
                  The starting tariff plan is $1/week
                </p>
                <button className='btnPlanC'>Try new rate</button>
              </div>
              <img
                className='imgNodepadC'
                src='https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/512/external-Notepad-leadership-smashingstocks-mixed-smashing-stocks.png' />
            </div>
            <h2 className='textTwoPeople'>
              People with more interesting posts:
            </h2>
            <People />
            <People />
            <People />
          </div>
        </div>
      </div>
      <div className='item4'>
        Sidebar
      </div>
      <div className='item5'>
        Footer
      </div>
    </div>
  )
}

