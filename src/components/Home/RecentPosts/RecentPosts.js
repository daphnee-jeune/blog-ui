import React from 'react'
import './RecentPosts.css'
import Card from '../../UI/Card/Card'
import {NavLink} from 'react-router-dom'

const RecentPosts = ({style}) => {
  return (
    <div style={style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={"https://2.bp.blogspot.com/-ZOY5OAvnKj0/V9_M3_TVTLI/AAAAAAAAD40/UQl4rIoqgi42zaeq0yR_y1gnnchZFxupQCLcB/s1600/3-3.jpg"} alt=""/>
            </div>

            <div className="recentBlog">

                <span>Featured</span>
                <h2>Fitness - A Lifestyle</h2>
                <span>Posted on June 12, 2020 by Martina Blogging Tips</span>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source...</p>

                <button className="readMore"><NavLink to="/post/fitness-mantra-to-live-fit-life">Read More</NavLink></button> 

            </div>

        </Card>
    </div>
   )

 }

export default RecentPosts