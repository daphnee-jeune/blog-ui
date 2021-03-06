import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import Card from '../UI/Card/Card'
import profilePic from '../../blogPostImages/profilePic.jpg'

import blogPost from '../../data/blog.json'
import { NavLink } from 'react-router-dom'



const Sidebar = (props) => {

    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        const posts = blogPost.data
        setPosts(posts)
    }, [posts])



  return (
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src={profilePic} alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Daphnee Jeune I am a software developer specializing in Front-end developement.</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                    <div className="side-socialLinks">
                        <i className="fa fa-youtube-square fa-lg"></i>
                        <i className="fa fa-facebook-square fa-lg"></i>
                        <i className="fa fa-twitter-square fa-lg"></i>
                        <i className="fa fa-instagram fa-lg"></i>
                        <i className="fa fa-linkedin fa-lg"></i>
                    </div>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                            )
                        })
                    }
                </div>

            </Card>
      </div>
    
   )

 }

export default Sidebar